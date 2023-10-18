import * as React from "react"
import Navbar from "../components/Navbar"

const IndexPage = () => {
  return (
    <section>
      <div>
      <Navbar />
      <h1>Contact</h1>
      </div>
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Contact</title>
