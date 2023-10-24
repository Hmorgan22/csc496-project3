import * as React from "react"
import Navbar from "../components/Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IndexPage = () => {
  return (
    <section>
      <div>
      <Navbar />
      <h1>Gallery</h1>
      </div>
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Gallery</title>
