import RitualsHero from "@/components/home/RitualsHero";
import RitualsPreorderCta from "@/components/home/RitualsPreorderCta";
import SiteHeader from "@/components/site/SiteHeader";

export default function HomePage() {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 w-full max-w-full flex-1 flex-col justify-center pt-[min(48px,8vh)] sm:pt-[min(64px,9vh)] lg:pt-[min(72px,10vh)]">
          <RitualsHero />
        </div>
        <div className="mt-[60px] w-full max-w-full shrink-0 px-[20px] pb-[24px] sm:mt-20 sm:px-[32px] sm:pb-[32px] lg:mt-28 xl:mt-36 2xl:mt-44">
          <RitualsPreorderCta />
        </div>
      </div>
    </main>
  );
}
