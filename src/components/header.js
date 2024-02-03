import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Header({ siteTitle, siteDescription }) {
  return (
    <header
      style={{
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
      className="mx-auto max-w-screen-xl mt-2"
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src={`../../static/logos/developer-gus-logo-white.png`}
          alt="Developer Gus logo"
          className="top-logo"
        />
      </Link>
    </header>
  )
}
