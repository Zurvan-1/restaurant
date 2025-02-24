import React, { useEffect, useState } from 'react'
import './Header.css'
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {

    const [isShowNavbar, setIsShowNavbar] = useState(false)
    const [visible, setVisible] = useState(true)
    const [hide, setHide] = useState(false)

    const openNavbar = () => {
        setIsShowNavbar(true)
    }

    const closeNavbar = () => {
        setIsShowNavbar(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setVisible(false)
            }else {
                setVisible(true)
            }

            if (window.scrollY > 70) {
                setHide(true)
            } else {
                setHide(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    })



    return (
        <header className={`header ${hide ? "hide" : ""} ${!visible ? 'active' : ''}`} data-header>
            <div className="container">
                <a href="#" className="logo">
                    <img src="assets/images/logo.svg" width={168} height={50} alt='Grilli - Home' />
                </a>

                <nav className={isShowNavbar ? 'navbar active' : 'navbar'} data-navbar>
                    <button onClick={closeNavbar} className="close-btn" aria-label='close menu' data-nav-toggler>
                        <IoCloseOutline className='toCloseOutLine' />
                    </button>

                    <a href="#" className="logo">
                        <img src="assets/images/logo.svg" width={168} height={50} alt='Grilli - Home' />
                    </a>

                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#" className='navbar-link hover-underline active'>
                                <div className="separator"></div>
                                <span className="span">Home</span>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className='navbar-link hover-underline'>
                                <div className="separator"></div>
                                <span className="span">Menus</span>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className='navbar-link hover-underline'>
                                <div className="separator"></div>
                                <span className="span">About Us</span>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className='navbar-link hover-underline'>
                                <div className="separator"></div>
                                <span className="span">Our Chefs</span>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className='navbar-link hover-underline'>
                                <div className="separator"></div>
                                <span className="span">Contact</span>
                            </a>
                        </li>
                    </ul>

                    <div className="text-center">
                        <p className="headline-1 navbar-title">Visit Us</p>

                        <address className="body-4">
                            Restaurant St, Delicious City,<br />
                            London 9578, UK
                        </address>

                        <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

                        <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>

                        <div className="separator"></div>

                        <p className="contact-label">Booking Request</p>

                        <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
                            +88-123-123456
                        </a>
                    </div>
                </nav>

                <a href="" className="btn btn-secondary">
                    <span className="text text-1">Find A Table</span>
                    <span className="text text-2" aria-hidden={true}>Find A Table</span>
                </a>

                <button className="nav-open-btn" aria-label='opne menu' data-nav-toggler onClick={openNavbar}>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>

                <div className="overlay" data-nav-toggler data-overlay></div>

            </div>
        </header>
    )
}
