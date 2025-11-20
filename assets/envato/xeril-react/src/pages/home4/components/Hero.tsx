import IconifyIcon from '@/components/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import ParticleBackground from './Particle'
import GlightBox from '@/components/GlightBox'

const Hero = () => {
  return (
    <>
      <section className="bg-home home-full" id="home">
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <Container className="slidero">
              <Row className="justify-content-center">
                <Col md={12}>
                  <div className="home-content text-white">
                    <div className="watch-video mt-5">
                      <GlightBox href="http://vimeo.com/99025203" className="video-play-icon-trigger text-white">
                        <IconifyIcon icon="mdi:play" className="mdi p-3 play-icon-circle play play-icon f-30" />
                      </GlightBox>
                    </div>
                    <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                    <h1 className="title mt-4 text-white text-uppercase">
                      We're Giving Design <br /> Solution &amp; Idea.
                    </h1>
                    <div className="search-form  mt-4 pt-3">
                      <form action="">
                        <input type="text" placeholder="Email" />
                        <button type="submit" className="btn btn-primary">
                          SubScribe
                        </button>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <ParticleBackground />
      </section>
    </>
  )
}

export default Hero
