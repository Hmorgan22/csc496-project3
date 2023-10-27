import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
            <div className='links'>
                <Link className='link-padding' to="/">Home</Link>
                <Link className='link-padding' to="/gallery">Gallery</Link>
                <Link className='link-padding' to="/vision">Vision</Link>
                <Link className='link-padding' to="/contact">Contact</Link>
            </div>
        </nav>
    )
}