export {default as useApi} from "./hooks/useApi";
export {default as useAuth} from "./hooks/useAuth";
export {default as useDimensions} from "./hooks/useDimensions";
export {default as useHistory} from "./hooks/useHistory";
export {default as useLocalStorage} from "./hooks/useLocalStorage";
export {default as useRoute} from "./hooks/useRoute";
export {default as useSocket} from "./hooks/useSocket";
export {default as actions} from "./actions";

export {
    default as constants,
    getAppNames,
    getAppURLs,
    getDangerColor,
    getMainColor,
    getSuccessColor,
    setAppNames,
    setAppURLs,
    setDangerColor,
    setMainColor,
    setSuccessColor,
    getRoutes,
    setRoutes
} from "./utils/constants";

export {default as appStyles} from "./utils/styles";

export {
    getAppURL,
    updateObjectByName,
    ArrayToJSON,
    JSONToArray,
    bytesToSize,
    combineReducers,
    destructArray,
    download,
    downloadByDataURL,
    downloadQRCodeById,
    downloadQRCodeBySVGElement,
    EnumToArray,
    formatDate,
    generatedColorFromString,
    getAddressText,
    getCurrentURL,
    getFirstLetters,
    getLocale,
    getUriFromImageObject,
    hashCode,
    iFetch,
    sum,
    transformObj,
    guid,
    isJSONEmpty,
    isArrayEmpty,
    findLastIndex,
    deleteElementFromArrayByKey,
    insertOrUpdateElementInArrayByKey,
    takeIf,
    numberShouldStartWithZero,
    coalasce,
    isNullOrUndefined,
    getMonthDescription,
    monthsNumberArray,
    cos,
    getDatesOfYear,
    getTodayMonth,
    getTodayYear,
    JSONArrayIndexOf,
    isArrayContains,
    dateToDescription,
    takeUndefinedAsTrue,
    changeColor,
    spliceString
} from './utils/functions';

export {default as StoreProvider, StoreContext} from "./store";

export {default as AppRenderer} from './components/AppRenderer'
export {default as Show} from './components/DisplayConditions/Show'
export {default as FadeAnimation} from './components/FadeAnimation'
export {default as InfiniteScroll} from './components/InfiniteScroll'
export {default as Mapper} from './components/Mapper'
export {default as Redirect} from './components/Redirect'
