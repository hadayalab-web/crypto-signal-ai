'use client'
import img1 from '@/assets/images/users/img-1.jpg'
import img2 from '@/assets/images/users/img-2.jpg'
import img3 from '@/assets/images/users/img-3.jpg'
import IconifyIcon from '@/components/IconifyIcon'
import { useState } from 'react'
import { Carousel, CarouselItem, Col, Container, Image, Row } from 'react-bootstrap'

type TestimonialType = {
  description: string
  image: string
  name: string
  role: string
}

const testimonial: TestimonialType[] = [
  {
    description:
      'The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words.',
    image: img1,
    name: 'Jennifer Shapiro',
    role: 'Frontend',
  },
  {
    description:
      'The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words.',
    image: img2,
    name: 'Brandon Carney',
    role: 'Designer',
  },
  {
    description:
      'The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words.',
    image: img3,
    name: 'William Mooneyhan',
    role: 'Developer',
  },
]

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <section className="section bg-testimonial" id="testimonial">
        <div className="bg-overlay" />
        <Container>
          <Row>
            <Col lg={12}>
              <div className="header-title text-center">
                <h2 className="text-uppercase text-white">Testimonials</h2>
                <div className="title-border mt-3" />
                <p className="title-desc text-white-50 mt-3">
                  Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec
                  sollicitudin.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-2">
            <Col lg={12}>
              <Carousel
                activeIndex={activeIndex}
                onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
                controls={true}
                indicators={false}
                interval={3000}
                id="carouselExampleIndicators"
                className="slide">
                <ol className="carousel-indicators">
                  {testimonial.map((item, idx) => (
                    <li
                      key={idx}
                      className={`d-inline-block ${activeIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                      style={{ cursor: 'pointer' }}
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={idx}>
                      <Image src={item.image} alt="" className="testi-img img-fluid rounded mx-auto d-block" />
                    </li>
                  ))}
                </ol>
                {testimonial.map((item, idx) => (
                  <CarouselItem key={idx}>
                    <div className="testimonial-box text-center mt-4">
                      <div className="testimonial-title p-2 rounded">
                        <p className=" text-white mt-4">{item.description}</p>
                      </div>
                      <IconifyIcon icon="mdi:format-quote-close" className="mdi text-primary display-3" />
                      <h5 className="text-white f-18">{item.name}</h5>
                      <p className="text-white-50 mb-0">{item.role}</p>
                    </div>
                  </CarouselItem>
                ))}
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Testimonial
