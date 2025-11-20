import logodark from '@/assets/images/logo-dark.png'
import logolight from '@/assets/images/logo-light.png'
import IconifyIcon from '@/components/IconifyIcon'
import useActiveSection from '@/hook/useActiveSection'
import useScrollEvent from '@/hook/useScrollEvent'
import useToggle from '@/hook/useToggle'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const sectionIds = ['home', 'about', 'portfolio', 'team', 'testimonial', 'pricing', 'blog', 'contact']

const Header = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen: isMenuOpen, toggle: toggleMenu } = useToggle(false)
  const activeSection = useActiveSection(sectionIds)
  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark nav-${scrollY > 100 && 'sticky'}`}>
        <Container>
          <Link className="navbar-brand logo text-uppercase" to="/">
            <Image src={logolight} className="logo-light" alt="" height={22} />
            <Image src={logodark} className="logo-dark" alt="" height={22} />
          </Link>
          <button onClick={toggleMenu} aria-expanded={isMenuOpen} className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <IconifyIcon icon="mdi:menu" className="mdi" />
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarCollapse">
            <ul className="navbar-nav ms-auto navbar-center" id="mySidenav">
              {sectionIds.map((id) => (
                <li key={id} className={`nav-item ${activeSection === id ? 'active' : ''}`}>
                  <a href={`#${id}`} className="nav-link" id="scrollElement">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Header
