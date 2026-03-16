import how from "../assets/Pictures/how.png"
import open from "../assets/Pictures/open.png"
import dev from "../assets/Pictures/dev.png"
export const projectsData = [
  {
    id: 1,
    title: "Landing Page Website",
    description: "This project is a Landing Page built with React, JavaScript, and Tailwind CSS. It focuses on delivering a clean, intuitive user interface and a smooth user experience across all devices. The application leverages reusable components and efficient state management to ensure performance, scalability, and maintainability.",
    images: [how, open],
    techStack: ["React", "Javascript", "Tailwind"],
    links: {
      github: "https://github.com/Janieel/Tip-Pool-landing-page",
      liveDemo: "https://tip-pool-page.vercel.app/"
    }
  },
    {
    id: 2,
    title: "Devcrib website",
    description: "Devcrib is a responsive team collaboration website built with Next.js, TypeScript, and Tailwind CSS, emphasizing clean UI, performance, and scalable architecture.",
    images: [dev],
    techStack: ["TypeScript", "Next.js", "Tailwind"],
    links: {
      github: "https://github.com/Janieel/Team-Portfolio",
      liveDemo: "https://devcrib-kappa.vercel.app/"
    }
  }
  // You can add more projects here
];