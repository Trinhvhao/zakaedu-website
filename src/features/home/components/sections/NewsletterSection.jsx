export default function NewsletterSection() {
  return (
    <>
    <section className="newsletter-one">
      <div className="container">
        <div className="newsletter-one__inner">
          <div className="newsletter-one__shape-bg" style={{backgroundImage: 'url("/legacy/assets/images/shapes/newsletter-one-shape-bg.png")'}}>
          </div>
          <div className="newsletter-one__shape-1 float-bob-x">
            <img alt="" src="/legacy/assets/images/shapes/newsletter-one-shape-1.png" />
          </div>
          <div className="newsletter-one__shape-2 float-bob-y">
            <img alt="" src="/legacy/assets/images/shapes/newsletter-one-shape-2.png" />
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="newsletter-one__title-box">
                <h2 className="newsletter-one__title">
                  Đăng ký
                </h2>
                <p className="newsletter-one__sub-title">
                  Mẹo & Tài liệu
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="newsletter-one__img-boxes">
                <div className="newsletter-one__img-shape">
                  <div className="newsletter-one__img-box-1">
                    <div className="newsletter-one__img-1">
                      <img alt="" src="/legacy/assets/images/resources/why-choose-one-img-2.png" style={{ objectFit: 'cover', height: '175px' }} />
                    </div>
                  </div>
                  <div className="newsletter-one__img-box-2">
                    <div className="newsletter-one__img-2">
                      <img alt="" src="https://th.bing.com/th/id/R.e29340150cae488ffa0da9ba6df02b22?rik=dTnlttHh%2bx%2bg2Q&pid=ImgRaw&r=0" style={{ objectFit: 'cover', height: '107px' }} />
                    </div>
                  </div>
                  <div className="newsletter-one__img-box-3">
                    <div className="newsletter-one__img-3">
                      <img alt="" src="https://static3.sachtruyen.com.vn/images/bo-english-grammar-for-kids-ngu-phap-tieng-anh-tieu-hoc-tap-2-co-dap-an-tai-ban-2025-1.jpg" style={{ objectFit: 'cover', height: '107px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="newsletter-one__form-box">
                <form className="newsletter-one__form">
                  <div className="newsletter-one__input">
                    <input placeholder="Địa chỉ email" type="email" />
                  </div>
                  <button className="newsletter-one__btn" type="submit">
                    Nhận mẹo học hay
                    <span className="icon-send">
                    </span>
                  </button>
                </form>
          
              </div>
            </div>
          </div>
          <div className="newsletter-one__big-text">
            ZAKAEDU
          </div>
        </div>
      </div>
    </section>
    {/*Newsletter One End*/}
    {/*Site Footer Start*/}
    </>
  )
}
