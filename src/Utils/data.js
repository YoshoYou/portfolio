import { agri_plat, carDealer, dashboard, Do, dr_portfolio, Genome, Gpt, Index, JS_Slider, Kasper, LeonOne, medical, ToDoList } from "../assets/images/export";
export const SKILLS = [
    {
        title: "Frontend",
        icon: "./assets/images/frd/ont.png",
        key:  1,
        skills: [
            { skill: "HTML5", percentage: "90%" },
            { skill: "CSS3 {Sass/SCSS}", percentage: "80%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "React.js", percentage: "80%" }
        ],
    },
    {
        title: "Tools",
        icon: "../assets/images/tool.png",
        key:2,
        skills: [
            { skill: "Git & GitHub", percentage: "80%" },
            { skill: "Visual Studio Code", percentage: "75%" },
            { skill: "Webpack", percentage: "60%" },
            { skill: "Responsive Design", percentage: "75%%" }
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
export const WORK_EXPEIENCE = [
    {
        title: "Senior Frontend Developer at Tech Inovators",
        date: "January 2022 - present",
    }

];
const My_Repo_raw = [
    {
        title: "Dashboard",
        link: "https://yoshoyou.github.io/dashboar",
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
        title: "Agricultural  Platform",
        link: "https://yoshoyou.github.io/agricultural-platform/",
        description: "React JS,Vite ,Tailwind , CSS",
        image: `${ agri_plat }`
    },
    {
        title: "Car Showroom",
        link: "https://yoshoyou.github.io/car-dealer/",
        description: "React JS ,HTML , CSS",
        image: `${ carDealer }`
    },
    {
        title: "Dr.sara jouney portfolio",
        link: "https://yoshoyou.github.io/d.sara-jouney-portfolio/",
        description: "React JS ,HTML , CSS",
        image: `${ dr_portfolio }`
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