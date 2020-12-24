import React, {forwardRef, useEffect, useState} from 'react';
import SelectItemsRenderer from '../SelectItemsRenderer'
import useApi from "../../hooks/useApi";

const QuerySelect = forwardRef((props, ref) => {
        const [items, setItems] = useState(false);
        const {url, options, ...rest} = props;
        const {fetched, load, response} = useApi()

        useEffect(() => {
            if (url) {
                load({endpoint: url, ...options})
            }
        }, [url, load, options])

        useEffect(() => {
            if (fetched && response) {
                setItems(response.data);
            }
        }, [fetched, response]);
        return (
            <SelectItemsRenderer items={items} ref={ref} {...rest} />
        );
    },
);

export default QuerySelect;
