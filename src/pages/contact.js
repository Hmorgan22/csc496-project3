import * as React from "react"
import Navbar from "../components/Navbar"
import ClearInputForm from '../components/ClearInputForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const IndexPage = () => {
  return (
    <section>
      <div>
        <Navbar />
        <div className="text-center">
          <div className="header-div">
          <h1>Contact</h1>
          </div>
          <div className="contact-div">
            <p>When telling your story and documenting your moments, I don't want to leave out any details. Help me give you the best experience by answering these questions.</p>
          </div>
        </div>
        <ClearInputForm />
      </div>
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Contact</title>
