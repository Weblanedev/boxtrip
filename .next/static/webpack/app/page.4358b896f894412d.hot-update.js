"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/destinations/PopularDestinations.jsx":
/*!*********************************************************!*\
  !*** ./components/destinations/PopularDestinations.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"(app-pages-browser)/./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _data_desinations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/desinations */ \"(app-pages-browser)/./data/desinations.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nconst PopularDestinations = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                spaceBetween: 30,\n                className: \"overflow-visible\",\n                scrollbar: {\n                    el: \".js-popular-destination-scrollbar\",\n                    draggable: true\n                },\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_4__.Scrollbar,\n                    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation\n                ],\n                navigation: {\n                    nextEl: \".js-destination-next\",\n                    prevEl: \".js-destination-prev\"\n                },\n                breakpoints: {\n                    500: {\n                        slidesPerView: 2,\n                        spaceBetween: 20\n                    },\n                    768: {\n                        slidesPerView: 2,\n                        spaceBetween: 22\n                    },\n                    1024: {\n                        slidesPerView: 3\n                    },\n                    1200: {\n                        slidesPerView: 4\n                    }\n                },\n                children: _data_desinations__WEBPACK_IMPORTED_MODULE_5__.destinations2.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"#\",\n                            className: \"citiesCard -type-1 d-block rounded-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"citiesCard__image ratio ratio-3:4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        width: 300,\n                                        height: 400,\n                                        src: item.img,\n                                        alt: \"image\",\n                                        className: \"js-lazy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"citiesCard__bg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, item.id, true, {\n                            fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, item.id, false, {\n                        fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"section-slider-nav  -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-prev\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"icon icon-chevron-left text-12\"\n                        }, void 0, false, {\n                            fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-next\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"icon icon-chevron-right text-12\"\n                        }, void 0, false, {\n                            fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-scrollbar bg-light-2 mt-40  js-popular-destination-scrollbar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/olumayowa/Documents/Domains/Boxtrip-NextJs/components/destinations/PopularDestinations.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = PopularDestinations;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularDestinations);\nvar _c;\n$RefreshReg$(_c, \"PopularDestinations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGVzdGluYXRpb25zL1BvcHVsYXJEZXN0aW5hdGlvbnMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRStCO0FBQ0Y7QUFDc0I7QUFDZjtBQUNEO0FBQ29CO0FBRXZELE1BQU1PLHNCQUFzQjtJQUMxQixxQkFDRTs7MEJBQ0UsOERBQUNMLGdEQUFNQTtnQkFDTE0sY0FBYztnQkFDZEMsV0FBVTtnQkFDVkMsV0FBVztvQkFDVEMsSUFBSTtvQkFDSkMsV0FBVztnQkFDYjtnQkFDQUMsU0FBUztvQkFBQ1IsNkNBQVNBO29CQUFFRCw4Q0FBVUE7aUJBQUM7Z0JBQ2hDVSxZQUFZO29CQUNWQyxRQUFRO29CQUNSQyxRQUFRO2dCQUNWO2dCQUNBQyxhQUFhO29CQUNYLEtBQUs7d0JBQ0hDLGVBQWU7d0JBQ2ZWLGNBQWM7b0JBQ2hCO29CQUNBLEtBQUs7d0JBQ0hVLGVBQWU7d0JBQ2ZWLGNBQWM7b0JBQ2hCO29CQUNBLE1BQU07d0JBQ0pVLGVBQWU7b0JBQ2pCO29CQUNBLE1BQU07d0JBQ0pBLGVBQWU7b0JBQ2pCO2dCQUNGOzBCQUVDWiw0REFBYUEsQ0FBQ2EsR0FBRyxDQUFDLENBQUNDLHFCQUNsQiw4REFBQ2pCLHFEQUFXQTtrQ0FDViw0RUFBQ0YsaURBQUlBOzRCQUNIb0IsTUFBSzs0QkFDTFosV0FBVTs7OENBR1YsOERBQUNhO29DQUFJYixXQUFVOzhDQUNiLDRFQUFDVCxrREFBS0E7d0NBQ0p1QixPQUFPO3dDQUNQQyxRQUFRO3dDQUNSQyxLQUFLTCxLQUFLTSxHQUFHO3dDQUNiQyxLQUFJO3dDQUNKbEIsV0FBVTs7Ozs7Ozs7Ozs7OENBR2QsOERBQUNhO29DQUFJYixXQUFVOzhDQUNiLDRFQUFDYTt3Q0FBSWIsV0FBVTs7Ozs7Ozs7Ozs7OzJCQVpaVyxLQUFLUSxFQUFFOzs7Ozt1QkFKRVIsS0FBS1EsRUFBRTs7Ozs7Ozs7OzswQkFrQzdCLDhEQUFDTjs7a0NBQ0MsOERBQUNPO3dCQUFPcEIsV0FBVTtrQ0FDaEIsNEVBQUNxQjs0QkFBRXJCLFdBQVU7Ozs7Ozs7Ozs7O2tDQUVmLDhEQUFDb0I7d0JBQU9wQixXQUFVO2tDQUNoQiw0RUFBQ3FCOzRCQUFFckIsV0FBVTs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNhO3dCQUFJYixXQUFVOzs7Ozs7Ozs7Ozs7OztBQUl2QjtLQTlFTUY7QUFnRk4sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rlc3RpbmF0aW9ucy9Qb3B1bGFyRGVzdGluYXRpb25zLmpzeD85YTEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IHsgU2Nyb2xsYmFyIH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IHsgZGVzdGluYXRpb25zMiB9IGZyb20gXCIuLi8uLi9kYXRhL2Rlc2luYXRpb25zXCI7XG5cbmNvbnN0IFBvcHVsYXJEZXN0aW5hdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTd2lwZXJcbiAgICAgICAgc3BhY2VCZXR3ZWVuPXszMH1cbiAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctdmlzaWJsZVwiXG4gICAgICAgIHNjcm9sbGJhcj17e1xuICAgICAgICAgIGVsOiBcIi5qcy1wb3B1bGFyLWRlc3RpbmF0aW9uLXNjcm9sbGJhclwiLFxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgfX1cbiAgICAgICAgbW9kdWxlcz17W1Njcm9sbGJhciwgTmF2aWdhdGlvbl19XG4gICAgICAgIG5hdmlnYXRpb249e3tcbiAgICAgICAgICBuZXh0RWw6IFwiLmpzLWRlc3RpbmF0aW9uLW5leHRcIixcbiAgICAgICAgICBwcmV2RWw6IFwiLmpzLWRlc3RpbmF0aW9uLXByZXZcIixcbiAgICAgICAgfX1cbiAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICA1MDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMixcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMjQ6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtkZXN0aW5hdGlvbnMyLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXRpZXNDYXJkIC10eXBlLTEgZC1ibG9jayByb3VuZGVkLTRcIlxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0aWVzQ2FyZF9faW1hZ2UgcmF0aW8gcmF0aW8tMzo0XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianMtbGF6eVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0aWVzQ2FyZF9fY29udGVudCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1iZXR3ZWVuIHRleHQtY2VudGVyIHB0LTMwIHBiLTIwIHB4LTIwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXRpZXNDYXJkX19iZ1wiIC8+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2l0aWVzQ2FyZF9fdG9wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMTQgdGV4dC13aGl0ZVwiPntpdGVtLmhvdmVyVGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdGllc0NhcmRfX2JvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMjYgbWQ6dGV4dC0yMCBsaC0xMyB0ZXh0LXdoaXRlIG1iLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNpdHl9XG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gY29sLTEyIGgtNjAgLWJsdWUtMSBiZy13aGl0ZSB0ZXh0LWRhcmstMVwiPlxuICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVyPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlY3Rpb24tc2xpZGVyLW5hdiAgLXByZXYgZmxleC1jZW50ZXIgYnV0dG9uIC1ibHVlLTEgYmctd2hpdGUgc2hhZG93LTEgc2l6ZS00MCByb3VuZGVkLWZ1bGwgc206ZC1ub25lIGpzLWRlc3RpbmF0aW9uLXByZXZcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hldnJvbi1sZWZ0IHRleHQtMTJcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXNsaWRlci1uYXYgLW5leHQgZmxleC1jZW50ZXIgYnV0dG9uIC1ibHVlLTEgYmctd2hpdGUgc2hhZG93LTEgc2l6ZS00MCByb3VuZGVkLWZ1bGwgc206ZC1ub25lIGpzLWRlc3RpbmF0aW9uLW5leHRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hldnJvbi1yaWdodCB0ZXh0LTEyXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLXNjcm9sbGJhciBiZy1saWdodC0yIG10LTQwICBqcy1wb3B1bGFyLWRlc3RpbmF0aW9uLXNjcm9sbGJhclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXJEZXN0aW5hdGlvbnM7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJOYXZpZ2F0aW9uIiwiU2Nyb2xsYmFyIiwiZGVzdGluYXRpb25zMiIsIlBvcHVsYXJEZXN0aW5hdGlvbnMiLCJzcGFjZUJldHdlZW4iLCJjbGFzc05hbWUiLCJzY3JvbGxiYXIiLCJlbCIsImRyYWdnYWJsZSIsIm1vZHVsZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwibWFwIiwiaXRlbSIsImhyZWYiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImltZyIsImFsdCIsImlkIiwiYnV0dG9uIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/destinations/PopularDestinations.jsx\n"));

/***/ })

});