import {useCallback, useEffect, useState} from 'react';

const useDimensions = (params) => {
    const {element, id, tagName} = params;
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const getElement = useCallback(() => {
        if (element) {
            return element
        } else if (id) {
            return document.getElementById(id)
        } else if (tagName) {
            return document.getElementsByTagName(tagName)[0];
        } else {
            return document.getElementsByTagName("body")[0];
        }
    }, [element, id, tagName])

    const onresize = useCallback((e) => {
        const _width = e.target.innerWidth
        const _height = e.target.innerHeight
        setWidth(_width)
        setHeight(_height)
    }, [])

    useEffect(() => {
        const body = getElement()
        if (body)
            body.onresize = onresize
        const _width = window.innerWidth
        const _height = window.innerHeight
        setWidth(_width)
        setHeight(_height)
    }, [getElement, onresize])

    return {width, height}
}

export default useDimensions
