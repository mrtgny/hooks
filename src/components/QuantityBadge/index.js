import React from 'react';
import constants from "../../utils/constants";

const QuantityBadge = props => {
    const {quantity} = props;

    return (
        <div style={{
            backgroundColor: constants.mainColor,
            width: 30,
            height: 30,
            borderRadius: 60,
        }} className="center">
            <p style={{margin: 0, color: 'white', fontWeight: 'bold'}}>
                {quantity}
            </p>
        </div>
    )
}

export default QuantityBadge
