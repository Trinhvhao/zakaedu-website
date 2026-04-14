import { useEffect } from 'react'
import { LEGACY_ROUTE_MAP } from './legacyHomeConfig'

export function useLegacyHomeRouteMap() {
  useEffect(() => {
    const legacyAnchors = document.querySelectorAll(
      '.legacy-home-page a[href^="/legacy/pages/"]',
    )

    legacyAnchors.forEach((anchor) => {
      const href = anchor.getAttribute('href')
      const mappedRoute = LEGACY_ROUTE_MAP[href]
      if (mappedRoute) {
        anchor.setAttribute('href', mappedRoute)
      }
    })
  }, [])
}
