import React from "react";
import "./BreadCrum.css"
import ArrowIcon from "../Assets/breadcrum_arrow.png"


const BreadCrum = (props) =>{
    const {product} = props; 
    return (
        <div className="breadcrum">
            HOME <img src={ArrowIcon} alt="arrow icon" />
            SHOP <img src={ArrowIcon} alt='arrw icon' />
            {product.category} <img src={ArrowIcon} alt='arrw icon' />
            {product.name}
        </div>
    );
}

export default BreadCrum;