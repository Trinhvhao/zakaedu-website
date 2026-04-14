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

  return (
    <main
      className={`legacy-home-main legacy-home-page${assetsReady ? '' : ' legacy-home-main--loading'}`}
      aria-busy={!assetsReady}
    >
      {assetsReady ? <LegacyHomeMarkup /> : null}
    </main>
  )
}
