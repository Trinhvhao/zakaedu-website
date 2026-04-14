export default function NewsletterSection() {
  return (
    <>
    <section className="newsletter-one">
      <div className="container">
        <div className="newsletter-one__inner">
          <div className="newsletter-one__shape-bg" style={{backgroundImage: 'url("/legacy/assets/images/assets/images/shapes/newsletter-one-shape-bg.png")'}}>
          </div>
          <div className="newsletter-one__shape-1 float-bob-x">
            <img alt="" src="/legacy/assets/images/assets/images/shapes/newsletter-one-shape-1.png" />
          </div>
          <div className="newsletter-one__shape-2 float-bob-y">
            <img alt="" src="/legacy/assets/images/assets/images/shapes/newsletter-one-shape-2.png" />
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="newsletter-one__title-box">
                <h2 className="newsletter-one__title">
                  Subscribe
                </h2>
                <p className="newsletter-one__sub-title">
                  Newsletter
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="newsletter-one__img-boxes">
                <div className="newsletter-one__img-shape">
                  <div className="newsletter-one__img-box-1">
                    <div className="newsletter-one__img-1">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/newsletter-one-img-1-1.jpg" />
                    </div>
                  </div>
                  <div className="newsletter-one__img-box-2">
                    <div className="newsletter-one__img-2">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/newsletter-one-img-1-2.jpg" />
                    </div>
                  </div>
                  <div className="newsletter-one__img-box-3">
                    <div className="newsletter-one__img-3">
                      <img alt="" src="/legacy/assets/images/assets/images/resources/newsletter-one-img-1-3.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="newsletter-one__form-box">
                <form className="newsletter-one__form">
                  <div className="newsletter-one__input">
                    <input placeholder="Email Address" type="email" />
                  </div>
                  <button className="newsletter-one__btn" type="submit">
                    Subscribe Now
                    <span className="icon-send">
                    </span>
                  </button>
                </form>
                <p className="newsletter-one__form-text">
                  By Subscribing you agree to the
                  <a href="/legacy/pages/about/index.html">
                    Terms
                    of use
                  </a>
                  &amp;
                  <a href="/legacy/pages/about/index.html">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="newsletter-one__big-text">
            NEWSLETTER
          </div>
        </div>
      </div>
    </section>
    {/*Newsletter One End*/}
    {/*Site Footer Start*/}
    </>
  )
}
