import { useEffect } from 'react'
import LegacyHomeMarkup from '../features/home/components/LegacyHomeMarkup'
import { useHomeRevealAnimations } from '../features/home/legacy/useHomeRevealAnimations'
import { useHomeTitleReveal } from '../features/home/legacy/useHomeTitleReveal'
import { useLegacyHomeAssets } from '../features/home/legacy/useLegacyHomeAssets'
import { useLegacyHomeRouteMap } from '../features/home/legacy/useLegacyHomeRouteMap'
import { useLegacyHomeUiControls } from '../features/home/legacy/useLegacyHomeUiControls'

export default function HomePage() {
  const assetsReady = useLegacyHomeAssets()
  useHomeRevealAnimations(assetsReady)
  useHomeTitleReveal(assetsReady)
  useLegacyHomeUiControls(assetsReady)
  useLegacyHomeRouteMap(assetsReady)

  useEffect(() => {
    // Preload critical banner image
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/legacy/assets/images/resources/banner-one-img-1.png'
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <main
      className={`legacy-home-main legacy-home-page${assetsReady ? '' : ' legacy-home-main--loading'}`}
      aria-busy={!assetsReady}
    >
      {assetsReady ? <LegacyHomeMarkup /> : null}
    </main>
  )
}
