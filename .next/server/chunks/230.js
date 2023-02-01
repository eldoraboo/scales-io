"use strict";
exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PianoKeyboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function PianoKeyboard(props) {
    const { selectedKey , selectedOption  } = props;
    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
    const arr = [
        {
            key: 0,
            value: "C"
        },
        {
            key: 1,
            value: "D"
        },
        {
            key: 0.5,
            value: "C♯/D♭"
        },
        {
            key: 2,
            value: "E"
        },
        {
            key: 1.5,
            value: "D♯/E♭"
        },
        {
            key: 2.5,
            value: "F"
        },
        {
            key: 3.5,
            value: "G"
        },
        {
            key: 3,
            value: "F♯/G♭"
        },
        {
            key: 4.5,
            value: "A"
        },
        {
            key: 4,
            value: "G♯/A♭"
        },
        {
            key: 5.5,
            value: "B"
        },
        {
            key: 5,
            value: "A♯/B♭"
        }
    ];
    const intervalForm = [
        {
            key: "naturalMajor",
            value: [
                1,
                1,
                0.5,
                1,
                1,
                1,
                0.5
            ]
        },
        {
            key: "harmonicMinor",
            value: [
                1,
                0.5,
                1,
                1,
                0.5,
                1.5,
                0.5
            ]
        },
        {
            key: "naturalMinor",
            value: [
                1,
                0.5,
                1,
                1,
                0.5,
                1,
                1
            ]
        },
        {
            key: "ionian",
            value: [
                1,
                1,
                0.5,
                1,
                1,
                1,
                0.5
            ]
        },
        {
            key: "dorian",
            value: [
                1,
                0.5,
                1,
                1,
                1,
                0.5,
                1
            ]
        },
        {
            key: "phrygian",
            value: [
                0.5,
                1,
                1,
                1,
                0.5,
                1,
                1
            ]
        },
        {
            key: "lydian",
            value: [
                1,
                1,
                1,
                0.5,
                1,
                1,
                0.5
            ]
        },
        {
            key: "mixolydian",
            value: [
                1,
                1,
                0.5,
                1,
                1,
                0.5,
                1
            ]
        },
        {
            key: "aeolian",
            value: [
                1,
                0.5,
                1,
                1,
                0.5,
                1,
                1
            ]
        },
        {
            key: "locrian",
            value: [
                0.5,
                1,
                1,
                0.5,
                1,
                1,
                1
            ]
        },
        {
            key: "",
            value: [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    ];
    function findKey(arr, value) {
        for(let i = 0; i < arr.length; i++){
            if (arr[i].value === value) {
                return arr[i].key;
            }
        }
        return "Key not found";
    }
    function generateScale(x, type) {
        let list = [
            x
        ];
        const interval = intervalForm.find((i)=>i.key === type);
        if (interval) {
            const intervals = interval.value;
            for(let i = 0; i < intervals.length; i++){
                list.push(list[i] + intervals[i]);
            }
            return list;
        } else {}
    }
    const keyList = generateScale(findKey(arr, selectedKey), selectedOption);
    const notes = [
        {
            key: 0,
            value: "C"
        },
        {
            key: 1,
            value: "D"
        },
        {
            key: 0.5,
            left: "135%",
            black: true,
            value: "C♯/D♭"
        },
        {
            key: 2,
            left: "100%",
            value: "E"
        },
        {
            key: 1.5,
            left: "235%",
            black: true,
            value: "D♯/E♭"
        },
        {
            key: 2.5,
            left: "200%",
            value: "F"
        },
        {
            key: 3.5,
            left: "200%",
            value: "G"
        },
        {
            key: 3,
            left: "335%",
            black: true,
            value: "F♯/G♭"
        },
        {
            key: 4.5,
            left: "300%",
            value: "A"
        },
        {
            key: 4,
            left: "435%",
            black: true,
            value: "G♯/A♭"
        },
        {
            key: 5.5,
            left: "400%",
            value: "B"
        },
        {
            key: 5,
            left: "535%",
            black: true,
            value: "A♯/B♭"
        },
        {
            key: 6,
            left: "500%",
            value: "C"
        },
        {
            key: 7,
            left: "500%",
            value: "D"
        },
        {
            key: 6.5,
            left: "635%",
            black: true,
            value: "C♯/D♭"
        },
        {
            key: 8,
            left: "600%",
            value: "E"
        },
        {
            key: 7.5,
            left: "735%",
            black: true,
            value: "D♯/E♭"
        },
        {
            key: 8.5,
            left: "700%",
            value: "F"
        },
        {
            key: 9.5,
            left: "700%",
            value: "G"
        },
        {
            key: 9,
            left: "835%",
            black: true,
            value: "F♯/G♭"
        },
        {
            key: 10.5,
            left: "800%",
            value: "A"
        },
        {
            key: 10,
            left: "935%",
            black: true,
            value: "G♯/A♭"
        },
        {
            key: 11.5,
            left: "900%",
            value: "B"
        },
        {
            key: 11,
            left: "1035%",
            black: true,
            value: "A♯/B♭"
        },
        {
            key: 12,
            left: "1000%",
            value: "C"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
        px: 12,
        height: "40%",
        templateColumns: "repeat(25, minmax(6.65%, 1fr))",
        mb: 10,
        children: notes.map((note)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
                align: "center",
                height: note.black ? "60%" : "100%",
                variant: note.black ? "filled" : "outline",
                width: note.black ? "70%" : "100%",
                right: note.left,
                pt: note.black ? "80px" : "200px",
                fontSize: note.black ? "80%" : "",
                bg: keyList?.includes(note.key) ? note.black ? "rgba(237,100,166,1)" : "rgba(237,100,166,0.5)" : note.black ? colorMode === "light" ? "gray.800" : "white" : "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {
                        children: [
                            note.value.slice(3, 5),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            note.value.slice(0, 2)
                        ]
                    })
                ]
            }, note.key))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;