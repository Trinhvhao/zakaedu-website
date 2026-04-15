import { useMemo, useState } from 'react'
import ReactMarqueeList from '../shared/ReactMarqueeList'

const FILTERS = [
  { key: 'all', label: 'Tất cả', icon: 'icon-catagory' },
  { key: 'corporate', label: 'Lộ trình Cambridge', icon: 'icon-pen-ruler' },
  { key: 'house', label: 'CLB giao tiếp', icon: 'icon-computer' },
  { key: 'cargarage', label: 'Đọc & Viết', icon: 'icon-bullhorn' },
  { key: 'bakery', label: 'STEM tiếng Anh', icon: 'icon-bullhorn' },
  { key: 'sparklyclean', label: 'Đồng hành phụ huynh', icon: 'icon-bullhorn' },
]

const PROJECT_ITEMS = [
  {
    type: 'project',
    key: 'project-1',
    image: '/legacy/assets/images/project/project-1-1.png',
    tag: 'Luyện thi',
    date: 'Liên tục',
    title: 'Luyện thi TOEIC & IELTS',
    categories: ['corporate', 'bakery'],
  },
  {
    type: 'project',
    key: 'project-2',
    image: '/legacy/assets/images/project/project-1-2.png',
    tag: 'Lộ trình',
    date: 'Liên tục',
    title: 'Luyện ôn thi các cấp Cambridge (Starters, Movers, Flyers)',
    categories: ['corporate', 'bakery'],
  },
  {
    type: 'project',
    key: 'project-3',
    image: '/legacy/assets/images/project/project-1-3.png',
    tag: 'Cá nhân',
    date: 'Liên tục',
    title: 'Lộ trình cá nhân hóa cho trẻ',
    categories: ['house', 'sparklyclean', 'bakery'],
  },
  {
    type: 'project',
    key: 'project-4',
    image: '/legacy/assets/images/project/project-1-4.png',
    tag: 'Nâng cao',
    date: 'Liên tục',
    title: 'Khóa nâng cao kỹ năng giao tiếp',
    categories: ['house', 'sparklyclean', 'bakery'],
  },
  {
    type: 'project',
    key: 'project-5',
    image: '/legacy/assets/images/project/project-1-5.png',
    tag: 'Gia sư',
    date: 'Liên tục',
    title: 'Gia sư tại nhà',
    categories: ['corporate', 'bakery', 'house'],
  },
  {
    type: 'cta',
    key: 'project-cta',
    image: '/legacy/assets/images/resources/banner-one-img-1.svg',
    categories: ['sparklyclean', 'house', 'bakery'],
  },
]

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleItems = useMemo(() => {
    if (activeFilter === 'all') return PROJECT_ITEMS
    return PROJECT_ITEMS.filter((item) => item.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <>
      <section className="project-one" id="project">
        <div
          className="project-one__bg-shape"
          style={{
            backgroundImage:
              'url("/legacy/assets/images/shapes/project-one-bg-shape.png")',
          }}
        />
        <div
          className="project-one__bg-shape-2"
          style={{
            backgroundImage:
              'url("/legacy/assets/images/shapes/project-one-bg-shape-2.png")',
          }}
        />
        <div className="project-one__shape-1" />
        <div className="project-one__shape-2" />
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-box">
                <div className="section-title__tagline-shape" />
                <div className="section-title__tagline-shape-2" />
              </div>
              <span className="section-title__tagline">Các khóa học tại ZakaEdu</span>
            </div>
            <h2 className="section-title__title title-animation">
              Khám Phá
              <br />
              <span>
                Các Khóa Học Tại ZakaEdu
              </span>
            </h2>
          </div>
          <div className="project-one__inner">
            <ul className="project-one__filter style1 project-filter-react list-unstyled clearfix">
              {FILTERS.map((filter) => (
                <li
                  key={filter.key}
                  className={activeFilter === filter.key ? 'active' : ''}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  <p>
                    <span className={filter.icon} />
                    {filter.label}
                  </p>
                </li>
              ))}
            </ul>
            <div className="row project-filter-layout">
              {visibleItems.map((item) => {
                if (item.type === 'cta') {
                  return (
                    <div key={item.key} className="col-xl-4 col-lg-4 col-md-6">
                      <div className="project-one__single-2">
                        <div className="project-one__single-2-img">
                          <img alt="" src={item.image} />
                        </div>
                        <h3 className="project-one__title-2">
                          <a href="/legacy/pages/project-details/index.html">
                            Bạn đang tìm lộ trình tiếng Anh phù hợp cho bé?
                          </a>
                        </h3>
                        <div className="project-one__view-box-2">
                          <a
                            className="project-one__view-2"
                            href="/legacy/pages/project-details/index.html"
                          >
                            <i className="icon-diagonal-arrow" />
                            <span>
                              Xem thêm
                              <br />
                              chương trình
                            </span>
                          </a>
                        </div>
                        <ReactMarqueeList duration={20} listClassName="project-one__sliding-text-list list-unstyled">
                          <li>
                            <h2
                              className="project-one__sliding-text-title"
                              data-hover="Liên hệ ngay"
                            >
                              Liên hệ
                              ngay
                            </h2>
                          </li>
                        </ReactMarqueeList>
                        <div className="project-one__need-help">
                          <p>Cần tư vấn?</p>
                          <a href="tel:0354901750">0354 901 750</a>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <div key={item.key} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="project-one__single">
                      <div className="project-one__img-box">
                        <div className="project-one__img">
                          <img alt="" src={item.image} />
                        </div>
                        <div className="project-one__view-box">
                          <a className="project-one__view" href="/legacy/pages/project-details/index.html">
                            <i className="icon-diagonal-arrow" />
                            <span>Xem chi tiết</span>
                          </a>
                        </div>
                      </div>
                      <div className="project-one__content">
                        <p className="project-one__tag">
                          {item.tag}
                          <span className="icon-right-arrow" />
                          {item.date}
                        </p>
                        <h3 className="project-one__title">
                          <a href="/legacy/pages/project-details/index.html">{item.title}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/*Project One End*/}
      {/*Team One Start*/}
    </>
  )
}
