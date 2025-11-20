import { useEffect } from 'react'

const ParticleBackground = () => {
  useEffect(() => {
    if (!(window as any).particlesJS) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
      script.async = true
      script.onload = () => {
        ;(window as any).particlesJS.load('particles-js', '/particles.json', () => {
          console.log('Particles.js config loaded')
        })
      }
      document.body.appendChild(script)
    } else {
      ;(window as any).particlesJS.load('particles-js', '/particles.json', () => {
        console.log('Particles.js config loaded')
      })
    }
  }, [])

  return (
    <div
      id="particles-js"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    />
  )
}

export default ParticleBackground
