import Typography from "@/components/Typography";

type ProjectItem = {
  title: string;
  link: string;
  image: string;
  tags: string[];
  description: React.ReactNode;
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "FieldMate AI",
    link: "https://www.fieldmate.ai",
    image: "images/fieldmate.webp",
    tags: ["React", "MobX", "Figma"],
    description: (
      <p>
        Desarrollo de una aplicación móvil con{" "}
        <Typography tag="span" variant="important-2">
          React
        </Typography>
        , cuya principal función es el chat con IA alimentada con manuales
        técnicos. Se trabajó con funcionalidades de ubicación y mapas, permisos
        de audio y almacenamiento.
      </p>
    ),
  },
  {
    title: "ION Design System",
    link: "",
    image: "images/ion-ds.webp",
    tags: ["Vue", "LitElement", "Storybook", "Jest", "Tailwind"],
    description: (
      <p>
        Desarrollo de una biblioteca interna de componentes en{" "}
        <Typography tag="span" variant="important-2">
          Vue
        </Typography>{" "}
        y web components siguiendo el diseño ION de RS Group. Se utilizó{" "}
        <Typography tag="span" variant="important-2">
          LitElement
        </Typography>{" "}
        para la creación de los web components y{" "}
        <Typography tag="span" variant="important-2">
          Storybook
        </Typography>{" "}
        para la documentación.
      </p>
    ),
  },
  {
    title: "LexAlign Integración",
    link: "https://lexalign.com",
    image: "images/lexalign.webp",
    tags: ["React", "Ruby on Rails", "Tailwind"],
    description: (
      <p>
        Integración de{" "}
        <Typography tag="span" variant="important-2">
          React
        </Typography>{" "}
        en un proyecto existente de Ruby on Rails. Se propuso el diseño en Figma
        y se trabajó con
        <Typography tag="span" variant="important-2">
          {" "}
          React on Rails
        </Typography>{" "}
        y{" "}
        <Typography tag="span" variant="important-2">
          Tailwind
        </Typography>
        .
      </p>
    ),
  },
  {
    title: "Manejo de Colegios API",
    link: "",
    image: "images/api-sequelize.webp",
    tags: ["Express", "Postgres", "Sequelize", "AWS S3"],
    description: (
      <p>
        Desarrollo de una{" "}
        <Typography tag="span" variant="important-2">
          API
        </Typography>{" "}
        y modelado de una base de datos utilizando{" "}
        <Typography tag="span" variant="important-2">
          Sequelize{" "}
        </Typography>
        para la administración de varios colegios, incluyendo la generación de
        reportes en Excel.
      </p>
    ),
  },
];
