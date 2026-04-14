import ReactTypedText from '../shared/ReactTypedText'
import ReactCountUp from '../shared/ReactCountUp'

export default function BannerSection() {
  return (
    <>
    <section className="banner-one" id="home">
      <div className="banner-one__shape-bg-1" style={{backgroundImage: 'url("/legacy/assets/images/assets/images/shapes/banner-one-shape-bg-1.png")'}}>
      </div>
      <div className="banner-one__shape-bg-2 img-bounce" style={{backgroundImage: 'url("/legacy/assets/images/assets/images/shapes/banner-one-shape-bg-2.png")'}}>
      </div>
      <div className="banner-one__shape-1">
      </div>
      <div className="banner-one__shape-2">
      </div>
      <div className="banner-one__shape-3">
      </div>
      <div className="banner-one__shape-4 float-bob-x">
        <img alt="" src="/legacy/assets/images/assets/images/shapes/banner-one-shape-4.png" />
      </div>
      <div className="banner-one__shape-5 float-bob-y">
        <img alt="" src="/legacy/assets/images/assets/images/shapes/banner-one-shape-5.png" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="banner-one__left">
              <div className="banner-one__title-box">
                <h2 className="banner-one__title">
                  Making Your Space Shine Easy and
                  <br />
                  {' '}
                  <ReactTypedText
                    className="typed-effect-react banner-one__title-color"
                    phrases={[
                      'Reliable Cleaning Services!',
                      'Trusted Cleaning Team!',
                      'Sparkling Spaces Daily!',
                    ]}
                  />
                </h2>
              </div>
              <p className="banner-one__text">
                Experience hassle-free, top-quality cleaning services designed
                to keep
                <br />
                your home or office spotless and stress-free.
              </p>
              <div className="banner-one__btn-box">
                <a className="thm-btn" href="/legacy/pages/contact/index.html">
                  Get Started
                  <span>
                    <i className="icon-diagonal-arrow">
                    </i>
                  </span>
                </a>
              </div>
              <div className="banner-one__satisfied-partner">
                <ul className="list-unstyled banner-one__satisfied-partner-list">
                  <li>
                    <div className="banner-one__satisfied-partner-img">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/banner-one-satisfied-partner-1-1.jpg" />
                    </div>
                  </li>
                  <li>
                    <div className="banner-one__satisfied-partner-img">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/banner-one-satisfied-partner-1-2.jpg" />
                    </div>
                  </li>
                  <li>
                    <div className="banner-one__satisfied-partner-img">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/banner-one-satisfied-partner-1-3.jpg" />
                    </div>
                  </li>
                </ul>
                <div className="banner-one__satisfied-partner-content">
                  <div className="banner-one__satisfied-partner-count-box">
                    <p>
                      <ReactCountUp end={200} />
                    </p>
                    <span>
                      K+
                    </span>
                  </div>
                  <p className="banner-one__satisfied-partner-text">
                    Satisficed Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="banner-one__right">
              <div className="banner-one__img-box">
                <div
                  className="banner-one__img slideInRight"
                  data-reveal="true"
                  data-reveal-delay="100ms"
                  data-reveal-duration="2500ms"
                >
                  <img alt="" src="/legacy/assets/images/assets/images/resources/banner-one-img-1.png" />
                </div>
                <div className="banner-one__google-rating">
                  <div className="banner-one__google-rating-img">
                    <img alt="" src="/legacy/assets/images/assets/images/resources/banner-one-google-rating-img.png" />
                  </div>
                  <div className="banner-one__google-rating-box">
                    <div className="banner-one__google-rating-star">
                      <span className="icon-star">
                      </span>
                      <span className="icon-star">
                      </span>
                    </div>
                    <div className="banner-one__google-rating-count">
                      <p className="count-text">
                        <ReactCountUp end={12} />
                      </p>
                      <span>
                        k Ratings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Banner One End */}
    {/* Sliding Text One Start */}
    </>
  )
}
