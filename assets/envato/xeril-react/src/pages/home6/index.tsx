import img2 from '@/assets/images/bg-2.jpg'
import GlightBox from '@/components/GlightBox'
import IconifyIcon from '@/components/IconifyIcon'
import Header from '@/components/layout/topbar/Header'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const page = () => {
  return (
    <>
      <Header />
      <section className="home-full" id="home" style={{ backgroundImage: `url(${img2})` }}>
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="justify-content-center vertical-content">
                <Col lg={8}>
                  <div className="home-content text-white">
                    <div className="watch-video">
                      <GlightBox href="http://vimeo.com/99025203" className="video-play-icon-trigger text-white">
                        <IconifyIcon icon="mdi:play" className="mdi p-3 play-icon-circle play play-icon f-30" />
                      </GlightBox>
                    </div>
                    <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                    <h1 className="title mt-4 text-white text-uppercase">
                      We're Giving Design <br /> Solution &amp; Idea.
                    </h1>
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
                <Col lg={4}>
                  <Card className="mx-auto p-4 rounded mt-5 mt-lg-0">
                    <div className="text-center">
                      <p className="text-muted mb-2 f-13 text-uppercase">Welcome To Xeril</p>
                      <h5 className="form-title mb-4">Get 30 Days Free Trial</h5>
                    </div>
                    <form className="registration-form">
                      <div className="form-group mb-4">
                        <label className="form-label f-14">Your Name*</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="form-group mb-4">
                        <label className="form-label f-14">Your Email*</label>
                        <input type="email" className="form-control" id="email" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label f-14">Password*</label>
                        <input type="password" className="form-control" id="password" />
                      </div>
                      <button type="submit" className="btn btn-primary w-100 btn-sm">
                        Get Started <IconifyIcon icon="mdi:telegram" className="mdi ms-2" />
                      </button>
                    </form>
                  </Card>
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
