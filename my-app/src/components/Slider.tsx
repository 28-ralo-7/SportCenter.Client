import React, { useState } from 'react';
import '../styles/Slider.css'
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);



    return (
        <div className="container_slider_css">
            <img className="photo_slider_css"  src={require("../image/gym_dumbbells.jpeg")} alt="a"/>
            <img className="photo_slider_css" src={require("../image/gym_photo_near_mirror.jpg")} alt="b"/>
            <img className="photo_slider_css" src={require("../image/gym_trainer.jpg")} alt="c"/>
        </div>
    );
}

export default Slider;
