import { useId } from 'react'

export default function CurvedTextRing({ text, className = '', arc = 'top' }) {
  const rawId = useId()
  const pathId = `curved-text-${rawId.replace(/[:]/g, '')}`

  const viewBoxWidth = 260
  const viewBoxHeight = 90
  const paddingX = 10
  const paddingY = 10
  const startX = paddingX
  const endX = viewBoxWidth - paddingX
  const radiusX = (endX - startX) / 2
  const radiusY = viewBoxHeight / 2 - paddingY
  const baselineY = arc === 'bottom' ? paddingY : viewBoxHeight - paddingY
  const sweepFlag = arc === 'bottom' ? 1 : 0
  const path = `M ${startX},${baselineY} A ${radiusX},${radiusY} 0 0 ${sweepFlag} ${endX},${baselineY}`

  return (
    <div className={className} aria-hidden="true">
      <svg className="react-curved-text" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <defs>
          <path d={path} id={pathId} />
        </defs>
        <text>
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}