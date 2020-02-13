import React from "react";
import "./style.css";

function Header(props) {

    return (
        <div className="container-fluid">
            <nav className="navbar fixed-top" id="top-nav">
                <ul>
                    <li>Clicky Game</li>
                    <li>Click an image to begin</li>
                    <li>Score: {props.score} | Top Score: {props.topScore}</li>
                </ul>
            </nav>
            <div className="container-fluid text-align-center" id="banner">
                <div className="row text-align-center">
                    <span>
                        <h1>Clicky Game!</h1>
                        <h4>Click on an image to earn points, but don't click on any more than once!</h4>
                    </span>

                </div>
            </div>
        </div>
    );

}

export default Header;

