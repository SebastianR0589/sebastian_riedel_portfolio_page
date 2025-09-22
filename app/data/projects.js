import { SiReact } from "react-icons/si";

export const projects = {
  frontend: [
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
      link: "https://github.com/yourname/tenzies-game",
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
      link: "https://github.com/yourname/tenzies-game",
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
      link: "https://github.com/yourname/tenzies-game",
    },
  ],
  fullstack: [/* ... */],
  backend: [/* ... */],
};
