import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
  faPinterestSquare,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import xLogo from "../../../static/logos/twitter.png"

export default function SocialMedia() {
  return (
    <ul className="social-media-list">
      <li>
        <a href="https://www.tiktok.com/@developergus">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@developergus">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/developergus">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/developergus/">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.com/developergus/">
          <FontAwesomeIcon icon={faPinterestSquare} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/developer-gus/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/developer_gus">
          <img src={xLogo} alt="X social media logo" className="x-logo" />
        </a>
      </li>
    </ul>
  )
}
