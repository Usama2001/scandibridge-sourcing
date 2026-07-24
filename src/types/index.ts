export type Language = "sv" | "en";

export type LocalizedText = Record<Language, string>;

export type TowelCategory = {
  slug:
    | "home"
    | "hotel"
    | "restaurant-kitchen"
    | "wash-cleaning"
    | "bath"
    | "hand"
    | "gym-spa";
  name: LocalizedText;
  description: LocalizedText;
  alt: LocalizedText;
  image: string;
  materials: LocalizedText;
  sizes: LocalizedText;
  colours: LocalizedText;
  gsm: LocalizedText;
  privateLabel: LocalizedText;
  packaging: LocalizedText;
};
