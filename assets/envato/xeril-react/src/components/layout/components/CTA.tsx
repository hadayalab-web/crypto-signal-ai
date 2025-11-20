import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <section className="section bg-cta">
        <div className="bg-overlay" />
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-cebter">
                <h2 className="text-white text-center">Become a part of Xeril bussiness community today</h2>
                <p className=" text-white text-center mt-3">Molestias excepturi sint occaecati cupiditate non provident</p>
                <div className="text-center mt-4">
                  <Link to="" className="btn btn-primary mt-2">
                    Get Started
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

export default CTA
