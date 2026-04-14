import ReactMarqueeList from '../shared/ReactMarqueeList'

export default function SlidingTextTwoSection() {
  return (
    <>
    <section className="sliding-text-two">
      <div className="sliding-text-one__wrap">
        <ReactMarqueeList duration={30} listClassName="sliding-text-two__list list-unstyled">
          <li>
            <h2 className="sliding-text-two__title" data-hover="Organizing">
              Organizing
              <img alt="" src="/legacy/assets/images/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Sanitizing">
              Sanitizing
              <img alt="" src="/legacy/assets/images/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Mopping">
              Mopping
              <img alt="" src="/legacy/assets/images/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Dusting">
              Dusting
              <img alt="" src="/legacy/assets/images/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Vacuuming">
              Vacuuming
              <img alt="" src="/legacy/assets/images/assets/images/shapes/sliding-text-shape-1.png" />
            </h2>
          </li>
          <li>
            <h2 className="sliding-text-two__title" data-hover="Polishing">
              Polishing
              <img alt="" src="/legacy/assets/images/assets/images/shapes/sliding-text-shape-1.png" />
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
