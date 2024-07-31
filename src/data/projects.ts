interface Project {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    color: string;
    demoHref: string;
    team: string;
    techStack: string[];
    background: string;
    detail?: string;
}

const projects: Project[] = [
    {
        id: "books-buddy",
        title: "Books Buddy (Web and Mobile App)",
        description: "A web application that supports Indonesia’s reading movement by enabling users to easily find, manage, share book information, and discover relevant events and activities.",
        date: "Sep 2023 – Nov 2023",
        image: "/projects-image/booksbuddy.png",
        color: "yellow",
        demoHref: "https://books-buddy.org/",
        team: "Restu Ahmad Ar-Ridho, Daffa Mohamad Fathoni, Nadhira Widyaniswari, Gamma Farrel",
        techStack: ["python", "javascript", "django", "tailwind"],
        background: "The application theme focuses on literacy and books, chosen for three main reasons: to raise awareness of the importance of literacy; it aligns with the theme of the 12th Indonesian Language Congress, Literacy in Diversity for National Progress, held on October 25-28, 2023, which is the highest forum discussing linguistic and literary issues in Indonesia, organized every five years by the Language Development and Fostering Agency of the Ministry of Education, Culture, Research, and Technology; and it corresponds with the commemoration of Language and Literature Month celebrated every October in Indonesia to honor the history of the Indonesian language.",
        detail: "The application is designed to empower readers through four key modules: \"MyBuddy\" allows users to easily track and manage their personal book collections, filtering by status such as owned, to-read, and currently reading, with details like book titles and user reviews; \"FindBuddy\" leverages an API to help users explore and discover books based on criteria like title, author, or genre, adding selected books to their collection; \"ReachBuddy\" connects users with reading communities, enabling them to share insights, reviews, and discussions about books; and \"EventBuddy\" offers opportunities to find, register, and participate in book-related events, with comprehensive event details provided. This application aims to deepen users' exploration of books, foster community connections, and inspire participation in the reading movement in Indonesia. Welcome to our app!"
    },
    {
        id: "kelilink",
        title: "KeliLINK App Design",
        description: "A mobile application design that integrates with various public transportation services such as KRL, Transjakarta, MRT, LRT, and the ride-hailing app Grab. Simplifies navigation and improves convenience by consolidating multiple transportation options into one platform.",
        date: "Feb 2024 – May 2024",
        image: "/projects-image/kelilink.png",
        color: "green",
        demoHref: "https://www.ristek.link/Prototype-KeliLINK",
        team: "Afsar Rakha Farassandi, Daffa Mohamad Fathoni, Najmi Briliant, Galen Taris Bariqi, Shafira Ramadhina, Anindya Maulidya",
        techStack: ["figma"],
        background: "Bustling cities like Jakarta face numerous challenges in public and online transportation, including congestion, accidents, and inadequate facilities. Residents often struggle to find efficient and economical routes. Additionally, issues like limited payment options and lack of transparency in addressing complaints and suggestions exacerbate the situation. These problems highlight the need for improved solutions to meet the public transportation and information needs of residents.",
        detail: "KeliLINK is an integrated application for various public transportation services in Jakarta providing an efficient travel experience. Users can easily input their start and destination locations to receive information on the best routes and suitable transportation modes with estimated arrival times. Key features include multimodal search, departure schedule integration, payment options, multilingual support, and interactive maps and navigation. Users can choose the fastest route, view departure schedules and real-time transport positions, select payment methods like bank transfers, credit cards, and e-wallets, and use interactive maps to find nearby stops and navigate their journey with step-by-step guidance and QR code payment."
    },
    {
        id: "marmut",
        title: "Marmut Web",
        description: "A versatile web application for streaming music and podcasts, allowing users to create playlists, download tracks for offline listening as premium subscribers, while also enabling artists, songwriters, and podcasters to efficiently manage their works with comprehensive details.",
        date: "Apr 2024 – May 2024",
        image: "/projects-image/marmut.png",
        color: "orange",
        demoHref: "https://marmut-app-c15.up.railway.app/",
        team: "Daffa Mohamad Fathoni, Fathi Qushoyyi, Rafi Zia Ulhaq",
        techStack: ["python", "postgresql", "javascript", "django", "tailwind"],
        background: "The increasing demand for digital entertainment calls for versatile platforms for music and podcast streaming. This web application allows users to create playlists, download tracks for offline listening as premium subscribers, and enables artists, songwriters, and podcasters to efficiently manage their works. Developed as a group assignment for the Database course, this project demonstrates the importance of effective database management in enhancing user experiences and supporting content creators."
    },
    {
        id: "gametime",
        title: "Game Time Web",
        description: "A store that assists users in finding toys and items for their favorite games easily, while also providing a niche marketplace for sellers of game-specific toys and items.",
        date: "Apr 2024 – May 2024",
        image: "/projects-image/gametime.png",
        color: "blue",
        demoHref: "https://gametime-frontend.vercel.app/",
        team: "Briella Naomi, Daffa Mohamad Fathoni, I Made Surya Anahata, Belati Jagad, Wahyu Hidayat",
        techStack: ["java", "javascript", "spring", "reactjs", "nextjs", "tailwind"],
        background: "The Game Time project is a collaborative effort for the Advanced Programming course, designed to enhance our backend development skills through advanced concepts. Group members are each responsible for specific features to optimize our workflow. We have created a detailed technical document to guide our development process and adhere to a disciplined Git Flow in all repositories to ensure code quality and effective teamwork. Key backend practices include deploying microservices, applying design patterns, adhering to software architecture principles, managing high-level networking, and using asynchronous programming. The project will conclude with final deployment and monitoring, and the technical documentation will cover both the current architectural framework.",
        detail: "Key functionalities include robust search and filter features allowing buyers, sellers, and third parties to locate games based on criteria like price, category, or relevance. The platform supports efficient game transactions, enabling buyers to purchase and sellers to list new games with detailed descriptions and prices. It maintains a comprehensive transaction history, recording purchase and sale details such as transaction IDs, products, prices, and payment statuses, presented intuitively for easy access. A shopping cart function allows buyers to add, modify, or remove game items before checkout, integrated with stock management to ensure accurate availability. Additionally, a rating and review system enables buyers to provide feedback on purchased games, with features for sellers to review and respond to customer reviews promptly."
    },
];

export default projects;
