import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react';
import useApi from "../../hooks/useApi";
import appStyles from "../../utils/styles";
import {Show} from "../../index";
import Mapper from "../Mapper";

const InfiniteScrollView = forwardRef((props, ref) => {
    const {
        style,
        endpoint,
        apiOptions: _apiOptions,
        shimmer,
        onDataChange,
        render,
        pageSize: _pageSize,
        empty,
        reload,
        filterOptions,
        onReload,
        loadingRenderer
    } = props;
    const apiOptions = _apiOptions || {};
    const {method, params, onSuccess: apiOptionsOnSuccess} = apiOptions;

    const pageSize = _pageSize || 5;
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});
    const reloaderRef = useRef(null)


    const updateDataByIndex = (index, item) => {
        setData(oldData => {
            oldData[index] = item;
            return oldData;
        })
    }

    useImperativeHandle(ref, () => ({
        updateDataByIndex
    }))

    const containerView = useRef(null);

    const onSuccess = response => {
        if (apiOptionsOnSuccess) {
            apiOptionsOnSuccess(response)
        }
        setData(oldData => {
            const newData = response.data.currentPage === 1 ? response.data.results || [] : [...oldData, ...(response.data.results || [])]
            if (onDataChange)
                onDataChange(newData)
            return newData;
        })
    }

    const {fetched, firstTimeFetched, load: apiLoad, response} = useApi({onSuccess})
    const {pageCount} = response.data || {};
    const hasNextPage = (page || 1) < (pageCount || 2);

    const load = useCallback(() => {
        const hasNextPage = (page || 1) <= (pageCount || 2);
        if (!hasNextPage) return;

        const _endpoint = `${endpoint}/${page}/${pageSize}`;
        const _method = method || (filterOptions ? "POST" : "GET");
        const _params = params || (filterOptions ? filter : undefined);

        apiLoad({endpoint: _endpoint, method: _method, params: _params})

    }, [page, pageCount, endpoint, pageSize, method, params, filterOptions, apiLoad, filter])

    const nextPage = useCallback(() => {
        if (fetched && hasNextPage) {
            setPage(oldPage => oldPage + 1);
        }
    }, [fetched, hasNextPage])

    const onRefresh = useCallback(() => {
        if (page === 1) {
            load()
        } else {
            setPage(1)
        }
    }, [load, page]);

    const shouldFetchNextPage = useCallback(() => {
        if (!reloaderRef.current)
            return false;
        const reloaderRects = reloaderRef.current.getClientRects();
        const reloaderOffsetY = reloaderRects[0].top;
        const shouldFetch = reloaderOffsetY - 20 <= window.innerHeight
        return shouldFetch;
    }, [reloaderRef])

    const onScroll = useCallback((event) => {
        if (shouldFetchNextPage()) {
            nextPage()
        }
    }, [shouldFetchNextPage, nextPage])

    useEffect(() => {
        if (shouldFetchNextPage())
            nextPage()
    }, [shouldFetchNextPage, nextPage])

    useEffect(() => {
        load()
    }, [load])

    useEffect(() => {
        const appLayout = document.getElementsByTagName("body")[0];
        appLayout.onscroll = onScroll
    }, [onScroll])

    useEffect(() => {
        if (reload) {
            onRefresh();
            onReload()
        }
    }, [onRefresh, onReload, reload])

    if (!firstTimeFetched) {
        return shimmer ? <props.shimmer/> : <props.loadingRenderer style={{...appStyles.center}}/>
    }
    const hasData = !!data.length

    return (
        <div style={{padding: 16, ...(style || {})}}
             ref={containerView}>
            <Show condition={hasData}>
                <Mapper items={data} map={(item, index) => render(item, index, {page, pageSize})}/>
                <Show condition={hasNextPage}>
                    <div ref={reloaderRef}>
                        <Show condition={shimmer}>
                            <props.shimmer/>
                        </Show>
                        <Show condition={loadingRenderer}>
                            <props.loadingRenderer style={{...appStyles.center, marginTop: 16}}/>
                        </Show>
                    </div>
                </Show>
            </Show>
            <Show condition={!hasData}>
                {empty}
            </Show>
        </div>
    )
})

export default InfiniteScrollView;
