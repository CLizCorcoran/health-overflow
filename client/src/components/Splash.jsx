import React, { useState } from "react";
import fruit from "../image/pexels-element-digital-775032.jpg";
import pills from "../image/pexels-miguel-á-padriñán-806427.jpg";
import runner from "../image/pexels-pixabay-235922.jpg";
import yoga from "../image/pexels-valeria-ushakova-3094215.jpg";
import '../css/journal.css';
import '../sass/appsass.scss';


function Splash() {


    return (
        <div className="container-fluid" id="splash">

            <h1 className="text-center mb-5"><i className="fas fa-heartbeat mr-2" title="Health Overflow" />Health Overflow</h1>

            <div className="row justify-content-center">
                <div class="column">
                    <div className="pic">
                        <img className="pic mr-3" src={fruit} alt="fruit" width="300"></img>
                    </div>
                    <div className="pic">
                        <img className="pic mr-3" src={runner} alt="runner" width="300"></img>
                    </div>


                </div>

                <div className="column">
                    <div className="pic">
                        <img className="pic" src={pills} alt="health word" width="300"></img>
                    </div>
                    <div className="pic">
                        <img className="pic" src={yoga} alt="yoga" width="300"></img>

                    </div>

                </div>

            </div>


        </div>
    );
}

export default Splash;