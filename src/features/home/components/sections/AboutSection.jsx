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
                      <img alt="" src="/legacy/assets/images/resources/about-one-img-1.png" />
                    </div>
                    <div className="about-one__left-img-2">
                      <img alt="" src="/legacy/assets/images/resources/about-one-img-2.png" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                    <div className="about-one__left-img-box-2">
                      <div className="about-one__left-img-3 about-one__left-img-3--heart">
                      <img alt="" src="/legacy/assets/images/resources/about-one-img-3.png" />
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
              ZakaEdu
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
                    Về chúng tôi
                  </span>
                </div>
                <h2 className="section-title__title title-animation">
                  Nuôi dưỡng sự tự tin cho học viên nhỏ tuổi
                  bằng phương pháp hiện đại,{' '}
                  <span>
                    giáo viên tận tâm và tiến bộ đo được
                  </span>
                </h2>
              </div>
              <p className="about-one__text">
                Chúng tôi xây dựng hành trình học tập tích cực,
                giúp bé phát triển toàn diện.
              </p>
              <div className="about-one__client-box">
                <div className="about-one__client-img-box">
                  <div className="about-one__client-img">
                    <img alt="" src="/legacy/assets/images/resources/about-one-client-img-1.png" />
                  </div>
                </div>
                <div className="about-one__client-content">
                  <h5 className="about-one__title">
                    Học vững vàng, tự tin mỗi ngày
                  </h5>
                  <p className="about-one__client-text">
                    Mọi trẻ em đều có thể yêu tiếng Anh khi bài học
                    sinh động, thực tế và đúng trình độ.
                  </p>
                  <p className="about-one__sub-title">
                    Giám đốc trung tâm{' '}
                    <span>
                      Trang Trần
                    </span>
                  </p>
                  <p className="about-one__client-text-2">
                    Chúng tôi cam kết giúp bé giao tiếp tiếng Anh
                    tự nhiên và tự tin hơn mỗi ngày.
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
                      Lộ trình học cá nhân hóa
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Hoạt động trò chơi tương tác
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Phản hồi tiến bộ hàng tuần
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
                      Định hướng theo chuẩn quốc tế
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Giáo viên kinh nghiệm, thân thiện
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-star-1">
                      </span>
                    </div>
                    <p>
                      Môi trường học an toàn, truyền cảm hứng
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
                    Sứ mệnh & Tầm nhìn
                  </h3>
                  <p>
                    mang đến giáo dục tiếng Anh hiệu quả,
                    <br />
                    giúp mọi trẻ em phát triển toàn diện
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
