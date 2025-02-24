import React from 'react'
import './Slider.css'

export default function Slider({ imgSrc, title, desc1, desc2, isActive }) {

    return (
        <li className={`slider-item ${isActive ? "active" : ''}`} data-hero-slider-item>
            <div className="slider-bg">
                <img src={imgSrc} alt="" className="img-cover" width={1880} height={950} />
            </div>

            <p className="label-2 section-subtitle slider-reveal">{title}</p>
            <h1 className="display-1 hero-title slider-reveal">{desc1} <br />
                {desc2}
            </h1>
            <p className="body-2 hero-text slider-reveal">
                Come with family & feel the joy of mouthwatering food
            </p>
            <a href="#" className="btn btn-primary slider-reveal">
                <span className="text text-1">View Our Menu</span>
                <span className="text text-2" aria-hidden={true}>View Our Menu</span>
            </a>
        </li>
    )
}
