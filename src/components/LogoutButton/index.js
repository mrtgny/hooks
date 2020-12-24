import React from 'react';
import useHistory from "../../hooks/useHistory";
import useAuth from "../../hooks/useAuth";

const LogoutButton = (props) => {
    const {style, className, renderer, icon} = props;
    const history = useHistory();
    const {logout} = useAuth()

    const onLogout = () => {
        logout()
        history.push("/sign")
    }

    return (
        <props.renderer icon={<props.icon style={{fontSize: 16}}/>}
                        type="link"
                        className={className}
                        style={{paddingLeft: 0, ...(style || {})}}
                        onClick={onLogout}>
            Çıkış Yap
        </props.renderer>
    )
}

export default LogoutButton
