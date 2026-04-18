import { useState } from 'react'

export default function ImageCompareSlider({ beforeSrc, afterSrc, alt = '' }) {
  const [position, setPosition] = useState(50)

  const handleChange = (event) => {
    setPosition(Number(event.target.value))
  }

  return (
    <div className="react-compare" style={{ '--compare-position': `${position}%` }}>
      <img className="react-compare-after" src={afterSrc} alt={alt} />
      <img className="react-compare-before" src={beforeSrc} alt={alt} />
      <div className="react-compare-divider" aria-hidden="true" />
      <div className="react-compare-handle" aria-hidden="true">
        <span className="react-compare-handle-icon">↔</span>
      </div>
      <input
        className="react-compare-range"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={handleChange}
        aria-label="Compare before and after images"
      />
    </div>
  )
}
