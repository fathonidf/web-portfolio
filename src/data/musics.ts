interface Music {
    id: string;
    title: string;
    organizer: string;
    linkHref: string;
    image: string;
}

const musics: Music[] = [
    {
        id: "khachaturian-toccata",
        title: "Khachaturian - Toccata",
        organizer: "Dana Ilmu Pengetahuan Indonesia 2023",
        linkHref: "https://youtu.be/kz03QjQcBgU?t=3071",
        image: "/musics-image/toccata.png"
    },
    {
        id: "gershwin-igotrhythm",
        title: "Gershwin - I Got Rhythm",
        organizer: "Dana Ilmu Pengetahuan Indonesia 2023",
        linkHref: "https://youtu.be/hZaE9y2SX1M?t=2401",
        image: "/musics-image/i-got-rhythm.png"
    },
    {
        id: "mendelssohn-rondocapriccioso",
        title: "Mendelssohn - Rondo Capriccioso",
        organizer: "Musical Bouquet 2023",
        linkHref: "https://youtu.be/Y_fDUiyZK2o?t=4979",
        image: "/musics-image/rondo-capriccioso.png"
    },
    {
        id: "chopin-etudeop25no1",
        title: "Chopin - Etude Op. 25 No. 1",
        organizer: "Young Artist Series 2022",
        linkHref: "https://youtu.be/YRiOrBTATjQ?t=2584",
        image: "/musics-image/etude-op25-no1.png"
    },
    {
        id: "liebestraume-no-3",
        title: "Liszt - Liebestraume No. 3",
        organizer: "Young Artist Series 2021",
        linkHref: "https://youtu.be/P4NQDvXMSzg?t=3561",
        image: "/musics-image/liebestraume.png"
    },
    {
        id: "mata-ke-hati",
        title: "HIVI! - Mata ke Hati (Cover)",
        organizer: "Paskibra 2020 - SMAN 81 Jakarta",
        linkHref: "https://youtu.be/jNVP5Mp3xQM?si=gE39869OlJAXpCUk",
        image: "/musics-image/mata-ke-hati.png"
    },
];

export default musics;
