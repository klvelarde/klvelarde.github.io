"use client"
import { useEffect, useState } from "react";
import Navtab, { ItemProps } from "@/components/Navtab";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Tag from "@/components/Tag";

const ExperienceBox = ({ title, company, year, children }: { title: string, company?: string, year: string, children: React.ReactNode }) => (
  <div className="relative flex flex-col md:flex-row justify-between gap-[20px] py-2">
    <div className="w-2 h-2 rounded-full bg-retama absolute -left-[20px] top-[18px]"></div>
    <div className="grow">
      <Typography tag="h4" customClass="text-retama">{title}</Typography>
      {company && <span className="text-xs font-semibold text-white">{company}<br/></span>}
      <span className="text-sm text-white/80">{year}</span>
    </div>
    <p className="max-w-[440px]">{children}</p>
  </div>
)

export default function Home() {
  const TABS: ItemProps[] = [
    {id: "about", title: "Sobre mi"},
    {id: "experience", title: "Experiencia"},
    {id: "projects", title: "Proyectos"},
    {id: "contact", title: "Contacto", href: "mailto:klvelarde.dev@gmail.com"},
  ]
  const [highlightMenu, setHighlightMenu] = useState(false);
  const [tabActive, setTabActive] = useState("");

  const PROJECTS = [
    {
      title: "FieldMate AI",
      link: "https://www.fieldmate.ai",
      image: "images/fieldmate.webp",
      tags: ['React', 'MobX', 'Figma'],
      description: <p>
        Desarrollo de una aplicación móvil con <Typography tag="span" variant="important-2">React</Typography>, cuya principal función es el chat con IA alimentada con manuales técnicos. 
        Se trabajó con funcionalidades de ubicación y mapas, permisos de audio y almacenamiento.
      </p>
    },
    {
      title: "ION Design System",
      link: "",
      image: "images/ion-ds.webp",
      tags: ['Vue','LitElement','Storybook','Jest','Tailwind'],
      description: <p>
        Desarrollo de una biblioteca interna de componentes en <Typography tag="span" variant="important-2">Vue</Typography> y web components siguiendo el diseño ION de RS Group. 
        Se utilizó <Typography tag="span" variant="important-2">LitElement</Typography> para la creación de los web components y <Typography tag="span" variant="important-2">Storybook</Typography> para la documentación.
      </p>
    },
    {
      title: "LexAlign Integración",
      link: "https://lexalign.com",
      image: "images/lexalign.webp",
      tags: ['React','Ruby on Rails', 'Tailwind'],
      description: <p>
        Integración de <Typography tag="span" variant="important-2">React</Typography> en un proyecto existente de Ruby on Rails. Se propuso el diseño en Figma y se trabajó con 
        <Typography tag="span" variant="important-2"> React on Rails</Typography> y <Typography tag="span" variant="important-2">Tailwind</Typography>.
      </p>
    },
    {
      title: "Manejo de Colegios API",
      link: "",
      image: "images/api-sequelize.webp",
      tags: ['Express','Postgres','Sequelize','AWS S3'],
      description: <p>
        Desarrollo de una <Typography tag="span" variant="important-2">API</Typography> y modelado de una base de datos utilizando <Typography tag="span" variant="important-2">Sequelize </Typography>
        para la administración de varios colegios, incluyendo la generación de reportes en Excel.
      </p>
    },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      if (currentScrollY >= 115) setHighlightMenu(true);
      else setHighlightMenu(false);

      const sections = document.querySelectorAll("section");
      let lastSectionId = null
      sections.forEach(section => {
          const id = section.getAttribute('id');
          const { top, bottom } = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (scrollingDown) {
            if (top <= 60 && bottom >= 0) {
              lastSectionId = id;
            }
          } else {
            if (top >= -60 && top <= windowHeight * 0.2) {
              lastSectionId = id;
            }
          }
      });

      if (lastSectionId && lastSectionId != null && lastSectionId !== tabActive) setTabActive(lastSectionId);
    };
    window.addEventListener("scroll", handleScroll);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIconSrc('/cat-front.webp');
      } else {
        setIconSrc('/cat-back.webp');
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])

  const [iconSrc, setIconSrc] = useState('/cat-front.webp');

  return (
    <main className="m-[20px]">
      <link rel="icon" href={iconSrc} sizes="any" />
      <header className="fixed right-0 w-full z-10 flex justify-center">
        <Navtab items={TABS} tabActive={tabActive} setTabActive={setTabActive} customClass={`${highlightMenu ? "bg-black/70" : "bg-transparent"}`}/>
      </header>
      <main className="max-w-[790px] my-0 mx-auto">
        <section id="about" className="my-0 mx-auto pt-[100px] md:pt-[140px] pb-[70px] flex flex-col items-center justify-center md:justify-between max-w-[700px]">
          <h3 className="text-5xl font-slackside text-retama text-center mb-0">Kelly Velarde</h3>
          <div className="font-mono	font-semibold bg-camelia text-sm text-white w-full text-center">software developer</div>
          <p className="my-4 text-center md:text-left">
            ¡Hola! Soy desarrolladora de software con más de 4 años de experiencia. Me considero una persona con iniciativa propia, siempre en busca de nuevos 
            aprendizajes y de retroalimentaciones constantes. Soy positiva, responsable, capaz de trabajar en equipo y compartir mis conocimientos.
          </p>
          <div className="md:self-start flex flex-row items-center justify-center gap-[10px] flex-wrap">
            <Button tag="a" href="https://www.linkedin.com/in/kellyvelarde/">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.8595C0 0.38475 0.3945 0 0.88125 0H11.1187C11.6055 0 12 0.38475 12 0.8595V11.1405C12 11.6152 11.6055 12 11.1187 12H0.88125C0.3945 12 0 11.6152 0 11.1405V0.8595ZM3.70725 10.0455V4.62675H1.9065V10.0455H3.70725ZM2.80725 3.8865C3.435 3.8865 3.82575 3.471 3.82575 2.9505C3.8145 2.41875 3.43575 2.0145 2.81925 2.0145C2.20275 2.0145 1.8 2.4195 1.8 2.9505C1.8 3.471 2.19075 3.8865 2.79525 3.8865H2.80725ZM6.48825 10.0455V7.01925C6.48825 6.85725 6.50025 6.69525 6.54825 6.57975C6.678 6.2565 6.97425 5.92125 7.47225 5.92125C8.124 5.92125 8.38425 6.41775 8.38425 7.14675V10.0455H10.185V6.9375C10.185 5.2725 9.297 4.4985 8.112 4.4985C7.1565 4.4985 6.72825 5.0235 6.48825 5.39325V5.412H6.47625C6.48023 5.40574 6.48423 5.39949 6.48825 5.39325V4.62675H4.68825C4.71075 5.13525 4.68825 10.0455 4.68825 10.0455H6.48825Z" fill="currentColor"/></svg>
              LinkedIn
            </Button>
            <Button tag="a" href="https://github.com/klvelarde">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C2.685 0 0 2.685 0 6C0 8.655 1.7175 10.8975 4.1025 11.6925C4.4025 11.745 4.515 11.565 4.515 11.4075C4.515 11.265 4.5075 10.7925 4.5075 10.29C3 10.5675 2.61 9.9225 2.49 9.585C2.4225 9.4125 2.13 8.88 1.875 8.7375C1.665 8.625 1.365 8.3475 1.8675 8.34C2.34 8.3325 2.6775 8.775 2.79 8.955C3.33 9.8625 4.1925 9.6075 4.5375 9.45C4.59 9.06 4.7475 8.7975 4.92 8.6475C3.585 8.4975 2.19 7.98 2.19 5.685C2.19 5.0325 2.4225 4.4925 2.805 4.0725C2.745 3.9225 2.535 3.3075 2.865 2.4825C2.865 2.4825 3.3675 2.325 4.515 3.0975C4.995 2.9625 5.505 2.895 6.015 2.895C6.525 2.895 7.035 2.9625 7.515 3.0975C8.6625 2.3175 9.165 2.4825 9.165 2.4825C9.495 3.3075 9.285 3.9225 9.225 4.0725C9.6075 4.4925 9.84 5.025 9.84 5.685C9.84 7.9875 8.4375 8.4975 7.1025 8.6475C7.32 8.835 7.5075 9.195 7.5075 9.7575C7.5075 10.56 7.5 11.205 7.5 11.4075C7.5 11.565 7.6125 11.7525 7.9125 11.6925C9.10367 11.2905 10.1388 10.525 10.872 9.50382C11.6053 8.48263 11.9998 7.25718 12 6C12 2.685 9.315 0 6 0Z" fill="currentColor"/></svg>
              GitHub
            </Button>
            <Button tag="a" href="mailto:klvelarde.dev@gmail.com">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 3H3.75C3.06062 3 2.5 3.56062 2.5 4.25V7.375H3.75V5.5L7.75 8.5C7.85823 8.58104 7.98979 8.62484 8.125 8.62484C8.26021 8.62484 8.39177 8.58104 8.5 8.5L12.5 5.5V11.125H7.5V12.375H12.5C13.1894 12.375 13.75 11.8144 13.75 11.125V4.25C13.75 3.56062 13.1894 3 12.5 3ZM8.125 7.21875L4.16625 4.25H12.0837L8.125 7.21875Z" fill="currentColor"/>
                <path d="M1.25 8H5.625V9.25H1.25V8ZM2.5 9.875H6.25V11.125H2.5V9.875ZM4.375 11.75H6.875V13H4.375V11.75Z" fill="currentColor"/>
              </svg>
              Contáctame
            </Button>
          </div>
        </section>
        <section id="experience" className="py-[70px]">
          <Typography tag="h3" customClass="flex flex-row items-center gap-[5px]">
            <svg className="size-6" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 4.5V3H7.5V4.5H10.5ZM3 6V14.25H15V6H3ZM15 4.5C15.8325 4.5 16.5 5.1675 16.5 6V14.25C16.5 15.0825 15.8325 15.75 15 15.75H3C2.1675 15.75 1.5 15.0825 1.5 14.25L1.5075 6C1.5075 5.1675 2.1675 4.5 3 4.5H6V3C6 2.1675 6.6675 1.5 7.5 1.5H10.5C11.3325 1.5 12 2.1675 12 3V4.5H15Z" fill="#F4F3EE"/></svg>
            Experiencia laboral
          </Typography>
          <div className="flex flex-col gap-6 border-l border-l-rose/50 my-8 ml-4 pl-4">
            <ExperienceBox title="Freelance" year="Actualmente">
              ¡Hago muchas cosas! Me especializo más en frontend como la creación de páginas y aplicaciones utilizando <Typography tag="span" variant="important">Vue/Nuxt</Typography> y <Typography tag="span" variant="important">React/Next</Typography> y 
              mantenimiento de ecommerces, también trabajo con backend como creación de <Typography tag="span" variant="important">APIs</Typography> y desarrollo de proyectos con <Typography tag="span" variant="important">Odoo</Typography>, entre otros.
            </ExperienceBox>
            <ExperienceBox title="Programadora senior" company="CONFLUX SRL" year="2022">
              Responsable de proyectos de desarrollo en <Typography tag="span" variant="important">Odoo</Typography>, incluyendo el mantenimiento de código, refactorización y creación de scripts de automatización utilizando <Typography tag="span" variant="important">NodeJS</Typography> y <Typography tag="span" variant="important">MongoDB</Typography>.
            </ExperienceBox>
            <ExperienceBox title="Programadora junior" company="HOLA CALIDAD - Startup" year="2020">
              Desarrollo del proyecto presentado como startup "Hola Calidad". Se desarrollaron aplicaciones en <Typography tag="span" variant="important">Odoo</Typography> integradas para cumplir con el estándar ISO 9001. El proyecto obtuvo la aceptación de SGS e INACAL (Instituto Nacional de Calidad).
            </ExperienceBox>
          </div>
        </section>
        <section id="projects" className="py-[70px]">
          <Typography tag="h3" customClass="flex flex-row items-center gap-[5px]">
            <svg className="size-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
            Proyectos
          </Typography>
          <div className="grid gap-y-6 my-[32px]">
            { PROJECTS.map((project, index) => (
              <a
                key={index}
                className={`flex flex-col md:flex-row justify-between gap-4 md:gap-8 p-4 bg-white/20 rounded-xl transition-colors duration-300 ${index%2 != 0 && "md:flex-row-reverse"} hover:bg-white/25`}
                {...(project.link == "" ? {} : {
                  'href': project.link,
                  'target': "new",
                })}
              >
                <div className="flex flex-col grow">
                  <Typography tag="h4" customClass="text-camelia mb-2">{project.title}</Typography>
                  <div className="grow flex flex-col justify-between gap-2 md:gap-4 text-sm text-white">
                    {project.description}
                    <div className="flex flex-wrap gap-x-1 gap-y-2 md:gap-2">
                      {project.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
                <img src={project.image} className="h-[200px] w-auto rounded-xl" alt={project.title}/>
              </a>
            ))}
          </div>
        </section>
      </main>
    </main>
  );
}
