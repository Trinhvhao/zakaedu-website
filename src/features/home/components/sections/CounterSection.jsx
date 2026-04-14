import ReactCountUp from '../shared/ReactCountUp'

export default function CounterSection() {
  return (
    <>
    <section className="counter-one">
      <div className="counter-one__bg-shape" style={{backgroundImage: 'url("/legacy/assets/images/assets/images/shapes/counter-one-bg-shape.png")'}}>
      </div>
      <div className="counter-one__shape-1 float-bob-y">
        <img alt="" src="/legacy/assets/images/assets/images/shapes/counter-one-shape-1.png" />
      </div>
      <div className="counter-one__shape-2 float-bob-x">
        <img alt="" src="/legacy/assets/images/assets/images/shapes/counter-one-shape-2.png" />
      </div>
      <div className="container">
        <ul className="row list-unstyled">
          <li className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-one__single">
              <div className="counter-one__icon">
                <span className="icon-completed-task">
                </span>
              </div>
              <div className="counter-one__content">
                <div className="counter-one__count-box">
                  <p>
                    <ReactCountUp end={100} />
                  </p>
                  <span>
                    +
                  </span>
                </div>
                <p className="counter-one__count-text">
                  Projects Done per month
                </p>
              </div>
            </div>
          </li>
          <li className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-one__single">
              <div className="counter-one__icon">
                <span className="icon-review">
                </span>
              </div>
              <div className="counter-one__content">
                <div className="counter-one__count-box">
                  <p>
                    <ReactCountUp end={98} />
                  </p>
                  <span>
                    %
                  </span>
                </div>
                <p className="counter-one__count-text">
                  Trusted by happy Customer!
                </p>
              </div>
            </div>
          </li>
          <li className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-one__single">
              <div className="counter-one__icon">
                <span className="icon-experience">
                </span>
              </div>
              <div className="counter-one__content">
                <div className="counter-one__count-box">
                  <p>
                    <ReactCountUp end={12} />
                  </p>
                  <span>
                    k
                  </span>
                  <span>
                    +
                  </span>
                </div>
                <p className="counter-one__count-text">
                  Positive Rating in Trustpilot
                </p>
              </div>
            </div>
          </li>
          <li className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-one__single">
              <div className="counter-one__icon">
                <span className="icon-costumer">
                </span>
              </div>
              <div className="counter-one__content">
                <div className="counter-one__count-box">
                  <p>
                    <ReactCountUp end={35} />
                  </p>
                  <span>
                    m
                  </span>
                </div>
                <p className="counter-one__count-text">
                  Rating in oy local City Network
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    {/* Counter One End */}
    {/*Before And After Start*/}
    </>
  )
}
