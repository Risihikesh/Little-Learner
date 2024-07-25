import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 992);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsWideScreen(window.innerWidth > 992);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleMouseOver() {
        if (isWideScreen) {
            setIsDropdownOpen(true);
        }
    }

    function handleMouseOut() {
        if (isWideScreen) {
            setIsDropdownOpen(false);
        }
    }

    return (
        
            <div className="container-fluid bg-light shadow">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                    <Link
                        to="/"
                        className="navbar-brand font-weight-bold text-secondary"
                        style={{ fontSize: 40 }}
                    >
                        <i className="flaticon-047-backpack" />
                        <span className="text-primary">LittleLearner</span>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav font-weight-bold mx-auto py-0">
                            <Link to="/" className="nav-item nav-link">
                                Home
                            </Link>
                            <Link to="/about" className="nav-item nav-link">
                                About
                            </Link>
                            <Link to="/class" className="nav-item nav-link">
                                Classes
                            </Link>
                            <Link to="/teacher" className="nav-item nav-link">
                                Teachers
                            </Link>
                            <Link to="/gallery" className="nav-item nav-link">
                                Gallery
                            </Link>
                            {/* <div 
                                className="nav-item dropdown"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                onFocus={() => setIsDropdownOpen(true)}
                                onBlur={() => setIsDropdownOpen(false)}
                            >
                                <Link
                                    to="/pages"
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded={isDropdownOpen ? 'true' : 'false'}
                                >
                                    Pages
                                </Link>
                                <div className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`} aria-labelledby="navbarDropdown">
                                    <Link to="/blog" className="dropdown-item">
                                        Blog Grid
                                    </Link>
                                    <Link to="/detail" className="dropdown-item">
                                        Blog Detail
                                    </Link>
                                </div>
                            </div> */}
                            <Link to="/contact" className="nav-item nav-link">
                                Contact
                            </Link>
                        </div>
                        <Link to="" className="btn btn-primary px-4">
                            Login
                        </Link>
                    </div>
                </nav>
            </div>
        
    );
};

export default Navbar;
