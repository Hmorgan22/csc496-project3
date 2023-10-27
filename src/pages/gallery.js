import * as React from "react"
import Navbar from "../components/Navbar"
import Container from 'react-bootstrap/Container';
import { StaticImage } from "gatsby-plugin-image"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IndexPage = () => {
  return (
    <section>
      <div>
        <Navbar />
        <Container>
          <div className="header-div text-center">
            <h1>Gallery</h1>
          </div>
          <Row>
            <Col>
              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy1.jpg"
                  alt="Vison image"
                />
              </div></Col>
            <Col>

              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy4.jpg"
                  alt="Vison image"
                />
              </div>
            </Col>
            <Col>
              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy5.jpg"
                  alt="Vison image"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy2.jpg"
                  alt="Vison image"
                />
              </div></Col>
            <Col>

              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy3.jpg"
                  alt="Vison image"
                />
              </div>
            </Col>
            <Col>
              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy6.jpg"
                  alt="Vison image"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy7.jpg"
                  alt="Vison image"
                />
              </div></Col>
            <Col>

              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy8.jpg"
                  alt="Vison image"
                />
              </div>
            </Col>
            <Col>
              <div className="custom-padding">
                <StaticImage
                  src="../images/Izzy9.jpg"
                  alt="Vison image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Gallery</title>
