interface Project {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    color: string;
    githubHref?: string;
    demoHref?: string;
}

const projects: Project[] = [
    {
        id: "books-buddy",
        title: "Books Buddy (Web and Mobile App)",
        description: "A web application that supports Indonesia’s reading movement by enabling users to easily find, manage, share book information, and discover relevant events and activities.",
        date: "Sep 2023 – Nov 2023",
        image: "/projects-image/booksbuddy.png",
        color: "yellow-600"
    },
    {
        id: "kelilink",
        title: "KeliLINK App Design",
        description: "A mobile application design that integrates with various public transportation services such as KRL, Transjakarta, MRT, LRT, and the ride-hailing app Grab. Simplifies navigation and improves convenience by consolidating multiple transportation options into one platform.",
        date: "Feb 2024 – May 2024",
        image: "/projects-image/kelilink.png",
        color: "green-500"
    },
    {
        id: "marmut",
        title: "Marmut Web",
        description: "A versatile web application for streaming music and podcasts, allowing users to create playlists, download tracks for offline listening as premium subscribers, while also enabling artists, songwriters, and podcasters to efficiently manage their works with comprehensive details.",
        date: "Apr 2024 – May 2024",
        image: "/projects-image/marmut.png",
        color: "orange-500"
    },
    {
        id: "gametime",
        title: "Game Time Web",
        description: "A store that assists users in finding toys and items for their favorite games easily, while also providing a niche marketplace for sellers of game-specific toys and items.",
        date: "Apr 2024 – May 2024",
        image: "/projects-image/gametime.png",
        color: "blue-500"
    },
];

export default projects;
