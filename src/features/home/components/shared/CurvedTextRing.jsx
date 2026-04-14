import { useId } from 'react'

export default function CurvedTextRing({ text, className = '', reverse = false, radius = 76 }) {
  const rawId = useId()
  const pathId = `curved-text-${rawId.replace(/[:]/g, '')}`
  const viewBoxSize = radius * 2 + 24
  const center = viewBoxSize / 2
  const path = `M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`

  return (
    <div className={className} aria-hidden="true">
      <svg className={`react-curved-text ${reverse ? 'is-reverse' : ''}`} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        <defs>
          <path d={path} id={pathId} />
        </defs>
        <text>
          <textPath href={`#${pathId}`} startOffset={reverse ? '100%' : '0%'} textAnchor={reverse ? 'end' : 'start'}>
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}