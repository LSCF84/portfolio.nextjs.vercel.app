import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  // {
  //   name: "Home",
  //   link: "/#hero",
  //   icon: faHome,
  // },
  {
    name: "Acerca de",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Servicios",
    link: "/#services",
    icon: faBriefcase,
  },
  {
    name: "Experiencia",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "Aptitudes",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "Proyectos Recientes",
    link: "/#projects",
    icon: faLaptopCode,
  },
  {
    name: "Contáctanos",
    link: "/#contact",
    icon: faEnvelope,
  },
];
