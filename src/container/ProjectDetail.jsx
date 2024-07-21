import Auction_1 from "../assets/images/projects/auction/127.0.0.1_8000_.png";
import Auction_2 from "../assets/images/projects/auction/127.0.0.1_8000_bidded_listing.png";
import Auction_3 from "../assets/images/projects/auction/127.0.0.1_8000_categories_4.png";
import Auction_4 from "../assets/images/projects/auction/127.0.0.1_8000_listing_16.png";
import Auction_5 from "../assets/images/projects/auction/127.0.0.1_8000_new.png";
import Auction_6 from "../assets/images/projects/auction/127.0.0.1_8000_register.png";
import PythonIcon from "../assets/images/python_icon.png";
import DjangoIcon from "../assets/images/Django_icon.png";
import { useParams } from "react-router-dom";
import NotFound from "./404";

const project_data = [
  {
    id: 1,
    name: "DMS",
    date: "September 5, 2022",
    video: "https://www.youtube.com/embed/9WTKKrbA54k",
    images: [Auction_1, Auction_2, Auction_3, Auction_4, Auction_5, Auction_6],
    languages: [PythonIcon, DjangoIcon],
    description:
      "A user-friendly online bidding auction platform developed using Django, a high-level Python web framework. This platform is designed to facilitate the seamless auctioning of items, allowing users to list items for auction, and place bids.",
  },
  {
    id: 2,
    name: "Derleng",
    date: "September 5, 2022",
    video: "https://www.youtube.com/embed/9WTKKrbA54k",
    images: [Auction_1, Auction_2, Auction_3, Auction_4, Auction_5, Auction_6],
    languages: [PythonIcon, DjangoIcon],
    description:
      "A user-friendly online bidding auction platform developed using Django, a high-level Python web framework. This platform is designed to facilitate the seamless auctioning of items, allowing users to list items for auction, and place bids.",
  },
  {
    id: 3,
    name: "CS50w Bidding Auction",
    date: "September 5, 2022",
    video: "https://www.youtube.com/embed/9WTKKrbA54k",
    images: [Auction_1, Auction_2, Auction_3, Auction_4, Auction_5, Auction_6],
    languages: [PythonIcon, DjangoIcon],
    description:
      "A user-friendly online bidding auction platform developed using Django, a high-level Python web framework. This platform is designed to facilitate the seamless auctioning of items, allowing users to list items for auction, and place bids.",
  },
  {
    id: 4,
    name: "CS50w Mail",
    date: "September 5, 2022",
    video: "https://www.youtube.com/embed/9WTKKrbA54k",
    images: [Auction_1, Auction_2, Auction_3, Auction_4, Auction_5, Auction_6],
    languages: [PythonIcon, DjangoIcon],
    description:
      "A user-friendly online bidding auction platform developed using Django, a high-level Python web framework. This platform is designed to facilitate the seamless auctioning of items, allowing users to list items for auction, and place bids.",
  },
  {
    id: 5,
    name: "CS50w wiki",
    date: "September 5, 2022",
    video: "https://www.youtube.com/embed/9WTKKrbA54k",
    images: [Auction_1, Auction_2, Auction_3, Auction_4, Auction_5, Auction_6],
    languages: [PythonIcon, DjangoIcon],
    description:
      "A user-friendly online bidding auction platform developed using Django, a high-level Python web framework. This platform is designed to facilitate the seamless auctioning of items, allowing users to list items for auction, and place bids.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const data = project_data.find((project) => project.id === Number(id)) || null;
  const { name, description, date, images, languages, video } = data ?? {};
  return (
    <>
      { !data ? (
        <NotFound />
      ) : (
        <div className="p-4 md:px-8 lg:px-12 flex flex-col items-center gap-4">
          <article className="group relative flex flex-col items-start mt-6 max-w-[1020px]">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{name}</span>
            </h2>
            <time
              className="relative z-10 order-first mb-3 flex items-center text-md text-zinc-400 dark:text-zinc-500 pl-3.5"
              datetime="2022-09-05"
            >
              <span
                className="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
              </span>
              {date}
            </time>
            <p className="relative z-10 mt-2 text-base text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
            <div
              aria-hidden="true"
              className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
            >
              📦Language:&nbsp;
              <ul className="list-none flex gap-2">
                {languages.map((image) => {
                  return (
                    <li>
                      <img src={image} className="w-5" alt="" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
          <ul className="list-none flex flex-col gap-y-1 md:gap-y-2 mt-6 max-w-[1020px]">
            {video && (
              <li className="w-full relative overflow-hidden">
                <div class="absolute top-2 -right-8 w-[120px] transform rotate-45 bg-teal-500 dark:bg-black text-white text-center px-2 py-1">
                  demo
                </div>
                <iframe
                  className="w-full h-[200px] md:h-[400px] lg:h-[524px] xl:h-[580px]"
                  src={`${video}?autoplay=1&mute=1&loop=1&controls=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </li>
            )}
            {images.map((image) => {
              return (
                <li>
                  <img src={image} className="w-full" alt="Project image" />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
