import { useEffect, useState } from 'react'

export default function HomePreloader({ assetsReady }) {
  const [visible, setVisible] = useState(true)
  const [windowLoaded, setWindowLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setWindowLoaded(true)
    }

    if (document.readyState === 'complete') {
      setWindowLoaded(true)
    } else {
      window.addEventListener('load', handleLoad, { once: true })
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  useEffect(() => {
    // Chỉ ẩn preloader khi cả window và assets đều ready
    if (windowLoaded && assetsReady) {
      const timeoutId = window.setTimeout(() => {
        setVisible(false)
      }, 300)

      return () => window.clearTimeout(timeoutId)
    }
  }, [windowLoaded, assetsReady])

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
