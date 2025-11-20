import IconifyIcon from '@/components/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="header-title text-center">
                <p className="text-uppercase text-muted mb-2">Who We Are?</p>
                <h2 className="text-uppercase">About Agency</h2>
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
              <div className="about-box bg-light rounded text-center mt-4">
                <IconifyIcon icon="mdi:monitor" height={47} width={40} className="mdi text-primary" />
                <h5 className="f-18 mt-3">Web design</h5>
                <div className="lighlight-border mt-3" />
                <p className="text-muted mt-3 mb-0">Aliquam tempor an tidunt liberonon feugiat quam risu tortor.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="about-box box-shadow rounded text-center mt-4">
                <IconifyIcon icon="mdi:nfc-variant" height={47} width={40} className="mdi text-primary" />
                <h5 className="f-18 mt-3">Development</h5>
                <div className="lighlight-border mt-3" />
                <p className="text-muted mt-3 mb-0">Aliquam tempor an tidunt liberonon feugiat quam risu tortor.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="about-box bg-light rounded text-center mt-4">
                <IconifyIcon icon="mdi:lightbulb-on-outline" height={47} width={40} className="mdi text-primary" />
                <h5 className="f-18 mt-3">Branding</h5>
                <div className="lighlight-border mt-3" />
                <p className="text-muted mt-3 mb-0">Aliquam tempor an tidunt liberonon feugiat quam risu tortor.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About
