import IconifyIcon from '@/components/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-footer">
        <Container>
          <div className="footer-subscribe py-5">
            <Row>
              <Col lg={8}>
                <div className="mt-3">
                  <h5 className="text-white mt-2 pt-1">
                    Be in the know with the letest and greatest from <span className="text-primary text-uppercase">Xeril</span>
                  </h5>
                </div>
              </Col>
              <Col lg={4}>
                <div className="footer-subcribe text-right">
                  <form action="#">
                    <input placeholder="Your Email Address" type="text" />
                    <button type="submit" className="btn btn-primary">
                      <IconifyIcon icon="mdi:bell-ring" className="mdi" />
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="py-5">
            <Col lg={3}>
              <div className="mt-2">
                <h6 className="text-white text-uppercase f-16">Xeril</h6>
                <p className="text-white-50 mt-3 pt-2 mb-0 ">
                  Semper nibh a dignissim Integer cursus tempsed quis justo molis starm the consectetur.
                </p>
                <div className="mt-4">
                  <ul className="list-inline footer-social mb-0">
                    <li className="list-inline-item">
                      <Link to="" className="rounded">
                        <IconifyIcon icon="uim:facebook-f" className="mdi" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="" className="rounded">
                        <IconifyIcon icon="uim:linkedin-alt" className="mdi" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="" className="rounded">
                        <IconifyIcon icon="mdi-pinterest" className="mdi" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="" className="rounded">
                        <IconifyIcon icon="mdi:twitter" className="mdi" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="mt-2 ps-0 ps-lg-5">
                <h6 className="text-white text-uppercase f-16">Resources</h6>
                <ul className="list-unstyled footer-link mt-3 mb-0">
                  <li>
                    <Link to="">Monitoring Grader </Link>
                  </li>
                  <li>
                    <Link to="">Video Tutorial</Link>
                  </li>
                  <li>
                    <Link to="">Term &amp; Service</Link>
                  </li>
                  <li>
                    <Link to="">Tulsy API</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2}>
              <div className="mt-2">
                <h6 className="text-white text-uppercase f-16">Help</h6>
                <ul className="list-unstyled footer-link mt-3 mb-0">
                  <li>
                    <Link to="">Sign Up </Link>
                  </li>
                  <li>
                    <Link to="">Login</Link>
                  </li>
                  <li>
                    <Link to="">Terms of Services</Link>
                  </li>
                  <li>
                    <Link to="">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="mt-2">
                <h6 className="text-white text-uppercase f-16">Latest news</h6>
                <div className="mt-3 mb-0">
                  <div>
                    <div className="d-flex">
                      <IconifyIcon icon="mdi:twitter" className="mdi text-white-50 float-start flex-shrink-0 me-3" />
                      <div className="flex-grow-1">
                        <p className="text-white-50 ps-3">
                          Pleasures have to repudiated annoyances accepted therefore always holds chooses enjoy a pleasure consequences.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="d-flex">
                      <IconifyIcon icon="mdi:twitter" className="mdi text-white-50 float-start flex-shrink-0 me-3" />
                      <div className="flex-grow-1">
                        <p className="text-white-50 ps-3">Greater pleasures el esndures pains avoid welcomed avoided pariatu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-alt pt-3 pb-3">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <p className="text-white-50 mb-0">  © {new Date().getFullYear()} Xeril. Design by Themesdesign</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
