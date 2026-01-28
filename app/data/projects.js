import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSpringboot,
  SiMongodb
} from "react-icons/si";

export const projects = {
  frontend: [
    {
      name: "CRUD app sample",
      framework: "React",
      tech: [{ icon: <SiReact size={32} />, color: "#61dafb", name: "React" }],
      images: [
        "/projects/crud/standard.PNG",
        "/projects/crud/add.PNG",
        "/projects/crud/edit.PNG",
      ],
      link: "https://github.com/SebastianR0589/CRUD_app_sample",
      vercel: "https://sebastian-riedel-crud-app-sample.vercel.app/",
    },
    {
      name: "Tenzies Game",
      framework: "React",
      tech: [{ icon: <SiReact size={32} />, color: "#61dafb", name: "React" }],
      images: [
        "/projects/tenzies/default.PNG",
        "/projects/tenzies/mid_game.PNG",
        "/projects/tenzies/won_game.PNG",
      ],
      link: "https://github.com/SebastianR0589/tenzies_game_project",
      vercel: "https://sebastian-riedel-tenzies-game-proje.vercel.app/",
    },
    {
      name: "Hangman Game",
      framework: "React",
      tech: [{ icon: <SiReact size={32} />, color: "#61dafb", name: "React" }],
      images: [
        "/projects/hangman/active_game.PNG",
        "/projects/hangman/lost_game.PNG",
        "/projects/hangman/new_game.PNG",
        "/projects/hangman/won_game.PNG",
      ],
      link: "https://github.com/SebastianR0589/hangman_game_project",
      vercel: "https://sebastian-riedel-hangman-game-proje.vercel.app/",
    },
    {
      name: "Manga Recommendations App",
      framework: "React",
      tech: [{ icon: <SiReact size={32} />, color: "#61dafb", name: "React" }],
      images: [
        "/projects/manga/main_filled_out.PNG",
        "/projects/manga/main_interface.PNG",
        "/projects/manga/recommendation_response.PNG",
      ],
      link: "https://github.com/SebastianR0589/manga_recommendation_project",
      vercel: "https://sebastian-riedel-manga-recommendati.vercel.app/",
    },
  ],
  fullstack: [
     {
      name: "Fullstack React Java Spring Boot Manga Review Sample",
      framework: "React + Springboot",
      tech: [{ icon: <SiReact size={10} />, color: "#61dafb", name: "React" }, { icon: <SiSpringboot size={10} />, color: "#6DB33F", name: "Springboot" }, { icon: <SiMongodb size={10} />, color: "#00ED64", name: "MongoDB" }],
      images: [
        "/projects/fullstack_java_react_manga_review/frontend.png",
        "/projects/fullstack_java_react_manga_review/mongodb.png",
        "/projects/fullstack_java_react_manga_review/backend.png",
      ],
      link: "https://github.com/SebastianR0589/fullstack_react_springboot_manga_review_app",
    },
       {
      name: "Shopping List",
      framework: "React + Express.js",
      tech: [{ icon: <SiReact size={10} />, color: "#61dafb", name: "React" }, {icon: <SiExpress size={10} />, color: "#f1f1f1ff", name: "Express.js" }, { icon: <SiMongodb size={10} />, color: "#00ED64", name: "MongoDB" }],
      images: [
        "/projects/fullstack_react_express_shopping_list/empty.PNG",
        "/projects/fullstack_react_express_shopping_list/filled.PNG",
        "/projects/fullstack_react_express_shopping_list/structure.PNG",
      ],
      link: "https://github.com/SebastianR0589/fullstack_react_express_shopping_list",
    },
    {
      name: "Portfolio Page",
      framework: "Next.js",
      tech: [
        {
          icon: <SiNextdotjs size={32} />,
          color: "#f1f1f1ff",
          name: "Next.js",
        },
      ],
      images: [
        "/projects/portfolio/hero_section.PNG",
        "/projects/portfolio/skills_section.PNG",
        "/projects/portfolio/projects_section.PNG",
      ],
      link: "https://github.com/SebastianR0589/sebastian_riedel_portfolio_page",
      vercel: "https://sebastian-riedel-portfolio.vercel.app/",
    },
  ],
  backend: [
    {
      name: "Java Springboot API Sample Runs",
      framework: "Java Springboot",
      tech: [
        {
          icon: <SiSpringboot size={32} />,
          color: "#6DB33F",
          name: "Springboot",
        },
      ],
      images: [
        "/projects/java_rest_api_sample/files.PNG",
        "/projects/java_rest_api_sample/controller.PNG",
        "/projects/java_rest_api_sample/repository.PNG",
      ],
      link: "https://github.com/SebastianR0589/Java-rest-api-demo",
    },
    {
      name: "Node.js REST API Sample Travel Locations",
      framework: "Node.js",
      tech: [
        { icon: <SiNodedotjs size={32} />, color: "#339933", name: "Node.js" },
      ],
      images: [
        "/projects/node_rest_api_sample/data.PNG",
        "/projects/node_rest_api_sample/utils.PNG",
        "/projects/node_rest_api_sample/server.PNG",
      ],
      link: "https://github.com/SebastianR0589/REST_API_sample_travel_locations",
    },
    {
      name: "Paranormal Sightings app",
      framework: "Node.js",
      tech: [
        { icon: <SiNodedotjs size={32} />, color: "#339933", name: "Node.js" },
      ],
      images: [
        "/projects/paranormal_sightings/home.PNG",
        "/projects/paranormal_sightings/read.PNG",
        "/projects/paranormal_sightings/upload.PNG",
      ],
      link: "https://github.com/SebastianR0589/Paranormal_Sightings_App",
    },
    {
      name: "Express.js API Sample startups",
      framework: "Express.js",
      tech: [
        {
          icon: <SiExpress size={32} />,
          color: "#f1f1f1ff",
          name: "Express.js",
        },
      ],
      images: [
        "/projects/express_api_sample/server.PNG",
        "/projects/express_api_sample/controller.PNG",
        "/projects/express_api_sample/routes.PNG",
      ],
      link: "https://github.com/SebastianR0589/Express_API_Sample",
    },
    {
      name: "Express.js Vinyl Store",
      framework: "Express.js",
      tech: [
        {
          icon: <SiExpress size={32} />,
          color: "#f1f1f1ff",
          name: "Express.js",
        },
      ],
      images: [
        "/projects/vinyl_store/folders.PNG",
        "/projects/vinyl_store/controller.PNG",
        "/projects/vinyl_store/routes.PNG",
      ],
      link: "https://github.com/SebastianR0589/Vinyl_Store",
    },
    {
      name: "SQL Sample Collection",
      framework: "SQL",
      tech: [
        {
          icon: <SiPostgresql size={32} />,
          color: "#336791",
          name: "PostgreSQL",
        },
      ],
      images: [
        "/projects/sql_sample/base.PNG",
        "/projects/sql_sample/data.PNG",
        "/projects/sql_sample/queries.PNG",
      ],
      link: "https://github.com/SebastianR0589/SQL-example",
    },
  ],
};
