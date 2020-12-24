import React from 'react';
import appStyles from "../../utils/styles";

const Shimmer = (props) => {
    const {style, skeletonRenderer} = props;
    return (
        <div style={{...appStyles.card, padding: 16, ...(style || {})}}>
            <props.skeletonRenderer loading {...props}/>
        </div>
    );
}

export default Shimmer;
