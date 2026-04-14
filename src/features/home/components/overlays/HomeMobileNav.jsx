export default function HomeMobileNav() {
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler">
        </div>
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times">
            </i>
          </span>
          <div className="logo-box">
            <a aria-label="logo image" href="/home">
              <img alt="ZakaEdu logo" src="/legacy/assets/images/resources/logo-2.png" width={150} />
            </a>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list one-page-scroll-menu list-unstyled">
              <li className="scrollToLink">
                <a href="#home">Trang chủ</a>
              </li>
              <li className="scrollToLink">
                <a href="#about">Về chúng tôi</a>
              </li>
              <li className="scrollToLink">
                <a href="#services">Chương trình</a>
              </li>
              <li className="scrollToLink">
                <a href="#project">Project</a>
              </li>
              <li className="scrollToLink">
                <a href="#team">Đội ngũ</a>
              </li>
              <li className="scrollToLink">
                <a href="#contact">Liên hệ</a>
              </li>
              <li className="scrollToLink">
                <a href="#blog">Tin tức</a>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope">
              </i>
              <a href="mailto:zakaedu.contact@gmail.com">
                zakaedu.contact@gmail.com
              </a>
            </li>
            <li>
              <i className="fas fa-phone">
              </i>
              <a href="tel:0354901750">
                0354 901 750
              </a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a aria-label="X" className="fab fa-twitter" href="https://x.com" rel="noreferrer" target="_blank">
              </a>
              <a aria-label="Facebook" className="fab fa-facebook-square" href="https://facebook.com" rel="noreferrer" target="_blank">
              </a>
              <a aria-label="Pinterest" className="fab fa-pinterest-p" href="https://pinterest.com" rel="noreferrer" target="_blank">
              </a>
              <a aria-label="Instagram" className="fab fa-instagram" href="https://instagram.com" rel="noreferrer" target="_blank">
              </a>
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}
    </>
  )
}
