import Link from "next/link";

const linkClass =
  "font-site-nav text-[11px] font-normal tracking-[0.06em] text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline sm:text-[12px]";

export default function RitualsBookFooter({
  backLinkLabel = "Go back",
  backLinkHref = "/",
}: {
  backLinkLabel?: string;
  backLinkHref?: string;
}) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 bg-white">
      <div className="h-px w-full bg-black" aria-hidden />
      <div className="px-[12px] pb-[max(12px,env(safe-area-inset-bottom))] pt-[8px] sm:px-[20px] sm:pt-[10px] sm:pb-[max(14px,env(safe-area-inset-bottom))] lg:px-[28px]">
        <nav aria-label="Book page footer">
          <Link href={backLinkHref} className={linkClass}>
            {backLinkLabel}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
