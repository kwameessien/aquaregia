import IndexChrome from "@/components/index/IndexChrome";
import SiteHeader from "@/components/site/SiteHeader";

type IndexPageProps = {
  indexPage?: {
    projects?: Array<{ label?: string; link?: string }>;
  };
};

export default function IndexPage({ indexPage }: IndexPageProps) {
  return (
    <main className="relative min-h-[100dvh] min-h-screen bg-white">
      <div className="relative z-10 bg-white">
        <SiteHeader />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto w-full">
          <IndexChrome projects={indexPage?.projects} />
        </div>
      </div>
    </main>
  );
}
