import React from "react";
import icon from "../assets/images/python_icon.png";

const FeatureItem = ({ logo = icon, name, description }) => {
  return (
    <li className="relative flex items-center gap-4 p-4 rounded-none rounded-tr-2xl rounded-bl-2xl shadow bg-white hover:bg-[#fafafa] dark:border-none dark:shadow-none dark:bg-black dark:hover:bg-white/10 dark:border-white/10">
        <div className="h-12 w-12 min-w-12 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <img
            alt=""
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="h-8 w-8"
            style={{ color: "transparent" }}
            src={logo}
          />
        </div>
      <div>
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {name}
        </h2>
        <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      </div>
    </li>
  );
};

export default FeatureItem;
