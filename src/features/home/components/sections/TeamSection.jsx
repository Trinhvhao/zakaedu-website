const TEAM_MEMBERS = [
  {
    name: 'Emily Carter',
    role: 'Operations Manager',
    image: '/legacy/assets/images/assets/images/team/team-1-1.jpg',
  },
  {
    name: 'Michael Bennett',
    role: 'Team Leader',
    image: '/legacy/assets/images/assets/images/team/team-1-2.jpg',
  },
  {
    name: 'Sophia Ramirez',
    role: 'Quality Control Supervisor',
    image: '/legacy/assets/images/assets/images/team/team-1-3.jpg',
  },
  {
    name: 'Ethan Collins',
    role: 'Customer Service Coordinator',
    image: '/legacy/assets/images/assets/images/team/team-1-4.jpg',
  },
  {
    name: 'Ava Thompson',
    role: 'Client Success Specialist',
    image: '/legacy/assets/images/assets/images/team/team-1-2.jpg',
  },
]

export default function TeamSection() {
  return (
    <>
      <section className="team-one" id="team">
        <div className="team-one__shape-1 float-bob-y">
          <img alt="" src="/legacy/assets/images/assets/images/shapes/team-one-shape-1.png" />
        </div>
        <div className="team-one__shape-2 float-bob-x">
          <img alt="" src="/legacy/assets/images/assets/images/shapes/team-one-shape-2.png" />
        </div>
        <div className="team-one__shape-3" />
        <div className="team-one__shape-4" />
        <div className="container">
          <div className="section-title text-left sec-title-animation animation-style2">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-box">
                <div className="section-title__tagline-shape" />
                <div className="section-title__tagline-shape-2" />
              </div>
              <span className="section-title__tagline">OUR Team Member</span>
            </div>
            <h2 className="section-title__title title-animation">
              Meet the Experts Behind Our
              <br />
              Success.
              <span>Our Dedicated Team at</span>
              <br />
              <span>Your Service</span>
            </h2>
          </div>

          <div className="team-grid-react">
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
