import * as React from "react"
import bgImageOne from "../../../static/images/background-images/background-image-01.jpeg"
import FreeWebsiteSeoAudit from "../forms/free-website-seo-audit"

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImageOne})` }}>
      <div className="container mx-auto">
        <div className="text-side">
          <span className="small-text mb-5">Welcome to Developer Gus</span>
          <h1 className="headline mb-6">
            Unleashing Digital Brilliance with{" "}
            <span className="text-highlight">Developer Gus</span>
          </h1>
          <h2 className="subtitle">
            Navigating the World of Web Design, Development and Beyond.
            Empowering Your Business with SEO and Google Ads Mastery.
          </h2>
        </div>
        <div className="form-side">
          <div className="hero-form-container">
            <h2 class="subtitle">
              <span>Free Website SEO and Traffic Audit!</span>
            </h2>
            <FreeWebsiteSeoAudit />
          </div>
        </div>
      </div>
    </section>
  )
}
