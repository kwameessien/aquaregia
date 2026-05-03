const linkClass =
  "text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-colors hover:underline";

export default function InfoContact() {
  return (
    <div className="font-times-now-light flex w-full flex-col items-center gap-[0.45em] text-center text-[clamp(20px,2.75vw,28px)] leading-[1.45] tracking-[-0.012em] text-black">
      <a href="mailto:hello@aquaregia.world" className={linkClass}>
        hello@aquaregia.world
      </a>
      <a
        href="https://www.instagram.com/aqua___regia/"
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        @aqua___regia
      </a>
    </div>
  );
}
