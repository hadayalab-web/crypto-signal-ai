import bg1 from '@/assets/images/bg-1.jpg'
import bg2 from '@/assets/images/bg-2.jpg'
import bg4 from '@/assets/images/bg-4.jpg'
import GlightBox from '@/components/GlightBox'
import IconifyIcon from '@/components/IconifyIcon'
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Slide = {
  background: string
  align: 'left' | 'center' | 'right'
  subtitle?: string
  title: string
  description?: string
}

const slides: Slide[] = [
  {
    background: bg1,
    align: 'center',
    subtitle: 'Xeril Template',
    title: "We're Giving Design <br /> Solution & Idea.",
  },
  {
    background: bg2,
    align: 'right',
    title: 'Why Wait? Xeril <br /> Right Now!',
    description:
      'Vivamus sodales eleifend odio eget mollis Cras consectetur nisi quis pulvinar <br /> laoreet Nulla facilisi Maecenas eget velit laoreet.',
  },
  {
    background: bg4,
    align: 'center',
    title: 'We Are a Web Agency <br /> Focused On Quality',
    description:
      'Vivamus sodales eleifend odio eget mollis Cras consectetur nisi quis pulvinar <br /> laoreet Nulla facilisi Maecenas eget velit laoreet.',
  },
]

const Hero = () => {
  return (
    <>
      <section className="home-section" id="home">
        <Carousel controls={true} indicators={false} id="carouselExampleControls" className="slide">
          {slides.map((slide, index) => (
            <CarouselItem key={index} style={{ backgroundImage: `url(${slide.background})` }}>
              <div className="bg-overlay" />
              <div className="home-center">
                <div className="home-desc-center position-relative">
                  <Container>
                    <Row className="justify-content-center">
                      <Col md={12}>
                        <div className={`home-content text-${slide.align} text-white`}>
                          <div className="watch-video mt-5">
                            <GlightBox href="http://vimeo.com/99025203" className="video-play-icon-trigger text-white">
                              <IconifyIcon icon="mdi:play" className="mdi p-3 play-icon-circle play play-icon f-30" />
                            </GlightBox>
                          </div>
                          {slide.subtitle && <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">{slide.subtitle}</h5>}
                          <h1 className="title mt-4 text-white text-uppercase" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                          {slide.description && (
                            <p
                              className="text-white mt-4 f-18"
                              dangerouslySetInnerHTML={{
                                __html: slide.description,
                              }}
                            />
                          )}
                          <div className="pt-4 mt-1">
                            <Link to="" className="btn btn-outline-white mt-2 me-3">
                              Get Started
                            </Link>
                            <Link to="" className="btn btn-primary mt-2">
                              Purchase Now
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </CarouselItem>
          ))}

          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </a>
        </Carousel>
      </section>
    </>
  )
}

export default Hero
