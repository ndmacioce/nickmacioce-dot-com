import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink } from "./atoms"

const Header = ({ activePage }) => (
  <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
    <nav
      className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
      aria-label="Main Navigation"
    >
      <Link to="/" aria-label="Website logo, go back to homepage.">
        <svg
          aria-hidden="true"
          role="img"
          className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 530 373"
        >
          <path d="M62.912,139.761l226.481,182.694l62.908,50.545l-0,-83.399l-289.389,-233.553l-62.912,-50.546l0,367.498l62.912,-0l-0,-233.239Z" />
          <path d="M302.511,183.223l51.335,41.592l51.339,-41.592l61.903,-49.49l0,234.82l62.912,-0l0,-368.553l-62.912,50.545l-113.242,91.087l-113.239,-91.087l-62.912,-50.545l0,83.454l62.912,50.279l61.904,49.49Z" />
        </svg>
      </Link>
      <span className="hidden sm:flex flex-grow items-center space-x-6">
      </span>
      <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
    </nav>
    <div className="hidden sm:block">
      <div className="-mt-120 sm:-mt-120 ml-4">
      </div>
    </div>
  </header>
)



export default Header
