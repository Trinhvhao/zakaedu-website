import { useEffect, useState } from 'react'

export function useLegacyAssets(styles = [], scripts = []) {
  const [assetsReady, setAssetsReady] = useState(false)

  useEffect(() => {
    // Load styles
    const styleElements = styles.map((href) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
      return link
    })

    // Load scripts
    const scriptElements = scripts.map((src) => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
      return script
    })

    // Mark as ready after a short delay
    const timer = setTimeout(() => setAssetsReady(true), 100)

    return () => {
      clearTimeout(timer)
      styleElements.forEach((el) => el.remove())
      scriptElements.forEach((el) => el.remove())
    }
  }, [styles, scripts])

  return assetsReady
}
