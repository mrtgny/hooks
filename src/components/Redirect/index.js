import {useEffect} from "react";
import useHistory from "../../hooks/useHistory";

const Redirect = (props) => {
    const {mode, redirectURL: _redirectURL} = props;
    const redirectURL = _redirectURL || "/";
    const history = useHistory();
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
