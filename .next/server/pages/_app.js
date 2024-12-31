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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ColorSchemeContext.tsx":
/*!***********************************************!*\
  !*** ./src/components/ColorSchemeContext.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorSchemeProvider\": () => (/* binding */ ColorSchemeProvider),\n/* harmony export */   \"useColorScheme\": () => (/* binding */ useColorScheme),\n/* harmony export */   \"useUpdateColorScheme\": () => (/* binding */ useUpdateColorScheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ColorSchemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(\"light\");\nconst UpdateColorSchemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(()=>{});\nconst useColorScheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ColorSchemeContext)\n;\nconst useUpdateColorScheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UpdateColorSchemeContext)\n;\nconst ColorSchemeProvider = ({ children  })=>{\n    var ref;\n    const initalColorScheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=> false ? 0 : \"system\"\n    , []);\n    const { 0: colorScheme , 1: setColorScheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initalColorScheme);\n    const updateColorScheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newColorScheme)=>{\n        if (newColorScheme === colorScheme) return;\n        setColorScheme(newColorScheme);\n        if (newColorScheme === \"system\") {\n            if (window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n                document.documentElement.classList.add(\"dark\");\n            } else {\n                document.documentElement.classList.remove(\"dark\");\n            }\n            localStorage.removeItem(\"theme\");\n        } else {\n            if (newColorScheme === \"dark\") {\n                document.documentElement.classList.add(\"dark\");\n            } else {\n                document.documentElement.classList.remove(\"dark\");\n            }\n            localStorage.theme = newColorScheme;\n        }\n    }, [\n        colorScheme\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) return;\n        if (colorScheme === \"system\") {\n            window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\", ()=>updateColorScheme(\"system\")\n            );\n        }\n    }, [\n        colorScheme,\n        updateColorScheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSchemeContext.Provider, {\n        value: colorScheme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UpdateColorSchemeContext.Provider, {\n            value: updateColorScheme,\n            children: children\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/MCdns/CloudCraftWithFranck-Website/src/components/ColorSchemeContext.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/MCdns/CloudCraftWithFranck-Website/src/components/ColorSchemeContext.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db2xvclNjaGVtZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQVVjO0FBR2QsTUFBTU0sa0JBQWtCLGlCQUFHTCxvREFBYSxDQUE4QixPQUFPLENBQUM7QUFDOUUsTUFBTU0sd0JBQXdCLGlCQUFHTixvREFBYSxDQUFxRCxJQUFNLEVBQUUsQ0FBQztBQUVyRyxNQUFNTyxjQUFjLEdBQUcsSUFBTUwsaURBQVUsQ0FBQ0csa0JBQWtCLENBQUM7QUFBQTtBQUMzRCxNQUFNRyxvQkFBb0IsR0FBRyxJQUFNTixpREFBVSxDQUFDSSx3QkFBd0IsQ0FBQztBQUFBO0FBRXZFLE1BQU1HLG1CQUFtQixHQUFvQyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO1FBR2hELEdBQXFEO0lBRnpGLE1BQU1DLGlCQUFpQixHQUFHUiw4Q0FBTyxDQUMvQixJQUNFLE1BQTZCLEdBQUcsQ0FBaUUsR0FBRyxRQUFRO0lBQUEsRUFDOUcsRUFBRSxDQUNIO0lBQ0QsTUFBTSxFQXpCUixHQXlCU1csV0FBVyxHQXpCcEIsR0F5QnNCQyxjQUFjLE1BQUlkLCtDQUFRLENBQThCVSxpQkFBaUIsQ0FBQztJQUU5RixNQUFNSyxpQkFBaUIsR0FBR1osa0RBQVcsQ0FDbkMsQ0FBQ2EsY0FBMkMsR0FBSztRQUMvQyxJQUFJQSxjQUFjLEtBQUtILFdBQVcsRUFBRSxPQUFNO1FBRTFDQyxjQUFjLENBQUNFLGNBQWMsQ0FBQztRQUU5QixJQUFJQSxjQUFjLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUlDLE1BQU0sQ0FBQ0MsVUFBVSxJQUFJRCxNQUFNLENBQUNDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2xGQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO2FBQy9DLE1BQU07Z0JBQ0xILFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDbEQ7WUFDRGIsWUFBWSxDQUFDYyxVQUFVLENBQUMsT0FBTyxDQUFDO1NBQ2pDLE1BQU07WUFDTCxJQUFJVCxjQUFjLEtBQUssTUFBTSxFQUFFO2dCQUM3QkksUUFBUSxDQUFDQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQzthQUMvQyxNQUFNO2dCQUNMSCxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2xEO1lBQ0RiLFlBQVksQ0FBQ2UsS0FBSyxHQUFHVixjQUFjO1NBQ3BDO0tBQ0YsRUFDRDtRQUFDSCxXQUFXO0tBQUMsQ0FDZDtJQUVEZixnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJLElBQTZCLEVBQUUsT0FBTTtRQUN6QyxJQUFJZSxXQUFXLEtBQUssUUFBUSxFQUFFO1lBQzVCSSxNQUFNLENBQUNDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDUyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBTVosaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQUEsQ0FBQztTQUNoSDtLQUNGLEVBQUU7UUFBQ0YsV0FBVztRQUFFRSxpQkFBaUI7S0FBQyxDQUFDO0lBRXBDLHFCQUNFLDhEQUFDWCxrQkFBa0IsQ0FBQ3dCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFaEIsV0FBVztrQkFDN0MsNEVBQUNSLHdCQUF3QixDQUFDdUIsUUFBUTtZQUFDQyxLQUFLLEVBQUVkLGlCQUFpQjtzQkFBR04sUUFBUTs7Ozs7cUJBQXFDOzs7OztpQkFDL0UsQ0FDL0I7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRlbnRsYXllci1kb2NzLy4vc3JjL2NvbXBvbmVudHMvQ29sb3JTY2hlbWVDb250ZXh0LnRzeD8yMTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZDLFxuICB1c2VFZmZlY3QsXG4gIERpc3BhdGNoLFxuICBTZXRTdGF0ZUFjdGlvbixcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG4gIHVzZUNvbnRleHQsXG4gIHVzZU1lbW8sXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbG9yU2NoZW1lIH0gZnJvbSAnLi4vdXRpbHMvc3ludGF4LWhpZ2hsaWdodGluZydcblxuY29uc3QgQ29sb3JTY2hlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDwnbGlnaHQnIHwgJ2RhcmsnIHwgJ3N5c3RlbSc+KCdsaWdodCcpXG5jb25zdCBVcGRhdGVDb2xvclNjaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PChjb2xvclNjaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyB8ICdzeXN0ZW0nKSA9PiB2b2lkPigoKSA9PiB7fSlcblxuZXhwb3J0IGNvbnN0IHVzZUNvbG9yU2NoZW1lID0gKCkgPT4gdXNlQ29udGV4dChDb2xvclNjaGVtZUNvbnRleHQpXG5leHBvcnQgY29uc3QgdXNlVXBkYXRlQ29sb3JTY2hlbWUgPSAoKSA9PiB1c2VDb250ZXh0KFVwZGF0ZUNvbG9yU2NoZW1lQ29udGV4dClcblxuZXhwb3J0IGNvbnN0IENvbG9yU2NoZW1lUHJvdmlkZXI6IEZDPFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt9Pj4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGluaXRhbENvbG9yU2NoZW1lID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgQ29sb3JTY2hlbWUgfCBudWxsKSA/PyAnc3lzdGVtJyA6ICdzeXN0ZW0nLFxuICAgIFtdLFxuICApXG4gIGNvbnN0IFtjb2xvclNjaGVtZSwgc2V0Q29sb3JTY2hlbWVdID0gdXNlU3RhdGU8J2xpZ2h0JyB8ICdkYXJrJyB8ICdzeXN0ZW0nPihpbml0YWxDb2xvclNjaGVtZSlcblxuICBjb25zdCB1cGRhdGVDb2xvclNjaGVtZSA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdDb2xvclNjaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyB8ICdzeXN0ZW0nKSA9PiB7XG4gICAgICBpZiAobmV3Q29sb3JTY2hlbWUgPT09IGNvbG9yU2NoZW1lKSByZXR1cm5cblxuICAgICAgc2V0Q29sb3JTY2hlbWUobmV3Q29sb3JTY2hlbWUpXG5cbiAgICAgIGlmIChuZXdDb2xvclNjaGVtZSA9PT0gJ3N5c3RlbScpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RoZW1lJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXdDb2xvclNjaGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2UudGhlbWUgPSBuZXdDb2xvclNjaGVtZVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NvbG9yU2NoZW1lXSxcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICBpZiAoY29sb3JTY2hlbWUgPT09ICdzeXN0ZW0nKSB7XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHVwZGF0ZUNvbG9yU2NoZW1lKCdzeXN0ZW0nKSlcbiAgICB9XG4gIH0sIFtjb2xvclNjaGVtZSwgdXBkYXRlQ29sb3JTY2hlbWVdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbG9yU2NoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29sb3JTY2hlbWV9PlxuICAgICAgPFVwZGF0ZUNvbG9yU2NoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXBkYXRlQ29sb3JTY2hlbWV9PntjaGlsZHJlbn08L1VwZGF0ZUNvbG9yU2NoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0NvbG9yU2NoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlQ2FsbGJhY2siLCJDb2xvclNjaGVtZUNvbnRleHQiLCJVcGRhdGVDb2xvclNjaGVtZUNvbnRleHQiLCJ1c2VDb2xvclNjaGVtZSIsInVzZVVwZGF0ZUNvbG9yU2NoZW1lIiwiQ29sb3JTY2hlbWVQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGFsQ29sb3JTY2hlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29sb3JTY2hlbWUiLCJzZXRDb2xvclNjaGVtZSIsInVwZGF0ZUNvbG9yU2NoZW1lIiwibmV3Q29sb3JTY2hlbWUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicmVtb3ZlSXRlbSIsInRoZW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ColorSchemeContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ColorSchemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ColorSchemeContext */ \"./src/components/ColorSchemeContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ColorSchemeContext__WEBPACK_IMPORTED_MODULE_2__.ColorSchemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/MCdns/CloudCraftWithFranck-Website/src/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/MCdns/CloudCraftWithFranck-Website/src/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUN5QjtBQUM2QztBQUV4QztBQUU5QixTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsK0VBQW1CO2tCQUNsQiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNSLENBQ3ZCO0NBQ0Y7QUFDRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRlbnRsYXllci1kb2NzLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29sb3JTY2hlbWVQcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3JTY2hlbWVDb250ZXh0J1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDb2xvclNjaGVtZVByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ29sb3JTY2hlbWVQcm92aWRlcj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbG9yU2NoZW1lUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();