const listTextClass =
  "font-site-nav text-[13px] font-normal uppercase tracking-[0.12em] text-black sm:text-[14px]";

const stockists = [
  "Offbrand Library",
  "OFR Librarie Paris",
  "PDF Seoul",
  "Soho News International",
  "/017 Shop",
] as const;

export default function StockistsContent() {
  return (
    <div className="mx-auto w-full max-w-md text-center">
      <h1 className={`${listTextClass} mb-[1.125rem]`}>Stockists</h1>
      <ul className={`${listTextClass} m-0 list-none p-0 leading-none`}>
        {stockists.map((name) => (
          <li key={name} className="m-0 p-0">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
