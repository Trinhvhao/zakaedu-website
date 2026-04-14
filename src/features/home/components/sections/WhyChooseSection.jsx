import CurvedTextRing from '../shared/CurvedTextRing'
import ReactCountUp from '../shared/ReactCountUp'

export default function WhyChooseSection({ onOpenVideo }) {
  const videoUrl = 'https://www.youtube.com/watch?v=MLpWrANjFbI'

  const openVideo = (event) => {
    event.preventDefault()
    onOpenVideo?.(videoUrl)
  }

  return (
    <>
    <section className="why-choose-one">
      <div className="why-choose-one__bg-shape" style={{backgroundImage: 'url("/legacy/assets/images/assets/images/shapes/why-choose-one-shape-bg-shape.png")'}}>
      </div>
      <div className="why-choose-one__shape-2 float-bob-x">
        <img alt="" src="/legacy/assets/images/assets/images/shapes/why-choose-one-shape-2.png" />
      </div>
      <div className="why-choose-one__big-title">
        <h3>
          100% SATISFACTION
        </h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="why-choose-one__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-box">
                    <div className="section-title__tagline-shape">
                    </div>
                    <div className="section-title__tagline-shape-2">
                    </div>
                  </div>
                  <span className="section-title__tagline">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="section-title__title title-animation">
                  What Makes Us the Perfect Cleaning
                  Partner?
                  <span>
                    Your Clean
                  </span>
                  <br />
                  <span>
                    Space, Our Commitment!
                  </span>
                </h2>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="why-choose-one__img-box-1">
                    <div className="why-choose-one__img-1">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/why-choose-one-img-1.jpg" />
                    </div>
                    <div className="why-choose-one__shape-1 rotate-me">
                      <img alt="" src="/legacy/assets/images/assets/images/shapes/why-choose-one-shape-1.png" />
                    </div>
                    <div className="why-choose-one__round-text-box">
                      <div className="why-choose-one__round-text-box-inner">
                        <CurvedTextRing className="why-choose-one__curved-circle" text="Cleaning * Moping * Dusting *" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="why-choose-one__img-box-2">
                    <CurvedTextRing className="why-choose-one__curved-circle-2" text="Cleaning * Moping * Dusting *" reverse />
                    <div className="why-choose-one__img-2">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/why-choose-one-img-2.jpg" />
                    </div>
                    <div className="why-choose-one__video-link">
                      <a className="video-popup" href={videoUrl} onClick={openVideo}>
                        <div className="why-choose-one__video-icon">
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
          <div className="col-xl-6">
            <div className="why-choose-one__right">
              <div className="why-choose-one__client-box">
                <div className="why-choose-one__client-content">
                  <div className="why-choose-one__client-inner">
                    <h3 className="why-choose-one__client-title">
                      Clut
                      <span>
                        c
                      </span>
                      h
                    </h3>
                    <ul className="why-choose-one__client-img-list list-unstyled">
                      <li>
                        <div className="why-choose-one__client-img">
                          <img alt="" src="/legacy/assets/images/assets/images/resources/why-choose-one-client-img-1.jpg" />
                        </div>
                      </li>
                      <li>
                        <div className="why-choose-one__client-img">
                          <img alt="" src="/legacy/assets/images/assets/images/resources/why-choose-one-client-img-2.jpg" />
                        </div>
                      </li>
                      <li>
                        <div className="why-choose-one__client-img">
                          <img alt="" src="/legacy/assets/images/assets/images/resources/why-choose-one-client-img-3.jpg" />
                        </div>
                      </li>
                      <li>
                        <div className="why-choose-one__client-img">
                          <img alt="" src="/legacy/assets/images/assets/images/resources/why-choose-one-client-img-4.jpg" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="why-choose-one__ratting-and-text">
                    <div className="why-choose-one__ratting-box">
                      <div className="why-choose-one__ratting">
                        <span className="icon-star">
                        </span>
                        <span className="icon-star">
                        </span>
                        <span className="icon-star">
                        </span>
                      </div>
                      <p className="why-choose-one__ratting-text">
                        4.5 Rating
                      </p>
                    </div>
                    <div className="why-choose-one__count-box-inner">
                      <div className="why-choose-one__count-box">
                        <p>
                          <ReactCountUp end={120} />
                        </p>
                        <span>
                          k
                        </span>
                        <span>
                          +
                        </span>
                      </div>
                      <p className="why-choose-one__count-text">
                        Satisfied Review
                      </p>
                    </div>
                  </div>
                </div>
                <div className="why-choose-one__client-arrow">
                  <a aria-label="Learn more about Freshflow" href="/about">
                    <span className="icon-diagonal-arrow">
                    </span>
                  </a>
                </div>
              </div>
              <div className="why-choose-one__right-bottom">
                <ul className="row list-unstyled">
                  {/*Why Choose One Single Start*/}
                  <li className="col-xl-6 col-lg-6 col-md-6 fadeInUp" data-reveal="true" data-reveal-delay="100ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__icon">
                        <span className="icon-employee">
                        </span>
                        <div className="why-choose-one__count">
                        </div>
                      </div>
                      <h3 className="why-choose-one__title">
                        <a href="/legacy/pages/team/index.html">
                          Professional Team.
                        </a>
                      </h3>
                      <p className="why-choose-one__text">
                        Our experienced and trained cleaning
                        experts
                        ensure high-quality results every time.
                      </p>
                    </div>
                  </li>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <li className="col-xl-6 col-lg-6 col-md-6 fadeInUp" data-reveal="true" data-reveal-delay="200ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__icon">
                        <span className="icon-cleaning-2">
                        </span>
                        <div className="why-choose-one__count">
                        </div>
                      </div>
                      <h3 className="why-choose-one__title">
                        <a href="/legacy/pages/about/index.html">
                          Spotless Spaces
                        </a>
                      </h3>
                      <p className="why-choose-one__text">
                        Our experienced and trained cleaning
                        experts
                        ensure high-quality results every time.
                      </p>
                    </div>
                  </li>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <li className="col-xl-6 col-lg-6 col-md-6 fadeInUp" data-reveal="true" data-reveal-delay="300ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__icon">
                        <span className="icon-window-cleaning">
                        </span>
                        <div className="why-choose-one__count">
                        </div>
                      </div>
                      <h3 className="why-choose-one__title">
                        <a href="/legacy/pages/about/index.html">
                          Eco-Friendly Products
                        </a>
                      </h3>
                      <p className="why-choose-one__text">
                        Our experienced and trained cleaning
                        experts
                        ensure high-quality results every time.
                      </p>
                    </div>
                  </li>
                  {/*Why Choose One Single End*/}
                  {/*Why Choose One Single Start*/}
                  <li className="col-xl-6 col-lg-6 col-md-6 fadeInUp" data-reveal="true" data-reveal-delay="400ms">
                    <div className="why-choose-one__single">
                      <div className="why-choose-one__icon">
                        <span className="icon-time">
                        </span>
                        <div className="why-choose-one__count">
                        </div>
                      </div>
                      <h3 className="why-choose-one__title">
                        <a href="/legacy/pages/about/index.html">
                          Flexible
                          Scheduling
                        </a>
                      </h3>
                      <p className="why-choose-one__text">
                        Our experienced and trained cleaning
                        experts
                        ensure high-quality results every time.
                      </p>
                    </div>
                  </li>
                  {/*Why Choose One Single End*/}
                </ul>
                <div className="why-choose-one__contact-box">
                  <div className="why-choose-one__contact-icon">
                    <span className="icon-support">
                    </span>
                  </div>
                  <div className="why-choose-one__content">
                    <p>
                      Sun - Fri &amp; 10:00 AM - 8:00 PM
                    </p>
                    <h4>
                      <a href="tel:120045678910">
                        12 (00) 456 78910
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Why Choose One End*/}
    {/*Project One Start*/}
    </>
  )
}
