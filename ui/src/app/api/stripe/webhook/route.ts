import { NextResponse } from "next/server";
import type Stripe from "stripe";

import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

/**
 * Configure this URL in the Stripe Dashboard (Developers → Webhooks).
 * Use the Dashboard’s signing secret as STRIPE_WEBHOOK_SECRET.
 */
export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is not configured." }, { status: 503 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: "Missing STRIPE_WEBHOOK_SECRET." }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe-Signature header." }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.info("[stripe webhook] checkout.session.completed", session.id);
      // Fulfillment: send email, create order row, decrement inventory, etc.
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
