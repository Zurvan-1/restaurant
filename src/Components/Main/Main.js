import React, { useEffect, useState } from 'react'
import './Main.css'
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import Slider from '../Slider/Slider';
import Datas from '../../Data/Data'
import Service from '../Service/Service';
import About from '../About/About';
import Special from '../Special/Special';
import Menu from '../Menu/Menu';
import TestImonials from '../TestImonials/TestImonials';
import Reservation from '../Reservation/Reservation';
import Features from '../Features/Features';
import Event from '../Event/Event';

export default function Main() {

    const slides = Datas
    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }, 7000)
        return () => clearTimeout(timeOut)    
    }, [activeIndex]);

    return (
        <main>
            <article>

                {/* Start Section */}

                <section className='hero text-content' aria-label='home' id='home'>
                    <ul className="hero-slider" data-hero-slider>
                        {
                            slides.map((slider, index) => (
                                <Slider key={slider.id} isActive={index === activeIndex} {...slider} />
                            ))
                        }
                    </ul>

                    {/* <button className="slider-btn prev" aria-label='slide to previous' data-prev-btn>
                        <IoChevronBack />
                    </button>

                    <button className="slider-btn next" aria-label='slide to next' data-next-btn>
                        <IoChevronForward />
                    </button> */}

                    <a href="" className="hero-btn has-after">
                        <img src="assets/images/hero-icon.png" alt="booking icon" width={48} height={48} />
                        <span className="label-2 text-center span">Book A Table</span>
                    </a>
                </section>

                {/* Finish Section */}

                {/* Start Service */}

                <Service />

                {/* Finish Service */}

                {/* Start About */}

                <About />

                {/* Finish About */}

                {/* Start Special */}

                <Special />

                {/* Finish Special */}

                {/* Start Menu */}

                <Menu />

                {/* Finish Menu */}

                {/* Start Imonials */}

                <TestImonials />

                {/* Finish Imonials */}

                {/* Start Reservation */}

                <Reservation />

                {/* Finish Reservation */}

                {/* Start Features */}

                <Features />

                {/* Finish Features */}

                {/* Start Event */}

                <Event />

                {/* Finish Event */}
            </article>
        </main>
    )
}

