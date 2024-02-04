import * as React from "react"
import { Link } from "gatsby"
import "./MenuOne.scss"

export default function MenuOne() {
  return (
    <nav className="menu-one">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm first-letter:rounded-lg md:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio/"
                className="block py-2 px-3 md:bg-transparent md:p-0"
                aria-current="page"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog/"
                className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/services/"
                className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing/"
                className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact/"
                className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
