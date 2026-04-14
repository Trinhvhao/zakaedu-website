import ImageCompareSlider from '../shared/ImageCompareSlider'

export default function TrướcAfterSection() {
  return (
    <>
    <section className="before-and-after">
      <div className="before-and-after__bg-shape" style={{backgroundImage: 'url("/legacy/assets/images/shapes/before-and-after-bg-shape.png")'}}>
      </div>
      <div className="before-and-after__shape-1 float-bob-y">
        <img alt="" src="/legacy/assets/images/shapes/before-and-after-shape-1.png" />
      </div>
      <div className="before-and-after__shape-2 float-bob-x">
        <img alt="" src="/legacy/assets/images/shapes/before-and-after-shape-2.png" />
      </div>
      <div className="before-and-after__shape-3 float-bob-y">
        <img alt="" src="/legacy/assets/images/shapes/before-and-after-shape-3.png" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="before-and-after__left">
              <div className="before-and-after__img-box">
                <div className="before-after">
                    <ImageCompareSlider
                      beforeSrc="/legacy/assets/images/resources/before-and-after-img.jpg"
                      afterSrc="/legacy/assets/images/resources/before-and-after-img-2.jpg"
                      alt="Trước and after student learning progress"
                    />
                </div>
                <div className="before-and-after__tag">
                  <span>
                    Trước
                  </span>
                </div>
                <div className="before-and-after__tag before-and-after__tag-2">
                  <span>
                    SAU
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="before-and-after__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape-box">
                    <div className="section-title__tagline-shape">
                    </div>
                    <div className="section-title__tagline-shape-2">
                    </div>
                  </div>
                  <span className="section-title__tagline">
                    Trước & Sau
                  </span>
                </div>
                <h2 className="section-title__title title-animation">
                  Hành trình
                  {' '}
                  <span>
                    tiến bộ của học viên
                  </span>
                </h2>
              </div>
              <p className="before-and-after__text">
                Theo dõi sự thay đổi của bé từ nền tảng cơ bản
                đến giao tiếp tự tin qua lộ trình hướng dẫn rõ ràng.
              </p>
              <ul className="before-and-after__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-star-1">
                    </span>
                  </div>
                  <p>
                    Đánh giá đầu vào trước khi nhập học
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-star-1">
                    </span>
                  </div>
                  <p>
                    Kiểm tra phát âm và giao tiếp hàng tuần
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-star-1">
                    </span>
                  </div>
                  <p>
                    Kết quả học tập đo được gửi đến phụ huynh
                  </p>
                </li>
              </ul>
              <ul className="before-and-after__img-list list-unstyled">
                <li>
                  <div className="before-and-after__img-list-img">
                    <img alt="" src="/legacy/assets/images/resources/before-and-after-img-list-img-1.jpg" />
                  </div>
                </li>
                <li>
                  <div className="before-and-after__img-list-img">
                    <img alt="" src="/legacy/assets/images/resources/before-and-after-img-list-img-2.jpg" />
                  </div>
                </li>
                <li>
                  <div className="before-and-after__img-list-img">
                    <img alt="" src="/legacy/assets/images/resources/before-and-after-img-list-img-3.jpg" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Trước And After End*/}
    {/*Why Choose One Start*/}
    </>
  )
}
