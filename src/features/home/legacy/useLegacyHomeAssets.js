import { useEffect, useState } from 'react'
import { LEGACY_LINKS, LEGACY_SCRIPTS, LEGACY_STYLES } from './legacyHomeConfig'

export function useLegacyHomeAssets() {
  const [assetsReady, setAssetsReady] = useState(false)

  useEffect(() => {
    const injectedLinks = []
    const injectedScripts = []
    let cancelled = false
    let pendingStyles = 0

    setAssetsReady(false)
    document.documentElement.classList.add('legacy-home-loading')

    const markReady = () => {
      if (cancelled) return
      setAssetsReady(true)
      document.documentElement.classList.remove('legacy-home-loading')
    }

    const markStyleComplete = () => {
      pendingStyles -= 1
      if (pendingStyles <= 0) {
        markReady()
      }
    }

    LEGACY_LINKS.forEach((item) => {
      const link = document.createElement('link')
      link.rel = item.rel
      link.href = item.href
      if (item.crossOrigin) {
        link.crossOrigin = item.crossOrigin
      }
      if (item.rel === 'stylesheet') {
        pendingStyles += 1
        link.onload = markStyleComplete
        link.onerror = markStyleComplete
      }
      link.setAttribute('data-legacy-home-head', 'true')
      document.head.appendChild(link)
      injectedLinks.push(link)
    })

    LEGACY_STYLES.forEach((href) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      pendingStyles += 1
      link.onload = markStyleComplete
      link.onerror = markStyleComplete
      link.setAttribute('data-legacy-home-head', 'true')
      document.head.appendChild(link)
      injectedLinks.push(link)
    })

    const styleFallbackTimer = window.setTimeout(() => {
      markReady()
    }, 5000)

    if (pendingStyles === 0) {
      markReady()
    }

    async function loadScripts() {
      for (const src of LEGACY_SCRIPTS) {
        if (cancelled) break

        await new Promise((resolve) => {
          const script = document.createElement('script')
          script.src = src
          script.async = false
          script.setAttribute('data-legacy-home-script', 'true')
          script.onload = () => resolve()
          script.onerror = () => resolve()
          document.body.appendChild(script)
          injectedScripts.push(script)
        })
      }
    }

    loadScripts()

    return () => {
      cancelled = true
      window.clearTimeout(styleFallbackTimer)
      document.documentElement.classList.remove('legacy-home-loading')
      injectedScripts.forEach((node) => node.remove())
      injectedLinks.forEach((node) => node.remove())
    }
  }, [])

  return assetsReady
}
