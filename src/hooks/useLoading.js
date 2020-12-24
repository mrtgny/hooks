import React, {useCallback, useContext} from 'react';
import {StoreContext} from "../store";
import actions from "../actions";

const useLoading = () => {
    const [state, dispatch] = useContext(StoreContext);
    const {loading} = state;

    const increase = useCallback(() => {
        dispatch({type: actions.INCREASE_LOADING_QUEUE})
    }, [])

    const decrease = useCallback(() => {
        dispatch({type: actions.DECREASE_LOADING_QUEUE})
    }, [])

    return {...loading, increase, decrease};
};
export default useLoading;
