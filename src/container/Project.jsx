import ProjectItem from "../components/ProjectItem";
import video from "../assets/videos/biddingAuction.mp4"
import videoDerleng from "../assets/videos/derleng.mp4"
import videoDMS from "../assets/videos/DMS.mp4"

const projects = [
  {
    id: 1,
    name: 'Document management system - DMS',
    date: 'March 01, 2024',
    video: videoDMS,
    description: "The Document Management System (DMS) is a web application designed to streamline the management of government correspondence. Given the complexity of letter sending and approval processes between organizations, DMS offers a fast and reliable solution for reviewing and approving letters efficiently.",
  },
  {
    id: 2,
    name: 'ដើរលេង - Derleng ecommerce',
    date: 'December 23, 2023',
    video: videoDerleng,
    description: "Der-Leng is a web application that provides guide self-post tourism service package and booking tour-guide serivce along with the implements of Authentication with OAuth2 like Google, also add functionality of telegram bot for real time notification and Stripe payment.",
  },
  {
    id: 3,
    name: ' E-commerce - Biding',
    date: 'July 05, 2023',
    video: video,
    description: "Bidding is a project that i have done after finnished my first step with Django on program online course of Harvard University.",
  },
]
function Project() {
  return (
    <div className="w-full mt-8 flex flex-col items-center">
      <div className="max-w-2xl my-8 px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Software Projects!
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Explore my projects showcasing expertise in Django, Nest Js
          React.js, and more.
        </p>
      </div>
      <ui role="list" className="px-4 lg:px-20 list-none">
        {
          projects.map((project, index) => {
            return (
              <li>
                <ProjectItem id={project.id} name={project.name} description={project.description} date={project.date} video={project.video} reverse={index%2 == 1 ? true : false} />
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
