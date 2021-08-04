import React from "react";
import '../styles/Card.css';

export const Card = ({name, email, id}) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${id}?150x150`} alt="robot" srcset="" />
            <div className="card-panel">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div> 
    );    
}

