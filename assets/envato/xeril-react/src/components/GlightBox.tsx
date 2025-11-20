'use client'
import 'glightbox/dist/css/glightbox.min.css'
import { useEffect, useRef, type AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

const GlightBox = ({ children, href, ...other }: { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const ref = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    let instance: any = null

    import('glightbox').then(({ default: GLightbox }) => {
      if (ref.current) {
        instance = GLightbox({
          selector: '.glightbox',
          openEffect: 'fade',
          closeEffect: 'fade',
        })
      }
    })

    return () => {
      instance?.destroy()
    }
  }, [])

  return (
    <Link ref={ref} to={href} {...other} className={`glightbox ${other['className'] ?? ''}`}>
      {children}
    </Link>
  )
}

export default GlightBox
