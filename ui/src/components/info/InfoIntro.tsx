const fallbackInfoIntro =
  "Aqua Regia (AR) is an independent fashion publishing practice and studio focused on image-based books, short-run editions, and printed ephemera.";

export default function InfoIntro({ text }: { text?: string }) {
  const resolvedText = text?.trim() || fallbackInfoIntro;

  return (
    <p className="font-times-now-light m-0 w-full max-w-none text-center text-[clamp(18px,2.85vw,30px)] leading-[1.32] tracking-[-0.022em] text-black">
      {resolvedText}
    </p>
  );
}
