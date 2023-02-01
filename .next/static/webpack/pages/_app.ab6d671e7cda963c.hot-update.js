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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PianoKeyboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction PianoKeyboard(props) {\n    _s();\n    const { selectedKey , selectedOption  } = props;\n    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    const arr = [\n        {\n            key: 0,\n            value: \"C\"\n        },\n        {\n            key: 1,\n            value: \"D\"\n        },\n        {\n            key: 0.5,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 2,\n            value: \"E\"\n        },\n        {\n            key: 1.5,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 2.5,\n            value: \"F\"\n        },\n        {\n            key: 3.5,\n            value: \"G\"\n        },\n        {\n            key: 3,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 4.5,\n            value: \"A\"\n        },\n        {\n            key: 4,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 5.5,\n            value: \"B\"\n        },\n        {\n            key: 5,\n            value: \"A♯/B♭\"\n        }\n    ];\n    const intervalForm = [\n        {\n            key: \"naturalMajor\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"harmonicMinor\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1.5,\n                0.5\n            ]\n        },\n        {\n            key: \"naturalMinor\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"ionian\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"dorian\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5,\n                1\n            ]\n        },\n        {\n            key: \"phrygian\",\n            value: [\n                0.5,\n                1,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"lydian\",\n            value: [\n                1,\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"mixolydian\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1\n            ]\n        },\n        {\n            key: \"aeolian\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"locrian\",\n            value: [\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"\",\n            value: [\n                0,\n                0,\n                0,\n                0,\n                0,\n                0,\n                0\n            ]\n        }\n    ];\n    function findKey(arr, value) {\n        for(let i = 0; i < arr.length; i++){\n            if (arr[i].value === value) {\n                return arr[i].key;\n            }\n        }\n        return \"Key not found\";\n    }\n    function generateScale(x, type) {\n        let list = [\n            x\n        ];\n        const interval = intervalForm.find((i)=>i.key === type);\n        if (interval) {\n            const intervals = interval.value;\n            for(let i = 0; i < intervals.length; i++){\n                list.push(list[i] + intervals[i]);\n            }\n            return list;\n        } else {}\n    }\n    const keyList = generateScale(findKey(arr, selectedKey), selectedOption);\n    const notes = [\n        {\n            key: 0,\n            value: \"C\"\n        },\n        {\n            key: 1,\n            value: \"D\"\n        },\n        {\n            key: 0.5,\n            left: \"135%\",\n            black: true,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 2,\n            left: \"100%\",\n            value: \"E\"\n        },\n        {\n            key: 1.5,\n            left: \"235%\",\n            black: true,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 2.5,\n            left: \"200%\",\n            value: \"F\"\n        },\n        {\n            key: 3.5,\n            left: \"200%\",\n            value: \"G\"\n        },\n        {\n            key: 3,\n            left: \"335%\",\n            black: true,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 4.5,\n            left: \"300%\",\n            value: \"A\"\n        },\n        {\n            key: 4,\n            left: \"345%\",\n            black: true,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 5.5,\n            left: \"400%\",\n            value: \"B\"\n        },\n        {\n            key: 5,\n            left: \"54%\",\n            black: true,\n            value: \"A♯/B♭\"\n        },\n        {\n            key: 6,\n            left: \"500%\",\n            value: \"C\"\n        },\n        {\n            key: 7,\n            left: \"500%\",\n            value: \"D\"\n        },\n        {\n            key: 6.5,\n            left: \"640%\",\n            black: true,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 8,\n            left: \"600%\",\n            value: \"E\"\n        },\n        {\n            key: 7.5,\n            left: \"740%\",\n            black: true,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 8.5,\n            left: \"700%\",\n            value: \"F\"\n        },\n        {\n            key: 9.5,\n            left: \"700%\",\n            value: \"G\"\n        },\n        {\n            key: 9,\n            left: \"840%\",\n            black: true,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 10.5,\n            left: \"800%\",\n            value: \"A\"\n        },\n        {\n            key: 10,\n            left: \"940%\",\n            black: true,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 11.5,\n            left: \"900%\",\n            value: \"B\"\n        },\n        {\n            key: 11,\n            left: \"1040%\",\n            black: true,\n            value: \"A♯/B♭\"\n        },\n        {\n            key: 12,\n            left: \"1000%\",\n            value: \"C\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n        px: 12,\n        height: \"300px\",\n        templateColumns: \"repeat(25, minmax(6.65%, 1fr))\",\n        mb: 10,\n        children: notes.map((note)=>{\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                align: \"center\",\n                height: note.black ? \"60%\" : \"100%\",\n                variant: note.black ? \"filled\" : \"outline\",\n                width: note.black ? \"70%\" : \"100%\",\n                right: note.left,\n                pt: note.black ? \"80px\" : \"200px\",\n                fontSize: note.black ? \"80%\" : \"\",\n                bg: (keyList === null || keyList === void 0 ? void 0 : keyList.includes(note.key)) ? note.black ? \"rgba(237,100,166,1)\" : \"rgba(237,100,166,0.5)\" : note.black ? colorMode === \"light\" ? \"gray.800\" : \"white\" : \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {}, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {}, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n                        children: note.value\n                    }, void 0, false, {\n                        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, note.key, true, {\n                fileName: \"/workspaces/scales-io/pages/second.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/workspaces/scales-io/pages/second.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(PianoKeyboard, \"2Uu86IH3do63pkN3s1ysdRMmJuc=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = PianoKeyboard;\nvar _c;\n$RefreshReg$(_c, \"PianoKeyboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxTQUFTO2dCQUMxQ1MsT0FBT0gsS0FBS04sS0FBSyxHQUFHLFFBQVEsTUFBTTtnQkFDbENVLE9BQU9KLEtBQUtQLElBQUk7Z0JBQ2hCWSxJQUFJTCxLQUFLTixLQUFLLEdBQUcsU0FBUyxPQUFPO2dCQUNqQ1ksVUFBVU4sS0FBS04sS0FBSyxHQUFHLFFBQVEsRUFBRTtnQkFDakNhLElBQ0VoQixDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNpQixRQUFRLENBQUNSLEtBQUt2QixHQUFHLEtBQ3RCdUIsS0FBS04sS0FBSyxHQUNSLHdCQUNBLHVCQUF1QixHQUN6Qk0sS0FBS04sS0FBSyxHQUNWbkIsY0FBYyxVQUNaLGFBQ0EsT0FBTyxHQUNULEVBQUU7O2tDQUVOLDhEQUFDVCx3REFBVUE7Ozs7O2tDQUVYLDhEQUFDRSxzREFBUUE7Ozs7O2tDQUVULDhEQUFDRCx3REFBVUE7a0NBQ1JpQyxLQUFLdEIsS0FBSzs7Ozs7OztlQXZCVnNCLEtBQUt2QixHQUFHOzs7Ozs7Ozs7OztBQTZCckIsQ0FBQztHQXJIdUJOOztRQUVBRiwwREFBWUE7OztLQUZaRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWNvbmQudHN4PzUyNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBCb3gsXG4gIEZsZXgsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZEZvb3RlcixcbiAgQ2FyZEJvZHksXG4gIHVzZUNvbG9yTW9kZSxcbiAgU2ltcGxlR3JpZCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGlhbm9LZXlib2FyZChwcm9wczogYW55KSB7XG4gIGNvbnN0IHsgc2VsZWN0ZWRLZXksIHNlbGVjdGVkT3B0aW9uIH0gPSBwcm9wcztcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCBhcnIgPSBbXG4gICAgeyBrZXk6IDAsIHZhbHVlOiBcIkNcIiB9LFxuICAgIHsga2V5OiAxLCB2YWx1ZTogXCJEXCIgfSxcbiAgICB7IGtleTogMC41LCB2YWx1ZTogXCJD4pmvL0Tima1cIiB9LFxuICAgIHsga2V5OiAyLCB2YWx1ZTogXCJFXCIgfSxcbiAgICB7IGtleTogMS41LCB2YWx1ZTogXCJE4pmvL0Xima1cIiB9LFxuICAgIHsga2V5OiAyLjUsIHZhbHVlOiBcIkZcIiB9LFxuICAgIHsga2V5OiAzLjUsIHZhbHVlOiBcIkdcIiB9LFxuICAgIHsga2V5OiAzLCB2YWx1ZTogXCJG4pmvL0fima1cIiB9LFxuICAgIHsga2V5OiA0LjUsIHZhbHVlOiBcIkFcIiB9LFxuICAgIHsga2V5OiA0LCB2YWx1ZTogXCJH4pmvL0Hima1cIiB9LFxuICAgIHsga2V5OiA1LjUsIHZhbHVlOiBcIkJcIiB9LFxuICAgIHsga2V5OiA1LCB2YWx1ZTogXCJB4pmvL0Lima1cIiB9LFxuICBdO1xuXG4gIGNvbnN0IGludGVydmFsRm9ybSA9IFtcbiAgICB7IGtleTogXCJuYXR1cmFsTWFqb3JcIiwgdmFsdWU6IFsxLCAxLCAwLjUsIDEsIDEsIDEsIDAuNV0gfSxcbiAgICB7IGtleTogXCJoYXJtb25pY01pbm9yXCIsIHZhbHVlOiBbMSwgMC41LCAxLCAxLCAwLjUsIDEuNSwgMC41XSB9LFxuICAgIHsga2V5OiBcIm5hdHVyYWxNaW5vclwiLCB2YWx1ZTogWzEsIDAuNSwgMSwgMSwgMC41LCAxLCAxXSB9LFxuICAgIHsga2V5OiBcImlvbmlhblwiLCB2YWx1ZTogWzEsIDEsIDAuNSwgMSwgMSwgMSwgMC41XSB9LFxuICAgIHsga2V5OiBcImRvcmlhblwiLCB2YWx1ZTogWzEsIDAuNSwgMSwgMSwgMSwgMC41LCAxXSB9LFxuICAgIHsga2V5OiBcInBocnlnaWFuXCIsIHZhbHVlOiBbMC41LCAxLCAxLCAxLCAwLjUsIDEsIDFdIH0sXG4gICAgeyBrZXk6IFwibHlkaWFuXCIsIHZhbHVlOiBbMSwgMSwgMSwgMC41LCAxLCAxLCAwLjVdIH0sXG4gICAgeyBrZXk6IFwibWl4b2x5ZGlhblwiLCB2YWx1ZTogWzEsIDEsIDAuNSwgMSwgMSwgMC41LCAxXSB9LFxuICAgIHsga2V5OiBcImFlb2xpYW5cIiwgdmFsdWU6IFsxLCAwLjUsIDEsIDEsIDAuNSwgMSwgMV0gfSxcbiAgICB7IGtleTogXCJsb2NyaWFuXCIsIHZhbHVlOiBbMC41LCAxLCAxLCAwLjUsIDEsIDEsIDFdIH0sXG4gICAgeyBrZXk6IFwiXCIsIHZhbHVlOiBbMCwgMCwgMCwgMCwgMCwgMCwgMF0gfSxcbiAgXTtcblxuICBmdW5jdGlvbiBmaW5kS2V5KGFycjogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJbaV0udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhcnJbaV0ua2V5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJLZXkgbm90IGZvdW5kXCI7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVNjYWxlKHg6IGFueSwgdHlwZTogYW55KSB7XG4gICAgbGV0IGxpc3QgPSBbeF07XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBpbnRlcnZhbEZvcm0uZmluZCgoaSkgPT4gaS5rZXkgPT09IHR5cGUpO1xuICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgY29uc3QgaW50ZXJ2YWxzID0gaW50ZXJ2YWwudmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVydmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0LnB1c2gobGlzdFtpXSArIGludGVydmFsc1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGtleUxpc3QgPSBnZW5lcmF0ZVNjYWxlKGZpbmRLZXkoYXJyLCBzZWxlY3RlZEtleSksIHNlbGVjdGVkT3B0aW9uKTtcblxuICBjb25zdCBub3RlcyA9IFtcbiAgICB7IGtleTogMCwgdmFsdWU6IFwiQ1wiIH0sXG4gICAgeyBrZXk6IDEsIHZhbHVlOiBcIkRcIiB9LFxuICAgIHsga2V5OiAwLjUsIGxlZnQ6IFwiMTM1JVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiQ+KZry9E4pmtXCIgfSxcbiAgICB7IGtleTogMiwgbGVmdDogXCIxMDAlXCIsIHZhbHVlOiBcIkVcIiB9LFxuICAgIHsga2V5OiAxLjUsIGxlZnQ6IFwiMjM1JVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiROKZry9F4pmtXCIgfSxcbiAgICB7IGtleTogMi41LCBsZWZ0OiBcIjIwMCVcIiwgdmFsdWU6IFwiRlwiIH0sXG4gICAgeyBrZXk6IDMuNSwgbGVmdDogXCIyMDAlXCIsIHZhbHVlOiBcIkdcIiB9LFxuICAgIHsga2V5OiAzLCBsZWZ0OiBcIjMzNSVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkbima8vR+KZrVwiIH0sXG4gICAgeyBrZXk6IDQuNSwgbGVmdDogXCIzMDAlXCIsIHZhbHVlOiBcIkFcIiB9LFxuICAgIHsga2V5OiA0LCBsZWZ0OiBcIjM0NSVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkfima8vQeKZrVwiIH0sXG4gICAgeyBrZXk6IDUuNSwgbGVmdDogXCI0MDAlXCIsIHZhbHVlOiBcIkJcIiB9LFxuICAgIHsga2V5OiA1LCBsZWZ0OiBcIjU0JVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiQeKZry9C4pmtXCIgfSxcbiAgICB7IGtleTogNiwgbGVmdDpcIjUwMCVcIiwgdmFsdWU6IFwiQ1wiIH0sXG4gICAgeyBrZXk6IDcsIGxlZnQ6XCI1MDAlXCIsIHZhbHVlOiBcIkRcIiB9LFxuICAgIHsga2V5OiA2LjUsIGxlZnQ6IFwiNjQwJVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiQ+KZry9E4pmtXCIgfSxcbiAgICB7IGtleTogOCwgbGVmdDpcIjYwMCVcIiwgdmFsdWU6IFwiRVwiIH0sXG4gICAgeyBrZXk6IDcuNSwgbGVmdDogXCI3NDAlXCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJE4pmvL0Xima1cIiB9LFxuICAgIHsga2V5OiA4LjUsIGxlZnQ6IFwiNzAwJVwiLCB2YWx1ZTogXCJGXCIgfSxcbiAgICB7IGtleTogOS41LCBsZWZ0OiBcIjcwMCVcIiwgdmFsdWU6IFwiR1wiIH0sXG4gICAgeyBrZXk6IDksIGxlZnQ6IFwiODQwJVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiRuKZry9H4pmtXCIgfSxcbiAgICB7IGtleTogMTAuNSwgbGVmdDpcIjgwMCVcIiwgdmFsdWU6IFwiQVwiIH0sXG4gICAgeyBrZXk6IDEwLCBsZWZ0OiBcIjk0MCVcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkfima8vQeKZrVwiIH0sXG4gICAgeyBrZXk6IDExLjUsIGxlZnQ6IFwiOTAwJVwiLCB2YWx1ZTogXCJCXCIgfSxcbiAgICB7IGtleTogMTEsIGxlZnQ6XCIxMDQwJVwiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiQeKZry9C4pmtXCIgfSxcbiAgICB7IGtleTogMTIsIGxlZnQ6XCIxMDAwJVwiLCB2YWx1ZTogXCJDXCIgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxTaW1wbGVHcmlkIHB4PXsxMn0gaGVpZ2h0PVwiMzAwcHhcIiB0ZW1wbGF0ZUNvbHVtbnM9J3JlcGVhdCgyNSwgbWlubWF4KDYuNjUlLCAxZnIpKScgbWI9ezEwfT5cbiAgICB7bm90ZXMubWFwKChub3RlKSA9PiAoXG4gICAgICAgIDxDYXJkIGFsaWduPSdjZW50ZXInXG4gICAgICAgIGtleT17bm90ZS5rZXl9XG4gICAgICAgIGhlaWdodD17bm90ZS5ibGFjayA/IFwiNjAlXCIgOiBcIjEwMCVcIn1cbiAgICAgICAgdmFyaWFudD17bm90ZS5ibGFjayA/IFwiZmlsbGVkXCIgOiBcIm91dGxpbmVcIn1cbiAgICAgICAgd2lkdGg9e25vdGUuYmxhY2sgPyBcIjcwJVwiIDogXCIxMDAlXCJ9XG4gICAgICAgIHJpZ2h0PXtub3RlLmxlZnR9XG4gICAgICAgIHB0PXtub3RlLmJsYWNrID8gXCI4MHB4XCIgOiBcIjIwMHB4XCJ9XG4gICAgICAgIGZvbnRTaXplPXtub3RlLmJsYWNrID8gXCI4MCVcIiA6IFwiXCJ9XG4gICAgICAgIGJnPXtcbiAgICAgICAgICBrZXlMaXN0Py5pbmNsdWRlcyhub3RlLmtleSlcbiAgICAgICAgICAgID8gbm90ZS5ibGFja1xuICAgICAgICAgICAgICA/IFwicmdiYSgyMzcsMTAwLDE2NiwxKVwiXG4gICAgICAgICAgICAgIDogXCJyZ2JhKDIzNywxMDAsMTY2LDAuNSlcIlxuICAgICAgICAgICAgOiBub3RlLmJsYWNrXG4gICAgICAgICAgICA/IGNvbG9yTW9kZSA9PT0gXCJsaWdodFwiXG4gICAgICAgICAgICAgID8gXCJncmF5LjgwMFwiXG4gICAgICAgICAgICAgIDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfT4gIFxuICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICA8Q2FyZEZvb3Rlcj5cbiAgICAgICAgICAgIHtub3RlLnZhbHVlfVxuICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfSAgICAgIFxuICA8L1NpbXBsZUdyaWQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsIkNhcmRIZWFkZXIiLCJDYXJkRm9vdGVyIiwiQ2FyZEJvZHkiLCJ1c2VDb2xvck1vZGUiLCJTaW1wbGVHcmlkIiwiUGlhbm9LZXlib2FyZCIsInByb3BzIiwic2VsZWN0ZWRLZXkiLCJzZWxlY3RlZE9wdGlvbiIsImNvbG9yTW9kZSIsImFyciIsImtleSIsInZhbHVlIiwiaW50ZXJ2YWxGb3JtIiwiZmluZEtleSIsImkiLCJsZW5ndGgiLCJnZW5lcmF0ZVNjYWxlIiwieCIsInR5cGUiLCJsaXN0IiwiaW50ZXJ2YWwiLCJmaW5kIiwiaW50ZXJ2YWxzIiwicHVzaCIsImtleUxpc3QiLCJub3RlcyIsImxlZnQiLCJibGFjayIsInB4IiwiaGVpZ2h0IiwidGVtcGxhdGVDb2x1bW5zIiwibWIiLCJtYXAiLCJub3RlIiwiYWxpZ24iLCJ2YXJpYW50Iiwid2lkdGgiLCJyaWdodCIsInB0IiwiZm9udFNpemUiLCJiZyIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/second.tsx\n"));

/***/ })

});