"use client";

import Link from "next/link";
import { useState } from "react";

type RitualsBookPurchaseBadgeProps = {
  stripeCheckout: boolean;
  purchaseLabel: string;
  purchaseLink: string;
  className: string;
};

export default function RitualsBookPurchaseBadge({
  stripeCheckout,
  purchaseLabel,
  purchaseLink,
  className,
}: RitualsBookPurchaseBadgeProps) {
  const [busy, setBusy] = useState(false);

  if (!stripeCheckout) {
    return (
      <Link href={purchaseLink} className={className}>
        {purchaseLabel}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={busy}
      className={className}
      onClick={async () => {
        setBusy(true);
        try {
          const res = await fetch("/api/stripe/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
          });
          const data: { url?: string; error?: string } = await res.json();
          if (!res.ok) throw new Error(data.error ?? res.statusText);
          if (data.url) window.location.assign(data.url);
        } catch (e) {
          console.error(e);
        } finally {
          setBusy(false);
        }
      }}
    >
      {busy ? "…" : purchaseLabel}
    </button>
  );
}
