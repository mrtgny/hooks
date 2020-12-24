import React from 'react';
import OverflowImages from "../OverflowImages";
import appStyles from "../../utils/styles";


const DescriptionOverflowImages = props => {
    const {title, images, maxCount} = props;
    return (
        <div style={{...appStyles.row, alignItems: 'center'}}>
            <div style={{...appStyles.row, alignItems: 'center', marginRight: 4}}>
                <OverflowImages images={images} maxCount={maxCount} size={40}/>
            </div>
            <p style={{fontWeight: '600', fontSize: 18, margin: 0}}>{title}</p>
        </div>
    )
}

export default DescriptionOverflowImages;
