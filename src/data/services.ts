import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Desarrollo web",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "Construyo sitios web visualmente impactantes y fáciles de usar.",
    description:
      "Especializado en soluciones web a medida, transformo las necesidades de su negocio en experiencias digitales sobresalientes. Mi servicio abarca desde el diseño y desarrollo de sitios corporate de alto impacto hasta robustas plataformas de comercio electrónico. Garantizo una ejecución impecable con las últimas tecnologías, enfocada en la optimización del rendimiento, la adaptabilidad (responsive) y una sólida base SEO para maximizar su visibilidad.",
  },
  {
    id: 2,
    title: "Desarrollo backend",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "Construyo la columna vertebral digital de su éxito: Backends robustos, escalables y seguros.",
    description:
      "Aporto valor a sus aplicaciones digitales mediante la ingeniería de infraestructuras de backend robustas y altamente escalables. Me especializo en el desarrollo de APIs de alto rendimiento, el diseño de estructuras de bases de datos eficientes y la configuración experta de servidores. Mi enfoque garantiza que sus sistemas manejen sin problemas el alto tráfico y la gestión de datos complejos, ofreciendo la seguridad y estabilidad necesarias para el crecimiento a largo plazo. Confíe en una base tecnológica sólida.",
  },
  {
    id: 3,
    title: "Estrategia de producto",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "Establezco la dirección estratégica: Alineando objetivos de negocio, identificando el público objetivo y trazando el plan de acción.",
    description:
      "Colaboro para articular objetivos claros, segmentar el público objetivo y construir un roadmap detallado para el crecimiento. Utilizo mi expertise en ideación e investigación de mercado para validar que su producto resuelva problemas reales de los usuarios y esté sólidamente alineado con la estrategia de negocio. Convierta el potencial en éxito con una planificación estratégica orientada a resultados.",
  },
  {
    id: 4,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "Automatizo y optimizo los procesos de Desarrollo y Operaciones para lograr una entrega de software más rápida y fiable.",
    description:
      "Transformo sus procesos de desarrollo y operaciones para lograr máxima fiabilidad y escalabilidad. Mediante prácticas DevOps efectivas, establezco canales de Integración y Despliegue Continuo que automatizan las pruebas y la liberación de código. Gestión de la infraestructura en la nube y contenedorización garantizan una entrega de software eficiente, permitiendo a sus equipos iterar rápidamente con total confianza.",
  },
 ];

export default services;
