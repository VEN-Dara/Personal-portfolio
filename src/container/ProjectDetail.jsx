import Auction_1 from "../assets/images/projects/auction/127.0.0.1_8000_.png";
import Auction_2 from "../assets/images/projects/auction/127.0.0.1_8000_bidded_listing.png";
import Auction_3 from "../assets/images/projects/auction/127.0.0.1_8000_categories_4.png";
import Auction_4 from "../assets/images/projects/auction/127.0.0.1_8000_listing_16.png";
import Auction_5 from "../assets/images/projects/auction/127.0.0.1_8000_new.png";
import Auction_6 from "../assets/images/projects/auction/127.0.0.1_8000_register.png";

// ==============================================================>> DMS
import DMS from "../assets/images/projects/dms/cdc-dms.uat.camcyber.com_.png";
import DMS_1 from "../assets/images/projects/dms/cdc-dms.uat.camcyber.com_ (1).png";
import DMS_2 from "../assets/images/projects/dms/cdc-dms.uat.camcyber.com_ (2).png";
import DMS_3 from "../assets/images/projects/dms/cdc-dms.uat.camcyber.com_ (3).png";
import DMS_4 from "../assets/images/projects/dms/cdc-dms.uat.camcyber.com_ (4).png";
import DMS_5 from "../assets/images/projects/dms/cdc-dms.uat.camcyber.com_ (5).png";
import DMS_6 from "../assets/images/projects/dms/cdc-dms.uat.camcyber.com_ (6).png";
import DMS_7 from "../assets/images/projects/dms/cdc-dms.uat.camcyber.com_ (7).png";

// ==============================================================>> Derleng
import Derleng_1 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (1).png";
import Derleng_2 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (2).png";
import Derleng_3 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (3).png";
import Derleng_4 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (4).png";
import Derleng_5 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (5).png";
import Derleng_6 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (6).png";
import Derleng_7 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (7).png";
import Derleng_8 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (8).png";
import Derleng_9 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (9).png";
import Derleng_11 from "../assets/images/projects/derleng/derleng-web.onrender.com_ (10).png";
import Derleng_10 from "../assets/images/projects/derleng/derleng-web.onrender.com_forgotPassword.png";

import PythonIcon from "../assets/images/python_icon.png";
import DjangoIcon from "../assets/images/Django_icon.png";
import ReactIcon from "../assets/images/react.png";
import NestIcon from "../assets/images/nestjs_logo.png";


import { Link, useParams } from "react-router-dom";
import NotFound from "./404";

const project_data = [
  {
    id: 1,
    name: 'ប្រព័ន្ធគ្រប់គ្រងឯកសារ - DMS',
    date: 'March 01, 2024',
    images: [DMS, DMS_5, DMS_6, DMS_3, DMS_4, DMS_7, DMS_1, DMS_2,],
    languages: [NestIcon],
    description: "The Document Management System (DMS) is a web application designed to streamline the management of government correspondence. Given the complexity of letter sending and approval processes between organizations, DMS offers a fast and reliable solution for reviewing and approving letters efficiently.",
    link: "https://cdc-dms.uat.camcyber.com/"
  },
  {
    id: 2,
    name: 'ដើរលេង - Derleng ecommerce',
    date: 'December 23, 2023',
    images: [Derleng_1, Derleng_2, Derleng_3, Derleng_11,Derleng_4, Derleng_5, Derleng_6, Derleng_7, Derleng_8, Derleng_9, Derleng_10],
    languages: [PythonIcon, DjangoIcon, ReactIcon],
    description: "Der-Leng is a web application that provides guide self-post tourism service package and booking tour-guide serivce along with the implements of Authentication with OAuth2 like Google, also add functionality of telegram bot for real time notification and Stripe payment.",
    link: "https://derleng-web.onrender.com",
  },
  {
    id: 3,
    name: ' E-commerce - Biding',
    date: 'July 05, 2023',
    images: [Auction_1, Auction_2, Auction_3, Auction_4, Auction_5, Auction_6],
    languages: [PythonIcon, DjangoIcon],
    description: "Bidding is a project that i have done after finnished my first step with Django on program online of Harvard University called CS50's Web Programming with Python and Javascript Projects. The course was diving deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.",
    link: ""
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const data = project_data.find((project) => project.id === Number(id)) || null;
  const { name, description, date, images, languages, video, link } = data ?? {};
  return (
    <>
      { !data ? (
        <NotFound />
      ) : (
        <div className="p-4 md:px-8 lg:px-12 flex flex-col items-center gap-4">
          <article className="group relative flex flex-col items-start mt-6 max-w-[1020px]">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 w-full">
              {/* <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span> */}
              <div className="flex items-center justify-between w-full">
                <span className="relative z-10">{name}</span>
                <Link to={link} target="_blank" className="bg-black dark:bg-white px-4 py-1 relative z-10 text-white dark:text-black text-base rounded">{link}</Link>
              </div>
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
            <p className="relative z-10 mt-2 text-base text-zinc-600 dark:text-zinc-400 text-justify">
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
