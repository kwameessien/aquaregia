import { NextResponse } from "next/server";

import { getStripeAppOrigin, stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is not configured (missing STRIPE_SECRET_KEY)." }, { status: 503 });
  }

  const priceId = process.env.STRIPE_PRICE_ID;
  if (!priceId) {
    return NextResponse.json({ error: "Missing STRIPE_PRICE_ID (Stripe Price for the product)." }, { status: 503 });
  }

  let quantity = 1;
  try {
    const body = await request.json().catch(() => ({}));
    if (typeof body?.quantity === "number" && body.quantity >= 1 && body.quantity <= 99) {
      quantity = Math.floor(body.quantity);
    }
  } catch {
    // ignore invalid JSON; default quantity
  }

  const origin = getStripeAppOrigin(request);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity }],
      success_url: `${origin}/rituals-book?checkout=success`,
      cancel_url: `${origin}/rituals-book?checkout=cancel`,
      automatic_tax: { enabled: process.env.STRIPE_CHECKOUT_AUTOMATIC_TAX === "true" },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Checkout session had no redirect URL." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[stripe checkout]", err);
    return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
  }
}
