export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-1 flex-col bg-white text-black">
      {children}
    </div>
  );
}
