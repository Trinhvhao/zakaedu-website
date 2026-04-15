import { useRef } from 'react'

const TEAM_MEMBERS = [
  {
    name: 'Emily Carter',
    role: 'Giám đốc học vụ',
    image: '/legacy/assets/images/team/team-1-1.jpg',
  },
  {
    name: 'Michael Bennett',
    role: 'Giáo viên tiếng Anh cao cấp',
    image: '/legacy/assets/images/team/team-1-2.jpg',
  },
  {
    name: 'Sophia Ramirez',
    role: 'Chuyên gia phát âm',
    image: '/legacy/assets/images/team/team-1-3.jpg',
  },
  {
    name: 'Ethan Collins',
    role: 'Cố vấn CLB giao tiếp',
    image: '/legacy/assets/images/team/team-1-4.jpg',
  },
  {
    name: 'Ava Thompson',
    role: 'Chuyên viên đồng hành phụ huynh',
    image: '/legacy/assets/images/team/team-1-2.jpg',
  },
]

export default function TeamSection() {
  const trackRef = useRef(null)

  const slideTeamCards = (direction) => {
    const track = trackRef.current

    if (!track) return

    const maxScrollLeft = track.scrollWidth - track.clientWidth

    if (direction < 0 && track.scrollLeft <= 4) {
      track.scrollTo({ left: maxScrollLeft, behavior: 'smooth' })
      return
    }

    if (direction > 0 && track.scrollLeft >= maxScrollLeft - 4) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    const firstItem = track.querySelector('.item')
    const cardWidth = firstItem ? firstItem.getBoundingClientRect().width : track.clientWidth * 0.85
    const computedStyles = window.getComputedStyle(track)
    const gap = parseFloat(computedStyles.columnGap || computedStyles.gap || '0')

    track.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <>
      <section className="team-one" id="team">
        <div className="team-one__shape-1 float-bob-y">
          <img alt="" src="/legacy/assets/images/shapes/team-one-shape-1.png" />
        </div>
        <div className="team-one__shape-2 float-bob-x">
          <img alt="" src="/legacy/assets/images/shapes/team-one-shape-2.png" />
        </div>
        <div className="team-one__shape-3" />
        <div className="team-one__shape-4" />
        <div className="container">
          <div className="team-slider-react__header">
            <div className="section-title text-left sec-title-animation animation-style2">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-box">
                  <div className="section-title__tagline-shape" />
                  <div className="section-title__tagline-shape-2" />
                </div>
                <span className="section-title__tagline">Đội ngũ giảng dạy</span>
              </div>
              <h2 className="section-title__title title-animation">
                Gặp gỡ đội ngũ thầy cô tận tâm
                <br />
                đồng hành cùng bé tại
                <br />
                <span>trung tâm ZakaEdu</span>
              </h2>
            </div>

            <div className="team-slider-react__controls" aria-label="Điều hướng danh sách giảng viên">
              <button
                aria-label="Xem giảng viên trước"
                className="team-slider-react__btn team-slider-react__btn--prev"
                onClick={() => slideTeamCards(-1)}
                type="button"
              >
                <span className="icon-right-arrow" />
              </button>
              <button
                aria-label="Xem giảng viên tiếp theo"
                className="team-slider-react__btn team-slider-react__btn--next"
                onClick={() => slideTeamCards(1)}
                type="button"
              >
                <span className="icon-right-arrow" />
              </button>
            </div>
          </div>

          <div className="team-grid-react team-slider-react__track" ref={trackRef}>
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="item">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img alt={member.name} src={member.image} />
                    </div>
                    <div className="team-one__share-and-social">
                      <div className="team-one__share">
                        <span className="icon-share" />
                      </div>
                      <div className="team-one__social">
                        <a aria-label="Facebook" href="https://facebook.com" rel="noreferrer" target="_blank">
                          <span className="icon-facebook-app-symbol" />
                        </a>
                        <a aria-label="Pinterest" href="https://pinterest.com" rel="noreferrer" target="_blank">
                          <span className="icon-pinterest" />
                        </a>
                        <a aria-label="LinkedIn" href="https://linkedin.com" rel="noreferrer" target="_blank">
                          <span className="icon-linkedin-big-logo" />
                        </a>
                        <a aria-label="Instagram" href="https://instagram.com" rel="noreferrer" target="_blank">
                          <span className="icon-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-one__content">
                    <div className="team-one__title-box">
                      <h3 className="team-one__title">
                        <a href="/team">{member.name}</a>
                      </h3>
                      <p className="team-one__sub-title">{member.role}</p>
                    </div>
                    <div className="team-one__arrow">
                      <a aria-label={`View ${member.name} profile`} href="/team">
                        <span className="icon-diagonal-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Team One End*/}
      {/*Contact One Start*/}
    </>
  )
}
