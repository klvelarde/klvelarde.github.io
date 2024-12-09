import React from "react";
import Typography from "@/components/Typography";

type ExperienceItem = {
  title: string;
  year: string;
  company?: string;
  description: React.ReactNode;
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Freelance",
    year: "Actualmente",
    description: (
      <React.Fragment>
        ¡Hago muchas cosas! Me especializo más en frontend como la creación de
        páginas y aplicaciones utilizando{" "}
        <Typography tag="span" variant="important">
          Vue/Nuxt
        </Typography>{" "}
        y{" "}
        <Typography tag="span" variant="important">
          React/Next
        </Typography>{" "}
        y mantenimiento de ecommerces, también trabajo con backend como creación
        de{" "}
        <Typography tag="span" variant="important">
          APIs
        </Typography>{" "}
        y desarrollo de proyectos con{" "}
        <Typography tag="span" variant="important">
          Odoo
        </Typography>
        , entre otros.
      </React.Fragment>
    ),
  },
  {
    title: "Programadora senior",
    year: "2022",
    company: "CONFLUX SRL",
    description: (
      <React.Fragment>
        Responsable de proyectos de desarrollo en{" "}
        <Typography tag="span" variant="important">
          Odoo
        </Typography>
        , incluyendo el mantenimiento de código, refactorización y creación de
        scripts de automatización utilizando{" "}
        <Typography tag="span" variant="important">
          NodeJS
        </Typography>{" "}
        y{" "}
        <Typography tag="span" variant="important">
          MongoDB
        </Typography>
        .
      </React.Fragment>
    ),
  },
  {
    title: "Programadora junior",
    year: "2020",
    company: "HOLA CALIDAD - Startup",
    description: (
      <React.Fragment>
        Desarrollo del proyecto presentado como startup "Hola Calidad". Se
        desarrollaron aplicaciones en{" "}
        <Typography tag="span" variant="important">
          Odoo
        </Typography>{" "}
        integradas para cumplir con el estándar ISO 9001. El proyecto obtuvo la
        aceptación de SGS e INACAL (Instituto Nacional de Calidad).
      </React.Fragment>
    ),
  },
];
