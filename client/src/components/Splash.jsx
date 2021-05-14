import React, { useState } from "react";
import { Link } from "react-router-dom";
import fruit from "../image/pexels-element-digital-775032.jpg";
import pills from "../image/pexels-miguel-á-padriñán-806427.jpg";
import runner from "../image/pexels-pixabay-235922.jpg";
import yoga from "../image/pexels-valeria-ushakova-3094215.jpg";
import '../css/journal.css';
import '../sass/appsass.scss';


function Splash() {


    return (
        <div className="container-fluid" id="splash">

            <h1 className="text-center mt-4 mb-5"><i className="fas fa-heartbeat mr-2" title="Health Overflow" />Health Overflow</h1>

            <h3 className="text-center">Where the world comes together to help each other grow in body, mind, and spirit.</h3>
            <div className="text-center mt-3">
                <Link id="btnEnter" className="btn btn-primary" role="button" to="/questions">ENTER</Link>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="column">
                    <div className="pic">
                        <img src={fruit} alt="fruit" width="300"></img>
                    </div>
                    <div className="pic">
                        <img src={runner} alt="runner" width="300"></img>
                    </div>


                </div>

                <div className="column">
                    <div className="pic">
                        <img src={pills} alt="health word" width="300"></img>
                    </div>
                    <div className="pic">
                        <img src={yoga} alt="yoga" width="300"></img>

                    </div>

                </div>

            </div>


        </div>
    );
}

export default Splash;