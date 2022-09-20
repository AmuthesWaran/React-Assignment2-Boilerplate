import React from 'react'

const Footer = () => {
  return (
    <div className="container-well">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item px-2">Home</li>
            <li className="nav-item px-2">Blog</li>
            <li className="nav-item px-2">Services</li>
            <li className="nav-item px-2">FAQs</li>
            <li className="nav-item px-2">About</li>
            </ul>
            <p className="text-center text-muted">© 2022 Tech Feed, Inc</p>
        </footer>

    </div>
  )
}

export default Footer