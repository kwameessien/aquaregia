declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_SECRET_KEY?: string;
    STRIPE_WEBHOOK_SECRET?: string;
    /** Stripe Price ID for the Rituals book (or primary one-time product). */
    STRIPE_PRICE_ID?: string;
    /** Set to `true` to enable hosted Checkout from the Rituals “Add to cart” control. */
    NEXT_PUBLIC_STRIPE_CHECKOUT?: string;
    /** Public site URL used for success/cancel redirects when `Origin` is missing (e.g. server-only calls). */
    NEXT_PUBLIC_SITE_URL?: string;
    /** Optional: enable Stripe automatic tax on Checkout (requires Stripe Tax setup). */
    STRIPE_CHECKOUT_AUTOMATIC_TAX?: string;
  }
}
