import {useEffect} from "react";

const Show = props => {
    const {condition, willUnmount, children} = props;

    useEffect(() => {
        return willUnmount
    }, [willUnmount])

    if (condition)
        return children;
    return null;
}

export default Show
