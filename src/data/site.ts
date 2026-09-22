import { photos } from "./photos";

export const PHONE = "+36 80 123 456";
export const PHONE_HREF = "tel:+3680123456";
export const EMAIL = "mentes@tanacs-automento.hu";

export const navLinks = [
  { href: "#services", label: "Szolgáltatások" },
  { href: "#gallery", label: "Galéria" },
  { href: "#about", label: "Rólunk" },
  { href: "#testimonials", label: "Vélemények" },
];

export const services = [
  {
    title: "Vészhelyzeti Vontatás",
    desc: "0–24 platformos és kerékemeléses vontatás minden járműtípushoz. Gyorsan érünk oda.",
    img: photos.havasEjszakaiMentes,
    alt: "Éjszakai mentés havas úton, sérült autó a vontatón",
  },
  {
    title: "Platformos Szállítás",
    desc: "Biztonságos, károsodásmentes szállítás luxusautóknak, motorkerékpároknak és alacsony hasmagasságú járműveknek.",
    img: photos.platosSzallitas,
    alt: "Platós vontató személyautóval",
  },
  {
    title: "Akkumulátor Beindítás",
    desc: "Lemerült az akkumulátor? Perceken belül útba állítjuk, bárhol is legyen.",
    img: photos.ejszakaiRakodas,
    alt: "Autó a platón éjszaka, felkapcsolt fényszórókkal",
  },
  {
    title: "Gumicsere",
    desc: "Defekt az autópályán vagy parkolóban – biztonságosan és gyorsan megoldjuk.",
    img: photos.pirosAutoPlaton,
    alt: "Piros autó a vontató platóján",
  },
  {
    title: "Üzemanyag Kiszállítás",
    desc: "Elfogyott az üzemanyag? Közvetlenül az Ön helyszínére szállítjuk. Nem kell sétálnia.",
    img: photos.ejszakaiSzallitas,
    alt: "Autó szállítása éjszaka",
  },
  {
    title: "Csörlős Mentés",
    desc: "Sárban, hóban vagy árokba csúszott? Visszahúzzuk a biztonságos útra.",
    img: photos.darusMentesArokbol,
    alt: "Darus mentés: összetört autó kiemelése az árokból",
  },
];

export const testimonials = [
  {
    name: "Kovács Márton",
    location: "Budapest, M7-es autópálya",
    text: "Éjjel 2-kor mondott fel az autóm az autópályán. Felhívtam a Tanácsot, és 20 percen belül ott voltak. Életmentők.",
    stars: 5,
  },
  {
    name: "Horváth Réka",
    location: "Halásztelek",
    text: "Lemerült az akkumulátor egy parkolóházban. A szerelő megérkezett, beindította az autót, és 25 percen belül folytathattam az utam. Rendkívül profi.",
    stars: 5,
  },
  {
    name: "Németh Zoltán",
    location: "Győr",
    text: "Defektet kaptam az M1-esen a gyerekekkel. A Tanács gyorsan kiért és mindent intézett. Végig biztonságban éreztük magunkat.",
    stars: 5,
  },
];

export const stats = [
  { value: "28 perc", label: "Átlagos kiérkezési idő" },
  { value: "500+", label: "Megmentett sofőr" },
  { value: "0–24", label: "Mindig elérhető" },
  { value: "4.9★", label: "Ügyfélelégedettség" },
];

export const whyUs = [
  "Nincs felár éjszaka, hétvégén vagy ünnepnapon",
  "Mi veszünk fel minden hívást – nincs automata robot",
  // "GPS-követett járművek, így pontosan tudja, mikor érünk oda",
  "Engedéllyel rendelkező, biztosított és átvilágított autómentők",
];
