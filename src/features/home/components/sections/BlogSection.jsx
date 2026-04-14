export default function BlogSection() {
  return (
    <>
    <section className="blog-one" id="blog">
      <div className="blog-one__shape-bg" style={{backgroundImage: 'url("/legacy/assets/images/shapes/blog-one-shape-bg.png")'}}>
      </div>
      <div className="container">
        <div className="blog-one__top">
          <div className="section-title text-left sec-title-animation animation-style2">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-box">
                <div className="section-title__tagline-shape">
                </div>
                <div className="section-title__tagline-shape-2">
                </div>
              </div>
              <span className="section-title__tagline">
                Góc chia sẻ
              </span>
            </div>
            <h2 className="section-title__title title-animation">
              Khám phá kiến thức và
              <span>
                mẹo thực hành
              </span>
              <br />
              <span>
                cho hành trình học tiếng Anh của bé
              </span>
            </h2>
          </div>
          <div className="blog-one__btn-box">
            <a className="thm-btn" href="/blog">
              Xem tất cả bài viết
              <span>
                <i className="icon-diagonal-arrow">
                </i>
              </span>
            </a>
          </div>
        </div>
        <div className="blog-one__bottom">
          <div className="row">
            {/*Blog One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 fadeInLeft"
              data-reveal="true"
              data-reveal-delay="0ms"
              data-reveal-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img alt="" src="/legacy/assets/images/blog/blog-1-1.jpg" />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      05
                    </p>
                    <span>
                      NOV
                    </span>
                  </div>
                  <ul className="list-unstyled blog-one__tag">
                    <li>
                      <a href="/blog">
                        Phụ huynh
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Tiếng Anh
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-one__content">
                  <h3 className="blog-one__title">
                    <a href="/blog">
                      10 cách vui để luyện
                      tiếng Anh tại nhà
                    </a>
                  </h3>
                  <p className="blog-one__text">
                    Những hoạt động ngắn mỗi ngày giúp bé nhớ từ vựng
                    và nói tự nhiên hơn.
                  </p>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 fadeInRight"
              data-reveal="true"
              data-reveal-delay="0ms"
              data-reveal-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__content blog-one__content--two">
                  <h3 className="blog-one__title">
                    <a href="/blog">
                      5 dấu hiệu cho thấy bé đã sẵn sàng
                      tham gia CLB giao tiếp
                    </a>
                  </h3>
                  <p className="blog-one__text">
                    Tìm hiểu cách hoạt động giao tiếp giúp tăng sự tự tin
                    và hiệu quả học tập trên lớp.
                  </p>
                </div>
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img alt="" src="/legacy/assets/images/blog/blog-1-2.jpg" />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      24
                    </p>
                    <span>
                      APR
                    </span>
                  </div>
                  <ul className="list-unstyled blog-one__tag">
                    <li>
                      <a href="/blog">
                        Giao tiếp
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Tự tin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 fadeInLeft"
              data-reveal="true"
              data-reveal-delay="0ms"
              data-reveal-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img alt="" src="/legacy/assets/images/blog/blog-1-3.jpg" />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      12
                    </p>
                    <span>
                      Sep
                    </span>
                  </div>
                  <ul className="list-unstyled blog-one__tag">
                    <li>
                      <a href="/blog">
                        Phát âm
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Đọc hiểu
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-one__content">
                  <h3 className="blog-one__title">
                    <a href="/blog">
                      Vì sao luyện phát âm
                      giúp bé đọc dễ hơn
                    </a>
                  </h3>
                  <p className="blog-one__text">
                    Hướng dẫn thực tế cho phụ huynh muốn đồng hành
                    kỹ năng đọc sớm cùng con.
                  </p>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 fadeInRight"
              data-reveal="true"
              data-reveal-delay="0ms"
              data-reveal-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__content blog-one__content--two">
                  <h3 className="blog-one__title">
                    <a href="/blog">
                      Tự học hay học có hướng dẫn:
                      Khi nào nên cho bé đến trung tâm?
                    </a>
                  </h3>
                  <p className="blog-one__text">
                    Hiểu rõ thời điểm lớp học bài bản giúp bé tiến bộ
                    nhanh và bền vững hơn.
                  </p>
                </div>
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img alt="" src="/legacy/assets/images/blog/blog-1-4.jpg" />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      30
                    </p>
                    <span>
                      DEC
                    </span>
                  </div>
                  <ul className="list-unstyled blog-one__tag">
                    <li>
                      <a href="/blog">
                        Mẹo học
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Lộ trình
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
          </div>
        </div>
      </div>
    </section>
    {/*Blog One End*/}
    {/*Newsletter One Start*/}
    </>
  )
}
