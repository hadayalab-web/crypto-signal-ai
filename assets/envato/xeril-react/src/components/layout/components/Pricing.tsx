import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
      <section className="section bg-light" id="pricing">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="header-title text-center">
                <p className="text-uppercase text-muted mb-2">Offers</p>
                <h2 className="text-uppercase">Our Pricing</h2>
                <div className="title-border mt-3" />
                <p className="title-desc text-muted mt-3">
                  Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec
                  sollicitudin.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-2">
            <Col lg={4}>
              <div className="pricing-box bg-white box-shadow text-center p-5 mt-4 rounded">
                <h5 className="text-uppercase">Classic</h5>
                <h1 className="mt-4 pt-2">
                  <sup className="h3">$</sup> 27 <span className="text-primary f-16">/Week</span>
                </h1>
                <div className="pricing-features mt-4 pt-3">
                  <p>Customizad Plans</p>
                  <p>Billing Report</p>
                  <p>Access to Asana</p>
                </div>
                <div className="mt-5">
                  <Link to="" className="btn btn-primary w-100">
                    Purchase Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="pricing-box bg-white box-shadow text-center p-5 mt-4 rounded">
                <div className="pricing-label">
                  <h5 className="text-white f-16">New</h5>
                </div>
                <h5 className="text-uppercase">Popular</h5>
                <h1 className="mt-4 pt-2">
                  <sup className="h3">$</sup> 79 <span className="text-primary f-16">/Month</span>
                </h1>
                <div className="pricing-features mt-4 pt-3">
                  <p>Customizad Plans</p>
                  <p>Billing Report</p>
                  <p>Access to Asana</p>
                </div>
                <div className="mt-5">
                  <Link to="" className="btn btn-primary w-100">
                    Purchase Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="pricing-box bg-white box-shadow text-center p-5 mt-4 rounded">
                <h5 className="text-uppercase">Ultimate</h5>
                <h1 className="mt-4 pt-2">
                  <sup className="h3">$</sup> 99 <span className="text-primary f-16">/Years</span>
                </h1>
                <div className="pricing-features mt-4 pt-3">
                  <p>Customizad Plans</p>
                  <p>Billing Report</p>
                  <p>Access to Asana</p>
                </div>
                <div className="mt-5">
                  <Link to="" className="btn btn-primary w-100">
                    Purchase Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Pricing
