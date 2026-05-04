import RitualsBookContributors from "@/components/rituals-book/RitualsBookContributors";
import RitualsBookFooter from "@/components/rituals-book/RitualsBookFooter";
import RitualsBookGallery from "@/components/rituals-book/RitualsBookGallery";
import RitualsBookHeader from "@/components/rituals-book/RitualsBookHeader";
import RitualsBookProductBar from "@/components/rituals-book/RitualsBookProductBar";

/** Reserve space so content clears the fixed footer (rule + row + safe area). */
const ritualsBookMainBottomPad =
  "pb-[calc(24px+48px+env(safe-area-inset-bottom,0px))] sm:pb-[calc(32px+52px+env(safe-area-inset-bottom,0px))]";

export default function RitualsBookPage() {
  return (
    <main
      className={`flex min-h-[100dvh] min-h-screen flex-col items-stretch justify-start bg-white ${ritualsBookMainBottomPad}`}
    >
      <RitualsBookHeader />
      <RitualsBookProductBar />
      <div className="flex flex-col items-stretch justify-start px-[12px] pb-[20px] pt-0 sm:px-[20px] sm:pb-[28px] lg:px-[28px]">
        <RitualsBookGallery />
        <RitualsBookContributors />
      </div>
      <RitualsBookFooter />
    </main>
  );
}
