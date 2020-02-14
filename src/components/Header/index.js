import React from "react";
import "./style.css";

function Header(props) {

    return (
        <div className="container-fluid">
            <nav className="navbar fixed-top" id="top-nav">
                <ul>
                    <li id="logo"><i class="fab fa-react fa-1x"></i> Clicky Game</li>
                    <li id="score">Score: {props.score} | Top Score: {props.topScore}</li>
                </ul>
            </nav>
            <div className="container-fluid text-align-center" id="banner">
                <div className="row text-align-center">
                    <div className="row text-align-center">
                        <div className="col-2"></div>
                        <div className="col-8   justify-content-center" id="bannerTag">
                            <h1>Clicky Game!</h1>
                            <h4>Click on an image to earn points, but don't click on any more than once!</h4>
                        </div>
                        <div className="col-2"></div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Header;

