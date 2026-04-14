import ReactMarqueeList from '../shared/ReactMarqueeList'

export default function SlidingTextOneSection() {
  return (
    <>
    <section className="sliding-text-one">
      <div className="sliding-text-one__wrap">
        <ReactMarqueeList duration={30} listClassName="sliding-text__list list-unstyled">
          <li>
            <h2 className="sliding-text__title" data-hover="Phát âm">
              Phát âm
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text__title" data-hover="Giao tiếp">
              Giao tiếp
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text__title" data-hover="Đọc hiểu">
              Đọc hiểu
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text__title" data-hover="Viết">
              Viết
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text__title" data-hover="Tự tin">
              Tự tin
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text__title" data-hover="Sáng tạo">
              Sáng tạo
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
        </ReactMarqueeList>
      </div>
    </section>
    {/* Sliding Text One End */}
    {/* About One Start */}
    </>
  )
}
