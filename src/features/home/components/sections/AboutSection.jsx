export default function AboutSection({ onOpenVideo }) {
  const videoUrl = 'https://www.youtube.com/watch?v=MLpWrANjFbI'

  const openVideo = (event) => {
    event.preventDefault()
    onOpenVideo?.(videoUrl)
  }

  return (
    <>
    <section className="about-one" id="about">
      <div className="about-one__bg-color">
      </div>
      <div className="about-one__shape-1">
      </div>
      <div className="about-one__shape-2">
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
              <div
                className="about-one__left slideInLeft"
                data-reveal="true"
                data-reveal-delay="100ms"
                data-reveal-duration="2500ms"
              >
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="about-one__left-img-box">
                    <div className="about-one__left-img-1">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/about-one-img-1.jpg" />
                    </div>
                    <div className="about-one__left-img-2">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/about-one-img-2.jpg" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="about-one__left-img-box-2">
                    <div className="about-one__left-img-3">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/about-one-img-3.jpg" />
                      <div className="about-one__video-link">
                        <a className="video-popup" href={videoUrl} onClick={openVideo}>
                          <div className="about-one__video-icon">
                            <span className="icon-play">
                            </span>
                            <i className="ripple">
                            </i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <h2
                className="about-one__left-big-title fadeInLeft"
                data-reveal="true"
                data-reveal-delay="300ms"
                data-reveal-duration="1500ms"
              >
              Freshflow
            </h2>
          </div>
          <div className="col-xl-6">
              <div
                className="about-one__right fadeInRight"
                data-reveal="true"
                data-reveal-delay="300ms"
                data-reveal-duration="1500ms"
              >
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-box">
                    <div className="section-title__tagline-shape">
                    </div>
                    <div className="section-title__tagline-shape-2">
                    </div>
                  </div>
                  <span className="section-title__tagline">
                    About Us
                  </span>
                </div>
                <h2 className="section-title__title title-animation">
                  Crafting Dreams, Guided by Purpose,
                  Rooted in Creativity,
                  <span>
                    &amp; Values That Define Our Journey
                  </span>
                </h2>
              </div>
              <p className="about-one__text">
                Driven by purpose and creativity, we craft dreams, stay rooted in
                innovation, and uphold values that define our journey forward.
              </p>
              <div className="about-one__client-box">
                <div className="about-one__client-img-box">
                  <div className="about-one__client-img">
                    <img alt="" src="/legacy/assets/images/assets/images/resources/about-one-client-img-1.jpg" />
                  </div>
                </div>
                <div className="about-one__client-content">
                  <h5 className="about-one__title">
                    Inspiring Growth and Innovation
                  </h5>
                  <p className="about-one__client-text">
                    It’s an honor to stand before you today as we
                    reflect on our journey and envision the path ahead.
                  </p>
                  <p className="about-one__sub-title">
                    Our Ceo{' '}
                    <span>
                      Thomas Alison
                    </span>
                  </p>
                  <p className="about-one__client-text-2">
                    Let’s continue to dream big, act boldly - Thank
                    you.
                  </p>
                </div>
              </div>
              <div className="about-one__points-box">
                <ul className="about-one__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Build trust through reliability
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Use eco-friendly cleaning solutions
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Ensure customer satisfaction
                    </p>
                  </li>
                </ul>
                <ul className="about-one__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Top-quality cleaning services
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Build trust through reliability
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Create healthy, spotless spaces
                    </p>
                  </li>
                </ul>
              </div>
              <div className="about-one__mission-box">
                <div className="icon">
                  <span className="icon-target">
                  </span>
                </div>
                <div className="content">
                  <h3>
                    Our Mission &amp; Vision
                  </h3>
                  <p>
                    delivering exceptional cleaning services to
                    <br />
                    create spotless
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About One End */}
    {/* Services One Start */}
    </>
  )
}
