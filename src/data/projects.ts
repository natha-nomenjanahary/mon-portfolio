export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  imageAlt: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Medipass",
    category: "Projet académique",
    description:
      "Une plateforme de santé numérique qui sécurise, centralise et simplifie la gestion et le suivi des résultats médicaux grâce à l’intelligence artificielle.",
    technologies: ["Vue.js", "NestJS", "Python", "Supabase"],
    image: "/images/projets/medipass.jpeg",
    imageAlt: "Capture d'écran du projet Medipass",
    // demoUrl: "https://medipass.vercel.app/"
  },
  {
    title: "e-Ty&Nday",
    category: "Projet académique",
    description:
      "Une application web permettant la publication d'offres d'emploi et la soumission de candidatures en ligne.",
    technologies: ["Vue.js", "Django", "SQLite"],
    image: "/images/projets/etysynday.jpeg",
    imageAlt: "Capture d'écran du projet e-Ty&Nday",
    // demoUrl: "https://e-ty-nday.vercel.app/"
  },
  {
    title: "PharmaGasy",
    category: "Projet académique",
    description:
      "Une application web locale de gestion de pharmacie intégrant un espace utilisateur interne.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/projets/pharmagasy.png",
    imageAlt: "Capture d'écran du projet PharmaGasy",
    // demoUrl: "https://pharmagasy.vercel.app/"
  },
  {
    title: "PerformSup",
    category: "Projet personnel",
    description:
      "Une application de gestion de performance des agents.",
    technologies: ["Angular", "NestJS", "MySQL"],
    image: "/images/projets/performsup.png",
    imageAlt: "Capture d'écran du projet PerformSup",
    // demoUrl: "https://performsup.vercel.app/"
  }
];