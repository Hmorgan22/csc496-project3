import * as React from "react"
import Navbar from "../components/Navbar"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/custom.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IndexPage = () => {
  return (
    <body>
      <Navbar />
      <Container>
        <div className="text-center">
          <div className="header-div">
          <h2>Hello & Welcome</h2>
          </div>
          <div className="home-div">
            <p>I believe choosing a photographer is a personal experience, so thank you for considering me.
              I promise that I will help you feel comfortable and confident in front of my camera, and we will create photographs that you’ll want to look back on again and again.
              Whether you are celebrating a milestone or want to capture a moment in time just because, please reach out, and let's have a conversation.</p>
          </div>

          <StaticImage
            src="../images/Kourtney1.jpg"
            alt="Home image"
            width={500}
            height={500}
          />
        </div>
      </Container>
    </body>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
