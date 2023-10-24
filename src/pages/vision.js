import * as React from "react"
import Navbar from "../components/Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <h1>Vision</h1>
        <p>Of all the values one could have, family and connection are the most important to me. Connecting with people is necessary to keep my heart full, and my love of photography is a way to do so in a meaningful, lasting way. My hope is to photograph you and your family in an authentic way that captures the love and emotions you have for each other.
          I want to give you the gift of having photos to look back on where EVERYONE is in the photos! Imagine being able to flip through memories together that tell the authentic story of the good ol’ days! Moments like playtime, cuddles, and routines; they are all simple, but they are what make up your life story. THOSE are the fleeting moments that matter and should never be forgotten. Let me help you preserve them.
          I look forward to documenting your life and the people and moments that matter most.
          With lots of love,
          Kourtney, your “friend with the camera”</p>
      </Container>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Vision</title>
