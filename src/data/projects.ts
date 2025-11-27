import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Windows-Error-Diagnostic-with-AI_WEDA",
    title: "WEDA",
    description:
      "Herramienta de diagnóstico de errores de Windows con GUI, que usa la API de OpenAI para analizar logs de eventos y aplicar soluciones automáticas a problemas del sistema.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/LSCF84/Windows-Error-Diagnostic-with-AI_WEDA",
    url: "https://github.com/LSCF84/Windows-Error-Diagnostic-with-AI_WEDA",
    tags: ["Windows", "Python", "Gui", "openAI"],
  },
  {
    id: "Tienda",
    title: "Tienda Virtual",
    description:
      "Estoy en diseño actualmente de una tienda.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["html", "Redux", "Material UI", "Stripe"],
  },
  {
    id: "PDF-Renamer-Security-Suite-PDF-RSS",
    title: "PDF-Renamer-Security-Suite-PDF-RSS",
    description:
      "Pequeña utilidad para automatizar el proceso de renombrar archivos PDF utilizando un número de identificador y protegerlos con contraseña utilizando su DNI (Documento Nacional de Identidad) o contraseñas.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/LSCF84/PDF-Renamer-Security-Suite-PDF-RSS",
    url: "https://github.com/LSCF84/PDF-Renamer-Security-Suite-PDF-RSS",
    tags: ["python", "pandas", "tkinter", "excel automation"],
  },
  {
    id: "PDF-Renamer-Security-PDF-RS",
    title: "PDF-Renamer-Security-PDF-RS",
    description:
      "Renombrar y proteger PDFs con la opcion de dar seguridad a los archivos.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
    tags: ["python", "PDF", "Seguridad", "pypdf2"],
  },
  {
    id: "Check-Software-Minimum-CSM",
    title: "Check-Software-Minimum-CSM",
    description:
      "Utilidad Python con interfaz gráfica (GUI) para optimizar y auditar instalaciones semi-automáticas.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/LSCF84/Check-Software-Minimum-CSM",
    url: "https://github.com/LSCF84/Check-Software-Minimum-CSM",
    tags: ["Python", "Windows", "Tkinter", "Excel", "Automation"],
  },
  {
    id: "Version Renamer GUI (VR-GUI)",
    title: "Version Renamer GUI (VR-GUI)",
    description:
      "Utilidad Python con interfaz gráfica (GUI) que renombra archivos .py aplicando un sistema de versionado automático basado en la fecha de modificación.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/LSCF84/Version-Renamer-GUI_VR-GUI",
    tags: ["python", "Windows", "Automation", "GUI"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Moderno",
    description:
      "Plataforma desarrollada con las últimas tendencias, enfocada en optimización y rendimiento",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/LSCF84/jrdev-lscf.vercel.app",
    url: "https://jrdev-lscf.vercel.app/",
    tags: ["Next.js", "React.js", "TypeScript", "Sass", "Vercel"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Clásico",
    description:
      "Mi primera presentación personal, utilizando una pila de desarrollo web tradicional (HTML/CSS)",
    icon: "/skills/dart.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/LSCF84/portfolio-websteel.vercel.app",
    url: "https://portfolio-websteel.vercel.app/",
    tags: ["HTML", "CSS", "Vercel", "JavaScript"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Main",
    description:
      "Mi plataforma profesional más reciente. Muestra la combinación de 15 años de experiencia IT con mi enfoque actual en desarrollo web y programación moderna.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://portfolio-main-lscf.vercel.app/",
    url: "https://portfolio-main-lscf.vercel.app/",
    tags: ["Next.js", "Sass", "TypeScript", "Vercel"],
  },
    {
    id: "portfolio-website",
    title: "Portfolio Core Digital",
    description:
      "Dashboard centralizado para la gestión de servicios y recursos. Arquitectura modular y escalable.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/LSCF84/core-digital.vercel.app,
    url: "https://lscf-coredigital.vercel.app/",
    tags: ["Next.js", "Sass", "TypeScript", "Vercel"],
  },
  {
    id: "En desarrollo",
    title: "En desarrollo",
    description:
      "En desarrollo",
    icon: "/skills/cpp.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/LSCF84/",
    tags: ["Desarrollo", "Desarrollo", "Desarrollo"],
  },
];
export default projects;
