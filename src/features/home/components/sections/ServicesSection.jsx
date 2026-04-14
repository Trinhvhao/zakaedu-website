import ReactCountUp from '../shared/ReactCountUp'

export default function ServicesSection() {
  return (
    <>
    <section className="services-one" id="services">
      <div className="services-one__shape-bg" style={{backgroundImage: 'url("/legacy/assets/images/shapes/services-one-shape-bg.png")'}}>
      </div>
      <div className="services-one__shape-bg-2" style={{backgroundImage: 'url("/legacy/assets/images/shapes/services-one-shape-bg-2.png")'}}>
      </div>
      <div className="services-one__shape-1">
      </div>
      <div className="services-one__shape-2">
      </div>
      <div className="services-one__shape-3 float-bob-x">
        <img alt="" src="/legacy/assets/images/shapes/services-one-shape-3.png" />
      </div>
      <div className="services-one__shape-4 float-bob-y">
        <img alt="" src="/legacy/assets/images/shapes/services-one-shape-4.png" />
      </div>
      <div className="container">
        <div className="services-one__top">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="services-one__top-left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-box">
                      <div className="section-title__tagline-shape">
                      </div>
                      <div className="section-title__tagline-shape-2">
                      </div>
                    </div>
                    <span className="section-title__tagline">
                      Chương trình
                    </span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Bài học thông minh, bé tự tin{' '}
                    <span>
                      Trung tâm tiếng Anh ZakaEdu
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="services-one__top-right">
                <p className="services-one__top-text">
                  Chúng tôi cung cấp chương trình thực hành cho trẻ,
                  <br />
                  kết hợp luyện giao tiếp, phát âm,
                  <br />
                  và tư duy phản biện trong mỗi tiết học.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-one__bottom">
          <div className="row">
            <div className="col-xl-5">
              <div
                className="services-one__left slideInLeft"
                data-reveal="true"
                data-reveal-delay="100ms"
                data-reveal-duration="2500ms"
              >
                <div className="services-one__img-box">
                  <div className="services-one__img-shape-1">
                  </div>
                  <div className="services-one__img">
                    <img alt="" src="/legacy/assets/images/services/services-one-img-1.jpg" />
                  </div>
                  <div className="services-one__img-2">
                    <img alt="" src="/legacy/assets/images/services/services-one-img-2.jpg" />
                  </div>
                  <div className="services-one__experience-box">
                    <div className="services-one__experience-icon">
                      <span className="icon-trophy">
                      </span>
                    </div>
                    <div className="services-one__experience-content">
                      <p>
                        <span>
                          <ReactCountUp end={25} />
                        </span>
                        <span>
                          + Năm
                        </span>
                        <br />
                        kinh nghiệm
                        đào tạo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div
                className="services-one__right slideInLeft"
                data-reveal="true"
                data-reveal-delay="100ms"
                data-reveal-duration="2500ms"
              >
                <ul className="services-one__services-list list-unstyled">
                  <li>
                    <div className="services-one__services-single">
                      <div className="services-one__count-and-content">
                        <div className="services-one__count">
                        </div>
                        <div className="services-one__content">
                          <h3 className="services-one__title">
                            <a href="/services">
                              Starter English (6-8 tuổi)
                            </a>
                          </h3>
                          <p className="services-one__text">
                            Xây dựng từ vựng và phản xạ nói cơ bản
                            <br />
                            qua truyện, bài hát và trò chơi tương tác.
                          </p>
                        </div>
                      </div>
                      <div className="services-one__arrow">
                        <a href="/services">
                          <span className="icon-diagonal-arrow">
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="services-one__hover-img">
                      <img alt="Image" src="/legacy/assets/images/services/services-1-1.jpg" />
                    </div>
                  </li>
                  <li>
                    <div className="services-one__services-single">
                      <div className="services-one__count-and-content">
                        <div className="services-one__count">
                        </div>
                        <div className="services-one__content">
                          <h3 className="services-one__title">
                            <a href="/services">
                              Movers English (9-11 tuổi)
                            </a>
                          </h3>
                          <p className="services-one__text">
                            Tăng cường ngữ pháp và kỹ năng giao tiếp
                            <br />
                            bằng học theo dự án và đóng vai tình huống.
                          </p>
                        </div>
                      </div>
                      <div className="services-one__arrow">
                        <a href="/services">
                          <span className="icon-diagonal-arrow">
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="services-one__hover-img">
                      <img alt="Image" src="/legacy/assets/images/services/services-1-2.jpg" />
                    </div>
                  </li>
                  <li>
                    <div className="services-one__services-single">
                      <div className="services-one__count-and-content">
                        <div className="services-one__count">
                        </div>
                        <div className="services-one__content">
                          <h3 className="services-one__title">
                            <a href="/services">
                              Flyers English (11-13 tuổi)
                            </a>
                          </h3>
                          <p className="services-one__text">
                            Cải thiện đọc, nghe và sự tự tin khi
                            <br />
                            nói trong lộ trình học và thi Cambridge.
                          </p>
                        </div>
                      </div>
                      <div className="services-one__arrow">
                        <a href="/services">
                          <span className="icon-diagonal-arrow">
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="services-one__hover-img">
                      <img alt="Image" src="/legacy/assets/images/services/services-1-3.jpg" />
                    </div>
                  </li>
                  <li>
                    <div className="services-one__services-single">
                      <div className="services-one__count-and-content">
                        <div className="services-one__count">
                        </div>
                        <div className="services-one__content">
                          <h3 className="services-one__title">
                            <a href="/services">
                              Speaking Club cuối tuần
                            </a>
                          </h3>
                          <p className="services-one__text">
                            Chủ đề giao tiếp thực tế, làm việc nhóm,
                            <br />
                            và rèn luyện sự tự tin cùng cố vấn.
                          </p>
                        </div>
                      </div>
                      <div className="services-one__arrow">
                        <a href="/services">
                          <span className="icon-diagonal-arrow">
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="services-one__hover-img">
                      <img alt="Image" src="/legacy/assets/images/services/services-1-4.jpg" />
                    </div>
                  </li>
                  <li>
                    <div className="services-one__services-single">
                      <div className="services-one__count-and-content">
                        <div className="services-one__count">
                        </div>
                        <div className="services-one__content">
                          <h3 className="services-one__title">
                            <a href="/services">
                              Báo cáo tiến bộ cho phụ huynh
                            </a>
                          </h3>
                          <p className="services-one__text">
                            Báo cáo theo tháng cùng đề xuất
                            <br />
                            rõ ràng để phụ huynh đồng hành tại nhà.
                          </p>
                        </div>
                      </div>
                      <div className="services-one__arrow">
                        <a href="/services">
                          <span className="icon-diagonal-arrow">
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="services-one__hover-img">
                      <img alt="Image" src="/legacy/assets/images/services/services-1-5.jpg" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Services One End */}
    {/* Sliding Text Two Start */}
    </>
  )
}
