import RitualsBookContributors from "@/components/rituals-book/RitualsBookContributors";
import RitualsBookFooter from "@/components/rituals-book/RitualsBookFooter";
import RitualsBookGallery from "@/components/rituals-book/RitualsBookGallery";
import RitualsBookHeader from "@/components/rituals-book/RitualsBookHeader";
import RitualsBookProductBar from "@/components/rituals-book/RitualsBookProductBar";
import { ritualsGalleryImageUrls } from "@/lib/assets";

export type RitualsBookContent = {
  sectionTitle?: string;
  purchaseLabel?: string;
  purchaseLink?: string;
  specs?: string;
  isbnCopyright?: string;
  intro?: string;
  blurb?: string;
  cartLabel?: string;
  contributorsHeading?: string;
  contributors?: string;
  shippingNote?: string;
  shippingEmail?: string;
  footerBackLinkLabel?: string;
  footerBackLinkHref?: string;
  headerLogoUrl?: string;
  galleryImages?: Array<{ url?: string; alt?: string }>;
};

/** Reserve space so content clears the fixed footer (rule + row + safe area). */
const ritualsBookMainBottomPad =
  "pb-[calc(24px+48px+env(safe-area-inset-bottom,0px))] sm:pb-[calc(32px+52px+env(safe-area-inset-bottom,0px))]";

const fallbackContributors =
  "Katrin Braga, Sivan Miller, Fahim Kassam, Laura Baldwinson, Ryan Voigt, Nelson Huang, Alyx Karlier, Jay Kim Valentine, Maria Walton, Pele Olivia, Satchi Salubre, Erin Klassen, Venus Hermitant, Jian Qiao Lu, Tania Becker, Sophie Hartnett, Christopher Deagle, Kathy Nguyen, Taylor Chousky, Paula Lanzador, Alexis Shan, Promised Files, 11811 Casting, Legends Café, Monika Tischer, Tarah Doheny, Danielle Reynolds, Natalie Stasiak, Karita, Natalie Phang, Anna Biehunkova, Yousra, Virginia Liang, Christina Bowe, Rei Simpson, Nico Simpson, Alexis Purcell, Taimen Vigneault, Jasmine Oudendijk, Rembo Amanda, Valeriia Bereza";

const fallbackShippingNote =
  "If your country is unavailable for shipment, please send us an email to";

export default function RitualsBookPage({ content }: { content?: RitualsBookContent }) {
  const galleryImages =
    content?.galleryImages
      ?.map((image) => ({
        url: image.url ?? "",
        alt: image.alt ?? "",
      }))
      .filter((image) => image.url.length > 0) ?? [];

  return (
    <main
      className={`flex min-h-[100dvh] min-h-screen flex-col items-stretch justify-start bg-white ${ritualsBookMainBottomPad}`}
    >
      <RitualsBookHeader logoUrl={content?.headerLogoUrl} />
      <RitualsBookProductBar
        sectionTitle={content?.sectionTitle}
        purchaseLabel={content?.purchaseLabel}
        purchaseLink={content?.purchaseLink}
        specs={content?.specs}
        isbnCopyright={content?.isbnCopyright}
        intro={content?.intro}
        blurb={content?.blurb}
        cartLabel={content?.cartLabel}
      />
      <div className="flex flex-col items-stretch justify-start px-[12px] pb-[20px] pt-0 sm:px-[20px] sm:pb-[28px] lg:px-[28px]">
        <RitualsBookGallery
          images={galleryImages.length > 0 ? galleryImages : ritualsGalleryImageUrls.map((url) => ({ url }))}
        />
        <RitualsBookContributors
          heading={content?.contributorsHeading}
          contributors={content?.contributors ?? fallbackContributors}
          shippingNote={content?.shippingNote ?? fallbackShippingNote}
          shippingEmail={content?.shippingEmail}
        />
      </div>
      <RitualsBookFooter
        backLinkLabel={content?.footerBackLinkLabel}
        backLinkHref={content?.footerBackLinkHref}
      />
    </main>
  );
}
