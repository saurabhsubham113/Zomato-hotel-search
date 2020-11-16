import React from 'react';
import './Card.style.css';

export default function Card({imageUrl,name,rating,address,}) {
    return (
        <div className="card">
            <img src={imageUrl} alt="restraunt" />
            <div className="container">
                <h3>{name}</h3>
                <p>{rating}</p>
                <p className="address"> {address} </p>
                <p>200 per person</p>
            </div>
        </div>
    )
}
