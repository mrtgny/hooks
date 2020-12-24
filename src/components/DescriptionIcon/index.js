import React from 'react';

const DescriptionIcon = props => {
    const {style, titleStyle, icon, description} = props;
    return (
        <div className="center" style={{
            flexDirection: 'column',
            ...(style || {})
        }}>
            {icon}
            <div style={{
                paddingHorizontal: 8,
                paddingVertical: 2,
                marginTop: 4,
                backgroundColor: '#eee',
                borderRadius: 10
            }}>
                <p style={{
                    margin: 0,
                    padding: '4px 8px',
                    whiteSpace: 'nowrap',
                    color: '#4285F4',
                    fontWeight: 'bold', ...(titleStyle || {})
                }}>{description}</p>
            </div>
        </div>
    )
}

export default DescriptionIcon;
