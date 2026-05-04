import RitualsBookContributors from "@/components/rituals-book/RitualsBookContributors";
import RitualsBookGallery from "@/components/rituals-book/RitualsBookGallery";
import RitualsBookHeader from "@/components/rituals-book/RitualsBookHeader";
import RitualsBookProductBar from "@/components/rituals-book/RitualsBookProductBar";

export default function RitualsBookPage() {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col items-stretch justify-start bg-white">
      <RitualsBookHeader />
      <RitualsBookProductBar />
      <div className="flex flex-col items-stretch justify-start px-[12px] pb-[40px] pt-0 sm:px-[20px] sm:pb-[48px] lg:px-[28px]">
        <RitualsBookGallery />
        <RitualsBookContributors />
      </div>
    </main>
  );
}
