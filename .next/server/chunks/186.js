"use strict";
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(230);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_3__, _second__WEBPACK_IMPORTED_MODULE_4__, _footer__WEBPACK_IMPORTED_MODULE_6__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_3__, _second__WEBPACK_IMPORTED_MODULE_4__, _footer__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Home() {
    const { colorMode , toggleColorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [selectedType, setSelectedType] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [showMajorOptions, setShowMajorOptions] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [showMinorOptions, setShowMinorOptions] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [showModalOptions, setShowModalOptions] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [selectedKey, setSelectedKey] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (selectedType === "major") {
            setShowMajorOptions(true);
            setShowMinorOptions(false);
            setShowModalOptions(false);
        } else if (selectedType === "minor") {
            setShowMinorOptions(true);
            setShowMajorOptions(false);
            setShowModalOptions(false);
        } else if (selectedType === "modal") {
            setShowModalOptions(true);
            setShowMajorOptions(false);
            setShowMinorOptions(false);
        }
    }, [
        selectedType
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Scales.io"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
                            minChildWidth: "120px",
                            spacing: 5,
                            m: 2,
                            p: 10,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                    spacing: 5,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                            onChange: (e)=>setSelectedType(e.target.value),
                                            variant: "filled",
                                            placeholder: "Type",
                                            width: "200px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "major",
                                                    children: "Major"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "minor",
                                                    children: "Minor"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "modal",
                                                    children: "Modal"
                                                })
                                            ]
                                        }),
                                        showMajorOptions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                            onChange: (e)=>setSelectedOption(e.target.value),
                                            variant: "filled",
                                            placeholder: "Variation",
                                            width: "200px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "naturalMajor",
                                                    children: "Natural"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "bluesMajor",
                                                    children: "Blues"
                                                })
                                            ]
                                        }),
                                        showMinorOptions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                            onChange: (e)=>setSelectedOption(e.target.value),
                                            variant: "filled",
                                            placeholder: "Variation",
                                            width: "200px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "naturalMinor",
                                                    children: "Natural"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "harmonicMinor",
                                                    children: "Harmonic"
                                                })
                                            ]
                                        }),
                                        showModalOptions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                            onChange: (e)=>setSelectedOption(e.target.value),
                                            variant: "filled",
                                            placeholder: "Variation",
                                            width: "200px",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "ionian",
                                                    children: "Ionian"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "dorian",
                                                    children: "Dorian"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "phrygian",
                                                    children: "Phrygian"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "lydian",
                                                    children: "Lydian"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "mixolydian",
                                                    children: "Mixolydian"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "aeolian",
                                                    children: "Aeolian"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "locrian",
                                                    children: "Locrian"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            onClick: ()=>setSelectedKey(""),
                                            colorScheme: "red",
                                            variant: "solid",
                                            children: "Reset"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
                            minChildWidth: "120px",
                            spacing: 5,
                            m: 2,
                            px: 10,
                            pb: 10,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "C" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("C"),
                                    children: "C"
                                }, "C"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "C♯/D♭" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("C♯/D♭"),
                                    children: "C♯/D♭"
                                }, "C♯/D♭"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "D" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("D"),
                                    children: "D"
                                }, "D"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "D♯/E♭" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("D♯/E♭"),
                                    children: "D♯/E♭"
                                }, "D♯/E♭"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "E" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("E"),
                                    children: "E"
                                }, "E"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "F" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("F"),
                                    children: "F"
                                }, "F"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "F♯/G♭" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("F♯/G♭"),
                                    children: "F♯/G♭"
                                }, "F♯/G♭"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "G" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("G"),
                                    children: "G"
                                }, "G"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "G♯/A♭" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("G♯/A♭"),
                                    children: "G♯/A♭"
                                }, "G♯/A♭"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "A" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("A"),
                                    children: "A"
                                }, "A"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "A♯/B♭" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("A♯/B♭"),
                                    children: "A♯/B♭"
                                }, "A♯/B♭"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "B" === selectedKey ? "pink" : "gray",
                                    variant: "solid",
                                    onClick: ()=>setSelectedKey("B"),
                                    children: "B"
                                }, "B")
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_second__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            selectedKey: selectedKey,
                            selectedOption: selectedOption
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;