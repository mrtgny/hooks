import React from 'react';
import appStyles from "../../utils/styles";
import AttachmentImage from "../AttachmentImage";

const OverflowImages = props => {
    const {images, maxCount: _maxCount, badgeRenderer, size} = props;
    const maxCount = _maxCount || 3;
    const overflowItemsCount = images.length - maxCount;

    return (
        <div style={{...appStyles.center, flexDirection: 'column', marginRight: 8}}>
            <props.badgeRenderer count={overflowItemsCount > 0 ? `+${overflowItemsCount}` : undefined}>
                <div style={{...appStyles.center}}>
                    {
                        images.filter((_, index) => index < maxCount).map((image, index) => {
                            return (
                                <div style={{
                                    border: '1px solid white',
                                    marginLeft: index && -32,
                                    borderRadius: size
                                }} key={index}>
                                    <AttachmentImage id={image} key={index} size={size}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </props.badgeRenderer>
        </div>
    )
}

export default OverflowImages;
