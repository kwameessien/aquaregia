const linkClass =
  "text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-colors hover:underline";

type InfoContactLink = {
  label?: string;
  url?: string;
  openInNewTab?: boolean;
};

const fallbackInfoContactLinks: InfoContactLink[] = [
  { label: "hello@aquaregia.world", url: "mailto:hello@aquaregia.world", openInNewTab: false },
  { label: "@aqua___regia", url: "https://www.instagram.com/aqua___regia/", openInNewTab: true },
];

export default function InfoContact({ links }: { links?: InfoContactLink[] }) {
  const resolvedLinks =
    links?.filter((link) => typeof link.label === "string" && typeof link.url === "string") ??
    [];
  const displayLinks = resolvedLinks.length > 0 ? resolvedLinks : fallbackInfoContactLinks;

  return (
    <div className="font-times-now-light flex w-full flex-col items-center gap-0 text-center text-[clamp(20px,2.75vw,28px)] leading-tight tracking-[-0.012em] text-black">
      {displayLinks.map((link) => {
        const openInNewTab = Boolean(link.openInNewTab);
        return (
          <a
            key={`${link.label}-${link.url}`}
            href={link.url}
            className={linkClass}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
