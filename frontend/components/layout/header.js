import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GiOpenBook } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";

const Header = () => {
  const pathname = usePathname();
  const [user, setUser] = useState();
  const [showUserProfile, setShowUserProfile] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const user = localStorage.getItem("user");

    setUser(() => user);
  }, []);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <GiOpenBook
              className="fill-white mr-4 w-10 h-10"
              width={50}
              height={50}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              notebooks
            </span>
          </a>
          {user ? (
            <div className="hidden md:relative md:block lg:order-2">
              <button
                type="button"
                className="overflow-hidden rounded-full border-0 cursor-pointer shadow-inner"
                onClick={() => setShowUserProfile(!showUserProfile)}
              >
                <span className="sr-only">Toggle dashboard menu</span>

                <Image
                  width={80}
                  height={80}
                  src="/user-pic.png"
                  alt="user-pic"
                  className="size-10 object-cover"
                />
              </button>

              <div
                className={`absolute ${ showUserProfile ? "visible" : "hidden" } end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md  bg-white shadow-lg`}
                role="menu"
              >
                <div className="p-2">
                  <a
                    href="/dashboard"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    My profile
                  </a>
                </div>

                <div className="p-2">
                  <form>
                    <button
                      type="submit"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 cursor-pointer"
                      role="menuitem"
                    >
                      <CiLogout />
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center lg:order-2">
              <a
                href="/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="/register"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
