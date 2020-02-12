import React from "react";
import "./style.css"

function Game(props) {
    return (
        <div className="card hover-shadow">
            <div className="img-container">
                <img
                    alt={props.name}
                    src={props.image}
                    id={props.id}
                    onClick={() => props.shuffle(props.id)}
                />
            </div>
        </div>
    )
}

export default Game;