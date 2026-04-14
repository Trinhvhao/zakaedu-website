import { useEffect, useState } from 'react'

export default function HomePreloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let timeoutId = 0

    const hide = () => {
      timeoutId = window.setTimeout(() => {
        setVisible(false)
      }, 220)
    }

    if (document.readyState === 'complete') {
      hide()
    } else {
      window.addEventListener('load', hide, { once: true })
    }

    return () => {
      window.removeEventListener('load', hide)
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/*Start Preloader*/}
      <div className="loader js-preloader" aria-hidden="true">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
      {/*End Preloader*/}
      {/* template js */}
      {/* Additional Scripts */}
    </>
  )
}
