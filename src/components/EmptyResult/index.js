import React from 'react';
import appStyles from "../../utils/styles";

const EmptyResult = props => {
    const {icon, title, style, size: _size} = props;
    const size = _size || 120
    return (
        <div style={{...(style || {})}}>
            <div className="center" style={{
                width: '100%',
                flexDirection: 'column'
            }}>
                <div className="center" style={{
                    ...appStyles.defaultShadow,
                    ...appStyles.rounded(size),
                    backgroundColor: 'white',
                }}>
                    {icon}
                </div>
            </div>
            <div>
                <p style={{
                    textAlign: 'center',
                    fontWeight: '100',
                    fontSize: 18,
                    whiteSpace: 'pre-wrap',
                    color: 'black',
                    marginTop: 16
                }}>{title}</p>
            </div>
        </div>
    )
}

export default EmptyResult;
