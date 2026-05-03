import IndexChrome from "@/components/index/IndexChrome";
import SiteHeader from "@/components/site/SiteHeader";

export default function IndexPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <IndexChrome />
      </div>
    </main>
  );
}
