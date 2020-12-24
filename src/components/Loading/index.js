import React from "react";

const Loading = props => {
    const {loadingRenderer, ...rest} = props;
    return <props.loadingRenderer {...rest} />
}

export default Loading;
