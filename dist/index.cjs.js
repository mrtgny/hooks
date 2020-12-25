'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var moment = require('moment');
require('moment/locale/tr');
var reactRouterDom = require('react-router-dom');
var history$1 = require('history');
var reactColor = require('react-color');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var mainColor = "#002171";
var successColor = "green";
var dangerColor = "#EF5350";
var routes = {
  publicRoutes: [],
  authorizedRoutes: []
};
var getRoutes = function getRoutes() {
  return routes;
};
var setRoutes = function setRoutes(newRoutes) {
  routes = newRoutes;
};
var appURLs = {
  HTTP_REST_SERVER: {
    development: "http://localhost:8080/api",
    production: "http://localhost:8080/api"
  },
  WS_REST_SERVER: {
    development: "ws://localhost:8080/ws",
    production: "ws://localhost:8080/ws"
  }
};
var APP_NAMES = {
  WS_REST_SERVER: "WS_REST_SERVER",
  HTTP_REST_SERVER: "HTTP_REST_SERVER"
};
var getAppURLs = function getAppURLs() {
  return appURLs;
};
var setAppURLs = function setAppURLs(newAppURLs) {
  appURLs = newAppURLs;
};
var getAppNames = function getAppNames() {
  return APP_NAMES;
};
var setAppNames = function setAppNames(newAppNames) {
  APP_NAMES = newAppNames;
};

var getAppURL = function getAppURL(appname) {
  var NODE_ENV = process.env.NODE_ENV;
  var appURLs = getAppURLs() || {};
  return appURLs[appname][NODE_ENV];
};

var getMainColor = function getMainColor() {
  return mainColor;
};
var setMainColor = function setMainColor(color) {
  mainColor = color;
};
var getSuccessColor = function getSuccessColor() {
  return successColor;
};
var setSuccessColor = function setSuccessColor(color) {
  successColor = color;
};
var getDangerColor = function getDangerColor() {
  return dangerColor;
};
var setDangerColor = function setDangerColor(color) {
  dangerColor = color;
};
var constants = {
  mainColor: getMainColor(),
  successColor: getSuccessColor(),
  mainDangerColor: getDangerColor(),
  REST_SERVER: getAppURL(getAppNames().HTTP_REST_SERVER),
  WS_SERVER: getAppURL(getAppNames().WS_REST_SERVER)
};

var trTRLocales = {
  Stores: function Stores() {
    return "Mağazalar";
  },
  Home: function Home() {
    return "Ana Sayfa";
  },
  Purchases: function Purchases() {
    return "Satın Alımlar";
  },
  Sales: function Sales() {
    return "Satışlar";
  },
  Profile: function Profile() {
    return "Profil";
  },
  Menu: function Menu() {
    return "Menü";
  },
  Search: function Search() {
    return "Ara";
  },
  Payment: function Payment() {
    return "Ödeme";
  },
  Orders: function Orders() {
    return "Siparişler";
  },
  Tables: function Tables() {
    return "Masalar";
  }
};
var languageKeys = ["tr"];

var exportLocales = function exportLocales(languageKeys, languages) {
  var exp = {};
  languageKeys.forEach(function (i) {
    exp[i] = languages;
  });
  return exp;
};

var TRLocales = exportLocales(languageKeys, trTRLocales);

var enUSLocales = {
  Stores: function Stores() {
    return "Stores";
  },
  Home: function Home() {
    return "Home";
  }
};
var languageKeys$1 = ["en", "en-us"];

var exportLocales$1 = function exportLocales(languageKeys, languages) {
  var exp = {};
  languageKeys.forEach(function (i) {
    exp[i] = languages;
  });
  return exp;
};

var ENLocales = exportLocales$1(languageKeys$1, enUSLocales);

var AllLocales = _objectSpread2(_objectSpread2({}, TRLocales), ENLocales);

var deepCopy = function deepCopy() {
  var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return JSON.parse(JSON.stringify(json));
};

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var newState = {};

    for (var key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }

    return newState;
  };
};
var transformObj = function transformObj(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (key.indexOf('.') >= 0) {
      var _key$split = key.split('.'),
          _key$split2 = _slicedToArray(_key$split, 2),
          parentKey = _key$split2[0],
          childKey = _key$split2[1];

      acc[parentKey] = acc[parentKey] || {};
      acc[parentKey][childKey] = obj[key];
    } else {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
};
var JSONToArray = function JSONToArray() {
  var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var valueKey = arguments.length > 2 ? arguments[2] : undefined;
  return Object.keys(json).map(function (_key) {
    return _objectSpread2(_objectSpread2({}, valueKey ? _defineProperty({}, valueKey, json[_key]) : json[_key]), {}, _defineProperty({}, key, _key));
  });
};
var EnumToArray = function EnumToArray(enums, valueKey, descriptionKey) {
  return Object.keys(enums).map(function (_key) {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, valueKey, _key), _defineProperty(_ref2, descriptionKey, enums[_key]), _ref2;
  });
};
var download = function download(newBlob, type) {
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
  }

  var URL = window.URL || window.webkitURL || window;
  var dataURL = URL.createObjectURL(newBlob);
  downloadByDataURL(dataURL, type);
};
var downloadQRCodeById = function downloadQRCodeById(id) {
  var QRCodeSVGElement = document.getElementById(id);
  downloadQRCodeBySVGElement(QRCodeSVGElement);
};
var downloadQRCodeBySVGElement = function downloadQRCodeBySVGElement(QRCodeSVGElement, type) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _width = size.width,
      _height = size.height;
  var width = _width || 300,
      height = _height || 300;
  var clonedQRCodeSVGElement = QRCodeSVGElement.cloneNode(true);
  var outerHTML = clonedQRCodeSVGElement.outerHTML;
  var blob = new Blob([outerHTML], {
    type: 'image/svg+xml;charset=utf-8'
  });
  var URL = window.URL || window.webkitURL || window;
  var blobURL = URL.createObjectURL(blob);

  if (type === "svg") {
    downloadByDataURL(blobURL, "svg");
    return;
  }

  var img = new Image();
  img.width = "".concat(width);
  img.height = "".concat(height);
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.widht = width;
  canvas.height = height;
  var context = canvas.getContext('2d');

  img.onload = function () {
    // draw image in canvas starting left-0 , top - 0
    context.drawImage(img, 0, 0, width, height);
    var dataURL = canvas.toDataURL("image/png"); //return;

    downloadByDataURL(dataURL, "png");
    document.body.removeChild(canvas);
  };

  img.src = blobURL;
};
var downloadByDataURL = function downloadByDataURL(dataURL, type) {
  var link = document.createElement('a');
  var n = dataURL.lastIndexOf('/'); //debugger;

  var filname = dataURL.substring(n + 1, dataURL.length);
  link.href = dataURL;
  link.target = '_blank_';

  if (type) {
    link.download = "".concat(filname, ".").concat(type);
  } else {
    link.download = "".concat(filname, ".jpg");
  }

  link.click();
  var URL = window.URL || window.webkitURL || window;
  setTimeout(function () {
    // For Firefox it is necessary to delay revoking the ObjectURL
    URL.revokeObjectURL(dataURL);
  }, 100);
};
var bytesToSize = function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};
var sum = function sum() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  return array.reduce(function (i1, i2) {
    return i1 + i2;
  });
};
var ArrayToJSON = function ArrayToJSON(array, keyName, valueName) {
  var json = {};
  array.forEach(function (i) {
    json[i[keyName]] = valueName ? i[valueName] : i;
  });
  return json;
};
var formatDate = function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "DD MMMM YYYY";
  return moment__default['default'](date).format(format);
};
var getLocale = function getLocale(payload) {
  var name = payload.name,
      params = payload.params;
  var language = navigator.language;
  var locale = AllLocales[language] || {};
  var localeValue = locale[name];

  if (localeValue) {
    return localeValue(params);
  }

  return name;
};
var isJSONEmpty = function isJSONEmpty() {
  var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return !Object.keys(json).length;
};
var isArrayEmpty = function isArrayEmpty() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return !array.length;
};
var guid = function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
var getAddressText = function getAddressText() {
  var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var province = address.province,
      district = address.district;

  var _ref3 = province || {},
      provinceName = _ref3.name;

  var _ref4 = district || {},
      districtName = _ref4.name;

  return (provinceName || "") + " - " + (districtName || "");
};
var getUriFromImageObject = function getUriFromImageObject() {
  var image = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (image.base64Data) {
    return "data:".concat(image.fileType, ";base64,").concat(image.base64Data);
  } else if (image.id) {
    return "".concat(constants.REST_SERVER, "/attachments/").concat(image.id);
  } else {
    return undefined;
  }
};
var updateObjectByName = function updateObjectByName() {
  var oldObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var value = arguments.length > 2 ? arguments[2] : undefined;

  var newObject = _objectSpread2({}, deepCopy(oldObject));

  newObject[name] = value;
  return transformObj(newObject);
};
var getFirstLetters = function getFirstLetters() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return string.split(" ").map(function (i) {
    return i[0];
  }).join("");
};
var hashCode = function hashCode(str) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return hash;
};
var generatedColorFromString$1 = function generatedColorFromString(_i) {
  var i = hashCode(_i);
  var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
};
var destructArray = function destructArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var result = [];
  array.forEach(function (i) {
    result.push.apply(result, _toConsumableArray(i));
  });
  return result;
};
var getCurrentURL = function getCurrentURL() {
  var REACT_APP_APP_ID = process.env.REACT_APP_APP_ID;
  return getAppURL$1(REACT_APP_APP_ID);
};
var getAppURL$1 = function getAppURL(appname) {
  var NODE_ENV = process.env.NODE_ENV;
  var appURLs = getAppURLs() || {};
  var appURL = appURLs[appname] || {};
  return appURL[NODE_ENV];
};
var takeUndefinedAsTrue = function takeUndefinedAsTrue(parameter) {
  return parameter === undefined ? true : parameter;
};
var iFetch = function iFetch(payload) {
  var signal = payload.signal,
      endpoint = payload.endpoint,
      method = payload.method,
      params = payload.params,
      formData = payload.formData,
      token = payload.token,
      onSuccess = payload.onSuccess,
      onError = payload.onError;
  var appName = getAppNames().HTTP_REST_SERVER;

  var _url = getAppURL$1(appName);

  var url = "".concat(_url).concat(endpoint);
  var body = params ? JSON.stringify(params) : formData;
  var headers = {
    "Content-Type": "application/json"
  };
  if (token) headers["Authorization"] = "Bearer " + token;

  if (formData) {
    delete headers["Content-Type"];
  }

  fetch(url, {
    signal: signal,
    method: method || (params || formData ? "POST" : "GET"),
    body: body,
    headers: headers
  }).then(function (i) {
    var contentType = (i.headers.get('Content-Type') || '').split(";")[0];

    if (i.ok) {
      switch (contentType) {
        case 'application/json':
          i.json().then(function (i2) {
            if (i2 instanceof Array) onSuccess(i2);else if (i2.success !== undefined && !i2.success) onError(i, i2);else onSuccess(i2);
          }, function (error) {
            console.error(url, error);
            onSuccess({});
          });
          break;

        default:
          i.blob().then(function (blob) {
            onSuccess(new Blob([blob], {
              type: contentType
            }));
          });
          break;
      }
    } else if (i.status === 400) {
      console.error("status 400 error", url, i);
      i.json().then(function (i2) {
        onError(i, i2);
      });
    } else {
      onError(i);
    }
  }).catch(function (e) {
    console.error("e", e);
    onError(e);
  });
};

var authActions = {
  SET_TOKEN: "set-token",
  UPDATE_AUTH: "update-auth",
  LOGIN: 'login',
  LOGOUT: 'logout',
  SIGNUP: 'signup'
};
var notificationActions = {
  PUSH_IN_APP_NOTIFICATION: 'pushInAppNotification',
  POP_IN_APP_NOTIFICATION: 'popInAppNotification'
};
var modalActions = {
  SHOW_MODAL: 'show-modal',
  HIDE_MODAL: 'hide-modal',
  DELETE_MODAL: "delete-modal"
};
var lodaingActions = {
  INCREASE_LOADING_QUEUE: 'increaseLoadingQueue',
  DECREASE_LOADING_QUEUE: 'decreaseLoadingQueue'
};
var socketActions = {
  ADD_MESSAGE_LISTENER: 'addMessageListener',
  REMOVE_MESSAGE_LISTENER: 'removeMessageListener',
  SET_SOCKET: 'setSocket'
};

var actions = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, authActions), notificationActions), modalActions), lodaingActions), socketActions);

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = action.payload || {},
      data = _ref.data;

  switch (action.type) {
    case actions.SET_TOKEN:
      return _objectSpread2(_objectSpread2({}, state), data || {});

    case actions.UPDATE_AUTH:
      return _objectSpread2(_objectSpread2({}, state), data || {});

    case actions.LOGIN:
      return _objectSpread2(_objectSpread2(_objectSpread2({}, state), data || {}), {}, {
        checked: true,
        isLoggedIn: true
      });

    case actions.LOGOUT:
      return {
        checked: true,
        isLoggedIn: false
      };

    default:
      return state;
  }
};

var loadingReducer = function loadingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var queue = state.queue;

  switch (action.type) {
    case actions.INCREASE_LOADING_QUEUE:
      return {
        queue: queue + 1
      };

    case actions.DECREASE_LOADING_QUEUE:
      return {
        queue: queue > 0 ? queue - 1 : 0
      };
  }

  return state;
};

var notificationsReducer = function notificationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = action.payload || {},
      data = _ref.data;

  var _ref2 = data || {},
      index = _ref2.index,
      type = _ref2.type,
      title = _ref2.title,
      message = _ref2.message;

  var oldState = _toConsumableArray(state);

  switch (action.type) {
    case actions.PUSH_IN_APP_NOTIFICATION:
      oldState.push({
        type: type,
        title: title,
        message: message
      });
      return oldState;

    case actions.POP_IN_APP_NOTIFICATION:
      oldState.splice(index, 1);
      return oldState;
  }

  return state;
};

var modalsReducer = function modalsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = action.payload || {},
      _id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["id"]);

  var id = _id || guid();

  var oldState = _objectSpread2({}, state);

  switch (action.type) {
    case actions.SHOW_MODAL:
      oldState[id] = _objectSpread2({
        id: id,
        visible: true
      }, rest);
      return oldState;

    case actions.HIDE_MODAL:
      oldState[id] = _objectSpread2({
        id: id,
        visible: false
      }, rest);
      return oldState;

    case actions.DELETE_MODAL:
      delete oldState[id];
      return oldState;
  }

  return state;
};

var initialState = {
  auth: {},
  loading: {
    queue: 0
  },
  notifications: [],
  modals: {}
};
var reducers = {
  auth: authReducer,
  loading: loadingReducer,
  notifications: notificationsReducer,
  modals: modalsReducer
};
var rootReducer = combineReducers(reducers);
var StoreContext = /*#__PURE__*/React.createContext(initialState);

var StoreProvider = function StoreProvider(_ref) {
  var children = _ref.children;

  var _useReducer = React.useReducer(rootReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var store = React.useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/React__default['default'].createElement(StoreContext.Provider, {
    value: store
  }, children);
};

var useLocalStorage = function useLocalStorage(key, defaultValue) {
  var getItem = React.useCallback(function (_defaultValue) {
    try {
      var value = JSON.parse(window.localStorage.getItem(key));
      return value || _defaultValue || defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }, [defaultValue, key]);
  var setItem = React.useCallback(function (_value) {
    try {
      var value = JSON.stringify(_value);
      window.localStorage.setItem(key, value);
    } catch (e) {
      window.localStorage.setItem(key, defaultValue || '{}');
    }
  }, [defaultValue, key]);
  var removeItem = React.useCallback(function () {
    window.localStorage.removeItem(key);
  }, [key]);
  return {
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem
  };
};

var useAuth = function useAuth() {
  var _useContext = React.useContext(StoreContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      state = _useContext2[0],
      dispatch = _useContext2[1];

  var _useLocalStorage = useLocalStorage("token"),
      setItem = _useLocalStorage.setItem;

  var _ref = state || {},
      auth = _ref.auth;

  var logout = React.useCallback(function () {
    setItem("");
    dispatch({
      type: actions.LOGOUT
    });
    var gapi = window.gapi;
    if (gapi) if (gapi.auth2) {
      var auth2 = gapi.auth2.getAuthInstance();

      if (auth2) {
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
      }
    }
    var FB = window.FB;

    if (FB) {
      if (FB.logout) {
        FB.logout(function (response) {});
      }
    }
  }, [dispatch, setItem]);
  var setToken = React.useCallback(function (token) {
    if (token) setItem(token);
    dispatch({
      type: actions.SET_TOKEN,
      payload: {
        data: {
          token: token
        }
      }
    });
  }, [dispatch, setItem]);
  var update = React.useCallback(function (data) {
    dispatch({
      type: actions.UPDATE_AUTH,
      payload: {
        data: data
      }
    });
  }, [dispatch]);
  var login = React.useCallback(function (data) {
    setToken(data.token);
    delete data.token;
    dispatch({
      type: actions.LOGIN,
      payload: {
        data: data,
        checked: true,
        isLoggedIn: true
      }
    });
  }, [dispatch, setToken]);
  return _objectSpread2(_objectSpread2({}, auth), {}, {
    logout: logout,
    setToken: setToken,
    login: login,
    update: update
  });
};

var useLoading = function useLoading() {
  var _useContext = React.useContext(StoreContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      state = _useContext2[0],
      dispatch = _useContext2[1];

  var loading = state.loading;
  var increase = React.useCallback(function () {
    dispatch({
      type: actions.INCREASE_LOADING_QUEUE
    });
  }, []);
  var decrease = React.useCallback(function () {
    dispatch({
      type: actions.DECREASE_LOADING_QUEUE
    });
  }, []);
  return _objectSpread2(_objectSpread2({}, loading), {}, {
    increase: increase,
    decrease: decrease
  });
};

var useNotification = function useNotification() {
  var _useContext = React.useContext(StoreContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      dispatch = _useContext2[1];

  var pushNotification = React.useCallback(function (params) {
    var type = params.type,
        rest = _objectWithoutProperties(params, ["type"]);

    dispatch({
      type: actions.PUSH_IN_APP_NOTIFICATION,
      payload: {
        data: _objectSpread2({
          type: type
        }, rest)
      }
    });
  }, [dispatch]);
  var pushSuccessNotification = React.useCallback(function (params) {
    pushNotification(_objectSpread2({
      type: 'success'
    }, params));
  }, [pushNotification]);
  var pushErrorNotification = React.useCallback(function (params) {
    pushNotification(_objectSpread2({
      type: 'error'
    }, params));
  }, [pushNotification]);
  var pushInfoNotification = React.useCallback(function (params) {
    pushNotification(_objectSpread2({
      type: 'info'
    }, params));
  }, [pushNotification]);
  return {
    pushNotification: pushNotification,
    pushSuccessNotification: pushSuccessNotification,
    pushErrorNotification: pushErrorNotification,
    pushInfoNotification: pushInfoNotification
  };
};

var useApi = function useApi() {
  var _payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useNotification = useNotification(),
      pushInfoNotification = _useNotification.pushInfoNotification,
      pushErrorNotification = _useNotification.pushErrorNotification;

  var _useLoading = useLoading(),
      increase = _useLoading.increase,
      decrease = _useLoading.decrease;

  var _useAuth = useAuth(),
      token = _useAuth.token,
      logout = _useAuth.logout;

  var _useState = React.useState(_payload),
      _useState2 = _slicedToArray(_useState, 2),
      payload = _useState2[0],
      setPayload = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      shouldFetch = _useState4[0],
      setShouldFetch = _useState4[1];

  var stringifyPayload = JSON.stringify(payload);

  var _useState5 = React.useState({
    firstTimeFetched: false,
    fetched: false,
    fetching: false,
    response: _payload.initialValue || {}
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var firstTimeFetched = data.firstTimeFetched;
  var controller = new AbortController();
  var signal = controller.signal;
  var endpoint = payload.endpoint,
      params = payload.params,
      payloadOnSuccess = payload.onSuccess,
      payloadOnError = payload.onError,
      payloadPushNotification = payload.pushNotification;
  var onSuccess = React.useCallback(function (response) {
    var pushNotification = takeUndefinedAsTrue(payloadPushNotification);
    if (payloadOnSuccess) payloadOnSuccess(response);
    decrease();
    setData(function (oldData) {
      return _objectSpread2(_objectSpread2({}, oldData), {}, {
        response: response,
        fetching: false,
        fetched: true,
        firstTimeFetched: true
      });
    });

    if (response.message && pushNotification) {
      pushInfoNotification({
        title: "Bildirim!",
        message: response.message
      });
    }
  }, [payloadPushNotification, payloadOnSuccess]);
  var onError = React.useCallback(function (response) {
    var responseJSON = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var pushNotification = takeUndefinedAsTrue(payloadPushNotification);
    var notificationObj = {};
    pushErrorNotification({
      title: "Hata!",
      message: "options = ".concat(endpoint, "\n            response = ").concat(JSON.stringify(response), "\nresponseJSON = ").concat(JSON.stringify(responseJSON), "\n")
    });
    decrease();

    switch (response.status) {
      case 404:
        notificationObj.type = "error";
        notificationObj.message = "Sayfa bulunamadı!";
        break;

      case 403:
        notificationObj.type = "warning";
        notificationObj.message = "Your session has expired!";
        break;

      case 401:
        logout();
        notificationObj.type = "warning";
        notificationObj.message = "Your session has expired!";
        break;

      default:
        notificationObj.type = "error";
        notificationObj.message = "Bilinmeyen hata";
    }

    console.log("[useApi].onError \nresponse", response, "\n responseJSON", responseJSON, "\n notificationObj", notificationObj, payload);

    if (pushNotification) {
      if (response.message || responseJSON.message || notificationObj.message) {
        pushErrorNotification({
          title: "Hata!",
          message: response.message || responseJSON.message || notificationObj.message
        });
      }
    }

    setData(function (oldData) {
      return _objectSpread2(_objectSpread2({}, oldData), {}, {
        response: _objectSpread2({}, responseJSON || response),
        fetching: false,
        fetched: true,
        firstTimeFetched: true
      });
    });
    if (payloadOnError) payloadOnError(responseJSON || response);
  }, [endpoint, payloadPushNotification, payloadOnError]);
  React.useEffect(function () {
    var initial = payload.initial;
    if (initial) load();
  }, [stringifyPayload]);
  var updatePayload = React.useCallback(function (__payload) {
    setPayload(function (oldPayload) {
      var newPayload = _objectSpread2(_objectSpread2({}, oldPayload), __payload);

      var _showLoading = newPayload.showLoading;
      var showLoading = takeUndefinedAsTrue(_showLoading);

      if (!newPayload.method && !newPayload.params) {
        newPayload.method = "GET";
      }

      if (newPayload.method !== "GET" && showLoading) {
        increase();
      }

      return newPayload;
    });
  }, []);
  var updateData = React.useCallback(function () {
    setData(function (oldData) {
      return _objectSpread2(_objectSpread2({}, oldData), {}, {
        fetching: true,
        fetched: false
      });
    });
  }, []);
  var load = React.useCallback(function () {
    var __payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    updatePayload(__payload);
    updateData();
    setShouldFetch(true);
  }, []);
  React.useEffect(function () {
    if (shouldFetch) {
      iFetch(_objectSpread2(_objectSpread2({}, payload), {}, {
        params: params,
        onSuccess: onSuccess,
        onError: onError,
        token: token,
        signal: signal
      }));
      setShouldFetch(false);
    }
  }, [onError, onSuccess, params, shouldFetch, token]);
  React.useEffect(function () {
    return function () {
      controller.abort();
    };
  }, []);
  return _objectSpread2({
    load: load
  }, data);
};

var useAuthorize = function useAuthorize() {

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      authorize = _useState2[0],
      setAuthorize = _useState2[1];

  React.useEffect(function () {
    setAuthorize({});
  }, []);
  return authorize;
};

var useDimensions = function useDimensions(params) {
  var element = params.element,
      id = params.id,
      tagName = params.tagName;

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var getElement = React.useCallback(function () {
    if (element) {
      return element;
    } else if (id) {
      return document.getElementById(id);
    } else if (tagName) {
      return document.getElementsByTagName(tagName)[0];
    } else {
      return document.getElementsByTagName("body")[0];
    }
  }, [element, id, tagName]);
  var onresize = React.useCallback(function (e) {
    var _width = e.target.innerWidth;
    var _height = e.target.innerHeight;
    setWidth(_width);
    setHeight(_height);
  }, []);
  React.useEffect(function () {
    var body = getElement();
    if (body) body.onresize = onresize;
    var _width = window.innerWidth;
    var _height = window.innerHeight;
    setWidth(_width);
    setHeight(_height);
  }, [getElement, onresize]);
  return {
    width: width,
    height: height
  };
};

var useRoute = function useRoute(params) {
  var _getRoutes = getRoutes(),
      publicRoutes = _getRoutes.publicRoutes,
      authorizedRoutes = _getRoutes.authorizedRoutes;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      publicRouterRoutes = _useState2[0],
      setPublicRouterRoutes = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      authorizedRouterRoutes = _useState4[0],
      setAuthorizedRouterRoutes = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      currentRouterRoutes = _useState6[0],
      setCurrentRouterRoutes = _useState6[1];

  var _useAuth = useAuth(),
      isLoggedIn = _useAuth.isLoggedIn;

  var getAuthorizedRouterRoutes = React.useCallback(function () {
    return authorizedRoutes.map(function (route, index) {
      var _exact = route.exact,
          path = route.path,
          component = route.component,
          rest = _objectWithoutProperties(route, ["exact", "path", "component"]);

      var exact = takeUndefinedAsTrue(_exact);
      return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, _extends({
        exact: exact,
        path: path,
        component: component,
        key: index
      }, rest));
    });
  }, [authorizedRoutes]);
  var getPublicRouterRoutes = React.useCallback(function () {
    return publicRoutes.map(function (route, index) {
      var _exact = route.exact,
          path = route.path,
          component = route.component,
          rest = _objectWithoutProperties(route, ["exact", "path", "component"]);

      var exact = takeUndefinedAsTrue(_exact);
      return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, _extends({
        exact: exact,
        path: path,
        component: component,
        key: index
      }, rest));
    });
  }, [publicRoutes]);
  React.useEffect(function () {
    if (isLoggedIn) setCurrentRouterRoutes(authorizedRouterRoutes);else setCurrentRouterRoutes(publicRouterRoutes);
  }, [isLoggedIn, authorizedRouterRoutes, publicRouterRoutes]);
  React.useEffect(function () {
    setAuthorizedRouterRoutes(getAuthorizedRouterRoutes());
    setPublicRouterRoutes(getPublicRouterRoutes());
  }, [getAuthorizedRouterRoutes, getPublicRouterRoutes]);
  return {
    publicRouterRoutes: publicRouterRoutes,
    authorizedRouterRoutes: authorizedRouterRoutes,
    currentRouterRoutes: currentRouterRoutes
  };
};

var useHistory = reactRouterDom.useHistory;

var useSocket = function useSocket() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useAuth = useAuth(),
      username = _useAuth.username;

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      socket = _useState2[0],
      setSocket = _useState2[1];

  var onopen = payload.onopen,
      onclose = payload.onclose,
      onerror = payload.onerror,
      onmessage = payload.onmessage;
  var connect = React.useCallback(function () {
    var readyState = socket.readyState;
    if (readyState === WebSocket.OPEN || readyState === WebSocket.CONNECTING) return;
    var host = process.env.REACT_APP_PROXY_HOST;
    var protocol = process.env.REACT_APP_USE_SSL === "1" ? "wss" : "ws";

    var _socket = new WebSocket("".concat(protocol, "://").concat(host, "/ws?username=").concat(username));

    setSocket(_socket);
  }, [username, socket]);
  React.useEffect(function () {
    connect();
  }, [connect]);
  React.useEffect(function () {
    if (socket) {
      socket.onopen = function (e) {
        if (onopen) onopen(e);
      };

      socket.onmessage = function (event) {
        var _data = event.data;
        var data = _data;

        try {
          data = JSON.parse(data);
        } catch (e) {
          console.error("JSON PARSE error", e);
        }

        onmessage(data); //console.log(`[message] Data received from server`, data, _data);
      };

      socket.onclose = function (event) {
        if (onclose) onclose(event);

        if (event.wasClean) ;
      };

      socket.onerror = function (error) {
        if (onerror) onerror(error);
      };
    }
  }, [onclose, onerror, onmessage, onopen, socket]);
  React.useEffect(function () {
    return function () {
      if (socket.close) socket.close(1000, "User disconnected!");
    };
  }, [socket]);
  return {
    connect: connect,
    socket: socket
  };
};

var appStyles = {
  defaultShadow: {
    boxShadow: "0 0 5px -2.75px black"
  },
  cardBorderRadius: {
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexShrink: 0
  },
  secondaryText: {
    color: '#aaa'
  },
  imageStyle: {
    height: "100%",
    width: '100%',
    borderRadius: 20,
    resizeMode: 'contain'
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  spreadHorizontally: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paddingHorizontal: function paddingHorizontal(value) {
    return {
      paddingLeft: value,
      paddingRight: value
    };
  },
  paddingVertical: function paddingVertical(value) {
    return {
      paddingTop: value,
      paddingBottom: value
    };
  },
  marginHorizontal: function marginHorizontal(value) {
    return {
      marginLeft: value,
      marginRight: value
    };
  },
  marginVertical: function marginVertical(value) {
    return {
      marginTop: value,
      marginBottom: value
    };
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 'initial'
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  cardSubtitle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '300'
  },
  rounded: function rounded(size) {
    return {
      width: size,
      height: size,
      borderRadius: size * 2
    };
  }
};

var history = history$1.createBrowserHistory();

var AppRenderer = function AppRenderer(props) {
  var userLoadOptions = props.userLoadOptions,
      publicLayout = props.publicLayout,
      authorizedLayout = props.authorizedLayout,
      checkingRenderer = props.checkingRenderer;

  var _useAuth = useAuth(),
      isLoggedIn = _useAuth.isLoggedIn,
      checked = _useAuth.checked,
      logout = _useAuth.logout,
      login = _useAuth.login,
      token = _useAuth.token,
      setToken = _useAuth.setToken;

  var _useLocalStorage = useLocalStorage("token"),
      getLocalToken = _useLocalStorage.getItem,
      removeToken = _useLocalStorage.removeItem;

  var _useApi = useApi(),
      fetched = _useApi.fetched,
      fetching = _useApi.fetching,
      load = _useApi.load;

  var localToken = getLocalToken();
  React.useEffect(function () {
    if (localToken) {
      if (token) {
        if (!fetching && !fetched) {
          load(_objectSpread2(_objectSpread2({}, userLoadOptions), {}, {
            onSuccess: function onSuccess(response) {
              if (response.data) {
                login(response.data);
              } else {
                logout();
              }
            },
            onError: function onError() {
              removeToken();
              logout();
            }
          }));
        }
      } else {
        setToken(localToken);
      }
    } else {
      logout();
    }
  }, [localToken, removeToken, fetching, load, fetched, login, logout, token, setToken]);

  if (!checked || localToken && !fetched) {
    if (checkingRenderer) return /*#__PURE__*/React__default['default'].createElement(props.checkingRenderer, null);
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        minHeight: "100vh"
      },
      className: "center"
    }, "Y\xFCkleniyor...");
  } else if (isLoggedIn) {
    return /*#__PURE__*/React__default['default'].createElement(AppRouter, {
      layout: authorizedLayout
    });
  } else {
    return /*#__PURE__*/React__default['default'].createElement(AppPublicRoute, {
      layout: publicLayout
    });
  }
};

var AppPublicRoute = function AppPublicRoute(props) {
  return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, {
    history: history
  }, /*#__PURE__*/React__default['default'].createElement(props.layout, null, /*#__PURE__*/React__default['default'].createElement(AppPublicRoutesRenderer, null)));
};

var AppPublicRoutesRenderer = function AppPublicRoutesRenderer(props) {
  var _useRoute = useRoute(),
      publicRouterRoutes = _useRoute.publicRouterRoutes;

  return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, publicRouterRoutes);
};

var AppRouter = function AppRouter(props) {
  return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, {
    history: history
  }, /*#__PURE__*/React__default['default'].createElement(props.layout, null, /*#__PURE__*/React__default['default'].createElement(AppRoutesRenderer, null)));
};

var AppRoutesRenderer = function AppRoutesRenderer() {
  var _useRoute2 = useRoute(),
      authorizedRouterRoutes = _useRoute2.authorizedRouterRoutes;

  return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, authorizedRouterRoutes);
};

var Show = function Show(props) {
  var condition = props.condition,
      willUnmount = props.willUnmount,
      children = props.children;
  React.useEffect(function () {
    return willUnmount;
  }, [willUnmount]);
  if (condition) return children;
  return null;
};

var AttachmentImage = function AttachmentImage(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var id = props.id,
      _size = props.size,
      style = props.style,
      _placheholder = props.placeholder,
      hidePlaceholder = props.hidePlaceholder,
      rest = _objectWithoutProperties(props, ["id", "size", "style", "placeholder", "hidePlaceholder"]);

  var size = _size ? {
    width: _size,
    height: _size,
    borderRadius: '50%'
  } : {};
  var placeholder = _placheholder || "P";
  var fontSize = isNaN(_size / 2) ? 24 : _size / 2;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, size), appStyles.defaultShadow), style),
    className: "rounded-image-container center"
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: id
  }, /*#__PURE__*/React__default['default'].createElement("img", _extends({
    onLoad: function onLoad() {
      return setLoaded(true);
    },
    src: "".concat(constants.REST_SERVER, "/attachments/stream/").concat(id),
    alt: "",
    className: "rounded-image",
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      display: loaded ? undefined : 'none'
    })
  }, rest))), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: !loaded && !hidePlaceholder
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    className: "center"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      margin: 0,
      fontSize: fontSize,
      fontWeight: 'bold'
    }
  }, placeholder))));
};

var Authorized = function Authorized(props) {
  var type = props.type,
      params = props.params,
      _onAuthorizeChange = props.onAuthorizeChange,
      children = props.children;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAuthorized = _useState2[0],
      setIsAuthorized = _useState2[1];

  var _useAuthorize = useAuthorize(),
      canEditCustomerProfile = _useAuthorize.canEditCustomerProfile,
      canEditCompanyProfile = _useAuthorize.canEditCompanyProfile,
      canEditStoreProfile = _useAuthorize.canEditStoreProfile,
      canSeeStoreCollaborators = _useAuthorize.canSeeStoreCollaborators,
      canChangeCompanyAccount = _useAuthorize.canChangeCompanyAccount,
      canChangeStoreAccount = _useAuthorize.canChangeStoreAccount,
      canLogoutCustomer = _useAuthorize.canLogoutCustomer,
      canLogoutCompany = _useAuthorize.canLogoutCompany,
      canLogoutStore = _useAuthorize.canLogoutStore;

  var onAuthorizeChange = React.useCallback(function (isAuthorized) {
    setIsAuthorized(isAuthorized);
  }, [setIsAuthorized]);
  React.useEffect(function () {
    if (_onAuthorizeChange) {
      _onAuthorizeChange(isAuthorized);
    }
  }, [isAuthorized, _onAuthorizeChange]);
  React.useEffect(function () {
    switch (type) {
      case 'customer-profile':
        if (canEditCustomerProfile) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      case 'company-profile':
        if (canEditCompanyProfile) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      case 'store-profile':
        if (canEditStoreProfile) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      case 'store-collaborators':
        if (canSeeStoreCollaborators) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      case 'company-change-account':
        if (canChangeCompanyAccount) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      case 'store-change-account':
        if (canChangeStoreAccount) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      case 'customer-logout':
        if (canLogoutCustomer) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      case 'company-logout':
        if (canLogoutCompany) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      case 'store-logout':
        if (canLogoutStore) {
          onAuthorizeChange(true);
        } else {
          onAuthorizeChange(false);
        }

        break;

      default:
        onAuthorizeChange(true);
    }
  }, [type, canEditCustomerProfile, canEditCompanyProfile, canEditStoreProfile, canSeeStoreCollaborators, canChangeCompanyAccount, canChangeStoreAccount, canLogoutCustomer, canLogoutCompany, canLogoutStore, onAuthorizeChange]);
  if (isAuthorized) return children;
  return null;
};

var DateDescription = function DateDescription(props) {
  var date = props.date;
  var momentDay = moment__default['default'](date, "YYYY-MM-DD");
  var momentToday = moment__default['default'](new Date(), "YYYY-MM-DD");
  var dayDiff = momentToday.diff(momentDay, 'days');
  var monthDiff = momentToday.diff(momentDay, 'month');
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      minWidth: 100,
      alignItems: 'flex-end'
    },
    className: "center-column"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      color: '#aaa',
      margin: 0
    }
  }, dayDiff === 1 ? "D\xFCn" : dayDiff ? "".concat(monthDiff || dayDiff, " ").concat(monthDiff ? "ay" : "gün", " \xF6nce") : "Bugün"), /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      color: '#aaa',
      margin: 0
    }
  }, moment__default['default'](date).format("HH:mm")));
};

var DescriptionIcon = function DescriptionIcon(props) {
  var style = props.style,
      titleStyle = props.titleStyle,
      icon = props.icon,
      description = props.description;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "center",
    style: _objectSpread2({
      flexDirection: 'column'
    }, style || {})
  }, icon, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      marginTop: 4,
      backgroundColor: '#eee',
      borderRadius: 10
    }
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: _objectSpread2({
      margin: 0,
      padding: '4px 8px',
      whiteSpace: 'nowrap',
      color: '#4285F4',
      fontWeight: 'bold'
    }, titleStyle || {})
  }, description)));
};

var OverflowImages = function OverflowImages(props) {
  var images = props.images,
      _maxCount = props.maxCount,
      badgeRenderer = props.badgeRenderer,
      size = props.size;
  var maxCount = _maxCount || 3;
  var overflowItemsCount = images.length - maxCount;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      flexDirection: 'column',
      marginRight: 8
    })
  }, /*#__PURE__*/React__default['default'].createElement(props.badgeRenderer, {
    count: overflowItemsCount > 0 ? "+".concat(overflowItemsCount) : undefined
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, appStyles.center)
  }, images.filter(function (_, index) {
    return index < maxCount;
  }).map(function (image, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        border: '1px solid white',
        marginLeft: index && -32,
        borderRadius: size
      },
      key: index
    }, /*#__PURE__*/React__default['default'].createElement(AttachmentImage, {
      id: image,
      key: index,
      size: size
    }));
  }))));
};

var DescriptionOverflowImages = function DescriptionOverflowImages(props) {
  var title = props.title,
      images = props.images,
      maxCount = props.maxCount;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center'
    })
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center',
      marginRight: 4
    })
  }, /*#__PURE__*/React__default['default'].createElement(OverflowImages, {
    images: images,
    maxCount: maxCount,
    size: 40
  })), /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      fontWeight: '600',
      fontSize: 18,
      margin: 0
    }
  }, title));
};

var EmptyResult = function EmptyResult(props) {
  var icon = props.icon,
      title = props.title,
      style = props.style,
      _size = props.size;
  var size = _size || 120;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "center",
    style: {
      width: '100%',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "center",
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.defaultShadow), appStyles.rounded(size)), {}, {
      backgroundColor: 'white'
    })
  }, icon)), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      textAlign: 'center',
      fontWeight: '100',
      fontSize: 18,
      whiteSpace: 'pre-wrap',
      color: 'black',
      marginTop: 16
    }
  }, title)));
};

var FadeAnimation = function FadeAnimation(props) {
  var style = props.style,
      _type = props.type,
      _duration = props.duration,
      _delay = props.delay,
      onAnimationComplete = props.onAnimationComplete,
      children = props.children;
  var duration = _duration || 100;
  var delay = _delay || 0;
  var type = _type || "in";

  var _useState = React.useState(type === "in" ? 0 : 1),
      _useState2 = _slicedToArray(_useState, 2),
      opacity = _useState2[0],
      setOpacity = _useState2[1];

  var toValue = type === "in" ? 1 : 0;
  React.useEffect(function () {
    if (opacity === toValue && onAnimationComplete) {
      setTimeout(function () {
        onAnimationComplete();
      }, duration + delay);
    }
  }, [opacity]);
  React.useEffect(function () {
    if (type === "in") {
      setOpacity(toValue);
    } else {
      setOpacity(toValue);
    }
  }, [type]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      opacity: opacity,
      transition: "".concat(duration),
      transitionDelay: delay
    }, style || {})
  }, children);
};

var Header = function Header(props) {
  var title = props.title,
      titleRenderer = props.titleRenderer,
      style = props.style,
      titleStyle = props.titleStyle,
      extra = props.extra;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center',
      minHeight: 48
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      flex: 1
    }, titleStyle || {})
  }, titleRenderer ? titleRenderer : /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0
    }, appStyles.cardTitle)
  }, title)), extra);
};

var InfiniteScrollView = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var style = props.style,
      endpoint = props.endpoint,
      _apiOptions = props.apiOptions,
      shimmer = props.shimmer,
      onDataChange = props.onDataChange,
      render = props.render,
      _pageSize = props.pageSize,
      empty = props.empty,
      reload = props.reload,
      filterOptions = props.filterOptions,
      onReload = props.onReload,
      loadingRenderer = props.loadingRenderer;
  var apiOptions = _apiOptions || {};
  var method = apiOptions.method,
      params = apiOptions.params,
      apiOptionsOnSuccess = apiOptions.onSuccess;
  var pageSize = _pageSize || 5;

  var _useState = React.useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = React.useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      filter = _useState6[0],
      setFilter = _useState6[1];

  var reloaderRef = React.useRef(null);

  var updateDataByIndex = function updateDataByIndex(index, item) {
    setData(function (oldData) {
      oldData[index] = item;
      return oldData;
    });
  };

  React.useImperativeHandle(ref, function () {
    return {
      updateDataByIndex: updateDataByIndex
    };
  });
  var containerView = React.useRef(null);

  var onSuccess = function onSuccess(response) {
    if (apiOptionsOnSuccess) {
      apiOptionsOnSuccess(response);
    }

    setData(function (oldData) {
      var newData = response.data.currentPage === 1 ? response.data.results || [] : [].concat(_toConsumableArray(oldData), _toConsumableArray(response.data.results || []));
      if (onDataChange) onDataChange(newData);
      return newData;
    });
  };

  var _useApi = useApi({
    onSuccess: onSuccess
  }),
      fetched = _useApi.fetched,
      firstTimeFetched = _useApi.firstTimeFetched,
      apiLoad = _useApi.load,
      response = _useApi.response;

  var _ref = response.data || {},
      pageCount = _ref.pageCount;

  var hasNextPage = (page || 1) < (pageCount || 2);
  var load = React.useCallback(function () {
    var hasNextPage = (page || 1) <= (pageCount || 2);
    if (!hasNextPage) return;

    var _endpoint = "".concat(endpoint, "/").concat(page, "/").concat(pageSize);

    var _method = method || (filterOptions ? "POST" : "GET");

    var _params = params || (filterOptions ? filter : undefined);

    apiLoad({
      endpoint: _endpoint,
      method: _method,
      params: _params
    });
  }, [page, pageCount, endpoint, pageSize, method, params, filterOptions, apiLoad, filter]);
  var nextPage = React.useCallback(function () {
    if (fetched && hasNextPage) {
      setPage(function (oldPage) {
        return oldPage + 1;
      });
    }
  }, [fetched, hasNextPage]);
  var onRefresh = React.useCallback(function () {
    if (page === 1) {
      load();
    } else {
      setPage(1);
    }
  }, [load, page]);
  var shouldFetchNextPage = React.useCallback(function () {
    if (!reloaderRef.current) return false;
    var reloaderRects = reloaderRef.current.getClientRects();
    var reloaderOffsetY = reloaderRects[0].top;
    var shouldFetch = reloaderOffsetY - 20 <= window.innerHeight;
    return shouldFetch;
  }, [reloaderRef]);
  var onScroll = React.useCallback(function (event) {
    if (shouldFetchNextPage()) {
      nextPage();
    }
  }, [shouldFetchNextPage, nextPage]);
  React.useEffect(function () {
    if (shouldFetchNextPage()) nextPage();
  }, [shouldFetchNextPage, nextPage]);
  React.useEffect(function () {
    load();
  }, [load]);
  React.useEffect(function () {
    var appLayout = document.getElementsByTagName("body")[0];
    appLayout.onscroll = onScroll;
  }, [onScroll]);
  React.useEffect(function () {
    if (reload) {
      onRefresh();
      onReload();
    }
  }, [onRefresh, onReload, reload]);

  var onFilter = function onFilter(filter) {
    setFilter(filter);
    load();
  };

  if (!firstTimeFetched) {
    return shimmer ? /*#__PURE__*/React__default['default'].createElement(props.shimmer, null) : /*#__PURE__*/React__default['default'].createElement(props.loadingRenderer, {
      style: _objectSpread2({}, appStyles.center)
    });
  }

  var hasData = !!data.length;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      padding: 16
    }, style || {}),
    ref: containerView
  }, /*#__PURE__*/React__default['default'].createElement(FilterBar, {
    filterOptions: filterOptions,
    style: {
      margin: "16px 0"
    },
    onFilter: onFilter
  }), hasData ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, data.map(function (item, index) {
    return render(item, index, {
      page: page,
      pageSize: pageSize
    });
  }), hasNextPage ? /*#__PURE__*/React__default['default'].createElement("div", {
    ref: reloaderRef
  }, shimmer ? /*#__PURE__*/React__default['default'].createElement(props.shimmer, null) : /*#__PURE__*/React__default['default'].createElement(props.loadingRenderer, {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      marginTop: 16
    })
  })) : null) : empty);
});

var ListItem = function ListItem(props) {
  var style = props.style,
      avatar = props.avatar,
      title = props.title,
      lastItem = props.lastItem,
      titleRenderer = props.titleRenderer,
      description = props.description,
      titleStyle = props.titleStyle,
      subtitleStyle = props.subtitleStyle,
      titleContainerStyle = props.titleContainerStyle,
      onClick = props.onClick,
      onTitleClick = props.onTitleClick,
      subtitle = props.subtitle,
      subtitleRenderer = props.subtitleRenderer,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      borderBottom: lastItem && '1px solid #eee',
      padding: 4
    }, style || {}),
    className: onClick ? "clickable" : "",
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: "flex",
      alignItems: 'center'
    }
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: avatar
  }, avatar), /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      width: '100%'
    },
    onClick: onTitleClick,
    className: onTitleClick ? "clickable" : ""
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      marginLeft: 8,
      padding: 4
    }, titleContainerStyle || {})
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: titleRenderer
  }, titleRenderer), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: title
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0,
      fontWeight: 'bold'
    }, titleStyle || {})
  }, title)), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: subtitle
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0,
      fontSize: 10,
      color: 'black'
    }, subtitleStyle || {})
  }, subtitle)), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: subtitleRenderer
  }, subtitleRenderer))), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: description
  }, description)), children);
};

var Loading = function Loading(props) {
  var loadingRenderer = props.loadingRenderer,
      rest = _objectWithoutProperties(props, ["loadingRenderer"]);

  return /*#__PURE__*/React__default['default'].createElement(props.loadingRenderer, rest);
};

var LogoutButton = function LogoutButton(props) {
  var style = props.style,
      className = props.className,
      renderer = props.renderer,
      icon = props.icon;
  var history = useHistory();

  var _useAuth = useAuth(),
      logout = _useAuth.logout;

  var onLogout = function onLogout() {
    logout();
    history.push("/sign");
  };

  return /*#__PURE__*/React__default['default'].createElement(props.renderer, {
    icon: /*#__PURE__*/React__default['default'].createElement(props.icon, {
      style: {
        fontSize: 16
      }
    }),
    type: "link",
    className: className,
    style: _objectSpread2({
      paddingLeft: 0
    }, style || {}),
    onClick: onLogout
  }, "\xC7\u0131k\u0131\u015F Yap");
};

var PostCard = function PostCard(props) {
  var style = props.style,
      avatar = props.avatar,
      title = props.title,
      titleStyle = props.titleStyle,
      headerStyle = props.headerStyle,
      titleContainerStyle = props.titleContainerStyle,
      description = props.description,
      onHeaderClick = props.onHeaderClick,
      subtitle = props.subtitle,
      onTitleClick = props.onTitleClick,
      childrenContainerStyle = props.childrenContainerStyle,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: style
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: avatar || title || description || subtitle
  }, /*#__PURE__*/React__default['default'].createElement(ListItem, {
    avatar: avatar,
    title: title,
    style: _objectSpread2({
      marginBottom: 4
    }, titleContainerStyle || {}),
    titleContainerStyle: headerStyle,
    titleStyle: _objectSpread2({
      fontSize: 18
    }, titleStyle || {}),
    description: description,
    subtitle: subtitle,
    onTitleClick: onTitleClick,
    onClick: onHeaderClick
  })), children ? /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      backgroundColor: 'white'
    }, appStyles.card)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: "0 16px"
    }, childrenContainerStyle || {})
  }, children)) : null);
};

var QuantityBadge = function QuantityBadge(props) {
  var quantity = props.quantity;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      backgroundColor: constants.mainColor,
      width: 30,
      height: 30,
      borderRadius: 60
    },
    className: "center"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      margin: 0,
      color: 'white',
      fontWeight: 'bold'
    }
  }, quantity));
};

var QueryAutoComplete = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
      onChange = props.onChange,
      getOptions = props.getOptions,
      valueKey = props.valueKey,
      labelKey = props.labelKey,
      _minLength = props.minLength,
      cache = props.cache,
      selectfieldRenderer = props.selectfieldRenderer,
      optionsRenderer = props.optionsRenderer,
      rest = _objectWithoutProperties(props, ["value", "onChange", "getOptions", "valueKey", "labelKey", "minLength", "cache", "selectfieldRenderer", "optionsRenderer"]);

  var minLength = _minLength === undefined ? 3 : _minLength;

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      response = _useState4[0],
      setResponse = _useState4[1];

  var _useApi = useApi({
    initialValue: []
  }),
      fetched = _useApi.fetched,
      fetching = _useApi.fetching,
      load = _useApi.load;

  var _useLocalStorage = useLocalStorage("caches", "{}"),
      getCache = _useLocalStorage.getItem,
      setCache = _useLocalStorage.setItem;

  var searchStringLength = (search || "").length;
  var shouldSearch = searchStringLength >= minLength;
  React.useEffect(function () {
    if (!search) {
      setSearch(value);
    }
  }, [value, search, setSearch]);
  React.useEffect(function () {
    if (shouldSearch) {
      var apiOptions = getOptions(search);

      if (cache) {
        var oldCaches = getCache();
        var cacheValues = JSON.parse(oldCaches || "{}");
        var cacheKey = JSON.stringify(apiOptions);
        var existCache = cacheValues[cacheKey];

        if (existCache) {
          setResponse(existCache);
        } else {
          load(_objectSpread2(_objectSpread2({}, apiOptions), {}, {
            onSuccess: function onSuccess(response) {
              setCache(JSON.stringify(_objectSpread2(_objectSpread2({}, cacheValues), {}, _defineProperty({}, cacheKey, response))));
              setResponse(response);
            }
          }));
        }
      } else {
        load(_objectSpread2(_objectSpread2({}, apiOptions), {}, {
          onSuccess: setResponse
        }));
      }
    }
  }, [shouldSearch, searchStringLength, getOptions, cache, search]);

  var onSelect = function onSelect(e, option) {
    onChange(e);
  };

  var getACOptions = function getACOptions() {
    return (response || []).map(function (i) {
      return {
        value: i[valueKey],
        label: i[labelKey]
      };
    });
  };

  var options = getACOptions();
  return /*#__PURE__*/React__default['default'].createElement(props.selectfieldRenderer, _extends({}, rest, {
    options: options,
    showSearch: true,
    value: value,
    loading: fetching,
    onSelect: onSelect,
    ref: ref,
    onSearch: setSearch,
    optionFilterProp: "label",
    defaultActiveFirstOption: true,
    notFoundContent: fetched && !options.length ? "Bulunamadı" : null
  }), options.map(function (option, index) {
    return /*#__PURE__*/React__default['default'].createElement(props.optionsRenderer, {
      key: index,
      value: option.value
    }, option.label);
  }));
});

var SelectItemsRenderer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var items = props.items,
      placeHolder = props.placeHolder,
      value = props.value,
      onChange = props.onChange,
      onSearch = props.onSearch,
      defaultSelectFirstValue = props.defaultSelectFirstValue,
      mode = props.mode,
      filterOption = props.filterOption,
      _valueField = props.valueField,
      labelInValue = props.labelInValue,
      _descriptionField = props.descriptionField,
      selectFieldRenderer = props.selectFieldRenderer,
      optionsRenderer = props.optionsRenderer,
      rest = _objectWithoutProperties(props, ["items", "placeHolder", "value", "onChange", "onSearch", "defaultSelectFirstValue", "mode", "filterOption", "valueField", "labelInValue", "descriptionField", "selectFieldRenderer", "optionsRenderer"]);

  var valueField = _valueField || 'id';
  var descriptionField = _descriptionField || 'name';
  React.useEffect(function () {
    if (defaultSelectFirstValue) {
      if (items.length && !value) {
        onChange(items[0][valueField]);
      }
    }
  }, [defaultSelectFirstValue, items, valueField, value]);

  var getValue = function getValue() {
    if (labelInValue) {
      if (mode === "multiple") return (value || []).map(function (i) {
        return {
          value: i.value || i[valueField],
          label: i.label || i[descriptionField],
          key: i.key || i[valueField]
        };
      });
      return {
        value: value[valueField],
        label: value[descriptionField]
      };
    }

    return value;
  };

  return /*#__PURE__*/React__default['default'].createElement(props.selectfieldRenderer, _extends({}, rest, {
    mode: mode,
    labelInValue: labelInValue,
    value: getValue(),
    ref: ref,
    showSearch: true,
    placeholder: placeHolder,
    optionFilterProp: "children",
    onChange: onChange,
    onSearch: onSearch
  }), (items || []).map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(props.optionsRenderer, {
      key: index,
      value: item[valueField]
    }, item[descriptionField]);
  }));
});

var QuerySelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var url = props.url,
      options = props.options,
      rest = _objectWithoutProperties(props, ["url", "options"]);

  var _useApi = useApi(),
      fetched = _useApi.fetched,
      load = _useApi.load,
      response = _useApi.response;

  React.useEffect(function () {
    if (url) {
      load(_objectSpread2({
        endpoint: url
      }, options));
    }
  }, [url, load, options]);
  React.useEffect(function () {
    if (fetched && response) {
      setItems(response.data);
    }
  }, [fetched, response]);
  return /*#__PURE__*/React__default['default'].createElement(SelectItemsRenderer, _extends({
    items: items,
    ref: ref
  }, rest));
});

var Rate = function Rate(props) {
  var value = props.value,
      total = props.total,
      _size = props.size,
      _emptyColor = props.emptyColor,
      style = props.style,
      filledStarRenderer = props.filledStarRenderer,
      emptyStarRenderer = props.emptyStarRenderer;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      stars = _useState2[0],
      setStars = _useState2[1];

  var size = _size || 24;
  React.useEffect(function () {
    var _stars = Array(total || 5).fill(0).map(function (i, index) {
      return index < value ? 1 : 0;
    });

    setStars(_stars);
  }, [total, value]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.center), appStyles.grid), style || {})
  }, stars.map(function (i, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        margin: 4
      },
      key: index
    }, /*#__PURE__*/React__default['default'].createElement(Show, {
      condition: i
    }, /*#__PURE__*/React__default['default'].createElement(props.filledStarRenderer, {
      style: {
        color: 'orange',
        fontSize: size
      }
    })), /*#__PURE__*/React__default['default'].createElement(Show, {
      condition: !i
    }, /*#__PURE__*/React__default['default'].createElement(props.emptyStarRenderer, {
      style: {
        color: "orange",
        fontSize: size
      }
    })));
  }));
};

var Redirect = function Redirect(props) {
  var mode = props.mode,
      _redirectURL = props.redirectURL;
  var redirectURL = _redirectURL || "/";
  var history = useHistory();
  React.useEffect(function () {
    if (mode === "replace") {
      window.location.href = redirectURL;
    } else {
      history.push(redirectURL);
    }
  }, [mode, history, redirectURL]);
  return null;
};

var RowStretch = function RowStretch(props) {
  var style = props.style,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      display: 'flex',
      alignItems: 'stretch',
      flexFlow: 'row wrap'
    }, style || {})
  }, children);
};

var Section = function Section(props) {
  var title = props.title,
      extra = props.extra,
      className = props.className,
      style = props.style,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className,
    style: _objectSpread2({
      border: '1px solid #ddd',
      borderRadius: 20,
      padding: 16,
      margin: 8,
      height: '100%'
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, title ? /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      fontWeight: 'bold',
      fontSize: 18
    }
  }, title) : null, extra), children);
};

var Shimmer = function Shimmer(props) {
  var style = props.style,
      skeletonRenderer = props.skeletonRenderer;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.card), {}, {
      padding: 16
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement(props.skeletonRenderer, _extends({
    loading: true
  }, props)));
};

var StarCount = function StarCount(props) {
  var quantity = props.quantity,
      style = props.style,
      _size = props.size,
      filledStarRenderer = props.filledStarRenderer;
  var size = _size || 24;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center'
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      margin: 0,
      fontWeight: 'bold',
      fontSize: size,
      marginRight: 4
    }
  }, quantity), /*#__PURE__*/React__default['default'].createElement(props.filledStarRenderer, {
    style: {
      color: 'orange',
      fontSize: size
    }
  }));
};

var Tag = function Tag(props) {
  var _color = props.color,
      description = props.description,
      onColorChange = props.onColorChange,
      generatedColor = props.generatedColor,
      _type = props.type,
      textStyle = props.textStyle,
      style = props.style,
      onClick = props.onClick,
      onTextClick = props.onTextClick,
      onClear = props.onClear,
      moreIconRenderer = props.moreIconRenderer,
      closeIconRenderer = props.closeIconRenderer,
      buttonRenderer = props.buttonRenderer,
      popoverRenderer = props.popoverRenderer;
  var type = _type || "outlined";
  var color = _color || (generatedColor ? generatedColorFromString(description) : "#ccc");
  var textColor = type === "filled" ? 'white' : color;
  var backgroundColor = type === "filled" ? color : 'white';
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({
      padding: 4,
      border: "1px solid ".concat(color),
      borderRadius: 8,
      backgroundColor: backgroundColor
    }, appStyles.center), style || {}),
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: onColorChange
  }, /*#__PURE__*/React__default['default'].createElement(props.popoverRenderer, {
    content: /*#__PURE__*/React__default['default'].createElement(reactColor.SwatchesPicker, {
      onChange: onColorChange
    }),
    title: "Renk"
  }, /*#__PURE__*/React__default['default'].createElement(props.buttonRenderer, {
    icon: /*#__PURE__*/React__default['default'].createElement(props.moreIconRenderer, {
      style: {
        fontSize: 11
      }
    }),
    shape: "circle",
    style: {
      border: 'none',
      backgroundColor: '#eee',
      width: 20,
      minWidth: 20,
      height: 20,
      lineHeight: "1px",
      marginRight: 4
    }
  }))), /*#__PURE__*/React__default['default'].createElement("p", {
    className: onTextClick ? "clickable" : "",
    style: _objectSpread2({
      color: textColor,
      margin: 0
    }, textStyle || {}),
    onClick: onTextClick
  }, description), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: onClear
  }, /*#__PURE__*/React__default['default'].createElement(props.buttonRenderer, {
    icon: /*#__PURE__*/React__default['default'].createElement(props.closeIconRenderer, {
      style: {
        fontSize: 11
      }
    }),
    shape: "circle",
    style: {
      border: 'none',
      backgroundColor: '#eee',
      width: 20,
      minWidth: 20,
      height: 20,
      lineHeight: "1px",
      marginLeft: 4
    },
    onClick: onClear
  })));
};

exports.AppRenderer = AppRenderer;
exports.ArrayToJSON = ArrayToJSON;
exports.AttachmentImage = AttachmentImage;
exports.Authorized = Authorized;
exports.DateDescription = DateDescription;
exports.DescriptionIcon = DescriptionIcon;
exports.DescriptionOverflowImages = DescriptionOverflowImages;
exports.EmptyResult = EmptyResult;
exports.EnumToArray = EnumToArray;
exports.FadeAnimation = FadeAnimation;
exports.Header = Header;
exports.InfiniteScroll = InfiniteScrollView;
exports.JSONToArray = JSONToArray;
exports.ListItem = ListItem;
exports.Loading = Loading;
exports.LogoutButton = LogoutButton;
exports.OverflowImages = OverflowImages;
exports.PostCard = PostCard;
exports.QuantityBadge = QuantityBadge;
exports.QueryAutoComplete = QueryAutoComplete;
exports.QuerySelect = QuerySelect;
exports.Rate = Rate;
exports.Redirect = Redirect;
exports.RowStretch = RowStretch;
exports.Section = Section;
exports.SelectItemsRenderer = SelectItemsRenderer;
exports.Shimmer = Shimmer;
exports.Show = Show;
exports.StarCount = StarCount;
exports.StoreContext = StoreContext;
exports.StoreProvider = StoreProvider;
exports.Tag = Tag;
exports.actions = actions;
exports.appStyles = appStyles;
exports.bytesToSize = bytesToSize;
exports.combineReducers = combineReducers;
exports.constants = constants;
exports.destructArray = destructArray;
exports.download = download;
exports.downloadByDataURL = downloadByDataURL;
exports.downloadQRCodeById = downloadQRCodeById;
exports.downloadQRCodeBySVGElement = downloadQRCodeBySVGElement;
exports.formatDate = formatDate;
exports.generatedColorFromString = generatedColorFromString$1;
exports.getAddressText = getAddressText;
exports.getAppNames = getAppNames;
exports.getAppURL = getAppURL$1;
exports.getAppURLs = getAppURLs;
exports.getCurrentURL = getCurrentURL;
exports.getDangerColor = getDangerColor;
exports.getFirstLetters = getFirstLetters;
exports.getLocale = getLocale;
exports.getMainColor = getMainColor;
exports.getRoutes = getRoutes;
exports.getSuccessColor = getSuccessColor;
exports.getUriFromImageObject = getUriFromImageObject;
exports.guid = guid;
exports.hashCode = hashCode;
exports.iFetch = iFetch;
exports.isArrayEmpty = isArrayEmpty;
exports.isJSONEmpty = isJSONEmpty;
exports.setAppNames = setAppNames;
exports.setAppURLs = setAppURLs;
exports.setDangerColor = setDangerColor;
exports.setMainColor = setMainColor;
exports.setRoutes = setRoutes;
exports.setSuccessColor = setSuccessColor;
exports.sum = sum;
exports.transformObj = transformObj;
exports.updateObjectByName = updateObjectByName;
exports.useApi = useApi;
exports.useAuth = useAuth;
exports.useAuthorize = useAuthorize;
exports.useDimensions = useDimensions;
exports.useHistory = useHistory;
exports.useLocalStorage = useLocalStorage;
exports.useRoute = useRoute;
exports.useSocket = useSocket;
