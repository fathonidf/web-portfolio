interface Education {
    major: string;
    institute: string;
    location: string;
    date: string;
}

const educations: Education[] = [
    {
        major: "Computer Science Major, Faculty of Computer Science (GPA: 3.87)",
        institute: "Universitas Indonesia",
        location: "Depok",
        date: "Apr 2022 - Now"
    },
    {
        major: "Mathematics and Natural Sciences",
        institute: "SMA Negeri 81 Jakarta",
        location: "Jakarta",
        date: "Jul 2019 - May 2022"
    },
    {
        major: "Classical Piano",
        institute: "Sekolah Musik Yayasan Pendidikan Musik",
        location: "Jakarta",
        date: "Apr 2013 - Jun 2023"
    }
];

export default educations;