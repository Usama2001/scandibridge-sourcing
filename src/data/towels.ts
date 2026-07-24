import bathImage from "../assets/towels/bath.jpg";
import gymSpaImage from "../assets/towels/gym-spa.jpg";
import handImage from "../assets/towels/hand.jpg";
import homeImage from "../assets/towels/home.jpg";
import hotelImage from "../assets/towels/hotel.jpg";
import restaurantKitchenImage from "../assets/towels/restaurant-kitchen.jpg";
import washCleaningImage from "../assets/towels/wash-cleaning.jpg";
import type { TowelCategory } from "../types";

const common = {
  materials: {
    sv: "Bomull, ringspunnen bomull, kammad bomull eller bomullsblandning",
    en: "Cotton, ring-spun cotton, combed cotton or cotton blend",
  },
  colours: {
    sv: "Vitt, neutrala toner och specialfärger efter färgprov",
    en: "White, neutral tones and custom colours subject to colour approval",
  },
  privateLabel: {
    sv: "Broderi, vävd etikett, hangtag och kundanpassad bård",
    en: "Embroidery, woven label, hangtag and custom border",
  },
  packaging: {
    sv: "Bulkförpackning, detaljhandelsförpackning eller kundanpassad kartong",
    en: "Bulk pack, retail-ready pack or custom carton",
  },
};

export const towelCategories: TowelCategory[] = [
  {
    slug: "home",
    name: { sv: "Handdukar för hemmet", en: "Home Towels" },
    description: {
      sv: "Mjuka handdukskollektioner i bomull för heminredningsbutiker, e-handelsvarumärken och private label-sortiment.",
      en: "Soft cotton towel collections for home retailers, online brands and private-label collections.",
    },
    alt: {
      sv: "Vikta mjuka bomullshanddukar för hemmet",
      en: "Folded soft cotton towels for home collections",
    },
    image: homeImage,
    materials: common.materials,
    sizes: {
      sv: "Exempel: 30×50, 50×90, 70×140 och 100×150 cm",
      en: "Examples: 30×50, 50×90, 70×140 and 100×150 cm",
    },
    colours: common.colours,
    gsm: { sv: "Exempel: 350–650 GSM", en: "Examples: 350–650 GSM" },
    privateLabel: common.privateLabel,
    packaging: common.packaging,
  },
  {
    slug: "hotel",
    name: { sv: "Hotellhanddukar", en: "Hotel Towels" },
    description: {
      sv: "Slitstarka vita och specialfärgade handdukar för hotell, vandrarhem, pensionat och hospitality-distributörer.",
      en: "Durable white and custom-colour towels for hotels, hostels, guest houses and hospitality distributors.",
    },
    alt: {
      sv: "Vikta vita hotellhanddukar på en hylla",
      en: "Folded white hotel towels on a shelf",
    },
    image: hotelImage,
    materials: common.materials,
    sizes: {
      sv: "Exempel: 30×30, 50×100, 70×140 och 100×180 cm",
      en: "Examples: 30×30, 50×100, 70×140 and 100×180 cm",
    },
    colours: { sv: "Hotellvitt eller specialfärg efter godkänt prov", en: "Hotel white or custom colour after sample approval" },
    gsm: { sv: "Exempel: 400–700 GSM", en: "Examples: 400–700 GSM" },
    privateLabel: common.privateLabel,
    packaging: common.packaging,
  },
  {
    slug: "restaurant-kitchen",
    name: { sv: "Restaurang- och kökshanddukar", en: "Restaurant and Kitchen Towels" },
    description: {
      sv: "Kökshanddukar, köksdukar, bardukar och restaurangtextilier för leverantörer inom hospitality.",
      en: "Tea towels, kitchen cloths, bar towels and restaurant textile products for hospitality suppliers.",
    },
    alt: {
      sv: "Randiga kökshanddukar med bestick på ett träbord",
      en: "Striped kitchen towels with cutlery on a wooden table",
    },
    image: restaurantKitchenImage,
    materials: {
      sv: "Bomull, lintfri bomull, bomull/linne eller bomullsblandning",
      en: "Cotton, lint-free cotton, cotton-linen or cotton blend",
    },
    sizes: { sv: "Exempel: 40×60, 45×70 och 50×75 cm", en: "Examples: 40×60, 45×70 and 50×75 cm" },
    colours: { sv: "Vitt, rutor, ränder eller kundanpassad färg", en: "White, checks, stripes or custom colour" },
    gsm: { sv: "Exempel: 180–400 GSM", en: "Examples: 180–400 GSM" },
    privateLabel: common.privateLabel,
    packaging: common.packaging,
  },
  {
    slug: "wash-cleaning",
    name: { sv: "Tvättlappar och rengöringsdukar", en: "Washcloths and Cleaning Towels" },
    description: {
      sv: "Tvättlappar, återanvändbara rengöringsdukar och textila avtorkningsprodukter för professionell användning.",
      en: "Washcloths, reusable cleaning cloths and commercial textile wiping products.",
    },
    alt: { sv: "Vikta tvättlappar och rengöringsdukar i bomull", en: "Folded cotton washcloths and cleaning towels" },
    image: washCleaningImage,
    materials: { sv: "Bomull, bomullsblandning eller mikrofiber enligt behov", en: "Cotton, cotton blend or microfibre according to use" },
    sizes: { sv: "Exempel: 25×25, 30×30 och 40×40 cm", en: "Examples: 25×25, 30×30 and 40×40 cm" },
    colours: { sv: "Färgkodade alternativ och specialfärger", en: "Colour-coded options and custom colours" },
    gsm: { sv: "Exempel: 200–450 GSM", en: "Examples: 200–450 GSM" },
    privateLabel: common.privateLabel,
    packaging: common.packaging,
  },
  {
    slug: "bath",
    name: { sv: "Badhanddukar", en: "Bath Towels" },
    description: {
      sv: "Standardstora och extra stora badhanddukar i olika vikter, färger och utföranden.",
      en: "Standard and oversized bath towels available in different weights, colours and finishes.",
    },
    alt: { sv: "Mjuka vikta badhanddukar i bomull", en: "Soft folded cotton bath towels" },
    image: bathImage,
    materials: common.materials,
    sizes: { sv: "Exempel: 70×140, 80×160 och 100×180 cm", en: "Examples: 70×140, 80×160 and 100×180 cm" },
    colours: common.colours,
    gsm: { sv: "Exempel: 400–700 GSM", en: "Examples: 400–700 GSM" },
    privateLabel: common.privateLabel,
    packaging: common.packaging,
  },
  {
    slug: "hand",
    name: { sv: "Handhanddukar", en: "Hand Towels" },
    description: {
      sv: "Kompakta handhanddukar för hem, hotell, restauranger, kontor och kommersiella tvättrum.",
      en: "Compact hand towels for homes, hotels, restaurants, offices and commercial washrooms.",
    },
    alt: { sv: "Vikta kompakta handhanddukar i bomull", en: "Folded compact cotton hand towels" },
    image: handImage,
    materials: common.materials,
    sizes: { sv: "Exempel: 30×50, 40×60 och 50×100 cm", en: "Examples: 30×50, 40×60 and 50×100 cm" },
    colours: common.colours,
    gsm: { sv: "Exempel: 350–600 GSM", en: "Examples: 350–600 GSM" },
    privateLabel: common.privateLabel,
    packaging: common.packaging,
  },
  {
    slug: "gym-spa",
    name: { sv: "Gym- och spahanddukar", en: "Gym and Spa Towels" },
    description: {
      sv: "Handdukar för gym, spa, wellnessanläggningar, salonger och idrottsanläggningar.",
      en: "Towels for gyms, spas, wellness centres, salons and sports facilities.",
    },
    alt: { sv: "Vikta handdukar för gym och spa", en: "Folded towels for gyms and spas" },
    image: gymSpaImage,
    materials: { sv: "Bomull, snabbtorkande bomullsblandning eller mikrofiber", en: "Cotton, quick-dry cotton blend or microfibre" },
    sizes: { sv: "Exempel: 30×90, 50×100 och 70×140 cm", en: "Examples: 30×90, 50×100 and 70×140 cm" },
    colours: common.colours,
    gsm: { sv: "Exempel: 300–550 GSM", en: "Examples: 300–550 GSM" },
    privateLabel: common.privateLabel,
    packaging: common.packaging,
  },
];

export const getTowelCategory = (slug?: string) =>
  towelCategories.find((category) => category.slug === slug);
