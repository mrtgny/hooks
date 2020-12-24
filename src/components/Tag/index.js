import React from "react";
import Show from "../DisplayConditions/Show";
import {SwatchesPicker} from 'react-color'
import appStyles from "../../utils/styles";

const Tag = props => {
    const {
        color: _color,
        description,
        onColorChange,
        generatedColor,
        type: _type,
        textStyle,
        style,
        onClick,
        onTextClick,
        onClear,
        moreIconRenderer,
        closeIconRenderer,
        buttonRenderer,
        popoverRenderer
    } = props
    const type = _type || "outlined";

    const color = _color || (generatedColor ? generatedColorFromString(description) : "#ccc")
    const textColor = type === "filled" ? 'white' : color;
    const backgroundColor = type === "filled" ? color : 'white'
    return (
        <div style={{
            padding: 4,
            border: `1px solid ${color}`,
            borderRadius: 8,
            backgroundColor,
            ...appStyles.center, ...(style || {})
        }} onClick={onClick}>
            <Show condition={onColorChange}>
                <props.popoverRenderer content={
                    <SwatchesPicker onChange={onColorChange}/>
                } title="Renk">
                    <props.buttonRenderer icon={<props.moreIconRenderer style={{fontSize: 11}}/>}
                                          shape="circle"
                                          style={{
                                              border: 'none',
                                              backgroundColor: '#eee',
                                              width: 20,
                                              minWidth: 20,
                                              height: 20,
                                              lineHeight: "1px",
                                              marginRight: 4
                                          }}
                    />
                </props.popoverRenderer>

            </Show>
            <p className={onTextClick ? "clickable" : ""} style={{color: textColor, margin: 0, ...(textStyle || {})}}
               onClick={onTextClick}>
                {description}
            </p>
            <Show condition={onClear}>
                <props.buttonRenderer icon={<props.closeIconRenderer style={{fontSize: 11}}/>}
                                      shape="circle"
                                      style={{
                                          border: 'none',
                                          backgroundColor: '#eee',
                                          width: 20,
                                          minWidth: 20,
                                          height: 20,
                                          lineHeight: "1px",
                                          marginLeft: 4
                                      }}
                                      onClick={onClear}

                />
            </Show>
        </div>
    )
}

export default Tag;
