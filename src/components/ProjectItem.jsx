// import video from "../assets/videos/One Piece - Zoro - Sekiro_ Shadows Die Twice Mods - Google Chrome 2023-08-31 17-48-39.mp4"

function ProjectItem({reverse=false, name, video, date, description}) {
  console.log(name)
  return (
    <div
      className={`flex flex-col justify-around items-start gap-4 lg:gap-12 ${
        reverse ? "lg:flex-row-reverse" : 'lg:flex-row'
      }`}
    >
      <article className="group relative flex flex-col items-start mt-6 max-w-lg">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="articles/crafting-a-design-system-for-a-multiplanetary-future.html">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">
              {name}
            </span>
          </a>
        </h2>
        <time
          className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
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
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
          See more
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </article>
      <div className="relative rounded-2xl border border-zinc-200 p-4 dark:border-zinc-700/40 max-w-2xl overflow-hidden">
        <div class="absolute top-2 -right-8 w-[120px] transform rotate-45 bg-teal-500 text-white text-center px-2 py-1">
          demo
        </div>
        <video
          autoPlay
          loop
          muted
          // className={`${reverse ? "rounded-bl-2xl " : "rounded-tr-2xl"}`}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default ProjectItem
