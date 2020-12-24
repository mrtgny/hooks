import React, {useState} from 'react';
import Show from "../DisplayConditions/Show";
import constants from "../../utils/constants";
import appStyles from "../../utils/styles";

const AttachmentImage = props => {
    const [loaded, setLoaded] = useState(false);
    const {id, size: _size, style, placeholder: _placheholder, hidePlaceholder, ...rest} = props;
    const size = _size ? {width: _size, height: _size, borderRadius: '50%'} : {}
    const placeholder = _placheholder || "P"
    const fontSize = isNaN(_size / 2) ? 24 : _size / 2;
    return (
        <div style={{
            ...size,
            ...appStyles.defaultShadow,
            ...style,
        }} className="rounded-image-container center">
            <Show condition={id}>
                <img
                    onLoad={() => setLoaded(true)}
                    src={`${constants.REST_SERVER}/attachments/stream/${id}`}
                    alt=""
                    className="rounded-image"
                    style={{
                        ...style,
                        display: loaded ? undefined : 'none'
                    }}
                    {...rest}
                />
            </Show>
            <Show condition={!loaded && !hidePlaceholder}>
                <div style={{width: '100%', height: '100%'}} className="center">
                    <p style={{margin: 0, fontSize, fontWeight: 'bold'}}>{placeholder}</p>
                </div>
            </Show>
        </div>
    )
}

export default AttachmentImage;
