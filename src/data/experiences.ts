interface Experience {
    position: string;
    organization: string;
    descriptions: string[];
    date: string;
}

const experiences: Experience[] = [
    {
        position: "Staff of Teaching Assistant",
        organization: "Teaching Assistant for Faculty of Computer Science",
        descriptions: [
            "Conducted tutorial sessions to assist students in preparing for exams, aided in the design and grading of homework, and provided one-on-one support and mentoring for students in Discrete Mathematics 1 (CSGE601010).",
            "Facilitated lab sessions by guiding students through practical programming exercises, developed supplementary instructional materials to enhance understanding, and evaluated student projects with detailed feedback to foster improvement in Programming Foundations 2 (CSGE601021)."
        ],
        date: "Aug 2023 - Jun 2023"
    },
    {
        position: "Staff of Strategic Marketing",
        organization: "Pesta Rakyat Komputer 2024",
        descriptions: [
            "Managed social media publications (Twitter) with viewer engagement exceeding 60,000 views.",
            "Developed and executed content plans to increase event visibility and participation."
        ],
        date: "Feb 2024 – May 2024"
    },
    {
        position: "Vice Person-in-Charge of Liaison Officer",
        organization: "Open House Fasilkom UI 2023",
        descriptions: [
            "Led a division comprising 72 mentors.",
            "Managed all participants, totaling over 500 individuals (online & offline)."
        ],
        date: "Jul 2023 – Nov 2023"
    },
    {
        position: "Staff of Public Relations",
        organization: "BEM Fasilkom UI 2023",
        descriptions: [
            "Ranked as the 3rd Best Staff for the month of August.",
            "Organized an institutional visit with Grab company and a comparative study (BEM Visit) with HME ITB.",
            "Organized the BEM Grand Closing for BEM Fasilkom UI 2023 at Balai Sidang UI.",
            "Led and mentored 15 public relations interns for Sekolah BEM Fasilkom 2023."
        ],
        date: "Mar 2023 – Dec 2023"
    },
    {
        position: "Staff of Human Resources for Software Engineering Academy",
        organization: "COMPFEST 15",
        descriptions: [
            "Acted as the support system for a team of 15 staff members, responsible for recruiting potential candidates from over 20 applicants and serving as a people manager, focused on enhancing the performance and development of division staff.",
            "Hosted the online bootcamp event of Software Engineering Academy."
        ],
        date: "Mar 2023 – Sep 2023"
    }
];

export default experiences;