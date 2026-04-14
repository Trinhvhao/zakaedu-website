import { useEffect, useMemo } from 'react'

function toEmbedUrl(videoUrl) {
  if (!videoUrl) return ''

  try {
    const parsed = new URL(videoUrl)
    const host = parsed.hostname.toLowerCase()

    if (host.includes('youtube.com')) {
      const videoId = parsed.searchParams.get('v')
      if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      if (parsed.pathname.startsWith('/embed/')) {
        return `${parsed.origin}${parsed.pathname}?autoplay=1&rel=0`
      }
    }

    if (host.includes('youtu.be')) {
      const videoId = parsed.pathname.replace('/', '')
      if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    }

    if (host.includes('vimeo.com')) {
      const videoId = parsed.pathname.split('/').filter(Boolean).at(-1)
      if (videoId) return `https://player.vimeo.com/video/${videoId}?autoplay=1`
    }

    return videoUrl
  } catch {
    return videoUrl
  }
}

export default function VideoModal({ videoUrl, onClose }) {
  const embedUrl = useMemo(() => toEmbedUrl(videoUrl), [videoUrl])

  useEffect(() => {
    if (!videoUrl) return undefined

    const onEsc = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.classList.add('legacy-video-modal-open')
    window.addEventListener('keydown', onEsc)

    return () => {
      document.body.classList.remove('legacy-video-modal-open')
      window.removeEventListener('keydown', onEsc)
    }
  }, [videoUrl, onClose])

  if (!videoUrl) return null

  return (
    <div
      aria-label="Video popup"
      aria-modal="true"
      className="legacy-video-modal"
      role="dialog"
      onClick={onClose}
    >
      <div className="legacy-video-modal__dialog" onClick={(event) => event.stopPropagation()}>
        <button
          aria-label="Close video"
          className="legacy-video-modal__close"
          type="button"
          onClick={onClose}
        >
          X
        </button>
        <div className="legacy-video-modal__frame-wrap">
          <iframe
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            src={embedUrl}
            title="ZakaEdu overview video"
          />
        </div>
      </div>
    </div>
  )
}