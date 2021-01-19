import {useEffect} from "react";

const Redirect = (props) => {
    const {mode, history, redirectURL: _redirectURL} = props;
    const redirectURL = _redirectURL || "/";
    useEffect(() => {
        if (mode === "replace") {
            window.location.href = redirectURL;
        } else {
            history.push(redirectURL);
        }
    }, [mode, history, redirectURL])
    return null
}

export default Redirect;
