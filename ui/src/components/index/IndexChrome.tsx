import Link from "next/link";

const navLinkClass =
  "font-site-nav text-[12px] font-normal uppercase tracking-[0.07em] text-black no-underline transition-colors hover:underline hover:decoration-black hover:decoration-1 hover:underline-offset-[3px] sm:text-[13px]";

type IndexChromeProps = {
  projects?: Array<{ label?: string; link?: string }>;
};

const fallbackProjects = [{ label: "Rituals (2026) — Buy here", link: "/rituals-book" }];

export default function IndexChrome({ projects }: IndexChromeProps) {
  const resolvedProjects: Array<{ label: string; link: string }> =
    projects?.reduce<Array<{ label: string; link: string }>>((acc, project) => {
      if (typeof project.label === "string" && typeof project.link === "string") {
        acc.push({ label: project.label, link: project.link });
      }
      return acc;
    }, []) ?? [];
  const displayProjects = resolvedProjects.length > 0 ? resolvedProjects : fallbackProjects;

  return (
    <div className="w-full shrink-0 px-[12px] sm:px-[16px]">
      <div className="flex w-full items-baseline justify-between pb-[10px] pt-[12px] sm:pt-[14px]">
        <Link href="/" className={navLinkClass}>
          Project
        </Link>
        <Link href="/index" className={navLinkClass} aria-current="page">
          Index
        </Link>
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
      <div className="flex w-full flex-col items-center justify-center gap-[8px] py-[14px] sm:gap-[10px] sm:py-[16px]">
        {displayProjects.map((project) => (
          <Link key={`${project.label}-${project.link}`} href={project.link} className={`${navLinkClass} text-center`}>
            {project.label}
          </Link>
        ))}
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
    </div>
  );
}
