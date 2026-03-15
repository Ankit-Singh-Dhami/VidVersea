const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex items-center gap-2 text-violet-600 dark:text-violet-600"
            >
              <span className="sr-only">Home</span>
              <img
                src="./logo.svg"
                alt="Vidversea Logo"
                className="h-8 w-auto"
              />
              <span className="text-[1.5rem] font-semibold tracking-tight">
                Vidversea
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {[
                  "About",
                  "Careers",
                  "History",
                  "Services",
                  "Projects",
                  "Blog",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-4">
              <a
                href="#"
                className="rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-violet-500"
              >
                Login
              </a>

              <a
                href="#"
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-violet-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="block md:hidden rounded-md bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
