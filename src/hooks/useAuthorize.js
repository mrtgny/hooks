import {useEffect, useState} from 'react';

const useAuthorize = (props = {}) => {
    const [authorize, setAuthorize] = useState({});

    useEffect(() => {
        setAuthorize({})
    }, [])

    return authorize
}

export default useAuthorize;
