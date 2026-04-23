import GallerySection from '../components/GallerySection'
import LegacyPageHeader from '../components/LegacyPageHeader'
import { useLegacyAssets } from '../hooks/useLegacyAssets'

const GALLERY_STYLES = [
  '/legacy/assets/css/bootstrap.min.css',
  '/legacy/assets/css/font-awesome-all.css',
  '/legacy/assets/css/flaticon.css',
  '/legacy/assets/css/module-css/gallery.css',
  '/legacy/assets/css/module-css/page-header.css',
  '/legacy/assets/css/style.css',
  '/legacy/assets/css/responsive.css',
]

export default function GalleryPage() {
  useLegacyAssets(GALLERY_STYLES)

  return (
    <>
      <LegacyPageHeader title="Gallery" breadcrumb="Gallery" />
      <GallerySection />
    </>
  )
}
