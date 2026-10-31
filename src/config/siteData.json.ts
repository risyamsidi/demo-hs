// src/config/siteData.json.ts - l'identite de la publication : nom, auteur, adresse, reseaux.
import type { SiteDataProps } from "./types/configDataTypes";

// Tout ce qui identifie la publication vit ici. C'est le premier fichier que
// l'utilisateur edite, et le seul a editer pour changer de marque.
const siteData: SiteDataProps = {
  name: "Olan Homestay",
  // Une valeur par langue : le flux RSS indonesien porte le titre indonesien.
  title: {
    id: "Olan Homestay | Penginapan Nyaman & Strategis Lebak, Banten",
    en: "Olan Homestay | Comfortable & Strategic Accommodation in Lebak, Banten",
  },
  description:
    "Cari penginapan homestay di Lebak, Banten? Olan Homestay: kamar nyaman, lokasi strategis, tarif jelas. Cek kamar kosong lewat WhatsApp sekarang juga!",
  useViewTransitions: true,

  // La ligne de pied de page qui dit que ce site est une demonstration du
  // theme, avec le lien vers la boutique. Le texte vit dans src/i18n/ui/{id,en}/demo.ts et ne cite
  // que la boutique, aucune personne ni adresse. Vider ce champ eteint la ligne.
  demoNotice: "demo.notice",

  // Identite NEUTRE, regle du catalogue Astro : une demo ne porte ni nom
  // d'utilisateur reel, ni domaine que l'on ne possede pas. L'utilisateur met
  // les siens ici, et le pied de page suit.
  author: {
    name: "Olan Homestay",
    email: "hello@example.com",
    twitter: "",
  },

  // La carte de partage est une photo seule : son alternative
  // decrit la photo, la vague en tube de l'accueil, et non la marque. Une
  // valeur par langue, comme tout texte lu par un lecteur d'ecran.
  defaultImage: {
    src: "/og/default.jpg",
    alt: {
      id: "Pemandangan dari dalam gulungan ombak biru toska ke arah pantai berpasir",
      en: "Looking through the barrel of a turquoise wave at a sandy shore",
    },
  },
};

export default siteData;
