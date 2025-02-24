import React, { useEffect, useState } from 'react'
import './Footer.css'
import { IoMailOutline } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

export default function Footer() {

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsActive(true)
                console.log('See that idiot')
            } else {
                setIsActive(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,     
            behavior: 'smooth',
        })
    }

    return (
        <>
            <footer className="footer section has-bg-image text-center"
                style={{ backgroundImage: 'url(assets/images/footer-bg.jpg)' }}>
                <div className="container">

                    <div className="footer-top grid-list">

                        <div className="footer-brand has-before has-after">

                            <a href="#" className="logo">
                                <img src="assets/images/logo.svg" style={{ width: 160, height: 50 }} loading="lazy" alt="grilli home" />
                            </a>

                            <address className="body-4">
                                Restaurant St, Delicious City, London 9578, UK
                            </address>

                            <a href="mailto:booking@grilli.com" className="body-4 contact-link">booking@grilli.com</a>

                            <a href="tel:+88123123456" className="body-4 contact-link">Booking Request : +88-123-123456</a>

                            <p className="body-4">
                                Open : 09:00 am - 01:00 pm
                            </p>

                            <div className="wrapper">
                                <div className="separator"></div>
                                <div className="separator"></div>
                                <div className="separator"></div>
                            </div>

                            <p className="title-1">Get News & Offers</p>

                            <p className="label-1">
                                Subscribe us & Get <span className="span">25% Off.</span>
                            </p>

                            <form action="" className="input-wrapper">
                                <div className="icon-wrapper">
                                    <IoMailOutline name="mail-outline" aria-hidden="true" />

                                    <input type="email" name="email_address" placeholder="Your email" autoComplete="off" className="input-field" />
                                </div>

                                <button type="submit" className="btn btn-secondary">
                                    <span className="text text-1">Subscribe</span>

                                    <span className="text text-2" aria-hidden="true">Subscribe</span>
                                </button>
                            </form>

                        </div>

                        <ul className="footer-list">

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Home</a>
                            </li>

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Menus</a>
                            </li>

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">About Us</a>
                            </li>

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Our Chefs</a>
                            </li>

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Contact</a>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Facebook</a>
                            </li>

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Instagram</a>
                            </li>

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Twitter</a>
                            </li>

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Youtube</a>
                            </li>

                            <li>
                                <a href="#" className="label-2 footer-link hover-underline">Google Map</a>
                            </li>

                        </ul>

                    </div>

                    <div className="footer-bottom">

                        <p className="copyright">
                            &copy; 2022 Grilli. All Rights Reserved | Crafted by <a href="https://github.com/codewithsadee"
                                target="_blank" className="link">codewithsadee</a>
                        </p>

                    </div>

                </div>
            </footer>

            {/* Back to Top */}

            {/* {
                isActive && (
                    <a className="back-top-btn active" aria-label="back to top" data-back-top-btn onClick={(e) => {
                        e.preventDefault()
                        scrollToTop()
                    }}>
                        <IoChevronUp name="chevron-up" aria-hidden="true" />
                    </a>
                )
            } */}
        </>
    )
}
