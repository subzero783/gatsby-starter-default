import * as React from "react"
import { Link } from "gatsby"
import MenuOne from "../menus/MenuOne/MenuOne"
import SocialMedia from "../SocialMedia/SocialMedia"
import logo from "../../../static/images/logos/developer-gus-logo-white.png"

export default function Header() {
  return (
    <header>
      <div className="top-logo">
        <Link to="/">
          <img src={logo} alt="DeveloperGus.com logo" />
        </Link>
      </div>
      <div className="top-nav flex">
        <MenuOne />
        <SocialMedia />
      </div>
    </header>
  )
}
