const headingClass =
  "font-site-nav text-[11px] font-normal uppercase tracking-[0.12em] text-black sm:text-[12px]";

const namesClass =
  "font-site-nav text-[9px] font-normal tracking-[0.03em] leading-[1.55] text-black sm:text-[10px] sm:leading-[1.5]";

const footnoteClass =
  "font-site-nav text-[8px] font-normal tracking-[0.02em] leading-[1.55] text-black sm:text-[9px] sm:leading-[1.5]";

const contributors = [
  "Katrin Braga",
  "Sivan Miller",
  "Fahim Kassam",
  "Laura Baldwinson",
  "Ryan Voigt",
  "Nelson Huang",
  "Alyx Karlier",
  "Jay Kim Valentine",
  "Maria Walton",
  "Pele Olivia",
  "Satchi Salubre",
  "Erin Klassen",
  "Venus Hermitant",
  "Jian Qiao Lu",
  "Tania Becker",
  "Sophie Hartnett",
  "Christopher Deagle",
  "Kathy Nguyen",
  "Taylor Chousky",
  "Paula Lanzador",
  "Alexis Shan",
  "Promised Files",
  "11811 Casting",
  "Legends Café",
  "Monika Tischer",
  "Tarah Doheny",
  "Danielle Reynolds",
  "Natalie Stasiak",
  "Karita",
  "Natalie Phang",
  "Anna Biehunkova",
  "Yousra",
  "Virginia Liang",
  "Christina Bowe",
  "Rei Simpson",
  "Nico Simpson",
  "Alexis Purcell",
  "Taimen Vigneault",
  "Jasmine Oudendijk",
  "Rembo Amanda",
  "Valeriia Bereza",
].join(", ");

export default function RitualsBookContributors() {
  return (
    <section
      className="mx-auto mt-[36px] flex w-full max-w-[min(100%,920px)] flex-col items-center text-center sm:mt-[44px] lg:mt-[52px]"
      aria-labelledby="rituals-book-contributors-heading"
    >
      <h2 id="rituals-book-contributors-heading" className={`${headingClass} m-0`}>
        Contributors
      </h2>
      <p className={`${namesClass} mt-[16px] mb-0 max-w-none sm:mt-[18px]`}>{contributors}</p>
      <p className={`${footnoteClass} mt-[24px] mb-0 max-w-[min(100%,520px)] sm:mt-[28px]`}>
        If your country is unavailable for shipment, please send us an email to{" "}
        <a href="mailto:hello@aquaregia.com" className="text-inherit no-underline">
          hello@aquaregia.com
        </a>
      </p>
    </section>
  );
}
