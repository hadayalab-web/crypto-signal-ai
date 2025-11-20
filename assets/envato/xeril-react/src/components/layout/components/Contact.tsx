import map from '@/assets/images/features/map.png'
import IconifyIcon from '@/components/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <section className="section" id="contact">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="header-title text-center">
                <p className="text-uppercase text-muted mb-2">Contact</p>
                <h2 className="text-uppercase">Get In Touch</h2>
                <div className="title-border mt-3" />
                <p className="title-desc text-muted mt-3">
                  Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec
                  sollicitudin.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-2">
            <Col lg={5}>
              <div className="contact-info">
                <div style={{ backgroundImage: `url(${map})`, backgroundRepeat: 'no-repeat' }}>
                  <div className="d-flex">
                    <IconifyIcon icon="mdi:map-marker" className="mdi text-primary h4 flex-shrink-0" />
                    <div className="flex-grow-1 ms-4">
                      <p className="text-muted">
                        2276 Lynn Ogden Lane Beaumont
                        <br />
                        Lodgeville Road TX 77701
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <IconifyIcon icon="mdi:phone" className="mdi text-primary h4 flex-shrink-0" />
                    <div className="flex-grow-1 ms-4">
                      <p className="text-muted">
                        Phone: +71 612-234-4023
                        <br />
                        Fax: +954-627-9727
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <IconifyIcon icon="mdi:calendar-clock" className="mdi text-primary h4 flex-shrink-0" />
                    <div className="flex-grow-1 ms-4">
                      <p className="text-muted">
                        Monday-friday: 9.00-19.00
                        <br />
                        Saturday-Sunday: Holiday
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <IconifyIcon icon="mdi:email" className="mdi text-primary h4 flex-shrink-0" />
                    <div className="flex-grow-1 ms-4">
                      <p className="text-muted">Email: FredVWeaver@rhyta.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="custom-form">
                <form method="post" className="contact-form" name="myForm" id="myForm">
                  <span id="error-msg" />
                  <Row>
                    <Col lg={12}>
                      <div className="form-group mt-3">
                        <input name="name" id="name" type="text" className="form-control" placeholder="Your name" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div className="form-group mt-3">
                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group mt-3">
                        <input name="number" id="number" type="number" className="form-control" placeholder="Phone Number" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="form-group mt-3">
                        <textarea name="comments" id="comments" rows={5} className="form-control" placeholder="Your message" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="mt-3">
                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" defaultValue="Send Message" />
                        <div id="simple-msg" />
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
