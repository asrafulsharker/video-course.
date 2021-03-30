import React from 'react'
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <link to="/" className="navbar-logo">
                        <MdFingerprint className="navbar-icon"/>
                        BD Crack
                    </link>
                    <div className="menu-icon">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
