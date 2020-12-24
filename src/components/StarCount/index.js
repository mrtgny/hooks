import React from 'react';
import appStyles from "../../utils/styles";

const StarCount = props => {
    const {quantity, style, size: _size, filledStarRenderer} = props
    const size = _size || 24

    return (
        <div style={{...appStyles.row, alignItems: 'center', ...(style || {})}}>
            <p
                style={{margin: 0, fontWeight: 'bold', fontSize: size, marginRight: 4}}>
                {quantity}
            </p>
            <props.filledStarRenderer style={{color: 'orange', fontSize: size}}/>
        </div>
    )
}

export default StarCount;
