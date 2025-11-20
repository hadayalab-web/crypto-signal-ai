import portfolio1 from '@/assets/images/portfolio/img-1.jpg'
import portfolio2 from '@/assets/images/portfolio/img-2.jpg'
import portfolio3 from '@/assets/images/portfolio/img-3.jpg'
import portfolio4 from '@/assets/images/portfolio/img-4.jpg'
import portfolio5 from '@/assets/images/portfolio/img-5.jpg'
import portfolio6 from '@/assets/images/portfolio/img-6.jpg'
import GlightBox from '@/components/GlightBox'
import { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

type ProjectType = {
  title: string
  categoryClass: string
  image: string
}

const projects: ProjectType[] = [
  { title: 'Consumer Insights', categoryClass: 'Brand', image: portfolio1 },
  { title: 'Financial Service', categoryClass: 'Design', image: portfolio2 },
  { title: 'Latest Technology', categoryClass: 'Design', image: portfolio3 },
  { title: 'Business Growth', categoryClass: 'Graphic', image: portfolio4 },
  { title: 'International Business', categoryClass: 'Brand', image: portfolio5 },
  { title: 'Consumer Products', categoryClass: 'Design Brand', image: portfolio6 },
]

const Portfolio = () => {
  useEffect(() => {
    let iso: any

    const initIsotope = async () => {
      if (typeof window === 'undefined') return

      const Isotope = (await import('isotope-layout')).default
      const grid = document.querySelector('.portfolioContainer')
      if (!grid) return

      iso = new Isotope(grid as HTMLElement, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
      })

      const filters = document.querySelectorAll('.categories')
      filters.forEach((filter) => {
        filter.addEventListener('click', (e) => {
          e.preventDefault()
          const target = e.currentTarget as HTMLElement
          const filterValue = target.getAttribute('data-filter')

          iso.arrange({ filter: filterValue === '*' ? '*' : filterValue })

          filters.forEach((f) => f.classList.remove('active'))
          target.classList.add('active')
        })
      })
    }

    initIsotope()

    return () => {
      if (iso) iso.destroy()
    }
  }, [])

  return (
    <section className="section" id="portfolio">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="header-title text-center">
              <p className="text-uppercase text-muted mb-2">Portfolio</p>
              <h2 className="text-uppercase">Our Works</h2>
              <div className="title-border mt-3" />
              <p className="title-desc text-muted mt-3">
                Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec
                sollicitudin.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 pt-2">
          <Col lg={12}>
            <div className="text-center">
              <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                {['All', 'Brand', 'Design', 'Graphic'].map((category, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className={`categories ${category === 'All' ? 'active' : ''}`}
                      data-filter={category === 'All' ? '*' : `.${category}`}>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        <div className="port portfolio-masonry mt-5">
          <Row className="portfolioContainer" data-isotope='{"layoutMode": "masonry"}'>
            {projects.map((item, idx) => (
              <Col lg={4} md={4} className={`portfolio-item ${item.categoryClass} p-3`} key={idx}>
                <div className="item-box">
                  <GlightBox href={item.image} title={item.title} className="cbox-gallary1 mfp-image">
                    <Image src={item.image} alt={item.title} className="item-container rounded img-fluid" width={400} height={300} />
                    <div className="item-mask ">
                      <div className="item-caption">
                        <h5 className="f-18">{item.title}</h5>
                        <p className="text-primary">Business Improve</p>
                      </div>
                    </div>
                  </GlightBox>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio
