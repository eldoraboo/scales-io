"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/second.tsx":
/*!**************************!*\
  !*** ./pages/second.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PianoKeyboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction PianoKeyboard(props) {\n    _s();\n    const { selectedKey , selectedOption  } = props;\n    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    const arr = [\n        {\n            key: 0,\n            value: \"C\"\n        },\n        {\n            key: 1,\n            value: \"D\"\n        },\n        {\n            key: 0.5,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 2,\n            value: \"E\"\n        },\n        {\n            key: 1.5,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 2.5,\n            value: \"F\"\n        },\n        {\n            key: 3.5,\n            value: \"G\"\n        },\n        {\n            key: 3,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 4.5,\n            value: \"A\"\n        },\n        {\n            key: 4,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 5.5,\n            value: \"B\"\n        },\n        {\n            key: 5,\n            value: \"A♯/B♭\"\n        }\n    ];\n    const intervalForm = [\n        {\n            key: \"naturalMajor\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"harmonicMinor\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1.5,\n                0.5\n            ]\n        },\n        {\n            key: \"naturalMinor\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"ionian\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"dorian\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5,\n                1\n            ]\n        },\n        {\n            key: \"phrygian\",\n            value: [\n                0.5,\n                1,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"lydian\",\n            value: [\n                1,\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"mixolydian\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1\n            ]\n        },\n        {\n            key: \"aeolian\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"locrian\",\n            value: [\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"\",\n            value: [\n                0,\n                0,\n                0,\n                0,\n                0,\n                0,\n                0\n            ]\n        }\n    ];\n    function findKey(arr, value) {\n        for(let i = 0; i < arr.length; i++){\n            if (arr[i].value === value) {\n                return arr[i].key;\n            }\n        }\n        return \"Key not found\";\n    }\n    function generateScale(x, type) {\n        let list = [\n            x\n        ];\n        const interval = intervalForm.find((i)=>i.key === type);\n        if (interval) {\n            const intervals = interval.value;\n            for(let i = 0; i < intervals.length; i++){\n                list.push(list[i] + intervals[i]);\n            }\n            return list;\n        } else {}\n    }\n    const keyList = generateScale(findKey(arr, selectedKey), selectedOption);\n    const notes = [\n        {\n            key: 0,\n            value: \"C\"\n        },\n        {\n            key: 1,\n            value: \"D\"\n        },\n        {\n            key: 0.5,\n            left: \"150%\",\n            black: true,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 2,\n            left: \"100%\",\n            value: \"E\"\n        },\n        {\n            key: 1.5,\n            left: \"250%\",\n            black: true,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 2.5,\n            left: \"350%\",\n            value: \"F\"\n        },\n        {\n            key: 3.5,\n            value: \"G\"\n        },\n        {\n            key: 3,\n            left: \"22%\",\n            black: true,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 4.5,\n            value: \"A\"\n        },\n        {\n            key: 4,\n            left: \"28%\",\n            black: true,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 5.5,\n            value: \"B\"\n        },\n        {\n            key: 5,\n            left: \"34%\",\n            black: true,\n            value: \"A♯/B♭\"\n        },\n        {\n            key: 6,\n            value: \"C\"\n        },\n        {\n            key: 7,\n            value: \"D\"\n        },\n        {\n            key: 6.5,\n            left: \"46%\",\n            black: true,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 8,\n            value: \"E\"\n        },\n        {\n            key: 7.5,\n            left: \"52%\",\n            black: true,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 8.5,\n            value: \"F\"\n        },\n        {\n            key: 9.5,\n            value: \"G\"\n        },\n        {\n            key: 9,\n            left: \"64%\",\n            black: true,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 10.5,\n            value: \"A\"\n        },\n        {\n            key: 10,\n            left: \"70%\",\n            black: true,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 11.5,\n            value: \"B\"\n        },\n        {\n            key: 11,\n            left: \"76%\",\n            black: true,\n            value: \"A♯/B♭\"\n        },\n        {\n            key: 12,\n            value: \"C\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n        px: 10,\n        height: \"300px\",\n        templateColumns: \"repeat(25, minmax(4%, 1fr))\",\n        pb: 10,\n        children: notes.map((note)=>{\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                align: \"center\",\n                height: note.black ? \"60%\" : \"100%\",\n                variant: note.black ? \"filled\" : \"outline\",\n                right: note.left,\n                pt: note.black ? \"80px\" : \"200px\",\n                fontSize: note.black ? \"80%\" : \"\",\n                bg: (keyList === null || keyList === void 0 ? void 0 : keyList.includes(note.key)) ? note.black ? \"rgba(237,100,166,1)\" : \"rgba(237,100,166,0.5)\" : note.black ? colorMode === \"light\" ? \"gray.800\" : \"white\" : \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {}, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {}, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n                        children: note.value\n                    }, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, note.key, true, {\n                fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(PianoKeyboard, \"2Uu86IH3do63pkN3s1ysdRMmJuc=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = PianoKeyboard;\nvar _c;\n$RefreshReg$(_c, \"PianoKeyboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTZ0IsUUFBUSxDQUFDUCxLQUFLdkIsR0FBRyxLQUN0QnVCLEtBQUtOLEtBQUssR0FDUix3QkFDQSx1QkFBdUIsR0FDekJNLEtBQUtOLEtBQUssR0FDVm5CLGNBQWMsVUFDWixhQUNBLE9BQU8sR0FDVCxFQUFFOztrQ0FFTiw4REFBQ1Qsd0RBQVVBOzs7OztrQ0FFWCw4REFBQ0Usc0RBQVFBOzs7OztrQ0FFVCw4REFBQ0Qsd0RBQVVBO2tDQUNSaUMsS0FBS3RCLEtBQUs7Ozs7Ozs7ZUF2QlZzQixLQUFLdkIsR0FBRzs7Ozs7Ozs7Ozs7QUE2QnJCLENBQUM7R0FySHVCTjs7UUFFQUYsMERBQVlBOzs7S0FGWkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vjb25kLnRzeD81MjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQm94LFxuICBGbGV4LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRGb290ZXIsXG4gIENhcmRCb2R5LFxuICB1c2VDb2xvck1vZGUsXG4gIFNpbXBsZUdyaWQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpYW5vS2V5Ym9hcmQocHJvcHM6IGFueSkge1xuICBjb25zdCB7IHNlbGVjdGVkS2V5LCBzZWxlY3RlZE9wdGlvbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3QgYXJyID0gW1xuICAgIHsga2V5OiAwLCB2YWx1ZTogXCJDXCIgfSxcbiAgICB7IGtleTogMSwgdmFsdWU6IFwiRFwiIH0sXG4gICAgeyBrZXk6IDAuNSwgdmFsdWU6IFwiQ+KZry9E4pmtXCIgfSxcbiAgICB7IGtleTogMiwgdmFsdWU6IFwiRVwiIH0sXG4gICAgeyBrZXk6IDEuNSwgdmFsdWU6IFwiROKZry9F4pmtXCIgfSxcbiAgICB7IGtleTogMi41LCB2YWx1ZTogXCJGXCIgfSxcbiAgICB7IGtleTogMy41LCB2YWx1ZTogXCJHXCIgfSxcbiAgICB7IGtleTogMywgdmFsdWU6IFwiRuKZry9H4pmtXCIgfSxcbiAgICB7IGtleTogNC41LCB2YWx1ZTogXCJBXCIgfSxcbiAgICB7IGtleTogNCwgdmFsdWU6IFwiR+KZry9B4pmtXCIgfSxcbiAgICB7IGtleTogNS41LCB2YWx1ZTogXCJCXCIgfSxcbiAgICB7IGtleTogNSwgdmFsdWU6IFwiQeKZry9C4pmtXCIgfSxcbiAgXTtcblxuICBjb25zdCBpbnRlcnZhbEZvcm0gPSBbXG4gICAgeyBrZXk6IFwibmF0dXJhbE1ham9yXCIsIHZhbHVlOiBbMSwgMSwgMC41LCAxLCAxLCAxLCAwLjVdIH0sXG4gICAgeyBrZXk6IFwiaGFybW9uaWNNaW5vclwiLCB2YWx1ZTogWzEsIDAuNSwgMSwgMSwgMC41LCAxLjUsIDAuNV0gfSxcbiAgICB7IGtleTogXCJuYXR1cmFsTWlub3JcIiwgdmFsdWU6IFsxLCAwLjUsIDEsIDEsIDAuNSwgMSwgMV0gfSxcbiAgICB7IGtleTogXCJpb25pYW5cIiwgdmFsdWU6IFsxLCAxLCAwLjUsIDEsIDEsIDEsIDAuNV0gfSxcbiAgICB7IGtleTogXCJkb3JpYW5cIiwgdmFsdWU6IFsxLCAwLjUsIDEsIDEsIDEsIDAuNSwgMV0gfSxcbiAgICB7IGtleTogXCJwaHJ5Z2lhblwiLCB2YWx1ZTogWzAuNSwgMSwgMSwgMSwgMC41LCAxLCAxXSB9LFxuICAgIHsga2V5OiBcImx5ZGlhblwiLCB2YWx1ZTogWzEsIDEsIDEsIDAuNSwgMSwgMSwgMC41XSB9LFxuICAgIHsga2V5OiBcIm1peG9seWRpYW5cIiwgdmFsdWU6IFsxLCAxLCAwLjUsIDEsIDEsIDAuNSwgMV0gfSxcbiAgICB7IGtleTogXCJhZW9saWFuXCIsIHZhbHVlOiBbMSwgMC41LCAxLCAxLCAwLjUsIDEsIDFdIH0sXG4gICAgeyBrZXk6IFwibG9jcmlhblwiLCB2YWx1ZTogWzAuNSwgMSwgMSwgMC41LCAxLCAxLCAxXSB9LFxuICAgIHsga2V5OiBcIlwiLCB2YWx1ZTogWzAsIDAsIDAsIDAsIDAsIDAsIDBdIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gZmluZEtleShhcnI6IGFueSwgdmFsdWU6IGFueSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyW2ldLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYXJyW2ldLmtleTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiS2V5IG5vdCBmb3VuZFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTY2FsZSh4OiBhbnksIHR5cGU6IGFueSkge1xuICAgIGxldCBsaXN0ID0gW3hdO1xuICAgIGNvbnN0IGludGVydmFsID0gaW50ZXJ2YWxGb3JtLmZpbmQoKGkpID0+IGkua2V5ID09PSB0eXBlKTtcbiAgICBpZiAoaW50ZXJ2YWwpIHtcbiAgICAgIGNvbnN0IGludGVydmFscyA9IGludGVydmFsLnZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdC5wdXNoKGxpc3RbaV0gKyBpbnRlcnZhbHNbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gIH1cblxuICBjb25zdCBrZXlMaXN0ID0gZ2VuZXJhdGVTY2FsZShmaW5kS2V5KGFyciwgc2VsZWN0ZWRLZXkpLCBzZWxlY3RlZE9wdGlvbik7XG5cbiAgY29uc3Qgbm90ZXMgPSBbXG4gICAgeyBrZXk6IDAsIHZhbHVlOiBcIkNcIiB9LFxuICAgIHsga2V5OiAxLCB2YWx1ZTogXCJEXCIgfSxcbiAgICB7IGtleTogMC41LCBsZWZ0OiBcIjE1MCVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkPima8vROKZrVwiIH0sXG4gICAgeyBrZXk6IDIsIGxlZnQ6IFwiMTAwJVwiLCB2YWx1ZTogXCJFXCIgfSxcbiAgICB7IGtleTogMS41LCBsZWZ0OlwiMjUwJVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiROKZry9F4pmtXCIgfSxcbiAgICB7IGtleTogMi41LCBsZWZ0OiBcIjM1MCVcIiwgdmFsdWU6IFwiRlwiIH0sXG4gICAgeyBrZXk6IDMuNSwgdmFsdWU6IFwiR1wiIH0sXG4gICAgeyBrZXk6IDMsIGxlZnQ6IFwiMjIlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJG4pmvL0fima1cIiB9LFxuICAgIHsga2V5OiA0LjUsIHZhbHVlOiBcIkFcIiB9LFxuICAgIHsga2V5OiA0LCBsZWZ0OiBcIjI4JVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiR+KZry9B4pmtXCIgfSxcbiAgICB7IGtleTogNS41LCB2YWx1ZTogXCJCXCIgfSxcbiAgICB7IGtleTogNSwgbGVmdDogXCIzNCVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkHima8vQuKZrVwiIH0sXG4gICAgeyBrZXk6IDYsIHZhbHVlOiBcIkNcIiB9LFxuICAgIHsga2V5OiA3LCB2YWx1ZTogXCJEXCIgfSxcbiAgICB7IGtleTogNi41LCBsZWZ0OiBcIjQ2JVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiQ+KZry9E4pmtXCIgfSxcbiAgICB7IGtleTogOCwgdmFsdWU6IFwiRVwiIH0sXG4gICAgeyBrZXk6IDcuNSwgbGVmdDogXCI1MiVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkTima8vReKZrVwiIH0sXG4gICAgeyBrZXk6IDguNSwgdmFsdWU6IFwiRlwiIH0sXG4gICAgeyBrZXk6IDkuNSwgdmFsdWU6IFwiR1wiIH0sXG4gICAgeyBrZXk6IDksIGxlZnQ6IFwiNjQlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJG4pmvL0fima1cIiB9LFxuICAgIHsga2V5OiAxMC41LCB2YWx1ZTogXCJBXCIgfSxcbiAgICB7IGtleTogMTAsIGxlZnQ6IFwiNzAlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJH4pmvL0Hima1cIiB9LFxuICAgIHsga2V5OiAxMS41LCB2YWx1ZTogXCJCXCIgfSxcbiAgICB7IGtleTogMTEsIGxlZnQ6IFwiNzYlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJB4pmvL0Lima1cIiB9LFxuICAgIHsga2V5OiAxMiwgdmFsdWU6IFwiQ1wiIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZCBweD17MTB9IGhlaWdodD1cIjMwMHB4XCIgdGVtcGxhdGVDb2x1bW5zPSdyZXBlYXQoMjUsIG1pbm1heCg0JSwgMWZyKSknIHBiPXsxMH0+XG4gICAge25vdGVzLm1hcCgobm90ZSkgPT4gKFxuICAgICAgICA8Q2FyZCBhbGlnbj0nY2VudGVyJ1xuICAgICAgICBrZXk9e25vdGUua2V5fVxuICAgICAgICBoZWlnaHQ9e25vdGUuYmxhY2sgPyBcIjYwJVwiIDogXCIxMDAlXCJ9XG4gICAgICAgIHZhcmlhbnQ9e25vdGUuYmxhY2sgPyBcImZpbGxlZFwiIDogXCJvdXRsaW5lXCJ9XG5cbiAgICAgICAgcmlnaHQ9e25vdGUubGVmdH1cbiAgICAgICAgcHQ9e25vdGUuYmxhY2sgPyBcIjgwcHhcIiA6IFwiMjAwcHhcIn1cbiAgICAgICAgZm9udFNpemU9e25vdGUuYmxhY2sgPyBcIjgwJVwiIDogXCJcIn1cbiAgICAgICAgYmc9e1xuICAgICAgICAgIGtleUxpc3Q/LmluY2x1ZGVzKG5vdGUua2V5KVxuICAgICAgICAgICAgPyBub3RlLmJsYWNrXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDIzNywxMDAsMTY2LDEpXCJcbiAgICAgICAgICAgICAgOiBcInJnYmEoMjM3LDEwMCwxNjYsMC41KVwiXG4gICAgICAgICAgICA6IG5vdGUuYmxhY2tcbiAgICAgICAgICAgID8gY29sb3JNb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcImdyYXkuODAwXCJcbiAgICAgICAgICAgICAgOiBcIndoaXRlXCJcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9PiAgXG4gICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAge25vdGUudmFsdWV9XG4gICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9ICAgICAgXG4gIDwvU2ltcGxlR3JpZD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZEhlYWRlciIsIkNhcmRGb290ZXIiLCJDYXJkQm9keSIsInVzZUNvbG9yTW9kZSIsIlNpbXBsZUdyaWQiLCJQaWFub0tleWJvYXJkIiwicHJvcHMiLCJzZWxlY3RlZEtleSIsInNlbGVjdGVkT3B0aW9uIiwiY29sb3JNb2RlIiwiYXJyIiwia2V5IiwidmFsdWUiLCJpbnRlcnZhbEZvcm0iLCJmaW5kS2V5IiwiaSIsImxlbmd0aCIsImdlbmVyYXRlU2NhbGUiLCJ4IiwidHlwZSIsImxpc3QiLCJpbnRlcnZhbCIsImZpbmQiLCJpbnRlcnZhbHMiLCJwdXNoIiwia2V5TGlzdCIsIm5vdGVzIiwibGVmdCIsImJsYWNrIiwicHgiLCJoZWlnaHQiLCJ0ZW1wbGF0ZUNvbHVtbnMiLCJwYiIsIm1hcCIsIm5vdGUiLCJhbGlnbiIsInZhcmlhbnQiLCJyaWdodCIsInB0IiwiZm9udFNpemUiLCJiZyIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/second.tsx\n"));

/***/ })

});