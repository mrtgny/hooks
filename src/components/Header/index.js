import React from 'react';
import appStyles from "../../utils/styles";

const Header = (props) => {
    const {title, titleRenderer, style, titleStyle, extra} = props;

    return (
        <div style={{...appStyles.row, alignItems: 'center', minHeight: 48, ...(style || {})}}>
            <div style={{flex: 1, ...(titleStyle || {})}}>
                {titleRenderer ?
                    titleRenderer :
                    <div style={{margin: 0, ...appStyles.cardTitle}}>{title}</div>
                }
            </div>
            {extra}
        </div>
    )
}

export default Header
