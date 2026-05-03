import InfoContact from "@/components/info/InfoContact";
import InfoIntro from "@/components/info/InfoIntro";
import SiteHeader from "@/components/site/SiteHeader";

export default function InfoPage() {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-[24px] py-[48px]">
        <div className="flex w-full max-w-[min(92vw,560px)] flex-col items-center gap-[clamp(48px,12vh,120px)]">
          <InfoIntro />
          <InfoContact />
        </div>
      </div>
    </main>
  );
}
