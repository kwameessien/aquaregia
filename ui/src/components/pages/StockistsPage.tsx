import StockistsBackToInfo from "@/components/stockists/StockistsBackToInfo";
import StockistsContent from "@/components/stockists/StockistsContent";
import SiteHeader from "@/components/site/SiteHeader";

type StockistsPageProps = {
  stockistsPage?: {
    header?: string;
    stockists?: Array<{ name?: string; url?: string }>;
  };
};

export default function StockistsPage({ stockistsPage }: StockistsPageProps) {
  return (
    <main className="relative min-h-[100dvh] min-h-screen bg-white">
      <div className="relative z-10 bg-white">
        <SiteHeader />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto w-full px-[24px]">
          <StockistsContent
            header={stockistsPage?.header}
            stockists={stockistsPage?.stockists}
          />
        </div>
      </div>
      <div className="pointer-events-auto absolute bottom-0 left-0 right-0 z-10 bg-white">
        <StockistsBackToInfo />
      </div>
    </main>
  );
}
