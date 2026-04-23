import { useEffect, useState } from 'react'
import { LEGACY_LINKS, LEGACY_SCRIPTS, LEGACY_STYLES } from './legacyHomeConfig'

export function useLegacyHomeAssets() {
  const [assetsReady, setAssetsReady] = useState(false)

  useEffect(() => {
    const injectedLinks = []
    const injectedScripts = []
    let cancelled = false
    let pendingStyles = 0
    let pendingImages = 0

    setAssetsReady(false)
    document.documentElement.classList.add('legacy-home-loading')

    const markReady = () => {
      if (cancelled) return
      if (pendingStyles <= 0 && pendingImages <= 0) {
        setAssetsReady(true)
        document.documentElement.classList.remove('legacy-home-loading')
      }
    }

    const markStyleComplete = () => {
      pendingStyles -= 1
      markReady()
    }

    const markImageComplete = () => {
      pendingImages -= 1
      markReady()
    }

    // Load stylesheets
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

    // Preload critical images
    const criticalImages = [
      '/legacy/assets/images/resources/banner-one-img-1.png',
      '/legacy/assets/images/backgrounds/slider-1-1.jpg',
    ]

    criticalImages.forEach((src) => {
      pendingImages += 1
      const img = new Image()
      img.onload = markImageComplete
      img.onerror = markImageComplete
      img.src = src
    })

    // Fallback timer
    const styleFallbackTimer = window.setTimeout(() => {
      if (!cancelled) {
        setAssetsReady(true)
        document.documentElement.classList.remove('legacy-home-loading')
      }
    }, 8000)

    if (pendingStyles === 0 && pendingImages === 0) {
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
