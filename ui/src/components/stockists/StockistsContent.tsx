const listTextClass =
  "font-site-nav text-[13px] font-normal uppercase tracking-[0.07em] text-black sm:text-[14px]";

type StockistItem = {
  name?: string;
  url?: string;
};

const fallbackStockists: StockistItem[] = [
  { name: "Offbrand Library" },
  { name: "OFR Librarie Paris" },
  { name: "PDF Seoul" },
  { name: "Soho News International" },
  { name: "/017 Shop" },
];

export default function StockistsContent({
  header = "Stockists",
  stockists,
}: {
  header?: string;
  stockists?: StockistItem[];
}) {
  const resolvedStockists =
    stockists?.filter((item) => typeof item.name === "string" && item.name.length > 0) ?? [];
  const displayStockists = resolvedStockists.length > 0 ? resolvedStockists : fallbackStockists;

  return (
    <div className="mx-auto w-full max-w-md text-center">
      <h1 className={`${listTextClass} mb-[1.125rem]`}>{header}</h1>
      <ul className={`${listTextClass} m-0 list-none p-0 leading-none`}>
        {displayStockists.map((item, index) => (
          <li key={`${item.name}-${item.url ?? "no-url"}-${index}`} className="m-0 p-0">
            {item.url ? (
              <a href={item.url} className="text-inherit no-underline hover:underline">
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
