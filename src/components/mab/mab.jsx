import React, { useState } from "react";
import "./mab.css";

const Mab = () => {
    const slidesData = [
        {
            location: "Hong Kong",
            registrations: 234,
            map: "Location: Hong Kong, Asia",
            features: ["Best prices", "Short processing time", "Reliable assistance"],
        },
        {
            location: "Europe (Schengen)",
            registrations: 234,
            map: "Location: Europe, Schengen Area",
            features: ["Best prices", "Short processing time", "Reliable assistance"],
        },
        {
            location: "India",
            registrations: 234,
            map: "Location: India, Asia",
            features: ["Best prices", "Short processing time", "Reliable assistance"],
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    };

    return (
        <div className="mabSlider">
            <button className="nav-button" onClick={handlePrev}>
                ❮
            </button>
            <div className="slide-content">
                <h2>{slidesData[currentSlide].location}</h2>
                <p>{slidesData[currentSlide].registrations} Registrations</p>
                <p className="map-location">{slidesData[currentSlide].map}</p>
                <h4>Support for obtaining a visa includes:</h4>
                <ul>
                    {slidesData[currentSlide].features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
                <button className="book-button">Book Now</button>
            </div>
            <button className="nav-button" onClick={handleNext}>
                ❯
            </button>
        </div>

    );
};

export default Mab;
