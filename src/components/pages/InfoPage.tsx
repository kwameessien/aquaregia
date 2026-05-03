import InfoContact from "@/components/info/InfoContact";
import InfoIntro from "@/components/info/InfoIntro";
import SiteHeader from "@/components/site/SiteHeader";

export default function InfoPage() {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex min-h-0 w-full flex-1 flex-col justify-center px-[20px] py-[48px] sm:px-[32px]">
        <div className="flex w-full max-w-none flex-col gap-[clamp(48px,12vh,120px)]">
          <InfoIntro />
          <InfoContact />
        </div>
      </div>
    </main>
  );
}
