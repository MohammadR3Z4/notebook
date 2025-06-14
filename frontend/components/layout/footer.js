import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiOpenBook } from "react-icons/gi";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <GiOpenBook
              className="fill-white mr-4 w-10 h-10"
              width={50}
              height={50}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              notebooks
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-8">
            <li>
              <Link
                href="/"
                className={`header-link  ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`header-link  ${
                  pathname === "/about-us" ? "active" : ""
                }`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/notebooks"
                className={`header-link  ${
                  pathname.startsWith("/notebooks") ? "active" : ""
                }`}
              >
                books
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" className="hover:underline">
            notebooks™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
