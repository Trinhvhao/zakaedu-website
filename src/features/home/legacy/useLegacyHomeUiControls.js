import { useEffect } from 'react'

function clearCurrentMenuState() {
  document.querySelectorAll('.one-page-scroll-menu li').forEach((item) => {
    item.classList.remove(
      'current',
      'current-menu-ancestor',
      'current_page_item',
      'current-menu-parent',
    )
  })
}

function markCurrentMenu(hash) {
  if (!hash) return
  const anchor = document.querySelector(`.one-page-scroll-menu a[href="${hash}"]`)
  if (!anchor || !anchor.parentElement) return
  clearCurrentMenuState()
  anchor.parentElement.classList.add('current')
}

export function useLegacyHomeUiControls(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const homeRoot = document.querySelector('.legacy-home-page')
    if (!(homeRoot instanceof HTMLElement)) return undefined

    const body = document.body
    const mobileWrapper = homeRoot.querySelector('.mobile-nav__wrapper')
    const stickyHeader = homeRoot.querySelector('.stricked-menu')
    const scrollTopButton = homeRoot.querySelector('.scroll-to-top')
    const scrollTopInner = homeRoot.querySelector('.scroll-to-top__inner')
    const cursor = homeRoot.querySelector('.custom-cursor__cursor')
    const cursorInner = homeRoot.querySelector('.custom-cursor__cursor-two')
    const cursorTargets = Array.from(homeRoot.querySelectorAll('a, button'))

    const sectionTargets = Array.from(
      homeRoot.querySelectorAll('.one-page-scroll-menu .scrollToLink > a[href^="#"]'),
    )
      .map((anchor) => {
        const hash = anchor.getAttribute('href')
        if (!hash || hash === '#') return null
        const section = document.querySelector(hash)
        return section
          ? {
              hash,
              section,
            }
          : null
      })
      .filter(Boolean)

    const closeMobileNav = () => {
      mobileWrapper?.classList.remove('expanded')
      body.classList.remove('locked')
    }

    const toggleMobileNav = () => {
      mobileWrapper?.classList.toggle('expanded')
      body.classList.toggle('locked')
    }

    const openSearch = () => {
      body.classList.add('search-active')
    }

    const closeSearch = () => {
      body.classList.remove('search-active')
    }

    const onDocumentClickCapture = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (!target.closest('.legacy-home-page')) return

      const mobileToggler = target.closest('.mobile-nav__toggler')
      if (mobileToggler) {
        event.preventDefault()
        event.stopPropagation()
        toggleMobileNav()
        return
      }

      const searchOpenTrigger = target.closest('.searcher-toggler-box')
      if (searchOpenTrigger) {
        event.preventDefault()
        event.stopPropagation()
        openSearch()
        return
      }

      const searchCloseTrigger = target.closest('.close-search, .search-popup .color-layer')
      if (searchCloseTrigger) {
        event.preventDefault()
        event.stopPropagation()
        closeSearch()
        return
      }

      const topAnchor = target.closest('.scroll-to-top')
      if (topAnchor) {
        event.preventDefault()
        event.stopPropagation()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const anchor = target.closest('a[href^="#"]')
      const item = anchor?.parentElement
      if (anchor && item?.classList.contains('scrollToLink')) {
        const hash = anchor.getAttribute('href')
        const section = hash ? document.querySelector(hash) : null
        if (!section) return

        event.preventDefault()
        event.stopPropagation()
        const top = section.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top, behavior: 'smooth' })
        markCurrentMenu(hash)
        closeMobileNav()
      }
    }

    const onScroll = () => {
      const scrollY = window.scrollY

      if (stickyHeader) {
        if (scrollY > 130) {
          stickyHeader.classList.add('stricky-fixed')
        } else {
          stickyHeader.classList.remove('stricky-fixed')
        }
      }

      if (scrollTopButton) {
        if (scrollY > 500) {
          scrollTopButton.classList.add('show')
        } else {
          scrollTopButton.classList.remove('show')
        }
      }

      if (scrollTopInner) {
        const docHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        )
        const progress = docHeight > 0 ? ((window.innerHeight + scrollY) / docHeight) * 100 : 0
        scrollTopInner.style.width = `${Math.min(100, Math.max(0, progress))}%`
      }

      if (sectionTargets.length) {
        const offsetY = scrollY + 120
        let currentHash = sectionTargets[0].hash

        sectionTargets.forEach((entry) => {
          if (entry.section.offsetTop <= offsetY) {
            currentHash = entry.hash
          }
        })

        markCurrentMenu(currentHash)
      }
    }

    const onCursorMove = (event) => {
      if (!(cursor instanceof HTMLElement) || !(cursorInner instanceof HTMLElement)) return
      cursor.style.transform = `translate3d(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%), 0)`
      cursorInner.style.left = `${event.clientX}px`
      cursorInner.style.top = `${event.clientY}px`
    }

    const onCursorDown = () => {
      if (!(cursor instanceof HTMLElement) || !(cursorInner instanceof HTMLElement)) return
      cursor.classList.add('click')
      cursorInner.classList.add('custom-cursor__innerhover')
    }

    const onCursorUp = () => {
      if (!(cursor instanceof HTMLElement) || !(cursorInner instanceof HTMLElement)) return
      cursor.classList.remove('click')
      cursorInner.classList.remove('custom-cursor__innerhover')
    }

    const onCursorTargetEnter = () => {
      if (!(cursor instanceof HTMLElement)) return
      cursor.classList.add('custom-cursor__hover')
    }

    const onCursorTargetLeave = () => {
      if (!(cursor instanceof HTMLElement)) return
      cursor.classList.remove('custom-cursor__hover')
    }

    document.addEventListener('click', onDocumentClickCapture, true)
    window.addEventListener('scroll', onScroll, { passive: true })

    if (cursor instanceof HTMLElement && cursorInner instanceof HTMLElement) {
      document.addEventListener('mousemove', onCursorMove)
      document.addEventListener('mousedown', onCursorDown)
      document.addEventListener('mouseup', onCursorUp)
      cursorTargets.forEach((target) => {
        target.addEventListener('mouseenter', onCursorTargetEnter)
        target.addEventListener('mouseleave', onCursorTargetLeave)
      })
    }

    onScroll()

    return () => {
      document.removeEventListener('click', onDocumentClickCapture, true)
      window.removeEventListener('scroll', onScroll)

      if (cursor instanceof HTMLElement && cursorInner instanceof HTMLElement) {
        document.removeEventListener('mousemove', onCursorMove)
        document.removeEventListener('mousedown', onCursorDown)
        document.removeEventListener('mouseup', onCursorUp)
        cursorTargets.forEach((target) => {
          target.removeEventListener('mouseenter', onCursorTargetEnter)
          target.removeEventListener('mouseleave', onCursorTargetLeave)
        })
      }

      closeMobileNav()
      closeSearch()
    }
  }, [enabled])
}
