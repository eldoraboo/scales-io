"use strict";
exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WithSubnavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function WithSubnavigation() {
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const { colorMode , toggleColorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800"),
                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "white"),
                minH: "60px",
                py: {
                    base: 2
                },
                px: {
                    base: 4
                },
                borderBottom: 1,
                borderStyle: "solid",
                borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.900"),
                align: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        flex: {
                            base: 1,
                            md: "auto"
                        },
                        ml: {
                            base: -2
                        },
                        display: {
                            base: "flex",
                            md: "none"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                            onClick: onToggle,
                            icon: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {
                                w: 3,
                                h: 3
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.HamburgerIcon, {
                                w: 5,
                                h: 5
                            }),
                            variant: "ghost",
                            "aria-label": "Toggle Navigation"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        flex: {
                            base: 1
                        },
                        justify: {
                            base: "center",
                            md: "start"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                textAlign: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
                                    base: "center",
                                    md: "left"
                                }),
                                fontFamily: "heading",
                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.800", "white"),
                                children: "Scales.io"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                display: {
                                    base: "none",
                                    md: "flex"
                                },
                                ml: 10,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopNav, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        flex: {
                            base: 1,
                            md: 0
                        },
                        justify: "flex-end",
                        direction: "row",
                        spacing: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            onClick: toggleColorMode,
                            fontSize: "sm",
                            fontWeight: 600,
                            color: "white",
                            bg: "pink.400",
                            _hover: {
                                bg: "pink.300"
                            },
                            children: [
                                "Toggle ",
                                colorMode === "light" ? "Dark" : "Light"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {})
            })
        ]
    });
}
const DesktopNav = ()=>{
    const linkColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "gray.200");
    const linkHoverColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.800", "white");
    const popoverContentBgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        spacing: 4,
        children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                    trigger: "hover",
                    placement: "bottom-start",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverTrigger, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                p: 2,
                                href: navItem.href ?? "#",
                                fontSize: "sm",
                                fontWeight: 500,
                                color: linkColor,
                                _hover: {
                                    textDecoration: "none",
                                    color: linkHoverColor
                                },
                                children: navItem.label
                            })
                        }),
                        navItem.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverContent, {
                            border: 0,
                            boxShadow: "xl",
                            bg: popoverContentBgColor,
                            p: 4,
                            rounded: "xl",
                            minW: "sm",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                children: navItem.children.map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopSubNav, {
                                        ...child
                                    }, child.label))
                            })
                        })
                    ]
                })
            }, navItem.label))
    });
};
const DesktopSubNav = ({ label , href , subLabel  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        href: href,
        role: "group",
        display: "block",
        p: 2,
        rounded: "md",
        _hover: {
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("pink.50", "gray.900")
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            direction: "row",
            align: "center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            transition: "all .3s ease",
                            _groupHover: {
                                color: "pink.400"
                            },
                            fontWeight: 500,
                            children: label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: "sm",
                            children: subLabel
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    transition: "all .3s ease",
                    transform: "translateX(-10px)",
                    opacity: 0,
                    _groupHover: {
                        opacity: "100%",
                        transform: "translateX(0)"
                    },
                    justify: "flex-end",
                    align: "center",
                    flex: 1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        color: "pink.400",
                        w: 5,
                        h: 5,
                        as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronRightIcon
                    })
                })
            ]
        })
    });
};
const MobileNav = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800"),
        p: 4,
        display: {
            md: "none"
        },
        children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNavItem, {
                ...navItem
            }, navItem.label))
    });
};
const MobileNavItem = ({ label , children , href  })=>{
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        spacing: 4,
        onClick: children && onToggle,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                py: 2,
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link,
                href: href ?? "#",
                justify: "space-between",
                align: "center",
                _hover: {
                    textDecoration: "none"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontWeight: 600,
                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "gray.200"),
                        children: label
                    }),
                    children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon,
                        transition: "all .25s ease-in-out",
                        transform: isOpen ? "rotate(180deg)" : "",
                        w: 6,
                        h: 6
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                style: {
                    marginTop: "0!important"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    mt: 2,
                    pl: 4,
                    borderLeft: 1,
                    borderStyle: "solid",
                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.700"),
                    align: "start",
                    children: children && children.map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            py: 2,
                            href: child.href,
                            children: child.label
                        }, child.label))
                })
            })
        ]
    });
};
const NAV_ITEMS = [
    {
        label: "References",
        children: [
            {
                label: "Piano Scales",
                subLabel: "Scales source and guide for musicians",
                href: "https://www.pianoscales.org/"
            }
        ]
    },
    {
        label: "Build",
        children: [
            {
                label: "Chakra UI",
                subLabel: "A simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
                href: "https://chakra-ui.com/"
            },
            {
                label: "React",
                subLabel: "A JavaScript library for building user interfaces.",
                href: "https://reactjs.org/"
            }
        ]
    },
    {
        label: "Source Code",
        href: "https://github.com/eldoraboo/scales-io"
    }
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;