import { SiReact, SiNextdotjs, SiNodedotjs } from "react-icons/si";

export const projects = {
  frontend: [
        {
      name: "CRUD app sample",
      framework: "React",
      icon: <SiReact size={32} />,
      color: "#61dafb",
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
      icon: <SiReact size={32} />,
      color: "#61dafb",
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
      icon: <SiReact size={32} />,
      color: "#61dafb",
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
      icon: <SiReact size={32} />,
      color: "#61dafb",
      images: [
        "/projects/manga/main_filled_out.PNG",
        "/projects/manga/main_interface.PNG",
        "/projects/manga/recommendation_response.PNG",
      ],
      link: "https://github.com/SebastianR0589/manga_recommendation_project",
      vercel: "https://sebastian-riedel-manga-recommendati.vercel.app/",
    },
  ],
  fullstack: [  {
      name: "Portfolio Page",
      framework: "Next.js",
      icon: <SiNextdotjs size={32} />,
      color: "#f1f1f1ff",
      images: [
        "/projects/portfolio/hero_section.PNG",
        "/projects/portfolio/skills_section.PNG",
        "/projects/portfolio/projects_section.PNG",
      ],
      link: "https://github.com/SebastianR0589/sebastian_riedel_portfolio_page",
      vercel: "https://sebastian-riedel-portfolio.vercel.app/",
    },
  ],
  backend: [{
      name: "REST API Sample Travel Locations",
      framework: "Node.js",
      icon: <SiNodedotjs size={32}/>,
      color: "#339933",
      images: [
        "/projects/rest_api_sample/data.PNG",
        "/projects/rest_api_sample/utils.PNG",
        "/projects/rest_api_sample/server.PNG",
      ],
      link: "https://github.com/SebastianR0589/REST_API_sample_travel_locations",
    },
  {
      name: "Paranormal Sightings app",
      framework: "Node.js",
      icon: <SiNodedotjs size={32}/>,
      color: "#339933",
      images: [
        "/projects/paranormal_sightings/home.PNG",
        "/projects/paranormal_sightings/read.PNG",
        "/projects/paranormal_sightings/upload.PNG",
      ],
      link: "https://github.com/SebastianR0589/Paranormal_Sightings_App",
    },],
};
