import { photos } from "./photos";

export const PHONE = "+36 70 340 0962";
export const PHONE_HREF = "tel:+36703400962";
export const EMAIL = "mentes@tanacs-automento.hu";

export const navLinks = [
  { href: "#services", label: "Szolgáltatások" },
  { href: "#pricing", label: "Árak" },
  { href: "#gallery", label: "Galéria" },
  { href: "#about", label: "Rólunk" },
  { href: "#testimonials", label: "Vélemények" },
];

export const services = [
  {
    title: "Baleseti Vontatás",
    desc: "0–24 platformos és kerékemeléses vontatás minden járműtípushoz. Gyorsan érünk oda.",
    img: photos.havasEjszakaiMentes,
    alt: "Éjszakai mentés havas úton, sérült autó a vontatón",
  },
  {
    title: "Csörlős Autószállítás",
    desc: "Biztonságos, károsodásmentes szállítás luxusautóknak, motorkerékpároknak és alacsony hasmagasságú járműveknek.",
    img: photos.platosSzallitas,
    alt: "Platós vontató személyautóval",
  },
  {
    title: "Bikázás",
    desc: "Lemerült az akkumulátor? Perceken belül útba állítjuk, bárhol is legyen.",
    img: photos.ejszakaiRakodas,
    alt: "Autó a platón éjszaka, felkapcsolt fényszórókkal",
  },
  {
    title: "Mobil Gumizás",
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
    title: "Darus Mentés",
    desc: "Sárban, hóban vagy árokba csúszott? Visszahúzzuk a biztonságos útra.",
    img: photos.darusMentesArokbol,
    alt: "Darus mentés: összetört autó kiemelése az árokból",
  },
];

export const testimonials = [
  {
    name: "Kovács Márton",
    location: "Budapest, M7-es autópálya",
    text: "Éjjel 2-kor mondott fel az autóm az autópályán. Felhívtam a Royal-t, és 20 percen belül ott voltak. Életmentők.",
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
    text: "Defektet kaptam az M1-esen a gyerekekkel. A Royal autómentő  gyorsan kiért és mindent intézett. Végig biztonságban éreztük magunkat.",
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
  "Hétvégén és ünnepnapon is",
  "Mi veszünk fel minden hívást – nincs automata robot",
  // "GPS-követett járművek, így pontosan tudja, mikor érünk oda",
  "Engedéllyel rendelkező, biztosított és átvilágított autómentők",
];

export const priceFactors = [
  {
    title: "Autó típusa",
    desc: "Személyautó, egyterű vagy kisteherautó – a jármű mérete és súlya határozza meg, milyen vontató kell.",
  },
  {
    title: "Autó állapota",
    desc: "Gurul-e még, mennyire sérült, szükség van-e darus kiemelésre vagy csörlőre.",
  },
  {
    title: "Helyszín",
    desc: "Város, autópálya, földút vagy árok – számít, mennyire könnyen közelíthető meg a jármű.",
  },
  {
    title: "Távolság",
    desc: "Honnan hová kell szállítanunk a járművet.",
  },
];
