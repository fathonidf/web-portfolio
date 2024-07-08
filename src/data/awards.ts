interface Award {
    title: string;
    institution: string;
    date: string;
    href?: string;
}

const awards: Award[] = [
    {
        title: "Best Web and Mobile Application for Platform-Based Programming Odd Semester 2023/2024",
        institution: "Faculty of Computer Science",
        date: "Dec 2023",
        href: "https://drive.google.com/file/d/13KiDdqdPbUaAwZleKY6WpCAXk-SH4vni/view?usp=sharing"
    },
    {
        title: "1st Winner & Best Performance for Advance Category (All Age)",
        institution: "Indonesia Piano Online Competition 2023 - Rizoma Organizer",
        date: "Aug 2023",
        href: "https://drive.google.com/file/d/1m_cp1ZdhebcmPmd3g-8yTrp0sLCslUpZ/view?usp=sharing"
    },
    {
        title: "The 2023 YPM Artist Award & Gold Medal",
        institution: "Sekolah Musik Yayasan Pendidikan Musik",
        date: "Jun 2023",
        href: "https://drive.google.com/file/d/14oWZHMKP0UinwBMS-51Qn0Wj9SUjKjad/view?usp=sharing"
    },
];

export default awards;