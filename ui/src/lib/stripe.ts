import Stripe from "stripe";

/**
 * Singleton Stripe SDK instance. Missing `STRIPE_SECRET_KEY` returns null so
 * the app can still build/run for local development without checkout.
 */
export const stripe: Stripe | null = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

export function getStripeAppOrigin(request: Request): string {
  const origin = request.headers.get("origin");
  if (origin) return origin.replace(/\/$/, "");
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return "http://localhost:3000";
}
