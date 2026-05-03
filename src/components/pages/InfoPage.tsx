import InfoContact from "@/components/info/InfoContact";
import InfoIntro from "@/components/info/InfoIntro";
import InfoStockists from "@/components/info/InfoStockists";
import SiteHeader from "@/components/site/SiteHeader";

export default function InfoPage() {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex min-h-0 w-full flex-1 flex-col px-[20px] pb-[28px] pt-[48px] sm:px-[32px]">
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-[min(92vw,720px)] flex-col items-center gap-[clamp(48px,12vh,120px)]">
            <InfoIntro />
            <InfoContact />
          </div>
        </div>
        <InfoStockists />
      </div>
    </main>
  );
}
