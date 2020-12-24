import React from 'react';

const Section = props => {
    const {title, extra, className, style, children} = props;
    return (
        <div
            className={className}
            style={{
                border: '1px solid #ddd',
                borderRadius: 20,
                padding: 16,
                margin: 8,
                height: '100%', ...(style || {})
            }}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                {title ?
                    <div style={{fontWeight: 'bold', fontSize: 18}}>{title}</div>
                    : null}
                {extra}
            </div>
            {children}
        </div>
    );
};

export default Section;
