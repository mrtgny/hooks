import {cloneElement} from 'react';

const Mapper = props => {
    const {items, map, children} = props;
    if (children)
        return (items || []).map((item, index) => {
            return cloneElement(children, {...item, key: index})
        })
    return (items || []).map(map)
}

export default Mapper;
