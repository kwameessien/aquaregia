import RitualsBookHeader from "@/components/rituals-book/RitualsBookHeader";
import RitualsBookProductBar from "@/components/rituals-book/RitualsBookProductBar";

export default function RitualsBookPage() {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <RitualsBookHeader />
      <RitualsBookProductBar />
      <div className="min-h-0 flex-1 px-[20px] py-[48px] sm:px-[32px]" />
    </main>
  );
}
