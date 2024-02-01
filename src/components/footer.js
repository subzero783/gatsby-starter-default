import * as React from "react"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-xl	">
      © {new Date().getFullYear()} &middot; Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
