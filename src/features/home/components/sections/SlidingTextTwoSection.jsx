import ReactMarqueeList from '../shared/ReactMarqueeList'

export default function SlidingTextTwoSection() {
  return (
    <>
    <section className="sliding-text-two">
      <div className="sliding-text-one__wrap">
        <ReactMarqueeList duration={30} listClassName="sliding-text-two__list list-unstyled">
          <li>
            <h2 className="sliding-text-two__title" data-hover="Từ Vựng">
              Từ vựng
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Phát Âm">
              Phát âm
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Ngữ Pháp">
              Ngữ pháp
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Dự án">
              Dự án
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Làm việc nhóm">
              Làm việc nhóm
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Thành tựu">
              Thành tựu
              <img alt="" src="/legacy/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
        </ReactMarqueeList>
      </div>
    </section>
    {/* Sliding Text Two End */}
    {/* Counter One Start */}
    </>
  )
}
