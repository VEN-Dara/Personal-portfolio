function Bottom() {
  const navbars = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Skills",
      path: "#skills",
    },
    {
      title: "Projects",
      path: "#projects",
    },
  ];

  const handleClick = (event, path) => {
    event.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {navbars.map(({ title, path }) => {
                      return (
                        <a
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                          key={title}
                          href={path}
                          onClick={(event) => handleClick(event, path)}
                        >
                          {title}
                        </a>
                      );
                    })}
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    © 2024 VEN Dara.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Bottom;
