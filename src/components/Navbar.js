import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return(
        <nav>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/vision">Vision</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}