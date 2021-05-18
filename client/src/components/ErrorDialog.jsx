import React from "react";
import '../sass/appsass.scss';


// Props
//  title (optional)
//  message (optional)
//  onClear (required)
const ErrorDialog = props => {

    let errorTitle = (props.title ? props.title : "Error");
    let errorMessage = (props.message ? props.message : "An unspecified error has occurred.");

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{errorTitle}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{errorMessage}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={props.onClear}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorDialog;