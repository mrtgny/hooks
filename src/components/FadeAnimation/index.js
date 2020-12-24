import React, {useEffect, useState} from "react";

const FadeAnimation = props => {
    const {style, type: _type, duration: _duration, delay: _delay, onAnimationComplete, children} = props;
    const duration = _duration || 100
    const delay = _delay || 0
    const type = _type || "in";
    const [opacity, setOpacity] = useState(type === "in" ? 0 : 1);
    const toValue = type === "in" ? 1 : 0;

    useEffect(() => {
        if (opacity === toValue && onAnimationComplete) {
            setTimeout(() => {
                onAnimationComplete()
            }, duration + delay)
        }
    }, [opacity])

    useEffect(() => {
        if (type === "in") {
            setOpacity(toValue)
        } else {
            setOpacity(toValue)
        }
    }, [type])


    return (
        <div style={{opacity: opacity, transition: `${duration}`, transitionDelay: delay, ...(style || {})}}>
            {children}
        </div>
    )
}

export default FadeAnimation;
