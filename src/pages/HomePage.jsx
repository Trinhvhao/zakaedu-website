import LegacyHomeMarkup from '../features/home/components/LegacyHomeMarkup'
import { useHomeRevealAnimations } from '../features/home/legacy/useHomeRevealAnimations'
import { useHomeTitleReveal } from '../features/home/legacy/useHomeTitleReveal'
import { useLegacyHomeAssets } from '../features/home/legacy/useLegacyHomeAssets'
import { useLegacyHomeRouteMap } from '../features/home/legacy/useLegacyHomeRouteMap'
import { useLegacyHomeUiControls } from '../features/home/legacy/useLegacyHomeUiControls'

export default function HomePage() {
  useLegacyHomeAssets()
  useHomeRevealAnimations()
  useHomeTitleReveal()
  useLegacyHomeUiControls()
  useLegacyHomeRouteMap()

  return (
    <main className="legacy-home-main legacy-home-page">
      <LegacyHomeMarkup />
    </main>
  )
}
