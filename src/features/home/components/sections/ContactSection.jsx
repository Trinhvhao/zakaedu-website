import { useState } from 'react'

const SUBJECT_OPTIONS = [
  'Kiểm tra đầu vào miễn phí',
  'Đăng ký học thử',
  'Tư vấn khóa học',
  'Học phí và lịch học',
  'Hợp tác và kết nối',
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const updateField = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
    setResult('')
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Vui lòng nhập họ tên.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Vui lòng nhập email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Định dạng email không hợp lệ.'
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Vui lòng nhập số điện thoại.'
    if (!formData.subject) nextErrors.subject = 'Vui lòng chọn chương trình.'
    if (!formData.message.trim()) {
      nextErrors.message = 'Vui lòng nhập nội dung.'
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Nội dung cần từ 10 ký tự trở lên.'
    }

    return nextErrors
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setResult('Vui lòng kiểm tra các trường đang báo lỗi.')
      return
    }

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setResult('Gửi thành công. Trung tâm sẽ liên hệ với bạn sớm.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 650)
  }

  return (
    <>
      <section className="contact-one" id="contact">
        <div
          className="contact-one__bg"
          style={{
            backgroundImage:
              'url("/legacy/assets/images/shapes/contact-one-shape-bg.png")',
          }}
        />
        <div
          className="contact-one__shape-1"
          style={{
            backgroundImage:
              'url("/legacy/assets/images/shapes/contact-one-shape-1.png")',
          }}
        />
        <div className="contact-one__shape-2 zoom-fade">
          <img alt="" src="/legacy/assets/images/shapes/contact-one-shape-2.png" />
        </div>
        <div className="contact-one__shape-3 zoom-fade">
          <img alt="" src="/legacy/assets/images/shapes/contact-one-shape-3.png" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="contact-one__left slideInLeft"
                data-reveal="true"
                data-reveal-delay="100ms"
                data-reveal-duration="2500ms"
              >
                <div className="contact-one__img-box">
                  <div className="contact-one__img-main">
                    <img
                      alt=""
                      src="/legacy/assets/images/resources/contact-one-img-main.png"
                    />
                  </div>
                  <div
                    className="contact-one__small-img-1 zoomIn"
                    data-reveal="true"
                    data-reveal-delay="500ms"
                    data-reveal-duration="2500ms"
                  >
                    <img
                      alt=""
                      src="/legacy/assets/images/resources/contact-one-small-img-1.png"
                    />
                  </div>
                  <div
                    className="contact-one__small-img-2 zoomIn"
                    data-reveal="true"
                    data-reveal-delay="700ms"
                    data-reveal-duration="2500ms"
                  >
                    <img
                      alt=""
                      src="/legacy/assets/images/resources/contact-one-small-img-2.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contact-one__right">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-box">
                      <div className="section-title__tagline-shape" />
                      <div className="section-title__tagline-shape-2" />
                    </div>
                    <span className="section-title__tagline">Kết nối ngay</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Nhận tư vấn lộ trình học tiếng Anh
                    cá nhân hóa phù hợp cho bé
                  </h2>
                </div>
                <div className="contact-one__inner">
                  <form className="contact-one__form" noValidate onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__input-box">
                          <input
                            name="name"
                            placeholder="Họ tên*"
                            required
                            type="text"
                            value={formData.name}
                            onChange={updateField('name')}
                          />
                          {errors.name ? <small>{errors.name}</small> : null}
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__input-box">
                          <input
                            name="email"
                            placeholder="Email*"
                            required
                            type="email"
                            value={formData.email}
                            onChange={updateField('email')}
                          />
                          {errors.email ? <small>{errors.email}</small> : null}
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__input-box">
                          <input
                            name="phone"
                            placeholder="Số điện thoại*"
                            required
                            type="text"
                            value={formData.phone}
                            onChange={updateField('phone')}
                          />
                          {errors.phone ? <small>{errors.phone}</small> : null}
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__input-box">
                          <div className="select-box">
                            <select
                              className="ignore"
                              value={formData.subject}
                              onChange={updateField('subject')}
                            >
                              <option value="">Chủ đề*</option>
                              {SUBJECT_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </div>
                          {errors.subject ? <small>{errors.subject}</small> : null}
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Hãy cho chúng tôi biết độ tuổi và mục tiêu của bé"
                            value={formData.message}
                            onChange={updateField('message')}
                          />
                          {errors.message ? <small>{errors.message}</small> : null}
                        </div>
                        <div className="contact-one__btn-box">
                          <button className="thm-btn" type="submit" disabled={submitting}>
                            {submitting ? 'Đang gửi...' : 'Gửi thông tin'}
                            <span>
                              <i className="icon-diagonal-arrow" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="result">{result}</div>
                </div>
                <div className="contact-one__call-box">
                  <ul className="contact-one__call-list list-unstyled">
                    <li>
                      <div className="contact-one__call-icon">
                        <span className="icon-envelope" />
                      </div>
                      <div className="contact-one__call-contact">
                        <p>Email liên hệ</p>
                        <h4>
                          <a href="mailto:zakaedu.contact@gmail.com">zakaedu.contact@gmail.com</a>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="contact-one__call-icon">
                        <span className="icon-phone-call" />
                      </div>
                      <div className="contact-one__call-contact">
                        <p>Hotline tư vấn</p>
                        <h4>
                          <a href="tel:0354901750">0354 901 750</a>
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact One End*/}
      {/*Testimonial One Start */}
    </>
  )
}
