export default function HomeSearchPopup() {
  return (
    <>
  <div className="search-popup">
    <div className="color-layer">
    </div>
    <button aria-label="Close search" className="close-search" type="button">
      <span className="far fa-times fa-fw">
      </span>
    </button>
    <form action="/blog" method="get">
      <div className="form-group">
        <input name="q" placeholder="Search Here" required type="search" defaultValue />
        <button type="submit">
          <i className="fas fa-search">
          </i>
        </button>
      </div>
    </form>
  </div>
  {/* End Search Popup */}
    </>
  )
}
