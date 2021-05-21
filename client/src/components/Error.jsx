import React from "react";
import '../sass/appsass.scss';

//----------------------------------------------------------------
// Renders an error dialog to the user.  
//  Used in places like Log in when the username isn't recognized
//  or the password isn't correct.
//----------------------------------------------------------------
const Error = props => {

    if (! props.error) {
        return null;
    }

    // Otherwise return the modal error dialog.  
    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.error.title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{props.error.description}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => props.onClearError() } >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;