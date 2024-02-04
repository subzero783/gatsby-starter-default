import * as React from "react"

export default function Services() {
  return (
    <section className="services">
      <div className="container mx-auto">
        <h6 className="text-with-line">Checkout Our Services</h6>
        <h2 className="subtitle mb-4">
          We Provide a Wide Range of Coding & Digital Marketing Services
        </h2>
        <ul className="2xl:columns-3 xl:columns-3 lg:columns-3 md:columns-2 services-columns-container">
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon"></div>
            <div class="title">
              <h3>Responsive Web Design</h3>
            </div>
            <div class="box-text">
              <p>
                Responsive web design is a digital design approach that ensures
                a website's layout and content respond or adapt to the screen
                size and orientation of the device from which it is accessed.
                This design strategy enhances user experience by providing
                optimal readability and navigation with minimal resizing,
                panning, and scrolling, regardless of whether a user is
                accessing the site from a desktop, tablet, or smartphone.
              </p>
            </div>
          </li>
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon"></div>
            <div class="title">
              <h3>Web Development</h3>
            </div>
            <div class="box-text">
              <p>
                Web development is a multifaceted process that encompasses the
                creation, design, and maintenance of websites. It involves
                various aspects, including web design, web programming, and
                database management. Web development ensures that a website
                functions smoothly, providing a seamless user experience.
              </p>
            </div>
          </li>
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon"></div>
            <div class="title">
              <h3>SEO</h3>
            </div>
            <div class="box-text">
              <p>
                Search Engine Optimization (SEO) is a digital marketing strategy
                aimed at improving a website's visibility in search engine
                results. It involves the use of relevant keywords, high-quality
                content, and other techniques to increase site traffic and
                attract more visitors organically.
              </p>
            </div>
          </li>
          <li className="mb-4 box"></li>
          <li className="mb-4 box"></li>
          <li className="mb-4 box"></li>
          <li className="mb-4 box"></li>
          <li className="mb-4 box"></li>
        </ul>
      </div>
    </section>
  )
}
