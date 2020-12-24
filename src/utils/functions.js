import constants, {getAppNames, getAppURLs} from "./constants";
import moment from "moment";
import AllLocales from "../locales/locales";
import "moment/locale/tr";

const deepCopy = (json = {}) => {
    return JSON.parse(JSON.stringify(json));
}

export const combineReducers = (reducers) => {
    return (state = {}, action) => {
        const newState = {};
        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    }
}

export const transformObj = obj => {
    return Object.keys(obj).reduce((acc, key) => {
        if (key.indexOf('.') >= 0) {
            const [parentKey, childKey] = key.split('.');
            acc[parentKey] = acc[parentKey] || {};
            acc[parentKey][childKey] = obj[key];
        } else {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};

export const JSONToArray = (json = {}, key, valueKey) => {
    return Object.keys(json).map(_key => ({
        ...(valueKey ? {[valueKey]: json[_key]} : json[_key]),
        [key]: _key
    }))
}

export const EnumToArray = (enums, valueKey, descriptionKey) => {
    return Object.keys(enums).map(_key => ({
        [valueKey]: _key,
        [descriptionKey]: enums[_key]
    }))
}

export const download = (newBlob, type) => {

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
    }

    const URL = window.URL || window.webkitURL || window;
    const dataURL = URL.createObjectURL(newBlob);
    downloadByDataURL(dataURL, type)
}

export const downloadQRCodeById = (id) => {
    const QRCodeSVGElement = document.getElementById(id);
    downloadQRCodeBySVGElement(QRCodeSVGElement);
}

export const downloadQRCodeBySVGElement = (QRCodeSVGElement, type, size = {}) => {
    const {width: _width, height: _height} = size;
    const width = _width || 300, height = _height || 300;
    const clonedQRCodeSVGElement = QRCodeSVGElement.cloneNode(true);
    const outerHTML = clonedQRCodeSVGElement.outerHTML
    const blob = new Blob([outerHTML], {type: 'image/svg+xml;charset=utf-8'});
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(blob);

    if (type === "svg") {
        downloadByDataURL(blobURL, "svg")
        return;
    }

    const img = new Image();
    img.width = `${width}`;
    img.height = `${height}`;


    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas)
    canvas.widht = width;
    canvas.height = height;
    let context = canvas.getContext('2d');
    img.onload = function () {
        // draw image in canvas starting left-0 , top - 0
        context.drawImage(img, 0, 0, width, height);
        const dataURL = canvas.toDataURL("image/png");
        //return;
        downloadByDataURL(dataURL, "png");
        document.body.removeChild(canvas);
    }
    img.src = blobURL;
}

export const downloadByDataURL = (dataURL, type) => {
    const link = document.createElement('a');
    const n = dataURL.lastIndexOf('/');
    //debugger;
    const filname = dataURL.substring(n + 1, dataURL.length);
    link.href = dataURL;
    link.target = '_blank_';
    if (type) {
        link.download = `${filname}.${type}`;
    } else {
        link.download = `${filname}.jpg`;
    }

    link.click();

    const URL = window.URL || window.webkitURL || window;
    setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        URL.revokeObjectURL(dataURL);
    }, 100);
}

export const bytesToSize = (bytes) => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export const sum = (array = []) => {
    if (!array.length)
        return 0
    if (array.length === 1)
        return array[0]
    return array.reduce((i1, i2) => i1 + i2)
}

export const ArrayToJSON = (array, keyName, valueName) => {
    const json = {};
    array.forEach(i => {
        json[i[keyName]] = valueName ? i[valueName] : i;
    })
    return json
}

export const formatDate = (date, format = "DD MMMM YYYY") => {
    return moment(date).format(format)
}

export const getLocale = (payload) => {
    const {name, params} = payload;
    const language = navigator.language
    const locale = AllLocales[language] || {}
    const localeValue = locale[name]

    if (localeValue) {
        return localeValue(params)
    }

    return name;
}

export const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const getAddressText = (address = {}) => {
    const {province, district} = address;
    const {name: provinceName} = province || {}
    const {name: districtName} = district || {}
    return (provinceName || "") + " - " + (districtName || "");
}

export const getUriFromImageObject = (image = {}) => {
    if (image.base64Data) {
        return `data:${image.fileType};base64,${image.base64Data}`
    } else if (image.id) {
        return `${constants.REST_SERVER}/attachments/${image.id}`
    } else {
        return undefined
    }
}

export const updateObjectByName = (oldObject = {}, name, value) => {
    const newObject = {...deepCopy(oldObject)};
    newObject[name] = value;
    return transformObj(newObject);
}

export const getFirstLetters = (string = "") => {
    return string.split(" ").map(i => i[0]).join("")
}

export const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

export const generatedColorFromString = (_i) => {
    const i = hashCode(_i);
    const c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "#" + "00000".substring(0, 6 - c.length) + c;
}

export const destructArray = (array = []) => {
    const result = [];
    array.forEach(i => {
        result.push(...i)
    })
    return result;
}

export const getCurrentURL = () => {
    const {REACT_APP_APP_ID} = process.env;
    return getAppURL(REACT_APP_APP_ID)
}

export const getAppURL = (appname) => {
    const {NODE_ENV} = process.env;
    const appURLs = getAppURLs() || {};
    const appURL = appURLs[appname] || {}
    return appURL[NODE_ENV]
}

export const takeUndefinedAsTrue = (parameter) => {
    return parameter === undefined ? true : parameter;
}

export const iFetch = (payload) => {
    const {signal, endpoint, method, params, formData, token, onSuccess, onError} = payload;
    const appName = getAppNames().HTTP_REST_SERVER;
    const _url = getAppURL(appName);
    const url = `${_url}${endpoint}`;
    const body = params ? JSON.stringify(params) : formData;

    const headers = {
        "Content-Type": "application/json"
    }

    if (token)
        headers["Authorization"] = "Bearer " + token;

    if (formData) {
        delete headers["Content-Type"]
    }

    fetch(url, {
        signal,
        method: method || (params || formData ? "POST" : "GET"),
        body,
        headers
    })
        .then(i => {
            const contentType = (i.headers.get('Content-Type') || '').split(";")[0];
            if (i.ok) {
                switch (contentType) {
                    case 'application/json':
                        i.json().then(i2 => {
                            if (i2 instanceof Array)
                                onSuccess(i2)
                            else if (i2.success !== undefined && !i2.success)
                                onError(i, i2)
                            else onSuccess(i2)
                        }, (error) => {
                            console.error(url, error)
                            onSuccess({})
                        });
                        break;
                    default:
                        i.blob().then(blob => {
                            onSuccess(new Blob([blob], {type: contentType}));
                        })
                        break;
                }
            } else if (i.status === 400) {
                console.error("status 400 error", url, i)
                i.json().then(i2 => {
                    onError(i, i2)
                })
            } else {
                onError(i)
            }
        }).catch(e => {
        console.error("e", e)
        onError(e)
    });
}
