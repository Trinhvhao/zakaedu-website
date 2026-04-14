import { useEffect } from 'react'
import { LEGACY_LINKS, LEGACY_SCRIPTS, LEGACY_STYLES } from './legacyHomeConfig'

export function useLegacyHomeAssets() {
  useEffect(() => {
    const injectedLinks = []
    const injectedScripts = []
    let cancelled = false

    LEGACY_LINKS.forEach((item) => {
      const link = document.createElement('link')
      link.rel = item.rel
      link.href = item.href
      if (item.crossOrigin) {
        link.crossOrigin = item.crossOrigin
      }
      link.setAttribute('data-legacy-home-head', 'true')
      document.head.appendChild(link)
      injectedLinks.push(link)
    })

    LEGACY_STYLES.forEach((href) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.setAttribute('data-legacy-home-head', 'true')
      document.head.appendChild(link)
      injectedLinks.push(link)
    })

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
      injectedScripts.forEach((node) => node.remove())
      injectedLinks.forEach((node) => node.remove())
    }
  }, [])
}
