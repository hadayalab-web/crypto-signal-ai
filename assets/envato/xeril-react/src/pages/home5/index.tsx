import GlightBox from '@/components/GlightBox'
import IconifyIcon from '@/components/IconifyIcon'
import Header from '@/components/layout/topbar/Header'
import { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({
    width: 0,
    height: 0,
    marginTop: 0,
    marginLeft: 0,
  })

  const calculateVideoSize = () => {
    if (!containerRef.current) return

    const container = containerRef.current
    const winWidth = container.clientWidth
    const winHeight = container.clientHeight

    const margin = 24
    const overprint = 100

    let vidWidth = winWidth + (winWidth * margin) / 100
    let vidHeight = Math.ceil((9 * winWidth) / 16)
    let marginTop = -((vidHeight - winHeight) / 2)
    let marginLeft = -((winWidth * margin) / 200)

    if (vidHeight < winHeight) {
      vidHeight = winHeight + (winHeight * margin) / 100
      vidWidth = Math.floor((16 * winHeight) / 9)
      marginTop = -((winHeight * margin) / 200)
      marginLeft = -((vidWidth - winWidth) / 2)
    }

    vidWidth += overprint
    vidHeight += overprint
    marginTop -= overprint / 2
    marginLeft -= overprint / 2

    setStyle({
      width: vidWidth,
      height: vidHeight,
      marginTop,
      marginLeft,
    })
  }

  useEffect(() => {
    calculateVideoSize()
    window.addEventListener('resize', calculateVideoSize)
    return () => window.removeEventListener('resize', calculateVideoSize)
  }, [])

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
      loop: 1,
      start: 0,
      enablejsapi: 1,
      playlist: 'dwfjayxRvqw',
    },
  }
  return (
    <>
      <Header />
      <section className="home-half bg-home-video bg-primary" id="home">
        <div
          ref={containerRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
          }}>
          <YouTube
            videoId="dwfjayxRvqw"
            opts={opts}
            className="player"
            onReady={(event) => {
              event.target.mute()
              event.target.playVideo()
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: style.width,
              height: style.height,
              marginLeft: style.marginLeft,
              marginTop: style.marginTop,
              opacity: 1,
              zIndex: 0,
            }}
          />
        </div>
        <div
          className="bg-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(4,3,3,.95)',
          }}
        />
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="justify-content-center">
                <Col md={12}>
                  <div className="home-content text-white">
                    <div className="watch-video mt-5">
                      <GlightBox href="http://vimeo.com/99025203" className="video-play-icon-trigger text-white">
                        <IconifyIcon width={30} icon="mdi:play" className="p-3 mdi play-icon-circle play play-icon f-30" />
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
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
