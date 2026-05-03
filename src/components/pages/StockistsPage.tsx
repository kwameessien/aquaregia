import StockistsContent from "@/components/stockists/StockistsContent";
import SiteHeader from "@/components/site/SiteHeader";

export default function StockistsPage() {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <SiteHeader />
      <StockistsContent />
    </main>
  );
}
