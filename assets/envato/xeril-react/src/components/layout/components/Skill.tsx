import feature from '@/assets/images/features/img-1.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Skill = () => {
  return (
    <>
      <section className="section bg-light">
        <Container>
          <Row className="vertical-content">
            <Col lg={6} className="p-0">
              <div className="skill-box bg-white p-4 rounded box-shadow">
                <h5>Best Skills.</h5>
                <p className="text-muted">Quisque semper nulla euismod tempor sodales eleifend libero velit Proin pulvinar non rutrum elementum.</p>
                <div className="skills">
                  <div className="mt-4">
                    <p className="fw-bold mb-2">Web Design</p>
                    <div className="progress">
                      <div className="progress-bar rounded" style={{ width: '80%' }}>
                        <p className="progress-value f-15 fw-bold">80%</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="fw-bold mb-2">Development</p>
                    <div className="progress">
                      <div className="progress-bar rounded" style={{ width: '60%' }}>
                        <div className="progress-value f-15 fw-bold">60%</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="fw-bold mb-2">Branding</p>
                    <div className="progress">
                      <div className="progress-bar rounded" style={{ width: '40%' }}>
                        <div className="progress-value f-15 fw-bold">40%</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="fw-bold mb-2">Code</p>
                    <div className="progress">
                      <div className="progress-bar rounded" style={{ width: '75%' }}>
                        <div className="progress-value f-15 fw-bold">75%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0 about-img">
              <Image src={feature} className="img-fluid rounded box-shadow" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Skill
