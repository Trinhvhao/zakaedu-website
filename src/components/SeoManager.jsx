import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const FALLBACK = {
  title: 'Zakaedu Website',
  description:
    'React migration workspace for Freshflow template with phased delivery and build gates.',
}

function upsertMeta(name, content, isProperty = false) {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let node = document.head.querySelector(selector)
  if (!node) {
    node = document.createElement('meta')
    if (isProperty) node.setAttribute('property', name)
    else node.setAttribute('name', name)
    document.head.appendChild(node)
  }
  node.setAttribute('content', content)
}

function getMeta(pathname) {
  if (pathname === '/home') {
    return {
      title: 'Home | Zakaedu Website',
      description: 'Migration dashboard and phased rollout status for the React website.',
    }
  }
  if (pathname === '/about') {
    return {
      title: 'About | Zakaedu Website',
      description: 'Architecture, migration principles, and implementation checklist.',
    }
  }
  if (pathname === '/services') {
    return {
      title: 'Services | Zakaedu Website',
      description: 'Service catalog migrated into reusable React sections.',
    }
  }
  if (pathname === '/portfolio') {
    return {
      title: 'Portfolio | Zakaedu Website',
      description: 'Selected service projects rendered from React data modules.',
    }
  }
  if (pathname === '/team') {
    return {
      title: 'Team | Zakaedu Website',
      description: 'Operational team profile cards in the React route flow.',
    }
  }
  if (pathname === '/pricing') {
    return {
      title: 'Pricing | Zakaedu Website',
      description: 'Pricing matrix and service plans in componentized layout.',
    }
  }
  if (pathname === '/gallery') {
    return {
      title: 'Gallery | Zakaedu Website',
      description: 'Gallery route prepared for media API and interactive filters.',
    }
  }
  if (pathname === '/blog') {
    return {
      title: 'Blog | Zakaedu Website',
      description: 'Blog list route migrated to data-driven React rendering.',
    }
  }
  if (pathname.startsWith('/blog/')) {
    return {
      title: 'Blog Detail | Zakaedu Website',
      description: 'Blog detail route with dynamic slug handling in React.',
    }
  }
  if (pathname === '/contact') {
    return {
      title: 'Contact | Zakaedu Website',
      description: 'Contact route with migration-safe form structure and office cards.',
    }
  }
  if (pathname === '/cart') {
    return {
      title: 'Cart | Zakaedu Website',
      description: 'Cart flow migrated for checkout integration in later phases.',
    }
  }
  if (pathname === '/checkout') {
    return {
      title: 'Checkout | Zakaedu Website',
      description: 'Checkout route scaffold with order summary and billing form.',
    }
  }
  if (pathname === '/login') {
    return {
      title: 'Login | Zakaedu Website',
      description: 'Sign-in route migrated from static template to React.',
    }
  }
  if (pathname === '/register') {
    return {
      title: 'Register | Zakaedu Website',
      description: 'Account registration route prepared for API connection.',
    }
  }
  if (pathname === '/not-found') {
    return {
      title: 'Not Found | Zakaedu Website',
      description: 'Fallback route for unmigrated or missing paths.',
    }
  }
  return FALLBACK
}

export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getMeta(pathname)
    document.title = meta.title
    upsertMeta('description', meta.description)
    upsertMeta('og:title', meta.title, true)
    upsertMeta('og:description', meta.description, true)
    upsertMeta('twitter:title', meta.title)
    upsertMeta('twitter:description', meta.description)
  }, [pathname])

  return null
}
