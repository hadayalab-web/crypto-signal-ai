import type { ReactNode } from 'react'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Counter from './components/Counter'
import CTA from './components/CTA'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Skill from './components/Skill'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Footer from './footer/Footer'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <About />
      <Skill />
      <Process />
      <Portfolio />
      <Counter />
      <Team />
      <Testimonial />
      <Pricing />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}

export default MainLayout
