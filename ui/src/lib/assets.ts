/** Public URLs under `public/` (served from site root `/`). */

// File: public/assets/images/gallery/looped rituals book spin compressed.gif
export const ritualsBookSpinGifUrl =
  "/assets/images/gallery/looped%20rituals%20book%20spin%20compressed.gif";

const ritualsGalleryFilenames = [
  "looped rituals book spin compressed.gif",
  "androids_2.jpg",
  "androids1.png",
  "bedtimestories_1.jpg",
  "bedtimestories_2.jpg",
  "concertina_1.jpg",
  "concertina_2.jpg",
  "luckystar1.png",
  "poem.jpg",
  "scripture_1.jpg",
  "scripture_2.jpg",
  "scripture_3.jpg",
  "swan song_1.jpg",
  "unitedinterests_2.jpg",
  "unitedinterests1.png",
] as const;

/** Encoded URLs for every file in `public/assets/images/gallery/` used on the Rituals book page. */
export const ritualsGalleryImageUrls: readonly string[] = ritualsGalleryFilenames.map(
  (name) => `/assets/images/gallery/${encodeURIComponent(name)}`,
);
