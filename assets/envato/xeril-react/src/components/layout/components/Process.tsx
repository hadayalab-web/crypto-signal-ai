import { Col, Container, Row } from 'react-bootstrap'

const Process = () => {
  return (
    <>
      <section className="bg-progress section">
        <div className="bg-overlay" />
        <Container className="position-relative">
          <Row>
            <Col lg={12}>
              <div className="header-title text-center">
                <h2 className="text-uppercase text-white">Our Process</h2>
                <div className="title-border mt-3" />
                <p className="title-desc text-white-50 mt-3">
                  Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec
                  sollicitudin.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-2">
            <Col lg={3} className="progress-border">
              <div className="text-center">
                <div className="progress-count text-white mt-4">
                  <h3>01</h3>
                </div>
                <div className="progress-content bg-white mt-5 rounded p-4">
                  <h5 className="f-18">Concept</h5>
                  <p className="text-muted mb-0">Interdum malesuada fames ipsum primi faucibus.</p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="progress-border">
              <div className="text-center">
                <div className="progress-count text-white mt-4">
                  <h3>02</h3>
                </div>
                <div className="progress-content bg-white mt-5 rounded p-4">
                  <h5 className="f-18">Plan</h5>
                  <p className="text-muted mb-0">Interdum malesuada fames ipsum primi faucibus.</p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="progress-border">
              <div className="text-center">
                <div className="progress-count text-white mt-4">
                  <h3>03</h3>
                </div>
                <div className="progress-content bg-white mt-5 rounded p-4">
                  <h5 className="f-18">Design</h5>
                  <p className="text-muted mb-0">Interdum malesuada fames ipsum primi faucibus.</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center">
                <div className="progress-count text-white mt-4">
                  <h3>04</h3>
                </div>
                <div className="progress-content bg-white mt-5 rounded p-4">
                  <h5 className="f-18">Development</h5>
                  <p className="text-muted mb-0">Interdum malesuada fames ipsum primi faucibus.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Process
