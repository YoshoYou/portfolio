import { agri_plat, carDealer, dashboard, Do, dr_portfolio, Genome, Gpt, Index, JS_Slider, Kasper, LeonOne, medical, prokoders, ToDoList } from "../assets/images/export";
export const SKILLS = [
    {
        title: "Frontend",
        icon: "./assets/images/frd/ont.png",
        key:  1,
        skills: [
            { skill: "React.js", percentage: "90%" },
            { skill: "tailwind", percentage: "85%" },
            { skill: "JavaScript", percentage: "80%" },
            { skill: "typeScript", percentage: "80%" }
        ],
    },
    {
        title: "Tools",
        icon: "../assets/images/tool.png",
        key:2,
        skills: [
            { skill: "Git & GitHub", percentage: "80%" },
            { skill: "Visual Studio Code", percentage: "80%" },
            { skill: "Webpack", percentage: "60%" },
            { skill: "Responsive Design", percentage: "95%" }
        ],
    },
    {
        title: "Soft Skills",
        icon: './image/softSkills.png',
        key:3,
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention to Details", percentage: "75%" },
            { skill: "English Skills", percentage: "90%" }
        ],
    },
];
export const Nav_Links = ["Home","Skills","Experiences","My-Repo","Contact Me"]
export const WORK_EXPEIENCE = [
    {
        title: "Frontend Training  in ProKoders company",
        date: "December  2025 ",
        info:" online training program focused on advanced frontend development.",   
        responsabilites: [
            "Learned tailwind, TypeScript, Redux and React.js to build responsive web applications.",
            "Collaborated on real-world projects, enhancing teamwork and communication skills.",
            "Gained practical experience through hands-on coding exercises and assignments."
        ]
    },
    {
        title: "Working for Sama ALMajd company",
        date: "December  2025 ",
        info:" online school for helping student to get access for tutorial ",   
        responsabilites: [
            "I help students to get enrollled in this courses and guid them to use our app.",
            "Reciving feedback from students and their parents about our courses.",
            "We give our students a free tablet  encouraging them to make a progress."
        ]
    },

];
const My_Repo_raw = [
    {
        title: "ProKoders App",
        link: "https://yoshoyou.github.io/hero-section/",
        description: "React JS,Vite ,TypeScript, Tailwind",
        image : `${ prokoders }`
    },
        {
        title: "Agricultural  Platform",
        link: "https://yoshoyou.github.io/agricultural-platform/",
        description: "React JS,Vite ,Tailwind , CSS",
        image: `${ agri_plat }`
    },
        {
        title: "Dr.sara jouney portfolio",
        link: "https://yoshoyou.github.io/d.sara-jouney-portfolio/",
        description: "React JS ,HTML , CSS",
        image: `${ dr_portfolio }`
    },
    {
        title: "Dashboard",
        link: "https://yoshoyou.github.io/dashboard/",
        description: "React JS,Vite , Tailwind , CSS",
        image : `${ dashboard }`
    },
    {
        title: "To-Do List",
        link: "https://yoshoyou.github.io/to-do-list/",
        description: "React JS,Vite , Tailwind , CSS",
        image : `${ ToDoList }`
    },

    {
        title: "Car Showroom",
        link: "https://yoshoyou.github.io/car-dealer/",
        description: "React JS ,HTML , CSS",
        image: `${ carDealer }`
    },

    {
        title: "Chat GPT App",
        link: "https://yoshoyou.github.io/chat-gpt-app/",
        description: "React JS ,HTML , CSS",
        image: `${ Gpt }`
    },
    {
        title: "Medical School",
        link: "https://yoshoyou.github.io/medical-website/",
        description: "JavaScript , HTML , CSS",
        image: `${ medical }`
    },
    {
        title: "Genome",
        link: "https://yoshoyou.github.io/Genome/",
        description: "JavaScript ,HTML , CSS",
        image: `${ Genome }`
    },
    {
        title: "Template One",
        link: "https://yoshoyou.github.io/Template-one/",
        description: "HTML , CSS",
        image: `${ LeonOne }`
    },
    {
        title: "Template Two",
        link: "https://yoshoyou.github.io/Template-two/",
        description: "HTML , CSS",
        image: `${ Kasper }`
    },
    {
        title: "Template three",
        link: "https://yoshoyou.github.io/Template-three/",
        description:"HTML , CSS",
        image: `${ Index }`
    },
    {
        title: "Picture Gallery-1",
        link: "https://yoshoyou.github.io/pictures-gallery/",
        description: " JavaScript , HTML , CSS",
        image: `${ Do }`
    },
    {
        title: "Picture Gallery-2",
        link: "https://yoshoyou.github.io/pictures-gallery-2/",
        description: " JavaScript , HTML , CSS",
        image: `${ JS_Slider }`
    }
];

export const My_Repo = My_Repo_raw.map((item, idx) => ({ ...item, key: idx }));