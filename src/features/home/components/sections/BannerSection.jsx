import ReactTypedText from '../shared/ReactTypedText'
import ReactCountUp from '../shared/ReactCountUp'

export default function BannerSection() {
  return (
    <>
    <section className="banner-one" id="home">
      <div className="banner-one__shape-bg-1" style={{backgroundImage: 'url("/legacy/assets/images/shapes/banner-one-shape-bg-1.png")'}}>
      </div>
      <div className="banner-one__shape-bg-2 img-bounce" style={{backgroundImage: 'url("/legacy/assets/images/shapes/banner-one-shape-bg-2.png")'}}>
      </div>
      <div className="banner-one__shape-1">
      </div>
      <div className="banner-one__shape-2">
      </div>
      <div className="banner-one__shape-3">
      </div>
      <div className="banner-one__shape-4 float-bob-x">
        <img alt="" src="/legacy/assets/images/shapes/banner-one-shape-4.png" />
      </div>
      <div className="banner-one__shape-5 float-bob-y">
        <img alt="" src="/legacy/assets/images/shapes/banner-one-shape-5.png" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="banner-one__left">
              <div className="banner-one__title-box">
                <h2 className="banner-one__title">
                  Giúp bé nói tiếng Anh tự tin và
                  <br />
                  {' '}
                  <ReactTypedText
                    className="typed-effect-react banner-one__title-color"
                    phrases={[
                      'Giao tiếp tự nhiên mỗi ngày!',
                      'Lớp học vui nhộn, dễ nhớ!',
                      'Nền tảng ngôn ngữ vững chắc!',
                    ]}
                  />
                </h2>
              </div>
              <p className="banner-one__text">
                Khám phá chương trình tiếng Anh theo độ tuổi,
                giúp bé hiểu bài,
                <br />
                thích học và tiến bộ rõ ràng từng tuần.
              </p>
              <div className="banner-one__btn-box">
                <a className="thm-btn" href="/contact">
                  Đăng ký học thử
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
                      <img alt="" src="/legacy/assets/images/resources/banner-one-satisfied-partner-1-1.png" />
                    </div>
                  </li>
                  <li>
                    <div className="banner-one__satisfied-partner-img">
                      <img alt="" src="/legacy/assets/images/resources/banner-one-satisfied-partner-1-2.png" />
                    </div>
                  </li>
                  <li>
                    <div className="banner-one__satisfied-partner-img">
                      <img alt="" src="/legacy/assets/images/resources/banner-one-satisfied-partner-1-3.png" />
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
                    Học viên và phụ huynh tin tưởng
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
                  <img alt="" src="/legacy/assets/images/resources/banner-one-img-1.svg" />
                </div>
                <div className="banner-one__google-rating">
                  <div className="banner-one__google-rating-img">
                    <img alt="" src="/legacy/assets/images/resources/banner-one-google-rating-img.png" />
                  </div>
                  <div className="banner-one__google-rating-box">
                    <div className="banner-one__google-rating-star">
                      <span className="icon-star">
                      </span>
                      <span className="icon-star">
                      </span>
                      <span className="icon-star">
                      </span>
                      <span className="icon-star">
                      </span>
                      <span className="icon-star">
                      </span>
                    </div>
                    <div className="banner-one__google-rating-count">
                      <p className="count-text">
                        <ReactCountUp end={2} />
                      </p>
                      <span>
                        k lượt đánh giá
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
