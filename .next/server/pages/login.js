"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card/Card */ \"antd/lib/card/Card\");\n/* harmony import */ var antd_lib_card_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_Card__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Login() {\n    const onFinish = (values)=>{\n        console.log(\"Success:\", values);\n    };\n    const onFinishFailed = (errorInfo)=>{\n        console.log(\"Failed:\", errorInfo);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"vh-100 row justify-content-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" col-6 align-self-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_card_Card__WEBPACK_IMPORTED_MODULE_3___default()), {\n                title: \"Login\",\n                style: {\n                    width: 600\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                    name: \"basic\",\n                    initialValues: {\n                        remember: true\n                    },\n                    onFinish: onFinish,\n                    onFinishFailed: onFinishFailed,\n                    autoComplete: \"off\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                            label: \"Username\",\n                            name: \"username\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"Please input your username!\"\n                                }, \n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {}, void 0, false, {\n                                fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                            label: \"Password\",\n                            name: \"password\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"Please input your password!\"\n                                }, \n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {}, void 0, false, {\n                                fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                            name: \"remember\",\n                            valuePropName: \"checked\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                                children: \"Remember me\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"primary\",\n                                htmlType: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\daiph\\\\time-register-ui\\\\pages\\\\login.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDMkI7QUFDZjtBQUV0QyxTQUFTTSxLQUFLLEdBQUc7SUFDZixNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsTUFBVyxHQUFLO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVGLE1BQU0sQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsTUFBTUcsY0FBYyxHQUFHLENBQUNDLFNBQWMsR0FBSztRQUN6Q0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRSxTQUFTLENBQUMsQ0FBQztLQUNuQztJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7a0JBQ2hELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQywwQkFBMEI7c0JBQ3ZDLDRFQUFDVCwyREFBSTtnQkFBQ1UsS0FBSyxFQUFDLE9BQU87Z0JBQUNDLEtBQUssRUFBRTtvQkFBRUMsS0FBSyxFQUFFLEdBQUc7aUJBQUU7MEJBQ3ZDLDRFQUFDZCxzQ0FBSTtvQkFDSGUsSUFBSSxFQUFDLE9BQU87b0JBQ1pDLGFBQWEsRUFBRTt3QkFBRUMsUUFBUSxFQUFFLElBQUk7cUJBQUU7b0JBQ2pDYixRQUFRLEVBQUVBLFFBQVE7b0JBQ2xCSSxjQUFjLEVBQUVBLGNBQWM7b0JBQzlCVSxZQUFZLEVBQUMsS0FBSzs7c0NBRWxCLDhEQUFDbEIsMkNBQVM7NEJBQ1JvQixLQUFLLEVBQUMsVUFBVTs0QkFDaEJMLElBQUksRUFBQyxVQUFVOzRCQUNmTSxLQUFLLEVBQUU7Z0NBQ0w7b0NBQUVDLFFBQVEsRUFBRSxJQUFJO29DQUFFQyxPQUFPLEVBQUUsNkJBQTZCO2lDQUFFOzZCQUMzRDtzQ0FFRCw0RUFBQ3RCLHVDQUFLOzs7O29DQUFHOzs7OztnQ0FDQztzQ0FFWiw4REFBQ0QsMkNBQVM7NEJBQ1JvQixLQUFLLEVBQUMsVUFBVTs0QkFDaEJMLElBQUksRUFBQyxVQUFVOzRCQUNmTSxLQUFLLEVBQUU7Z0NBQ0w7b0NBQUVDLFFBQVEsRUFBRSxJQUFJO29DQUFFQyxPQUFPLEVBQUUsNkJBQTZCO2lDQUFFOzZCQUMzRDtzQ0FFRCw0RUFBQ3RCLGdEQUFjOzs7O29DQUFHOzs7OztnQ0FDUjtzQ0FFWiw4REFBQ0QsMkNBQVM7NEJBQUNlLElBQUksRUFBQyxVQUFVOzRCQUFDVSxhQUFhLEVBQUMsU0FBUztzQ0FDaEQsNEVBQUMxQiwwQ0FBUTswQ0FBQyxhQUFXOzs7OztvQ0FBVzs7Ozs7Z0NBQ3RCO3NDQUVaLDhEQUFDQywyQ0FBUztzQ0FDUiw0RUFBQ0Ysd0NBQU07Z0NBQUM0QixJQUFJLEVBQUMsU0FBUztnQ0FBQ0MsUUFBUSxFQUFDLFFBQVE7MENBQUMsUUFFekM7Ozs7O29DQUFTOzs7OztnQ0FDQzs7Ozs7O3dCQUNQOzs7OztvQkFDRjs7Ozs7Z0JBQ0g7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBRUQsaUVBQWV4QixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lLXJlZ2lzdGVyLXVpLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENoZWNrYm94LCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJhbnRkL2xpYi9jYXJkL0NhcmRcIjtcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlczogYW55KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkOlwiLCBlcnJvckluZm8pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZoLTEwMCByb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb2wtNiBhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgIDxDYXJkIHRpdGxlPVwiTG9naW5cIiBzdHlsZT17eyB3aWR0aDogNjAwIH19PlxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhXCIgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhXCIgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicmVtZW1iZXJcIiB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiRm9ybSIsIklucHV0IiwiQ2FyZCIsIkxvZ2luIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInN0eWxlIiwid2lkdGgiLCJuYW1lIiwiaW5pdGlhbFZhbHVlcyIsInJlbWVtYmVyIiwiYXV0b0NvbXBsZXRlIiwiSXRlbSIsImxhYmVsIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJQYXNzd29yZCIsInZhbHVlUHJvcE5hbWUiLCJ0eXBlIiwiaHRtbFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/card/Card":
/*!*************************************!*\
  !*** external "antd/lib/card/Card" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("antd/lib/card/Card");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();