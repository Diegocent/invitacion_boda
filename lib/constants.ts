export const WEDDING_DATE = new Date("2026-10-24T18:00:00-03:00");

export const COUPLE = {
  first: "Ilse",
  second: "Jose",
  dateLabel: "24 · 10 · 2026",
};

export const VENUE = {
  title: "Ceremonia y celebración",
  place: "CLUB DE SUBOFICIALES FAP",
  address: "Club de Suboficiales FAP",
  city: "Luque, Paraguay",
  time: "",
  maps: "https://maps.google.com/maps/search/Club%20de%20Sub%20Oficiales%20FAP/@-25.26901183,-57.52653337,17z?hl=es",
  image:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
};

export const RSVP = {
  formUrl: "https://forms.gle/fpZozuzb9NWjdsnA6",
  embedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc35RhNRkslDRQD33XpByb_6YubAkan4AgEsdwS3xZgeVQeIw/viewform?embedded=true",
};

export const GIFT = {
  listUrl:
    "https://docs.google.com/spreadsheets/d/12Nco72kVBt2FtxAmdvWwcY74gBRRMbH1Xh_V6cDoMQU/edit?usp=sharing",
};

export const ALBUM = {
  qr: "/scan_carpeta_fotos.png",
  url: "https://drive.google.com/drive/folders/1Jw6-YdkTO-WQ6wg-LeGIpi2vqwrDCw0j?usp=drive_link",
};

export const ITINERARY = [
  { time: "18:00 h", title: "Inicio", icon: "start" as const },
  { time: "19:00 h", title: "Celebración", icon: "celebration" as const },
  { time: "19:30 h", title: "Vals", icon: "vals" as const },
  { time: "21:00 h", title: "Banquete", icon: "food" as const },
  { time: "22:00 h", title: "Fiesta", icon: "party" as const },
];

export const PHOTOS = {
  couple:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
  ],
};

export const AUDIO_SRC =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3";

export const reveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* Sin autobús ni alojamiento para esta boda.
export const BUSES = [
  {
    label: "IDA",
    from: "Catedral",
    to: "Restaurante",
    time: "19:00 h",
    maps: "https://maps.google.com/?q=Catedral+de+Mallorca",
  },
  {
    label: "VUELTA",
    from: "Restaurante",
    to: "Plaza España",
    time: "02:00 h",
    maps: "https://maps.google.com/?q=Plaza+España+Palma",
  },
];

export const HOTELS = [
  {
    name: "FINCA CAN ESTADES",
    phone: "+34 971 670 558",
    maps: "https://maps.google.com/?q=Finca+Can+Estades+Alaro",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "SON MALERO",
    phone: "+34 971 670 301",
    maps: "https://maps.google.com/?q=Son+Malero+Alaro",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
];
*/
