import ProjectItem from "../components/ProjectItem";
import video from "../assets/videos/One Piece - Zoro - Sekiro_ Shadows Die Twice Mods - Google Chrome 2023-08-31 17-48-39.mp4"

const projects = [
  {
    id: 1,
    name: 'Derleng e-commerce',
    date: 'September 5, 2022',
    video: video,
    description: "Der-Leng is a web application that provides guide self-post tourism service package and booking tour-guide serivce along with the implements of Authentication with OAuth2 like Google and Facebook, also add functionality of message and Cambodia bank payment.",
  },
  {
    id: 1,
    name: 'Derleng e-commerce',
    date: 'September 5, 2022',
    video: video,
    description: "Der-Leng is a web application that provides guide self-post tourism service package and booking tour-guide serivce along with the implements of Authentication with OAuth2 like Google and Facebook, also add functionality of message and Cambodia bank payment.",
  }
]
function Project() {
  return (
    <div className="w-full mt-8 flex flex-col items-center">
      <div className="max-w-2xl my-8 px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Diverse Software Projects!
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Explore my varied projects showcasing expertise in JavaFX, Django,
          React.js, and more.
        </p>
      </div>
      <ui role="list" className="px-4 list-none">
        {
          projects.map((project, index) => {
            return (
              <li>
                <ProjectItem name={project.name} description={project.description} date={project.date} video={project.video} reverse={index%2 == 1 ? true : false} />
                <div className="my-4 lg:my-12 w-full border-t border-zinc-100 dark:border-zinc-700/40"></div>
              </li>
            )
          })
        }
      </ui>
    </div>
  );
}

export default Project;
