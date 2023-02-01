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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PianoKeyboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction PianoKeyboard(props) {\n    _s();\n    const { selectedKey , selectedOption  } = props;\n    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    const arr = [\n        {\n            key: 0,\n            value: \"C\"\n        },\n        {\n            key: 1,\n            value: \"D\"\n        },\n        {\n            key: 0.5,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 2,\n            value: \"E\"\n        },\n        {\n            key: 1.5,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 2.5,\n            value: \"F\"\n        },\n        {\n            key: 3.5,\n            value: \"G\"\n        },\n        {\n            key: 3,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 4.5,\n            value: \"A\"\n        },\n        {\n            key: 4,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 5.5,\n            value: \"B\"\n        },\n        {\n            key: 5,\n            value: \"A♯/B♭\"\n        }\n    ];\n    const intervalForm = [\n        {\n            key: \"naturalMajor\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"harmonicMinor\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1.5,\n                0.5\n            ]\n        },\n        {\n            key: \"naturalMinor\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"ionian\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"dorian\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5,\n                1\n            ]\n        },\n        {\n            key: \"phrygian\",\n            value: [\n                0.5,\n                1,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"lydian\",\n            value: [\n                1,\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"mixolydian\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1\n            ]\n        },\n        {\n            key: \"aeolian\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"locrian\",\n            value: [\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"\",\n            value: [\n                0,\n                0,\n                0,\n                0,\n                0,\n                0,\n                0\n            ]\n        }\n    ];\n    function findKey(arr, value) {\n        for(let i = 0; i < arr.length; i++){\n            if (arr[i].value === value) {\n                return arr[i].key;\n            }\n        }\n        return \"Key not found\";\n    }\n    function generateScale(x, type) {\n        let list = [\n            x\n        ];\n        const interval = intervalForm.find((i)=>i.key === type);\n        if (interval) {\n            const intervals = interval.value;\n            for(let i = 0; i < intervals.length; i++){\n                list.push(list[i] + intervals[i]);\n            }\n            return list;\n        } else {}\n    }\n    const keyList = generateScale(findKey(arr, selectedKey), selectedOption);\n    const notes = [\n        {\n            key: 0,\n            value: \"C\"\n        },\n        {\n            key: 1,\n            value: \"D\"\n        },\n        {\n            key: 0.5,\n            left: \"135%\",\n            black: true,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 2,\n            left: \"100%\",\n            value: \"E\"\n        },\n        {\n            key: 1.5,\n            left: \"235%\",\n            black: true,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 2.5,\n            left: \"200%\",\n            value: \"F\"\n        },\n        {\n            key: 3.5,\n            left: \"200%\",\n            value: \"G\"\n        },\n        {\n            key: 3,\n            left: \"335%\",\n            black: true,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 4.5,\n            left: \"300%\",\n            value: \"A\"\n        },\n        {\n            key: 4,\n            left: \"435%\",\n            black: true,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 5.5,\n            left: \"400%\",\n            value: \"B\"\n        },\n        {\n            key: 5,\n            left: \"535%\",\n            black: true,\n            value: \"A♯/B♭\"\n        },\n        {\n            key: 6,\n            left: \"500%\",\n            value: \"C\"\n        },\n        {\n            key: 7,\n            left: \"500%\",\n            value: \"D\"\n        },\n        {\n            key: 6.5,\n            left: \"635%\",\n            black: true,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 8,\n            left: \"600%\",\n            value: \"E\"\n        },\n        {\n            key: 7.5,\n            left: \"735%\",\n            black: true,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 8.5,\n            left: \"700%\",\n            value: \"F\"\n        },\n        {\n            key: 9.5,\n            left: \"700%\",\n            value: \"G\"\n        },\n        {\n            key: 9,\n            left: \"835%\",\n            black: true,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 10.5,\n            left: \"800%\",\n            value: \"A\"\n        },\n        {\n            key: 10,\n            left: \"935%\",\n            black: true,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 11.5,\n            left: \"900%\",\n            value: \"B\"\n        },\n        {\n            key: 11,\n            left: \"1035%\",\n            black: true,\n            value: \"A♯/B♭\"\n        },\n        {\n            key: 12,\n            left: \"1000%\",\n            value: \"C\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n        px: 12,\n        height: \"300px\",\n        templateColumns: \"repeat(25, minmax(6.65%, 1fr))\",\n        mb: 10,\n        children: notes.map((note)=>{\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                align: \"center\",\n                height: note.black ? \"60%\" : \"100%\",\n                variant: note.black ? \"filled\" : \"outline\",\n                width: note.black ? \"70%\" : \"100%\",\n                right: note.left,\n                pt: note.black ? \"80px\" : \"200px\",\n                fontSize: note.black ? \"80%\" : \"\",\n                bg: (keyList === null || keyList === void 0 ? void 0 : keyList.includes(note.key)) ? note.black ? \"rgba(237,100,166,1)\" : \"rgba(237,100,166,0.5)\" : note.black ? colorMode === \"light\" ? \"gray.800\" : \"white\" : \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {}, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {}, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n                        children: note.value.slice(0, 2)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, note.key, true, {\n                fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(PianoKeyboard, \"2Uu86IH3do63pkN3s1ysdRMmJuc=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = PianoKeyboard;\nvar _c;\n$RefreshReg$(_c, \"PianoKeyboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxTQUFTO2dCQUMxQ1MsT0FBT0gsS0FBS04sS0FBSyxHQUFHLFFBQVEsTUFBTTtnQkFDbENVLE9BQU9KLEtBQUtQLElBQUk7Z0JBQ2hCWSxJQUFJTCxLQUFLTixLQUFLLEdBQUcsU0FBUyxPQUFPO2dCQUNqQ1ksVUFBVU4sS0FBS04sS0FBSyxHQUFHLFFBQVEsRUFBRTtnQkFDakNhLElBQ0VoQixDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNpQixRQUFRLENBQUNSLEtBQUt2QixHQUFHLEtBQ3RCdUIsS0FBS04sS0FBSyxHQUNSLHdCQUNBLHVCQUF1QixHQUN6Qk0sS0FBS04sS0FBSyxHQUNWbkIsY0FBYyxVQUNaLGFBQ0EsT0FBTyxHQUNULEVBQUU7O2tDQUVOLDhEQUFDVCx3REFBVUE7Ozs7O2tDQUdYLDhEQUFDRSxzREFBUUE7Ozs7O2tDQUVULDhEQUFDRCx3REFBVUE7a0NBQ1ZpQyxLQUFLdEIsS0FBSyxDQUFDK0IsS0FBSyxDQUFDLEdBQUU7Ozs7Ozs7ZUF4QmpCVCxLQUFLdkIsR0FBRzs7Ozs7Ozs7Ozs7QUE4QnJCLENBQUM7R0F0SHVCTjs7UUFFQUYsMERBQVlBOzs7S0FGWkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vjb25kLnRzeD81MjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQm94LFxuICBGbGV4LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRGb290ZXIsXG4gIENhcmRCb2R5LFxuICB1c2VDb2xvck1vZGUsXG4gIFNpbXBsZUdyaWQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpYW5vS2V5Ym9hcmQocHJvcHM6IGFueSkge1xuICBjb25zdCB7IHNlbGVjdGVkS2V5LCBzZWxlY3RlZE9wdGlvbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3QgYXJyID0gW1xuICAgIHsga2V5OiAwLCB2YWx1ZTogXCJDXCIgfSxcbiAgICB7IGtleTogMSwgdmFsdWU6IFwiRFwiIH0sXG4gICAgeyBrZXk6IDAuNSwgdmFsdWU6IFwiQ+KZry9E4pmtXCIgfSxcbiAgICB7IGtleTogMiwgdmFsdWU6IFwiRVwiIH0sXG4gICAgeyBrZXk6IDEuNSwgdmFsdWU6IFwiROKZry9F4pmtXCIgfSxcbiAgICB7IGtleTogMi41LCB2YWx1ZTogXCJGXCIgfSxcbiAgICB7IGtleTogMy41LCB2YWx1ZTogXCJHXCIgfSxcbiAgICB7IGtleTogMywgdmFsdWU6IFwiRuKZry9H4pmtXCIgfSxcbiAgICB7IGtleTogNC41LCB2YWx1ZTogXCJBXCIgfSxcbiAgICB7IGtleTogNCwgdmFsdWU6IFwiR+KZry9B4pmtXCIgfSxcbiAgICB7IGtleTogNS41LCB2YWx1ZTogXCJCXCIgfSxcbiAgICB7IGtleTogNSwgdmFsdWU6IFwiQeKZry9C4pmtXCIgfSxcbiAgXTtcblxuICBjb25zdCBpbnRlcnZhbEZvcm0gPSBbXG4gICAgeyBrZXk6IFwibmF0dXJhbE1ham9yXCIsIHZhbHVlOiBbMSwgMSwgMC41LCAxLCAxLCAxLCAwLjVdIH0sXG4gICAgeyBrZXk6IFwiaGFybW9uaWNNaW5vclwiLCB2YWx1ZTogWzEsIDAuNSwgMSwgMSwgMC41LCAxLjUsIDAuNV0gfSxcbiAgICB7IGtleTogXCJuYXR1cmFsTWlub3JcIiwgdmFsdWU6IFsxLCAwLjUsIDEsIDEsIDAuNSwgMSwgMV0gfSxcbiAgICB7IGtleTogXCJpb25pYW5cIiwgdmFsdWU6IFsxLCAxLCAwLjUsIDEsIDEsIDEsIDAuNV0gfSxcbiAgICB7IGtleTogXCJkb3JpYW5cIiwgdmFsdWU6IFsxLCAwLjUsIDEsIDEsIDEsIDAuNSwgMV0gfSxcbiAgICB7IGtleTogXCJwaHJ5Z2lhblwiLCB2YWx1ZTogWzAuNSwgMSwgMSwgMSwgMC41LCAxLCAxXSB9LFxuICAgIHsga2V5OiBcImx5ZGlhblwiLCB2YWx1ZTogWzEsIDEsIDEsIDAuNSwgMSwgMSwgMC41XSB9LFxuICAgIHsga2V5OiBcIm1peG9seWRpYW5cIiwgdmFsdWU6IFsxLCAxLCAwLjUsIDEsIDEsIDAuNSwgMV0gfSxcbiAgICB7IGtleTogXCJhZW9saWFuXCIsIHZhbHVlOiBbMSwgMC41LCAxLCAxLCAwLjUsIDEsIDFdIH0sXG4gICAgeyBrZXk6IFwibG9jcmlhblwiLCB2YWx1ZTogWzAuNSwgMSwgMSwgMC41LCAxLCAxLCAxXSB9LFxuICAgIHsga2V5OiBcIlwiLCB2YWx1ZTogWzAsIDAsIDAsIDAsIDAsIDAsIDBdIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gZmluZEtleShhcnI6IGFueSwgdmFsdWU6IGFueSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyW2ldLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYXJyW2ldLmtleTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiS2V5IG5vdCBmb3VuZFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTY2FsZSh4OiBhbnksIHR5cGU6IGFueSkge1xuICAgIGxldCBsaXN0ID0gW3hdO1xuICAgIGNvbnN0IGludGVydmFsID0gaW50ZXJ2YWxGb3JtLmZpbmQoKGkpID0+IGkua2V5ID09PSB0eXBlKTtcbiAgICBpZiAoaW50ZXJ2YWwpIHtcbiAgICAgIGNvbnN0IGludGVydmFscyA9IGludGVydmFsLnZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdC5wdXNoKGxpc3RbaV0gKyBpbnRlcnZhbHNbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gIH1cblxuICBjb25zdCBrZXlMaXN0ID0gZ2VuZXJhdGVTY2FsZShmaW5kS2V5KGFyciwgc2VsZWN0ZWRLZXkpLCBzZWxlY3RlZE9wdGlvbik7XG5cbiAgY29uc3Qgbm90ZXMgPSBbXG4gICAgeyBrZXk6IDAsIHZhbHVlOiBcIkNcIiB9LFxuICAgIHsga2V5OiAxLCB2YWx1ZTogXCJEXCIgfSxcbiAgICB7IGtleTogMC41LCBsZWZ0OiBcIjEzNSVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkPima8vROKZrVwiIH0sXG4gICAgeyBrZXk6IDIsIGxlZnQ6IFwiMTAwJVwiLCB2YWx1ZTogXCJFXCIgfSxcbiAgICB7IGtleTogMS41LCBsZWZ0OiBcIjIzNSVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkTima8vReKZrVwiIH0sXG4gICAgeyBrZXk6IDIuNSwgbGVmdDogXCIyMDAlXCIsIHZhbHVlOiBcIkZcIiB9LFxuICAgIHsga2V5OiAzLjUsIGxlZnQ6IFwiMjAwJVwiLCB2YWx1ZTogXCJHXCIgfSxcbiAgICB7IGtleTogMywgbGVmdDogXCIzMzUlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJG4pmvL0fima1cIiB9LFxuICAgIHsga2V5OiA0LjUsIGxlZnQ6IFwiMzAwJVwiLCB2YWx1ZTogXCJBXCIgfSxcbiAgICB7IGtleTogNCwgbGVmdDogXCI0MzUlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJH4pmvL0Hima1cIiB9LFxuICAgIHsga2V5OiA1LjUsIGxlZnQ6IFwiNDAwJVwiLCB2YWx1ZTogXCJCXCIgfSxcbiAgICB7IGtleTogNSwgbGVmdDogXCI1MzUlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJB4pmvL0Lima1cIiB9LFxuICAgIHsga2V5OiA2LCBsZWZ0OlwiNTAwJVwiLCB2YWx1ZTogXCJDXCIgfSxcbiAgICB7IGtleTogNywgbGVmdDpcIjUwMCVcIiwgdmFsdWU6IFwiRFwiIH0sXG4gICAgeyBrZXk6IDYuNSwgbGVmdDogXCI2MzUlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJD4pmvL0Tima1cIiB9LFxuICAgIHsga2V5OiA4LCBsZWZ0OlwiNjAwJVwiLCB2YWx1ZTogXCJFXCIgfSxcbiAgICB7IGtleTogNy41LCBsZWZ0OiBcIjczNSVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkTima8vReKZrVwiIH0sXG4gICAgeyBrZXk6IDguNSwgbGVmdDogXCI3MDAlXCIsIHZhbHVlOiBcIkZcIiB9LFxuICAgIHsga2V5OiA5LjUsIGxlZnQ6IFwiNzAwJVwiLCB2YWx1ZTogXCJHXCIgfSxcbiAgICB7IGtleTogOSwgbGVmdDogXCI4MzUlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJG4pmvL0fima1cIiB9LFxuICAgIHsga2V5OiAxMC41LCBsZWZ0OlwiODAwJVwiLCB2YWx1ZTogXCJBXCIgfSxcbiAgICB7IGtleTogMTAsIGxlZnQ6IFwiOTM1JVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiR+KZry9B4pmtXCIgfSxcbiAgICB7IGtleTogMTEuNSwgbGVmdDogXCI5MDAlXCIsIHZhbHVlOiBcIkJcIiB9LFxuICAgIHsga2V5OiAxMSwgbGVmdDpcIjEwMzUlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJB4pmvL0Lima1cIiB9LFxuICAgIHsga2V5OiAxMiwgbGVmdDpcIjEwMDAlXCIsIHZhbHVlOiBcIkNcIiB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFNpbXBsZUdyaWQgcHg9ezEyfSBoZWlnaHQ9XCIzMDBweFwiIHRlbXBsYXRlQ29sdW1ucz0ncmVwZWF0KDI1LCBtaW5tYXgoNi42NSUsIDFmcikpJyBtYj17MTB9PlxuICAgIHtub3Rlcy5tYXAoKG5vdGUpID0+IChcbiAgICAgICAgPENhcmQgYWxpZ249J2NlbnRlcidcbiAgICAgICAga2V5PXtub3RlLmtleX1cbiAgICAgICAgaGVpZ2h0PXtub3RlLmJsYWNrID8gXCI2MCVcIiA6IFwiMTAwJVwifVxuICAgICAgICB2YXJpYW50PXtub3RlLmJsYWNrID8gXCJmaWxsZWRcIiA6IFwib3V0bGluZVwifVxuICAgICAgICB3aWR0aD17bm90ZS5ibGFjayA/IFwiNzAlXCIgOiBcIjEwMCVcIn1cbiAgICAgICAgcmlnaHQ9e25vdGUubGVmdH1cbiAgICAgICAgcHQ9e25vdGUuYmxhY2sgPyBcIjgwcHhcIiA6IFwiMjAwcHhcIn1cbiAgICAgICAgZm9udFNpemU9e25vdGUuYmxhY2sgPyBcIjgwJVwiIDogXCJcIn1cbiAgICAgICAgYmc9e1xuICAgICAgICAgIGtleUxpc3Q/LmluY2x1ZGVzKG5vdGUua2V5KVxuICAgICAgICAgICAgPyBub3RlLmJsYWNrXG4gICAgICAgICAgICAgID8gXCJyZ2JhKDIzNywxMDAsMTY2LDEpXCJcbiAgICAgICAgICAgICAgOiBcInJnYmEoMjM3LDEwMCwxNjYsMC41KVwiXG4gICAgICAgICAgICA6IG5vdGUuYmxhY2tcbiAgICAgICAgICAgID8gY29sb3JNb2RlID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcImdyYXkuODAwXCJcbiAgICAgICAgICAgICAgOiBcIndoaXRlXCJcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9PiAgXG4gICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgXG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgIHtub3RlLnZhbHVlLnNsaWNlKDAsMil9XG4gICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9ICAgICAgXG4gIDwvU2ltcGxlR3JpZD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZEhlYWRlciIsIkNhcmRGb290ZXIiLCJDYXJkQm9keSIsInVzZUNvbG9yTW9kZSIsIlNpbXBsZUdyaWQiLCJQaWFub0tleWJvYXJkIiwicHJvcHMiLCJzZWxlY3RlZEtleSIsInNlbGVjdGVkT3B0aW9uIiwiY29sb3JNb2RlIiwiYXJyIiwia2V5IiwidmFsdWUiLCJpbnRlcnZhbEZvcm0iLCJmaW5kS2V5IiwiaSIsImxlbmd0aCIsImdlbmVyYXRlU2NhbGUiLCJ4IiwidHlwZSIsImxpc3QiLCJpbnRlcnZhbCIsImZpbmQiLCJpbnRlcnZhbHMiLCJwdXNoIiwia2V5TGlzdCIsIm5vdGVzIiwibGVmdCIsImJsYWNrIiwicHgiLCJoZWlnaHQiLCJ0ZW1wbGF0ZUNvbHVtbnMiLCJtYiIsIm1hcCIsIm5vdGUiLCJhbGlnbiIsInZhcmlhbnQiLCJ3aWR0aCIsInJpZ2h0IiwicHQiLCJmb250U2l6ZSIsImJnIiwiaW5jbHVkZXMiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/second.tsx\n"));

/***/ })

});