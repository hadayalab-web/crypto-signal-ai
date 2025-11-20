import img2 from '@/assets/images/features/img-2.jpg'
import IconifyIcon from '@/components/IconifyIcon'
import { Col, Container, Image, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <>
      <section className="section bg-light">
        <Container>
          <Row className="vertical-content">
            <Col lg={6}>
              <div className="counter-box">
                <Col lg={12}>
                  <h4>Our Achivements</h4>
                  <p className="text-muted mt-2">
                    Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo Pellentesque hendrerit pellentesque libero nec
                    sollicitudin.
                  </p>
                  <div className="mt-4">
                    <Row id="counter">
                      <Col lg={6}>
                        <div className="counter-box mt-4">
                          <div className="d-flex">
                            <div className="counter-icon flex-shrink-0">
                              <IconifyIcon icon="mdi:heart" width={25} className="mdi icon-size" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4 className="counter-value" data-count={485}>
                                <CountUp start={0} end={485} duration={10} />
                              </h4>
                              <p className="text-muted">Happy Clients</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="counter-box mt-4">
                          <div className="d-flex">
                            <div className="counter-icon flex-shrink-0">
                              <IconifyIcon icon="mdi:layers" className="mdi icon-size" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4 className="counter-value" data-count={536}>
                                <CountUp start={0} end={536} duration={10} />
                              </h4>
                              <p className="text-muted">Projects Compleated</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="counter-box mt-4">
                          <div className="d-flex">
                            <div className="counter-icon flex-shrink-0">
                              <IconifyIcon icon="mdi:cloud-download" className="mdi icon-size" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4 className="counter-value" data-count={1652}>
                                <CountUp start={0} end={1652} duration={10} />
                              </h4>
                              <p className="text-muted mb-0">Files Downloaded</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="counter-box mt-4">
                          <div className="d-flex">
                            <div className="counter-icon flex-shrink-0">
                              <IconifyIcon icon="mdi:code-not-equal-variant" className="mdi icon-size" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h4 className="counter-value" data-count={14652}>
                                <CountUp start={0} end={14652} duration={10} />
                              </h4>
                              <p className="text-muted mb-0">Liens Of Code</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </div>
            </Col>
            <Col lg={6}>
              <div className="img">
                <Image src={img2} className="img-fluid box-shadow-lg rounded" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Counter
