export default function HomeFooter() {
  return (
    <>
    <footer className="site-footer">
      <div className="site-footer__shape-bg float-bob-y" style={{backgroundImage: 'url("/legacy/assets/images/shapes/site-footer-shpae-bg.png")'}}>
      </div>
      <div className="site-footer__shape-2 img-bounce">
        <img alt="" src="/legacy/assets/images/shapes/site-footer-shape-2.png" />
      </div>
      <div className="container">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="row">
              <div className="col-xl-5">
                <div className="site-footer__top-left">
                  <div className="site-footer__logo-box">
                    <div className="site-footer__logo">
                      <a href="/">
                        <img alt="" src="/legacy/assets/images/resources/logo-1.svg" />
                      </a>
                    </div>
                    <p className="site-footer__text-1">
                      ZakaEdu giúp trẻ xây dựng sự tự tin trong giao tiếp tiếng Anh 
                      thông qua các lớp học vui nhộn, lộ trình học tập rõ ràng, 
                      và đội ngũ giáo viên tận tâm.
                    </p>
                  </div>
                  <div className="site-footer__contact-info-box">
                    <ul className="list-unstyled site-footer__contact-info">
                      <li style={{ flexWrap: 'nowrap' }}>
                        <div className="site-footer__contact-info-icon" style={{ flex: '0 0 32px' }}>
                          <span className="icon-pin">
                          </span>
                        </div>
                        <div className="site-footer__contact-info-content">
                          <p style={{ margin: 0, padding: 0, marginBottom: '2px' }}>
                            Địa chỉ:
                          </p>
                          <h5 style={{ margin: 0, padding: 0 }}>
                            Toà V4, The Vesta
                          </h5>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-unstyled site-footer__contact-info site-footer__contact-info--two" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <li style={{ flexWrap: 'nowrap' }}>
                        <div className="site-footer__contact-info-icon" style={{ flex: '0 0 32px' }}>
                          <span className="icon-envelope">
                          </span>
                        </div>
                        <div className="site-footer__contact-info-content">
                          <p style={{ margin: 0, padding: 0, marginBottom: '2px' }}>
                            Email:
                          </p>
                          <h5 style={{ margin: 0, padding: 0 }}>
                            <a href="mailto:zakaedu.contact@gmail.com">
                              zakaedu.contact@gmail.com
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li style={{ flexWrap: 'nowrap' }}>
                        <div className="site-footer__contact-info-icon" style={{ flex: '0 0 32px' }}>
                          <span className="icon-phone-call">
                          </span>
                        </div>
                        <div className="site-footer__contact-info-content">
                          <p style={{ margin: 0, padding: 0, marginBottom: '2px' }}>
                            Điện thoại:
                          </p>
                          <h5 style={{ margin: 0, padding: 0 }}>
                            <a href="tel:0354901750">
                              0354 901 750
                            </a>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="site-footer__social-box">
                    <h4 className="site-footer__social-title">
                      Theo dõi chúng tôi
                    </h4>
                    <div className="site-footer__social">
                      <a aria-label="Facebook" href="https://facebook.com" rel="noreferrer" target="_blank">
                        <span className="icon-facebook-app-symbol">
                        </span>
                      </a>
                      <a aria-label="Pinterest" href="https://pinterest.com" rel="noreferrer" target="_blank">
                        <span className="icon-pinterest">
                        </span>
                      </a>
                      <a aria-label="LinkedIn" href="https://linkedin.com" rel="noreferrer" target="_blank">
                        <span className="icon-linkedin-big-logo">
                        </span>
                      </a>
                      <a aria-label="Instagram" href="https://instagram.com" rel="noreferrer" target="_blank">
                        <span className="icon-instagram">
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="site-footer__top-right">
                  <div className="site-footer__top-right-heading-box">
                    <div className="site-footer__shape-1 float-bob-x">
                      <img alt="" src="/legacy/assets/images/shapes/site-footer-shape-1.png" />
                    </div>
                    <h3 className="site-footer__top-right-heading-title">
                      Đồng hành cùng bạn
                      <br />
                      trên con đường khám phá
                      <br />
                      tri thức mới.
                    </h3>
                    <div className="site-footer__top-right-heading-img">
                      <img alt="" src="/legacy/assets/images/resources/site-footer-top-right-heading-img.png" />
                    </div>
                  </div>
                  <div className="site-footer__widget-box">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="footer-widget__quick-links">
                          <h4 className="footer-widget__title">Truy cập nhanh</h4>
                          <ul className="footer-widget__quick-links-list list-unstyled">
                            <li>
                              <a href="/">
                                <span className="icon-next"></span>{' '}
                                Trang chủ
                              </a>
                            </li>
                            <li>
                              <a href="/about">
                                <span className="icon-next"></span>{' '}
                                Về chúng tôi
                              </a>
                            </li>
                            <li>
                              <a href="/contact">
                                <span className="icon-next"></span>{' '}
                                Liên hệ
                              </a>
                            </li>
                            <li>
                              <a href="/contact">
                                <span className="icon-next"></span>{' '}
                                Câu hỏi thường gặp
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <span className="icon-next"></span>{' '}
                                Bài viết
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="footer-widget__essential-links">
                          <h4 className="footer-widget__title">
                            Thông tin
                          </h4>
                          <ul className="footer-widget__quick-links-list list-unstyled">
                            <li>
                              <a href="/about">
                                <span className="icon-next"></span>{' '}
                                Câu chuyện ZakaEdu
                              </a>
                            </li>
                            <li>
                              <a href="/about">
                                <span className="icon-next"></span>{' '}
                                Điều khoản
                              </a>
                            </li>
                            <li>
                              <a href="/about">
                                <span className="icon-next"></span>{' '}
                                Chính sách bảo mật
                              </a>
                            </li>
                            <li>
                              <a href="/contact">
                                <span className="icon-next"></span>{' '}
                                Hỗ trợ
                              </a>
                            </li>
                            <li>
                              <a href="/about">
                                <span className="icon-next"></span>{' '}
                                Đội ngũ
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="footer-widget__services-links">
                          <h4 className="footer-widget__title">
                            Chương trình học
                          </h4>
                          <ul className="footer-widget__quick-links-list list-unstyled">
                            <li>
                              <a href="/services">
                                <span className="icon-next"></span>{' '}
                                Mầm non
                              </a>
                            </li>
                            <li>
                              <a href="/services">
                                <span className="icon-next"></span>{' '}
                                Tiểu học
                              </a>
                            </li>
                            <li>
                              <a href="/services">
                                <span className="icon-next"></span>{' '}
                                Luyện thi chứng chỉ Cambridge
                              </a>
                            </li>
                            <li>
                              <a href="/services">
                                <span className="icon-next"></span>{' '}
                                Luyện thi IELTS
                              </a>
                            </li>
                            <li>
                              <a href="/services">
                                <span className="icon-next"></span>{' '}
                                Luyện âm
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="site-footer__tearms-and-condition">
                    <ul className="list-unstyled site-footer__tearms-and-condition-list">
                      <li>
                        <div className="icon">
                          <span className="icon-file">
                          </span>
                        </div>
                        <div className="content">
                          <h4>
                            <a href="/about">
                              Xem tài liệu điều khoản
                              <br />
                              và điều kiện tại đây
                            </a>
                          </h4>
                          <p>
                            Tải xuống ngay
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-medal">
                          </span>
                        </div>
                        <div className="content">
                          <h4>
                            <a href="/about">
                              Trung tâm uy tín chất lượng,
                              <br />
                              người bạn đồng hành đáng tin cậy
                            </a>
                          </h4>
                          <div className="site-footer__tearms-and-condition-star">
                            <span className="icon-star">
                            </span>
                            <span className="icon-star">
                            </span>
                            <span className="icon-star">
                            </span>
                            <span className="icon-favorite">
                            </span>
                            <span className="icon-favorite">
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="site-footer__subscribe-form-box">
                  <form className="site-footer__subscribe-form">
                    <div className="site-footer__subscribe-input">
                      <input placeholder="Địa chỉ Email" type="email" />
                    </div>
                    <button className="site-footer__subscribe-btn" type="submit">
                      <span className="icon-send">
                      </span>
                      Đăng ký
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="site-footer__bottom-text-box">
                  <p className="site-footer__bottom-text">
                    Copyright © 2025 by
                    <a href="https://zakaedu.vn"> ZakaEdu. </a>
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/*Site Footer End*/}
    </>
  )
}
