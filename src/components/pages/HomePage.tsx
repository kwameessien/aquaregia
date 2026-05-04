import RitualsHero from "@/components/home/RitualsHero";
import RitualsPreorderCta from "@/components/home/RitualsPreorderCta";
import SiteHeader from "@/components/site/SiteHeader";

export default function HomePage() {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <RitualsHero />
        </div>
        <div className="shrink-0 px-[20px] pb-[24px] pt-[32px] sm:px-[32px] sm:pb-[32px] sm:pt-10">
          <RitualsPreorderCta />
        </div>
      </div>
    </main>
  );
}
