const handleErrors = response => {
    if (!response.ok) {
        let errorText = "";
        switch (response.status) {
            case 401:
                errorText = "Oops!  You must log in to access this feature."
                break;
            default:
                errorText = "An error has occurred.  " + response.statusText;
        }
        throw Error(errorText);
    }
    return response;
}

module.exports = handleErrors;