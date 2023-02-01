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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PianoKeyboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction PianoKeyboard(props) {\n    _s();\n    const { selectedKey , selectedOption  } = props;\n    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    const arr = [\n        {\n            key: 0,\n            value: \"C\"\n        },\n        {\n            key: 1,\n            value: \"D\"\n        },\n        {\n            key: 0.5,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 2,\n            value: \"E\"\n        },\n        {\n            key: 1.5,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 2.5,\n            value: \"F\"\n        },\n        {\n            key: 3.5,\n            value: \"G\"\n        },\n        {\n            key: 3,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 4.5,\n            value: \"A\"\n        },\n        {\n            key: 4,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 5.5,\n            value: \"B\"\n        },\n        {\n            key: 5,\n            value: \"A♯/B♭\"\n        }\n    ];\n    const intervalForm = [\n        {\n            key: \"naturalMajor\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"harmonicMinor\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1.5,\n                0.5\n            ]\n        },\n        {\n            key: \"naturalMinor\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"ionian\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"dorian\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                1,\n                0.5,\n                1\n            ]\n        },\n        {\n            key: \"phrygian\",\n            value: [\n                0.5,\n                1,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"lydian\",\n            value: [\n                1,\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                0.5\n            ]\n        },\n        {\n            key: \"mixolydian\",\n            value: [\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1\n            ]\n        },\n        {\n            key: \"aeolian\",\n            value: [\n                1,\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"locrian\",\n            value: [\n                0.5,\n                1,\n                1,\n                0.5,\n                1,\n                1,\n                1\n            ]\n        },\n        {\n            key: \"\",\n            value: [\n                0,\n                0,\n                0,\n                0,\n                0,\n                0,\n                0\n            ]\n        }\n    ];\n    function findKey(arr, value) {\n        for(let i = 0; i < arr.length; i++){\n            if (arr[i].value === value) {\n                return arr[i].key;\n            }\n        }\n        return \"Key not found\";\n    }\n    function generateScale(x, type) {\n        let list = [\n            x\n        ];\n        const interval = intervalForm.find((i)=>i.key === type);\n        if (interval) {\n            const intervals = interval.value;\n            for(let i = 0; i < intervals.length; i++){\n                list.push(list[i] + intervals[i]);\n            }\n            return list;\n        } else {}\n    }\n    const keyList = generateScale(findKey(arr, selectedKey), selectedOption);\n    const notes = [\n        {\n            key: 0,\n            value: \"C\"\n        },\n        {\n            key: 1,\n            value: \"D\"\n        },\n        {\n            key: 0.5,\n            left: \"vw\",\n            black: true,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 2,\n            left: \"100%\",\n            value: \"E\"\n        },\n        {\n            key: 1.5,\n            left: \"4.7vw\",\n            black: true,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 2.5,\n            left: \"200%\",\n            value: \"F\"\n        },\n        {\n            key: 3.5,\n            left: \"200%\",\n            value: \"G\"\n        },\n        {\n            key: 3,\n            left: \"6.7vw\",\n            black: true,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 4.5,\n            left: \"300%\",\n            value: \"A\"\n        },\n        {\n            key: 4,\n            left: \"8.7vw\",\n            black: true,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 5.5,\n            left: \"400%\",\n            value: \"B\"\n        },\n        {\n            key: 5,\n            left: \"10.7vw\",\n            black: true,\n            value: \"A♯/B♭\"\n        },\n        {\n            key: 6,\n            left: \"500%\",\n            value: \"C\"\n        },\n        {\n            key: 7,\n            left: \"500%\",\n            value: \"D\"\n        },\n        {\n            key: 6.5,\n            left: \"12.7vw\",\n            black: true,\n            value: \"C♯/D♭\"\n        },\n        {\n            key: 8,\n            left: \"600%\",\n            value: \"E\"\n        },\n        {\n            key: 7.5,\n            left: \"14.7vw\",\n            black: true,\n            value: \"D♯/E♭\"\n        },\n        {\n            key: 8.5,\n            left: \"700%\",\n            value: \"F\"\n        },\n        {\n            key: 9.5,\n            left: \"700%\",\n            value: \"G\"\n        },\n        {\n            key: 9,\n            left: \"16.7vw\",\n            black: true,\n            value: \"F♯/G♭\"\n        },\n        {\n            key: 10.5,\n            left: \"800%\",\n            value: \"A\"\n        },\n        {\n            key: 10,\n            left: \"18.7vw\",\n            black: true,\n            value: \"G♯/A♭\"\n        },\n        {\n            key: 11.5,\n            left: \"900%\",\n            value: \"B\"\n        },\n        {\n            key: 11,\n            left: \"20.7vw\",\n            black: true,\n            value: \"A♯/B♭\"\n        },\n        {\n            key: 12,\n            left: \"1000%\",\n            value: \"C\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n        px: 12,\n        height: \"20vw\",\n        templateColumns: \"repeat(25, minmax(5vw, 1fr))\",\n        mb: 10,\n        children: notes.map((note)=>{\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                align: \"center\",\n                height: note.black ? \"12vw\" : \"20vw\",\n                variant: note.black ? \"filled\" : \"outline\",\n                width: note.black ? \"3.8vw\" : \"5vw\",\n                pt: note.black ? \"8vw\" : \"10vw\",\n                right: note.left,\n                fontSize: note.black ? \"0.5em\" : \"1em\",\n                bg: (keyList === null || keyList === void 0 ? void 0 : keyList.includes(note.key)) ? note.black ? \"rgba(237,100,166,1)\" : \"rgba(237,100,166,0.5)\" : note.black ? colorMode === \"light\" ? \"gray.800\" : \"white\" : \"\"\n            }, note.key, false, {\n                fileName: \"/Users/eldoraboo/Desktop/scales-io/scales-io/pages/second.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/eldoraboo/Desktop/scales-io/scales-io/pages/second.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(PianoKeyboard, \"2Uu86IH3do63pkN3s1ysdRMmJuc=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = PianoKeyboard;\nvar _c;\n$RefreshReg$(_c, \"PianoKeyboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFNBQVM7Z0JBQzFDUyxPQUFPSCxLQUFLTixLQUFLLEdBQUcsVUFBVSxLQUFLO2dCQUNuQ1UsSUFBSUosS0FBS04sS0FBSyxHQUFHLFFBQVEsTUFBTTtnQkFDL0JXLE9BQU9MLEtBQUtQLElBQUk7Z0JBQ2hCYSxVQUFVTixLQUFLTixLQUFLLEdBQUcsVUFBVSxLQUFLO2dCQUN0Q2EsSUFDRWhCLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2lCLFFBQVEsQ0FBQ1IsS0FBS3ZCLEdBQUcsS0FDdEJ1QixLQUFLTixLQUFLLEdBQ1Isd0JBQ0EsdUJBQXVCLEdBQ3pCTSxLQUFLTixLQUFLLEdBQ1ZuQixjQUFjLFVBQ1osYUFDQSxPQUFPLEdBQ1QsRUFBRTtlQWhCSHlCLEtBQUt2QixHQUFHOzs7Ozs7Ozs7OztBQXNCdkIsQ0FBQztHQXBIdUJOOztRQUVBRiwwREFBWUE7OztLQUZaRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWNvbmQudHN4PzUyNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBCb3gsXG4gIEZsZXgsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZEZvb3RlcixcbiAgQ2FyZEJvZHksXG4gIHVzZUNvbG9yTW9kZSxcbiAgU2ltcGxlR3JpZCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGlhbm9LZXlib2FyZChwcm9wczogYW55KSB7XG4gIGNvbnN0IHsgc2VsZWN0ZWRLZXksIHNlbGVjdGVkT3B0aW9uIH0gPSBwcm9wcztcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCBhcnIgPSBbXG4gICAgeyBrZXk6IDAsIHZhbHVlOiBcIkNcIiB9LFxuICAgIHsga2V5OiAxLCB2YWx1ZTogXCJEXCIgfSxcbiAgICB7IGtleTogMC41LCB2YWx1ZTogXCJD4pmvL0Tima1cIiB9LFxuICAgIHsga2V5OiAyLCB2YWx1ZTogXCJFXCIgfSxcbiAgICB7IGtleTogMS41LCB2YWx1ZTogXCJE4pmvL0Xima1cIiB9LFxuICAgIHsga2V5OiAyLjUsIHZhbHVlOiBcIkZcIiB9LFxuICAgIHsga2V5OiAzLjUsIHZhbHVlOiBcIkdcIiB9LFxuICAgIHsga2V5OiAzLCB2YWx1ZTogXCJG4pmvL0fima1cIiB9LFxuICAgIHsga2V5OiA0LjUsIHZhbHVlOiBcIkFcIiB9LFxuICAgIHsga2V5OiA0LCB2YWx1ZTogXCJH4pmvL0Hima1cIiB9LFxuICAgIHsga2V5OiA1LjUsIHZhbHVlOiBcIkJcIiB9LFxuICAgIHsga2V5OiA1LCB2YWx1ZTogXCJB4pmvL0Lima1cIiB9LFxuICBdO1xuXG4gIGNvbnN0IGludGVydmFsRm9ybSA9IFtcbiAgICB7IGtleTogXCJuYXR1cmFsTWFqb3JcIiwgdmFsdWU6IFsxLCAxLCAwLjUsIDEsIDEsIDEsIDAuNV0gfSxcbiAgICB7IGtleTogXCJoYXJtb25pY01pbm9yXCIsIHZhbHVlOiBbMSwgMC41LCAxLCAxLCAwLjUsIDEuNSwgMC41XSB9LFxuICAgIHsga2V5OiBcIm5hdHVyYWxNaW5vclwiLCB2YWx1ZTogWzEsIDAuNSwgMSwgMSwgMC41LCAxLCAxXSB9LFxuICAgIHsga2V5OiBcImlvbmlhblwiLCB2YWx1ZTogWzEsIDEsIDAuNSwgMSwgMSwgMSwgMC41XSB9LFxuICAgIHsga2V5OiBcImRvcmlhblwiLCB2YWx1ZTogWzEsIDAuNSwgMSwgMSwgMSwgMC41LCAxXSB9LFxuICAgIHsga2V5OiBcInBocnlnaWFuXCIsIHZhbHVlOiBbMC41LCAxLCAxLCAxLCAwLjUsIDEsIDFdIH0sXG4gICAgeyBrZXk6IFwibHlkaWFuXCIsIHZhbHVlOiBbMSwgMSwgMSwgMC41LCAxLCAxLCAwLjVdIH0sXG4gICAgeyBrZXk6IFwibWl4b2x5ZGlhblwiLCB2YWx1ZTogWzEsIDEsIDAuNSwgMSwgMSwgMC41LCAxXSB9LFxuICAgIHsga2V5OiBcImFlb2xpYW5cIiwgdmFsdWU6IFsxLCAwLjUsIDEsIDEsIDAuNSwgMSwgMV0gfSxcbiAgICB7IGtleTogXCJsb2NyaWFuXCIsIHZhbHVlOiBbMC41LCAxLCAxLCAwLjUsIDEsIDEsIDFdIH0sXG4gICAgeyBrZXk6IFwiXCIsIHZhbHVlOiBbMCwgMCwgMCwgMCwgMCwgMCwgMF0gfSxcbiAgXTtcblxuICBmdW5jdGlvbiBmaW5kS2V5KGFycjogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJbaV0udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhcnJbaV0ua2V5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJLZXkgbm90IGZvdW5kXCI7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVNjYWxlKHg6IGFueSwgdHlwZTogYW55KSB7XG4gICAgbGV0IGxpc3QgPSBbeF07XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBpbnRlcnZhbEZvcm0uZmluZCgoaSkgPT4gaS5rZXkgPT09IHR5cGUpO1xuICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgY29uc3QgaW50ZXJ2YWxzID0gaW50ZXJ2YWwudmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVydmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0LnB1c2gobGlzdFtpXSArIGludGVydmFsc1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGtleUxpc3QgPSBnZW5lcmF0ZVNjYWxlKGZpbmRLZXkoYXJyLCBzZWxlY3RlZEtleSksIHNlbGVjdGVkT3B0aW9uKTtcblxuICBjb25zdCBub3RlcyA9IFtcbiAgICB7IGtleTogMCwgdmFsdWU6IFwiQ1wiIH0sXG4gICAgeyBrZXk6IDEsIHZhbHVlOiBcIkRcIiB9LFxuICAgIHsga2V5OiAwLjUsIGxlZnQ6IFwidndcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkPima8vROKZrVwiIH0sXG4gICAgeyBrZXk6IDIsIGxlZnQ6IFwiMTAwJVwiLCB2YWx1ZTogXCJFXCIgfSxcbiAgICB7IGtleTogMS41LCBsZWZ0OiBcIjQuN3Z3XCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJE4pmvL0Xima1cIiB9LFxuICAgIHsga2V5OiAyLjUsIGxlZnQ6IFwiMjAwJVwiLCB2YWx1ZTogXCJGXCIgfSxcbiAgICB7IGtleTogMy41LCBsZWZ0OiBcIjIwMCVcIiwgdmFsdWU6IFwiR1wiIH0sXG4gICAgeyBrZXk6IDMsIGxlZnQ6IFwiNi43dndcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkbima8vR+KZrVwiIH0sXG4gICAgeyBrZXk6IDQuNSwgbGVmdDogXCIzMDAlXCIsIHZhbHVlOiBcIkFcIiB9LFxuICAgIHsga2V5OiA0LCBsZWZ0OiBcIjguN3Z3XCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJH4pmvL0Hima1cIiB9LFxuICAgIHsga2V5OiA1LjUsIGxlZnQ6IFwiNDAwJVwiLCB2YWx1ZTogXCJCXCIgfSxcbiAgICB7IGtleTogNSwgbGVmdDogXCIxMC43dndcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkHima8vQuKZrVwiIH0sXG4gICAgeyBrZXk6IDYsIGxlZnQ6IFwiNTAwJVwiLCB2YWx1ZTogXCJDXCIgfSxcbiAgICB7IGtleTogNywgbGVmdDogXCI1MDAlXCIsIHZhbHVlOiBcIkRcIiB9LFxuICAgIHsga2V5OiA2LjUsIGxlZnQ6IFwiMTIuN3Z3XCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJD4pmvL0Tima1cIiB9LFxuICAgIHsga2V5OiA4LCBsZWZ0OiBcIjYwMCVcIiwgdmFsdWU6IFwiRVwiIH0sXG4gICAgeyBrZXk6IDcuNSwgbGVmdDogXCIxNC43dndcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkTima8vReKZrVwiIH0sXG4gICAgeyBrZXk6IDguNSwgbGVmdDogXCI3MDAlXCIsIHZhbHVlOiBcIkZcIiB9LFxuICAgIHsga2V5OiA5LjUsIGxlZnQ6IFwiNzAwJVwiLCB2YWx1ZTogXCJHXCIgfSxcbiAgICB7IGtleTogOSwgbGVmdDogXCIxNi43dndcIiwgYmxhY2s6IHRydWUsIHZhbHVlOiBcIkbima8vR+KZrVwiIH0sXG4gICAgeyBrZXk6IDEwLjUsIGxlZnQ6IFwiODAwJVwiLCB2YWx1ZTogXCJBXCIgfSxcbiAgICB7IGtleTogMTAsIGxlZnQ6IFwiMTguN3Z3XCIsIGJsYWNrOiB0cnVlLCB2YWx1ZTogXCJH4pmvL0Hima1cIiB9LFxuICAgIHsga2V5OiAxMS41LCBsZWZ0OiBcIjkwMCVcIiwgdmFsdWU6IFwiQlwiIH0sXG4gICAgeyBrZXk6IDExLCBsZWZ0OiBcIjIwLjd2d1wiLCBibGFjazogdHJ1ZSwgdmFsdWU6IFwiQeKZry9C4pmtXCIgfSxcbiAgICB7IGtleTogMTIsIGxlZnQ6IFwiMTAwMCVcIiwgdmFsdWU6IFwiQ1wiIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZFxuICAgICAgcHg9ezEyfVxuICAgICAgaGVpZ2h0PVwiMjB2d1wiXG4gICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMjUsIG1pbm1heCg1dncsIDFmcikpXCJcbiAgICAgIG1iPXsxMH1cbiAgICA+XG4gICAgICB7bm90ZXMubWFwKChub3RlKSA9PiAoXG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGtleT17bm90ZS5rZXl9XG4gICAgICAgICAgaGVpZ2h0PXtub3RlLmJsYWNrID8gXCIxMnZ3XCIgOiBcIjIwdndcIn1cbiAgICAgICAgICB2YXJpYW50PXtub3RlLmJsYWNrID8gXCJmaWxsZWRcIiA6IFwib3V0bGluZVwifVxuICAgICAgICAgIHdpZHRoPXtub3RlLmJsYWNrID8gXCIzLjh2d1wiIDogXCI1dndcIn1cbiAgICAgICAgICBwdD17bm90ZS5ibGFjayA/IFwiOHZ3XCIgOiBcIjEwdndcIn1cbiAgICAgICAgICByaWdodD17bm90ZS5sZWZ0fVxuICAgICAgICAgIGZvbnRTaXplPXtub3RlLmJsYWNrID8gXCIwLjVlbVwiIDogXCIxZW1cIn1cbiAgICAgICAgICBiZz17XG4gICAgICAgICAgICBrZXlMaXN0Py5pbmNsdWRlcyhub3RlLmtleSlcbiAgICAgICAgICAgICAgPyBub3RlLmJsYWNrXG4gICAgICAgICAgICAgICAgPyBcInJnYmEoMjM3LDEwMCwxNjYsMSlcIlxuICAgICAgICAgICAgICAgIDogXCJyZ2JhKDIzNywxMDAsMTY2LDAuNSlcIlxuICAgICAgICAgICAgICA6IG5vdGUuYmxhY2tcbiAgICAgICAgICAgICAgPyBjb2xvck1vZGUgPT09IFwibGlnaHRcIlxuICAgICAgICAgICAgICAgID8gXCJncmF5LjgwMFwiXG4gICAgICAgICAgICAgICAgOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA+PC9DYXJkPlxuICAgICAgKSl9XG4gICAgPC9TaW1wbGVHcmlkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VDb2xvck1vZGUiLCJTaW1wbGVHcmlkIiwiUGlhbm9LZXlib2FyZCIsInByb3BzIiwic2VsZWN0ZWRLZXkiLCJzZWxlY3RlZE9wdGlvbiIsImNvbG9yTW9kZSIsImFyciIsImtleSIsInZhbHVlIiwiaW50ZXJ2YWxGb3JtIiwiZmluZEtleSIsImkiLCJsZW5ndGgiLCJnZW5lcmF0ZVNjYWxlIiwieCIsInR5cGUiLCJsaXN0IiwiaW50ZXJ2YWwiLCJmaW5kIiwiaW50ZXJ2YWxzIiwicHVzaCIsImtleUxpc3QiLCJub3RlcyIsImxlZnQiLCJibGFjayIsInB4IiwiaGVpZ2h0IiwidGVtcGxhdGVDb2x1bW5zIiwibWIiLCJtYXAiLCJub3RlIiwiYWxpZ24iLCJ2YXJpYW50Iiwid2lkdGgiLCJwdCIsInJpZ2h0IiwiZm9udFNpemUiLCJiZyIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/second.tsx\n"));

/***/ })

});