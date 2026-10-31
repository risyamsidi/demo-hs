// src/i18n/ui/en/pages.ts - dictionnaire anglais, tranche "pages" : la copie propre a chaque page du site.
//
// Une page est un assemblage de sections, jamais un endroit ou l'on ecrit des
// phrases : les titres de hero, les descriptions meta et les libelles de
// formulaire vivent ici, et les composants n'affichent que ce qu'on leur passent.
//
// Le blog de demonstration s'appelle Reef Notes : le carnet d'un studio web
// independant. Le registre est celui d'un artisan qui montre son etabli, pas
// celui d'une page commerciale. Concret, chiffre quand c'est possible, jamais une
// promesse qu'un billet ne tient pas juste en dessous.

export const enPages = {
  // --- Accueil -------------------------------------------------------------
  home: {
    metaTitle: "Olan Homestay | Comfortable & Strategic Accommodation in Lebak, Banten",
    // La signature courte de la marque : elle allonge un titre de page trop court quand le titre de l'accueil le ferait depasser 60 caracteres (src/js/pageTitle.ts).
    titleSignature: "Olan Homestay, comfortable & strategic accommodation in Lebak, Banten",
    metaDescription:
      "Looking for a homestay in Lebak, Banten? Olan Homestay offers cozy rooms, a strategic location, and clear pricing. Check room availability via WhatsApp now!",
    eyebrow: "Olan Homestay",
    heroTitle: "A calm place to rest, reconnect, and feel at home",
    heroAccent: "rest",
    heroLede:
      "Comfortable rooms, family-friendly spaces, and a quiet atmosphere for easy weekend stays in Lebak.",
    heroPrimary: "Check availability",
    heroSecondary: "Explore the stay",
    heroRecent: "Latest stays",
    // Les trois libelles du compteur du hero, dans l'ordre exact ou la page
    // fournit les nombres : notes publiees, sujets, langues servies.
    heroLedger: ["guest stays", "family spaces", "easy access"],
    featuredEyebrow: "Recommended stay",
    latestTitle: "Comfort you can count on",
    latestAccent: "Comfort",
    latestLede: "Simple, clean, and welcoming spaces designed for family trips and quiet weekend escapes.",
    latestCta: "See all stays",
    topicsTitle: "The experience you can expect",
    topicsAccent: "experience",
    topicsLede:
      "Everything here is designed around comfort, calm, and easy family living, from shared spaces to the pool area.",
    topicsCta: "Learn more",
    authorsTitle: "Why guests choose us",
    authorsAccent: "choose",
    authorsLede:
      "Every stay is shaped around comfort, convenience, and quiet moments that make guests want to come back.",
    authorsCta: "Meet the hosts",
    aboutTitle: "A homey stay in the heart of Lebak",
    aboutAccent: "homey",
    aboutLede:
      "A family-friendly place to slow down, breathe easier, and enjoy a more comfortable kind of weekend getaway.",
    aboutCta: "How it feels to stay here",
    /** Le surtitre et le second bouton de la scene filmee de l'accueil : leurs propres textes, distincts de la page A propos et du menu. */
    aboutEyebrow: "About",
    aboutContact: "Contact",
    /** Le nom de la bande defilante des sujets, sous l'ouverture, pour les lecteurs d'ecran. */
    marqueeLabel: "Stay highlights",
  },

  // --- A propos ------------------------------------------------------------
  about: {
    metaTitle: "About Olan Homestay",
    metaDescription:
      "A calm family homestay in Lebak with comfortable rooms, a welcoming atmosphere, and an easy stay for your next getaway.",
    /** Le nom de la page dans le fil d'Ariane et son balisage : court, distinct du titre donne aux moteurs de recherche. */
    crumb: "About",
    eyebrow: "About",
    title: "A warm place to rest in Lebak",
    accent: "warmth",
    lede:
      "Olan Homestay is designed for family trips, relaxed weekends, and easy stays in a quiet and comfortable setting.",
    storyTitle: "How it feels to stay here",
    storyAccent: "feels",
    storyParagraphs: [
      "We wanted to create a place that feels warm, practical, and easy for families who want comfort without extra hassle.",
      "From room layout to shared spaces, every detail is designed to make your stay simple, calm, and comfortable.",
      "The goal is not luxury for its own sake, but a place where guests can slow down and enjoy a peaceful break.",
    ],
    valuesTitle: "What guests value most",
    valuesAccent: "value",
    valuesLede: "Comfort, calm, and ease are the priorities for every stay.",
    values: [
      {
        title: "Clean and comfortable",
        text: "Rooms are prepared for rest and designed to feel simple, reliable, and welcoming.",
      },
      {
        title: "Family friendly",
        text: "Shared spaces, practical layouts, and easy access make family stays more comfortable.",
      },
      {
        title: "Easy to enjoy",
        text: "A quiet setting and thoughtful details make even short stays feel like a proper reset.",
      },
    ],
    writersTitle: "The hospitality behind the stay",
    writersAccent: "hospitality",
    writersLede: "Warm, simple attention is what guests remember most.",
    writersCta: "Meet the hosts",
    contactTitle: "Planning your stay",
    contactLede:
      "If you want to ask about room availability, family needs, or weekend plans, we would be happy to help.",
    contactCta: "Contact us",
  },

  // --- Contact -------------------------------------------------------------
  // Le formulaire est complet et non monte : le theme ne choisit pas de
  // prestataire d'envoi a la place de son utilisateur. La copie, elle, est prete.
  contact: {
    metaTitle: "Contact Olan Homestay",
    metaDescription:
      "Ask about room availability, family stays, and the best time to visit Olan Homestay in Lebak.",
    /** Le nom de la page dans le fil d'Ariane et son balisage : court, distinct du titre donne aux moteurs de recherche. */
    crumb: "Contact",
    eyebrow: "Contact",
    title: "Ask about your stay",
    accent: "stay",
    lede:
      "We are happy to answer questions about room availability, family spaces, and weekend plans.",
    formTitle: "Send a message",
    nameLabel: "Your name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Room availability",
    messageLabel: "Message",
    messagePlaceholder: "Tell us your dates and needs.",
    submit: "Send message",
    formNote: "We reply as soon as possible and only use your message to help with your stay.",
    success: "Your message has been sent. We will contact you soon.",
    error: "Your message did not go through. Please try again or contact us directly.",
    directTitle: "Or skip the form",
    directLede: "You can also contact us directly for room availability and family stay questions.",
    directCta: "Contact us",
    nextTitle: "What happens next",
    nextSteps: [
      "We reply with room availability and the best option for your stay.",
      "If needed, we confirm room setup and family needs.",
      "We help make your check-in simple and comfortable.",
    ],
  },

  // --- Sujets --------------------------------------------------------------
  topics: {
    metaTitle: "Stay experiences",
    metaDescription:
      "Explore family spaces, comfort details, and the calm atmosphere at Olan Homestay.",
    /** Le nom de la page dans le fil d'Ariane et son balisage : court, distinct du titre donne aux moteurs de recherche. */
    crumb: "Stay experiences",
    /** Le surtitre de la page d'un sujet, distinct de celui de la liste des sujets. */
    pageEyebrow: "Stay",
    eyebrow: "Stay",
    title: "What makes a stay feel easy",
    accent: "easy",
    lede:
      "Every detail is designed to support comfort, family ease, and a calmer kind of weekend break.",
    /** {count} vient du nombre d'articles publies dans le sujet. */
    countLabel: "{count} highlights",
    countOne: "1 highlight",
    readTopic: "Explore this topic",
    allTopics: "All highlights",
    emptyTitle: "Nothing is shown yet",
    emptyLede: "New stay details will appear here when ready.",
  },

  // --- Auteurs -------------------------------------------------------------
  authors: {
    metaTitle: "Meet the hosts",
    metaDescription:
      "Get to know the people behind Olan Homestay and the experience they create for every guest.",
    /** Le nom de la page dans le fil d'Ariane et son balisage : court, distinct du titre donne aux moteurs de recherche. */
    crumb: "Hosts",
    eyebrow: "Hosts",
    title: "Meet the hosts",
    accent: "hosts",
    lede:
      "A small team that cares helps keep every stay warm, comfortable, and welcoming for each guest.",
    roleLabel: "Role",
    linksLabel: "More",
    postsBy: "By {name}",
    readAll: "Read more by {name}",
    countLabel: "{count} stays",
    countOne: "1 stay",
    emptyTitle: "No details yet",
    emptyLede: "This section will be filled as more stay experiences are added.",
  },

  // --- Recherche -----------------------------------------------------------
  // La recherche tourne dans le navigateur sur un index construit au build :
  // zero requete, zero service tiers, et le theme reste 100% statique.
  search: {
    metaTitle: "Search Olan Homestay",
    metaDescription:
      "Search stay details, rooms, and family-friendly highlights for Olan Homestay.",
    /** Le nom de la page dans le fil d'Ariane et son balisage : court, distinct du titre donne aux moteurs de recherche. */
    crumb: "Search",
    eyebrow: "Search",
    title: "Find what you need",
    accent: "need",
    lede:
      "Search stay details, room notes, and family-friendly highlights about Olan Homestay.",
    placeholder: "Search stays",
    label: "Search",
    shortcut: "Press / to search",
    clear: "Clear",
    /** Affiche avant la premiere frappe. {count} est la taille de l'index. */
    prompt: "Start typing to search {count} items.",
    resultsLabel: "Search results",
    countLabel: "{count} results",
    countOne: "1 result",
    inTopic: "in {topic}",
    noResultsTitle: "No matches found",
    noResultsLede: "Try a shorter word or browse the stay highlights.",
    noResultsCta: "Browse highlights",
  },

  // --- 404 -----------------------------------------------------------------
  notFound: {
    metaTitle: "Page not found",
    metaDescription: "This page is not available right now. Please return to the home page.",
    code: "404",
    title: "This page is not available",
    accent: "available",
    lede:
      "The link may be wrong, or the page may have moved. Please use the options below to continue.",
    homeCta: "Back to home",
    postsCta: "View stays",
    searchCta: "Search",
  },

  // --- Mentions legales ----------------------------------------------------
  // La page /legal/ porte SON propre texte ici, parce qu'elle n'en a pas
  // ailleurs : src/config/legalData.json.ts ne couvre que la confidentialite et
  // les conditions. Les passages entre crochets sont a completer par l'utilisateur,
  // et ce texte ne vaut pas un avis juridique.
  legal: {
    /** Les noms des trois pages legales dans le fil d'Ariane, et le surtitre des deux documents : distincts des titres et de la page des mentions. */
    crumb: "Legal notice",
    privacyCrumb: "Privacy policy",
    termsCrumb: "Terms of use",
    privacyEyebrow: "Legal",
    termsEyebrow: "Legal",
    /** La date de derniere revision des mentions legales (AAAA-MM-JJ). */
    updated: "2026-10-31",
    eyebrow: "Legal",
    title: "Legal notice",
    description: "Who publishes this site, who hosts it, and how to reach Olan Homestay.",
    /** {date} est formatee par formatDate() dans la langue de la page. */
    lastUpdated: "Last updated on {date}",
    toc: "On this page",
    backToTop: "Back to top",
    sections: [
      {
        title: "Publisher",
        body: "This site is published by Olan Homestay for informational and booking purposes. Contact details are available on the contact page.",
      },
      {
        title: "Hosting",
        body: "This site is hosted by a third-party service provider. The hosting provider is responsible for infrastructure and service availability.",
      },
      {
        title: "Content and reuse",
        body: "Text, photos, and design on this site are intended for Olan Homestay. Reuse is only permitted with clear attribution and a link back to the source.",
      },
      {
        title: "Reporting a problem",
        body: "If you find a factual error, broken link, or legal issue, please contact us through the contact page so it can be fixed promptly.",
      },
    ],
  },
} as const;
