import InfoContact from "@/components/info/InfoContact";
import InfoIntro from "@/components/info/InfoIntro";
import InfoStockists from "@/components/info/InfoStockists";
import SiteHeader from "@/components/site/SiteHeader";

type InfoPageProps = {
  infoPage?: {
    infoIntro?: string;
    infoContact?: Array<{ label?: string; url?: string; openInNewTab?: boolean }>;
  };
};

export default function InfoPage({ infoPage }: InfoPageProps) {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex min-h-0 w-full flex-1 flex-col px-[20px] pb-[16px] pt-[48px] sm:px-[32px]">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
            <div className="flex w-full flex-col gap-[clamp(36px,9vh,96px)]">
              {/* Intro spans full padded width; contact uses a centered max-width column. */}
              <InfoIntro text={infoPage?.infoIntro} />
              <div className="flex w-full flex-col items-center">
                <div className="w-full max-w-[min(92vw,720px)]">
                  <InfoContact links={infoPage?.infoContact} />
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 pt-[clamp(20px,5vh,48px)]">
            <InfoStockists />
          </div>
        </div>
      </div>
    </main>
  );
}
