import RitualsHero from "@/components/home/RitualsHero";
import SiteHeader from "@/components/site/SiteHeader";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <RitualsHero />
    </main>
  );
}
