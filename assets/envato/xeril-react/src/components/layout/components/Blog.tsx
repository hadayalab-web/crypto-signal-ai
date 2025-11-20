import img1 from '@/assets/images/blog/img-1.jpg'
import img2 from '@/assets/images/blog/img-2.jpg'
import img3 from '@/assets/images/blog/img-3.jpg'
import IconifyIcon from '@/components/IconifyIcon'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <section className="section" id="blog">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="header-title text-center">
                <p className="text-uppercase text-muted mb-2">News</p>
                <h2 className="text-uppercase">Our Blog</h2>
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
              <div className="blog-box box-shadow rounded p-3 mt-4">
                <div className="blog-img">
                  <Image src={img1} className="img-fluid rounded" alt="" />
                </div>
                <div className="d-flex mt-4">
                  <div className="flex-shrink-0">
                    <div className="blog-date rounded">
                      <h5 className="text-white f-14 fw-normal p-2 mb-0">25</h5>
                      <h5 className="bg-dark f-12 fw-normal rounded text-white p-2 mb-0 text-uppercase">Jan</h5>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3 mt-2">
                    <Link to="">
                      <h5 className="f-18 mb-1">Printer took galley book.</h5>
                    </Link>
                    <p className="text-muted">Business, Corporate</p>
                  </div>
                </div>
                <p className="text-muted mt-2">
                  Pellensque pharetra diamt tricies pharetra tortor in tha starc amet semper smart dapibus tortor in maximus.
                </p>
                <div className="mt-3">
                  <Link to="" className="read-more">
                    Read more <IconifyIcon icon="mdi:chevron-right" className="mdi" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="blog-box box-shadow rounded p-3 mt-4">
                <div className="blog-img">
                  <Image src={img2} className="img-fluid rounded" alt="" />
                </div>
                <div className="d-flex mt-4">
                  <div className="flex-shrink-0">
                    <div className="blog-date rounded flex-shrink-0">
                      <h5 className="text-white f-14 fw-normal p-2 mb-0">12</h5>
                      <h5 className="bg-dark f-12 fw-normal rounded text-white p-2 mb-0 text-uppercase">Feb</h5>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3 mt-2">
                    <Link to="">
                      <h5 className="f-18 mb-1">Enjoy pleasure aying cones.</h5>
                    </Link>
                    <p className="text-muted">Design, Designer</p>
                  </div>
                </div>
                <p className="text-muted mt-2">
                  Semper felis pharetr ultricies justo ornare eget consectetur venenatis they at pharetra metus eleifend rutrum pulvinar
                </p>
                <div className="mt-3">
                  <Link to="" className="read-more">
                    Read more <IconifyIcon icon="mdi:chevron-right" className="mdi" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="blog-box box-shadow rounded p-3 mt-4">
                <div className="blog-img">
                  <Image src={img3} className="img-fluid rounded" alt="" />
                </div>
                <div className="d-flex mt-4">
                  <div className="flex-shrink-0">
                    <div className="blog-date rounded flex-shrink-0">
                      <h5 className="text-white f-14 fw-normal p-2 mb-0">31</h5>
                      <h5 className="bg-dark f-12 fw-normal rounded text-white p-2 mb-0 text-uppercase">Jun</h5>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3 mt-2">
                    <Link to="">
                      <h5 className="f-18 mb-1">Welmed every pain avoided.</h5>
                    </Link>
                    <p className="text-muted">Business, Corporate</p>
                  </div>
                </div>
                <p className="text-muted mt-2">
                  Curabitur labore pharetra quis lacia dolor convais honcus nulla porta stiyo vitae a eros felis iaculis in imperdiet.
                </p>
                <div className="mt-3">
                  <Link to="" className="read-more">
                    Read more <IconifyIcon icon="mdi:chevron-right" className="mdi" />
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

export default Blog
