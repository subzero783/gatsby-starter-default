import * as React from "react"
import iconResponsive from "../../images/png/device.png"

export default function Services() {
  return (
    <section className="services">
      <div className="container mx-auto">
        <p className="text-with-line">Checkout Our Services</p>
        <h2 className="subtitle mb-4">
          We Provide a Wide Range of Coding & Digital Marketing Services
        </h2>
        <ul className="services-columns-container">
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon">
              <img src={iconResponsive} alt="Responsive web design" />
            </div>
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
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon"></div>
            <div class="title">
              <h3>UX Front-End</h3>
            </div>
            <div class="box-text">
              <p>
                UX Front-End Development is a specialized area of web
                development that focuses on creating user-friendly and intuitive
                interfaces for websites or web applications. It combines the
                principles of user experience (UX) design with coding skills to
                ensure that the visual and interactive elements of a site are
                engaging, accessible, and responsive to user interactions.
              </p>
            </div>
          </li>
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon"></div>
            <div class="title">
              <h3>Back-End Development</h3>
            </div>
            <div class="box-text">
              <p>
                Back-end development refers to the server-side of web
                development focused on how the website works. It involves
                creating and maintaining the core functional logic and
                operations, which ensure seamless processing of user inputs, and
                integration with the front-end, providing the backbone that
                supports every user-facing component.
              </p>
            </div>
          </li>
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon"></div>
            <div class="title">
              <h3>HubSpot Development</h3>
            </div>
            <div class="box-text">
              <p>
                HubSpot development is a specialized aspect of web development
                that involves creating, designing, and maintaining websites and
                web applications on the HubSpot CMS platform. Leveraging
                HubSpot's rich features and tools, developers can build
                engaging, SEO-friendly, and highly personalized websites to
                enhance user experience and drive conversion rates.
              </p>
            </div>
          </li>
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon"></div>
            <div class="title">
              <h3>WordPress</h3>
            </div>
            <div class="box-text">
              <p>
                WordPress development is a field that revolves around creating
                and customizing websites within the WordPress Content Management
                System (CMS). This includes designing and developing themes and
                plugins, enhancing the user interface, and ensuring website
                performance and security.
              </p>
            </div>
          </li>
          <li className="mb-4 box">
            <div class="count"></div>
            <div class="icon"></div>
            <div class="title">
              <h3>Google Ads</h3>
            </div>
            <div class="box-text">
              <p>
                Google Ads marketing is a powerful digital advertising tool that
                enables businesses to reach their target audience on the Google
                search engine and its partner websites. This platform utilizes
                keyword targeting, demographic information, and user behavior
                data to display relevant sponsored listings, driving higher
                website traffic and increasing conversion rates.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
