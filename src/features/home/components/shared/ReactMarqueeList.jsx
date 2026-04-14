import { Children, cloneElement, isValidElement, useMemo } from 'react'

function cloneForTrack(node, keyPrefix) {
  if (!isValidElement(node)) return node

  const isNativeTag = typeof node.type === 'string'
  const isFocusableTag = isNativeTag && ['a', 'button', 'input', 'select', 'textarea'].includes(node.type)

  const clonedChildren = node.props?.children
    ? Children.map(node.props.children, (child, index) =>
        cloneForTrack(child, `${keyPrefix}-${index}`),
      )
    : node.props.children

  return cloneElement(node, {
    key: keyPrefix,
    'aria-hidden': true,
    ...(isFocusableTag ? { tabIndex: -1 } : {}),
    children: clonedChildren,
  })
}

export default function ReactMarqueeList({
  listClassName,
  duration = 30,
  reverse = false,
  children,
}) {
  const items = useMemo(() => Children.toArray(children), [children])

  const cloneItems = useMemo(
    () => items.map((node, index) => cloneForTrack(node, `clone-${index}`)),
    [items],
  )

  return (
    <div className={`react-marquee ${reverse ? 'is-reverse' : ''}`} style={{ '--marquee-duration': `${duration}s` }}>
      <ul className={`${listClassName} react-marquee__track`}>{items}</ul>
      <ul aria-hidden="true" className={`${listClassName} react-marquee__track react-marquee__track--clone`}>
        {cloneItems}
      </ul>
    </div>
  )
}