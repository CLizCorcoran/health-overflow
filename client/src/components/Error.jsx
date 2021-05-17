import React, { useState } from "react";
import '../sass/appsass.scss';


/*
        <div class="alert alert-dismissible alert-primary">
            <button type="button" class="btn btn-primary pt-0 pb-0 pr-2 pl-2 mr-2" onClick="(evt)=>{}">X</button>
            <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
        </div>


*/

const Error = props => {

    if (! props.error) {
        return null;
    }

    // Otherwise return the modal error dialog.  
    return (
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{props.error.title}</h5>
                    </div>
                    <div class="modal-body">
                        <p>{props.error.description}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={() => props.onClearError() } >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;