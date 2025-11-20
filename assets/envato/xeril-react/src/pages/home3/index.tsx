import bg4 from '@/assets/images/bg-4.jpg'
import GlightBox from '@/components/GlightBox'
import IconifyIcon from '@/components/IconifyIcon'
import Header from '@/components/layout/topbar/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const page = () => {
  return (
    <>
      <Header />
      <section className="home-full" id="home" style={{ backgroundImage: `url(${bg4})` }}>
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="justify-content-center">
                <Col md={12}>
                  <div className="home-content text-center text-white">
                    <div className="watch-video mt-5">
                      <GlightBox href="http://vimeo.com/99025203" className="video-play-icon-trigger text-white">
                        <IconifyIcon icon="mdi:play" className="mdi p-3 play-icon-circle play play-icon f-30" />
                      </GlightBox>
                    </div>
                    <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                    <h1 className=" mt-4 text-white text-uppercase">
                      <div className="text-rotate">Perfect solution for small Business</div>
                    </h1>
                    <p className="text-white mt-4 f-18">
                      Vivamus sodales eleifend odio eget mollis Cras consectetur nisi quis <br /> pulvinar laoreet Nulla facilisi Maecenas laoreet.
                    </p>
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
      </section>
    </>
  )
}

export default page
