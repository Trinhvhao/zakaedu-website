import { useState } from 'react'

const SUBJECT_OPTIONS = [
  'Type Of Service 01',
  'Type Of Service 02',
  'Type Of Service 03',
  'Type Of Service 04',
  'Type Of Service 05',
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

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Email format is invalid.'
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter your phone number.'
    if (!formData.subject) nextErrors.subject = 'Please choose a service.'
    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }

    return nextErrors
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setResult('Please correct highlighted fields and submit again.')
      return
    }

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setResult('Message sent successfully. Our team will contact you shortly.')
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
              'url("/legacy/assets/images/assets/images/shapes/contact-one-shape-bg.png")',
          }}
        />
        <div
          className="contact-one__shape-1"
          style={{
            backgroundImage:
              'url("/legacy/assets/images/assets/images/shapes/contact-one-shape-1.png")',
          }}
        />
        <div className="contact-one__shape-2 zoom-fade">
          <img alt="" src="/legacy/assets/images/assets/images/shapes/contact-one-shape-2.png" />
        </div>
        <div className="contact-one__shape-3 zoom-fade">
          <img alt="" src="/legacy/assets/images/assets/images/shapes/contact-one-shape-3.png" />
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
                      src="/legacy/assets/images/assets/images/resources/contact-one-img-main.jpg"
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
                      src="/legacy/assets/images/assets/images/resources/contact-one-small-img-1.jpg"
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
                      src="/legacy/assets/images/assets/images/resources/contact-one-small-img-2.jpg"
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
                    <span className="section-title__tagline">CALL TO ACTION</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    lets you connect with experts,
                    get advice, advice, and explore solutions
                  </h2>
                </div>
                <div className="contact-one__inner">
                  <form className="contact-one__form" noValidate onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-one__input-box">
                          <input
                            name="name"
                            placeholder="Name*"
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
                            placeholder="Phone*"
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
                              <option value="">Subjects*</option>
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
                            placeholder="Write a your Message"
                            value={formData.message}
                            onChange={updateField('message')}
                          />
                          {errors.message ? <small>{errors.message}</small> : null}
                        </div>
                        <div className="contact-one__btn-box">
                          <button className="thm-btn" type="submit" disabled={submitting}>
                            {submitting ? 'Sending...' : 'Send Message'}
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
                        <p>Send Email</p>
                        <h4>
                          <a href="mailto:support@mail.com">support@mail.com</a>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="contact-one__call-icon">
                        <span className="icon-phone-call" />
                      </div>
                      <div className="contact-one__call-contact">
                        <p>Call Us Any TIme</p>
                        <h4>
                          <a href="tel:+12004578960">+12 (00) 457 8960</a>
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
