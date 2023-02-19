import React from "react";
import './HomepageStyle.css';

function Card({ props }) {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5><hr />
            <p className="card-text">{props.content}</p>
            <a href="#" className="btn btn-primary">Calculate 💰</a>
        </div>
    </div>
}

export default Card;