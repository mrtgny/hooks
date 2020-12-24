import React from "react";

const RowStretch = props => {
    const {style, children} = props;
    return (
        <div style={{display: 'flex', alignItems: 'stretch', flexFlow: 'row wrap', ...(style || {})}}>
            {children}
        </div>
    );
};
export default RowStretch;
