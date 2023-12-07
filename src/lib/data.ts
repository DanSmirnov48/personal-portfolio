export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const projectsData = [
    {
        title: "Rich Text Editor",
        description: "Rich text editor using TipTap project. Includes OpenAI text completion using versel AI sdk",
        tags: ["TypeScript", "AI", "Next.js", "Tailwind", "wysiwyg"],
        imageUrl: "https://utfs.io/f/86c954dd-775e-4e2d-bc84-8795547797c4-t74zyl.JPG",
        repo: "https://github.com/DanSmirnov48/rich-text-editor",
        live: "https://rich-text-editor-gray.vercel.app",
    },
    {
        title: "Deliciouss Recipes",
        description:'React recipes app allows users to search and save liked recipes, view detailed info. Comment, review & share recipes and share',
        tags: ["React", "JavaScript", "Framer", "RESTful API"],
        imageUrl: "https://utfs.io/f/bdb6abec-b84b-4544-9c9d-5b8c84028e9f-db6am8.JPG",
        repo: "https://github.com/DanSmirnov48/deliciouss-recipes",
        live: "https://deliciouss-recipes.herokuapp.com",
    },
    {
        title: "PriceWise",
        description: "Web scrapping and tracking Amazon products with AI powered reviews analytics",
        tags: ["TypeScript", "Next", "Tailwind", "scraping", "AI"],
        imageUrl: "https://utfs.io/f/60958b2f-4178-44fe-af06-b2eebf34e6aa-20g8er.JPG",
        repo: "https://github.com/DanSmirnov48/PriceWise",
        live: "https://price-wise-v1f4dw51vfs.vercel.app",
    },
    {
        title: "MERN E-Commerce",
        description: "A web application running on Node Backend server with TypeScript and React Vite on the Frontend.",
        tags: ["React", "TypeScript", "Vite", "Tailwind", "MongoDB"],
        imageUrl: "https://utfs.io/f/6c08a741-999c-49a4-b50c-106b49b03f78-1en6c.JPG",
        repo: "https://github.com/DanSmirnov48/MERN_Shop",
        live: null,
    },

] as const;

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vite",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "OOP",
    "RESTful API",
    "Java",
    "C#",
    "ASP .NET",
    "Entity Framework",
    "MS Azure",
    "AWS",
    "Agile",
    "Cloud Infrastructure",
    "Linux",
    "SQL",
] as const;