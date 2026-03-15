import { Facebook, Instagram, Twitter, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center text-violet-600">
          <a
            href="#"
            className="flex items-center gap-2 text-violet-600 dark:text-violet-600"
          >
            <span className="sr-only">Home</span>
            <img src="./logo.svg" alt="Vidversea Logo" className="h-8 w-auto" />
            <span className="text-[1.5rem] font-semibold tracking-tight">
              Vidversea
            </span>
          </a>
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        {/* Navigation */}
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {["About", "Careers", "History", "Services", "Projects", "Blog"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-violet-600"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Social Icons */}
        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {[
            { name: "Facebook", Icon: Facebook },
            { name: "Instagram", Icon: Instagram },
            { name: "Twitter", Icon: Twitter },
            { name: "GitHub", Icon: Github },
            { name: "Dribbble", Icon: Dribbble },
          ].map(({ name, Icon }) => (
            <li key={name}>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 transition hover:text-violet-600"
              >
                <span className="sr-only">{name}</span>
                <Icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
