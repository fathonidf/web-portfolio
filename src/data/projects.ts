interface Project {
    title: string;
    description: string;
    date: string;
    githubHref?: string;
    demoHref?: string;
}

const projects: Project[] = [
    {
        title: "Game Time Web",
        description: "A store that assists users in finding toys and items for their favorite games easily, while also providing a niche marketplace for sellers of game-specific toys and items. Developed the web application using the Java Spring Boot Framework for the backend, incorporating CI/CD, unit testing, and REST APIs. Integrated the backend with Next.js for the frontend, utilizing Tailwind CSS.",
        date: "Apr 2024 – May 2024"
    },
    {
        title: "Marmut Web",
        description: "A versatile web application for streaming music and podcasts, allowing users to create playlists, download tracks for offline listening as premium subscribers, while also enabling artists, songwriters, and podcasters to efficiently manage their works with comprehensive details. Developed the web application using the Django Framework, with Tailwind CSS for the frontend, and REST APIs and PostgreSQL for the backend logic.",
        date: "Apr 2024 – May 2024"
    },
    {
        title: "KeliLINK App Design",
        description: "A mobile application that integrates with various public transportation services such as KRL, Transjakarta, MRT, LRT, and the ride-hailing app Grab. Simplifies navigation and improves convenience by consolidating multiple transportation options into one platform. Designed the application with Figma and implemented to be a clickable High-Fidelity Prototype.",
        date: "Apr 2024 – May 2024"
    },
    {
        title: "Books Buddy (Web and Mobile App)",
        description: "A web application that supports Indonesia’s reading movement by enabling users to easily find, manage, share book information, and discover relevant events and activities. Developed a web application using the Django Framework for full-stack development, integrating Tailwind CSS, AJAX (JavaScript), and REST APIs. Additionally, created a mobile application using Flutter, seamlessly integrated with the Django web app. Achieved the Best Web and Mobile Application for the Platform-Based Programming Odd Semester 2023/2024 and registered for patent (Hak Kekayaan Intelektual).",
        date: "Sep 2023 – Nov 2023"
    }
];

export default projects;
