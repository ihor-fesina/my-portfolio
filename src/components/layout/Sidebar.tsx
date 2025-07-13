import Navigation from "../common/Navigation";
import Socials from "../common/Socials";
import ArrowIcon from "../ui/icons/ArrowIcon";
import Link from "next/link";

const Sidebar = () => {
  return (
    <header className="lg:sticky lg:mr-20 top-0 max-h-screen max-w-[450px] lg:max-w-[unset] w-full lg:w-[40%] py-12 sm:py-16 lg:py-24">
      <div className="h-full flex flex-col justify-between">
        <div>
          <Link href="/">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
             Ihor Fesina
            </h1>
          </Link>
          <h2 className="text-lg sm:text-xl mb-4 text-teal-400">
            Frontend developer
          </h2>
          <p className="text-md max-w-[400px] leading-normal text-primary-dark">
            I create impressive, innovative and impactful software solutions for
            the web.
          </p>
          <Navigation />
        </div>
        <div className="mt-10 lg:mt-0">
          <a
            href="/resume.pdf"
            target="_blank"
            className="
              text-md sm:text-lg text-primary-bright font-bold hover:text-teal-400 transition ease-in-out
              [&>svg]:hover:translate-x-0.5 [&>svg]:hover:-translate-y-0.5
            "
          >
            View Full Résumé
            <ArrowIcon classNames="relative ml-1 bottom-[1px] inline-block h-4 w-4 transition-transform" />
          </a>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
