import React from 'react'

function index() {
  return (
    <header>
        <div className="pp-header">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container"><a href="index.html"><img src="images/favicon.png" alt="Logo" /></a><a className="navbar-brand" href="index.html">Photo Perfect</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="about.html">About</a>
                </li>
                {/* <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a>
                </li> */}
                </ul>
            </div>
            </div>
        </nav>
        </div>
    </header>
  )
}

export default index