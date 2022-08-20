import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    let myStyle = {
        color: props.mode ==='dark'?'white':'red',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'yellow', 
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={myStyle} >
            <div className="container-fluid" >
                <Link className="navbar-brand"  to="/ " style={myStyle}>{props.title}</Link>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={myStyle}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Home" style={myStyle}>Home</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/TextUtils" style={myStyle}>submit form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={myStyle}>{props.aboutText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/Card" style={myStyle} >Product</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'yellow':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={myStyle}><span>VPLLEX</span><Link to="tel:7600043135" class="number">7600043153</Link></label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };