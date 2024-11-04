"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-presence@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.6_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-presence@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.6_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@radix-ui+react-presence@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Presence: () => (/* binding */ Presence)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/.pnpm/next@14.2.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.6_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.6_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ Presence auto */ // packages/react/presence/src/Presence.tsx\n\n\n\n// packages/react/presence/src/useStateMachine.tsx\n\nfunction useStateMachine(initialState, machine) {\n    return react__WEBPACK_IMPORTED_MODULE_0__.useReducer((state, event)=>{\n        const nextState = machine[state][event];\n        return nextState ?? state;\n    }, initialState);\n}\n// packages/react/presence/src/Presence.tsx\nvar Presence = (props)=>{\n    const { present, children } = props;\n    const presence = usePresence(present);\n    const child = typeof children === \"function\" ? children({\n        present: presence.isPresent\n    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);\n    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__.useComposedRefs)(presence.ref, getElementRef(child));\n    const forceMount = typeof children === \"function\";\n    return forceMount || presence.isPresent ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {\n        ref\n    }) : null;\n};\nPresence.displayName = \"Presence\";\nfunction usePresence(present) {\n    const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState();\n    const stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});\n    const prevPresentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(present);\n    const prevAnimationNameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(\"none\");\n    const initialState = present ? \"mounted\" : \"unmounted\";\n    const [state, send] = useStateMachine(initialState, {\n        mounted: {\n            UNMOUNT: \"unmounted\",\n            ANIMATION_OUT: \"unmountSuspended\"\n        },\n        unmountSuspended: {\n            MOUNT: \"mounted\",\n            ANIMATION_END: \"unmounted\"\n        },\n        unmounted: {\n            MOUNT: \"mounted\"\n        }\n    });\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        const currentAnimationName = getAnimationName(stylesRef.current);\n        prevAnimationNameRef.current = state === \"mounted\" ? currentAnimationName : \"none\";\n    }, [\n        state\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        const styles = stylesRef.current;\n        const wasPresent = prevPresentRef.current;\n        const hasPresentChanged = wasPresent !== present;\n        if (hasPresentChanged) {\n            const prevAnimationName = prevAnimationNameRef.current;\n            const currentAnimationName = getAnimationName(styles);\n            if (present) {\n                send(\"MOUNT\");\n            } else if (currentAnimationName === \"none\" || styles?.display === \"none\") {\n                send(\"UNMOUNT\");\n            } else {\n                const isAnimating = prevAnimationName !== currentAnimationName;\n                if (wasPresent && isAnimating) {\n                    send(\"ANIMATION_OUT\");\n                } else {\n                    send(\"UNMOUNT\");\n                }\n            }\n            prevPresentRef.current = present;\n        }\n    }, [\n        present,\n        send\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        if (node) {\n            let timeoutId;\n            const ownerWindow = node.ownerDocument.defaultView ?? window;\n            const handleAnimationEnd = (event)=>{\n                const currentAnimationName = getAnimationName(stylesRef.current);\n                const isCurrentAnimation = currentAnimationName.includes(event.animationName);\n                if (event.target === node && isCurrentAnimation) {\n                    send(\"ANIMATION_END\");\n                    if (!prevPresentRef.current) {\n                        const currentFillMode = node.style.animationFillMode;\n                        node.style.animationFillMode = \"forwards\";\n                        timeoutId = ownerWindow.setTimeout(()=>{\n                            if (node.style.animationFillMode === \"forwards\") {\n                                node.style.animationFillMode = currentFillMode;\n                            }\n                        });\n                    }\n                }\n            };\n            const handleAnimationStart = (event)=>{\n                if (event.target === node) {\n                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);\n                }\n            };\n            node.addEventListener(\"animationstart\", handleAnimationStart);\n            node.addEventListener(\"animationcancel\", handleAnimationEnd);\n            node.addEventListener(\"animationend\", handleAnimationEnd);\n            return ()=>{\n                ownerWindow.clearTimeout(timeoutId);\n                node.removeEventListener(\"animationstart\", handleAnimationStart);\n                node.removeEventListener(\"animationcancel\", handleAnimationEnd);\n                node.removeEventListener(\"animationend\", handleAnimationEnd);\n            };\n        } else {\n            send(\"ANIMATION_END\");\n        }\n    }, [\n        node,\n        send\n    ]);\n    return {\n        isPresent: [\n            \"mounted\",\n            \"unmountSuspended\"\n        ].includes(state),\n        ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2)=>{\n            if (node2) stylesRef.current = getComputedStyle(node2);\n            setNode(node2);\n        }, [])\n    };\n}\nfunction getAnimationName(styles) {\n    return styles?.animationName || \"none\";\n}\nfunction getElementRef(element) {\n    let getter = Object.getOwnPropertyDescriptor(element.props, \"ref\")?.get;\n    let mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n    if (mayWarn) {\n        return element.ref;\n    }\n    getter = Object.getOwnPropertyDescriptor(element, \"ref\")?.get;\n    mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n    if (mayWarn) {\n        return element.props.ref;\n    }\n    return element.props.ref || element.ref;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1wcmVzZW5jZUAxLjEuMV9AdHlwZXMrcmVhY3QtZG9tQDE4LjMuMF9AdHlwZXMrcmVhY3RAMTguMy42X3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wcmVzZW5jZS9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QjtBQUNTO0FBQ0E7O0FDRlQ7QUFXaEIsU0FBU0csZ0JBQ2RDLFlBQUEsRUFDQUMsT0FBQTtJQUVBLE9BQWFMLDZDQUFBLENBQVcsQ0FBQ08sT0FBd0JDO1FBQy9DLE1BQU1DLFlBQWFKLE9BQUEsQ0FBUUUsTUFBSyxDQUFVQyxNQUFLO1FBQy9DLE9BQU9DLGFBQWFGO0lBQ3RCLEdBQUdIO0FBQ0w7O0FEVEEsSUFBTU0sV0FBb0MsQ0FBQ0M7SUFDekMsTUFBTSxFQUFFQyxPQUFBLEVBQVNDLFFBQUEsRUFBUyxHQUFJRjtJQUM5QixNQUFNRyxXQUFXQyxZQUFZSDtJQUU3QixNQUFNSSxRQUNKLE9BQU9ILGFBQWEsYUFDaEJBLFNBQVM7UUFBRUQsU0FBU0UsU0FBU0csU0FBQTtJQUFVLEtBQ2pDQywyQ0FBQSxDQUFTRSxJQUFBLENBQUtQO0lBRzFCLE1BQU1RLE1BQU1wQiw2RUFBZUEsQ0FBQ2EsU0FBU08sR0FBQSxFQUFLQyxjQUFjTjtJQUN4RCxNQUFNTyxhQUFhLE9BQU9WLGFBQWE7SUFDdkMsT0FBT1UsY0FBY1QsU0FBU0csU0FBQSxpQkFBa0JDLCtDQUFBLENBQWFGLE9BQU87UUFBRUs7SUFBSSxLQUFLO0FBQ2pGO0FBRUFYLFNBQVNlLFdBQUEsR0FBYztBQU12QixTQUFTVixZQUFZSCxPQUFBO0lBQ25CLE1BQU0sQ0FBQ2MsTUFBTUMsUUFBTyxHQUFVVCwyQ0FBQTtJQUM5QixNQUFNVyxZQUFrQlgseUNBQUEsQ0FBNEIsQ0FBQztJQUNyRCxNQUFNYSxp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QVc7WUFBQztZQUFXO1NBQWtCLENBQUV5QyxRQUFBLENBQVNuRDtRQUNwRGMsS0FBV0gsOENBQUEsQ0FBWSxDQUFDUTtZQUN0QixJQUFJQSxPQUFNRyxVQUFVZSxPQUFBLEdBQVUwQixpQkFBaUI1QztZQUMvQ0MsUUFBUUQ7UUFDVixHQUFHLEVBQUU7SUFDUDtBQUNGO0FBSUEsU0FBU2lCLGlCQUFpQkUsTUFBQTtJQUN4QixPQUFPQSxRQUFRYyxpQkFBaUI7QUFDbEM7QUFPQSxTQUFTckMsY0FBY2lELE9BQUE7SUFFckIsSUFBSUMsU0FBU0MsT0FBT0Msd0JBQUEsQ0FBeUJILFFBQVE1RCxLQUFBLEVBQU8sUUFBUWdFO0lBQ3BFLElBQUlDLFVBQVVKLFVBQVUsb0JBQW9CQSxVQUFVQSxPQUFPSyxjQUFBO0lBQzdELElBQUlELFNBQVM7UUFDWCxPQUFRTCxRQUFnQmxELEdBQUE7SUFDMUI7SUFHQW1ELFNBQVNDLE9BQU9DLHdCQUFBLENBQXlCSCxTQUFTLFFBQVFJO0lBQzFEQyxVQUFVSixVQUFVLG9CQUFvQkEsVUFBVUEsT0FBT0ssY0FBQTtJQUN6RCxJQUFJRCxTQUFTO1FBQ1gsT0FBT0wsUUFBUTVELEtBQUEsQ0FBTVUsR0FBQTtJQUN2QjtJQUdBLE9BQU9rRCxRQUFRNUQsS0FBQSxDQUFNVSxHQUFBLElBQVFrRCxRQUFnQmxELEdBQUE7QUFDL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi4vc3JjL1ByZXNlbmNlLnRzeD84YjM5Iiwid2VicGFjazovL2Rhc2hib2FyZC8uLi9zcmMvdXNlU3RhdGVNYWNoaW5lLnRzeD9hMzIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbXBvc2VkUmVmcyB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LXVzZS1sYXlvdXQtZWZmZWN0JztcbmltcG9ydCB7IHVzZVN0YXRlTWFjaGluZSB9IGZyb20gJy4vdXNlU3RhdGVNYWNoaW5lJztcblxuaW50ZXJmYWNlIFByZXNlbmNlUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50IHwgKChwcm9wczogeyBwcmVzZW50OiBib29sZWFuIH0pID0+IFJlYWN0LlJlYWN0RWxlbWVudCk7XG4gIHByZXNlbnQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IFByZXNlbmNlOiBSZWFjdC5GQzxQcmVzZW5jZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByZXNlbnQsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY29uc3QgcHJlc2VuY2UgPSB1c2VQcmVzZW5jZShwcmVzZW50KTtcblxuICBjb25zdCBjaGlsZCA9IChcbiAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcbiAgICAgID8gY2hpbGRyZW4oeyBwcmVzZW50OiBwcmVzZW5jZS5pc1ByZXNlbnQgfSlcbiAgICAgIDogUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgKSBhcyBSZWFjdC5SZWFjdEVsZW1lbnQ7XG5cbiAgY29uc3QgcmVmID0gdXNlQ29tcG9zZWRSZWZzKHByZXNlbmNlLnJlZiwgZ2V0RWxlbWVudFJlZihjaGlsZCkpO1xuICBjb25zdCBmb3JjZU1vdW50ID0gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gZm9yY2VNb3VudCB8fCBwcmVzZW5jZS5pc1ByZXNlbnQgPyBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgcmVmIH0pIDogbnVsbDtcbn07XG5cblByZXNlbmNlLmRpc3BsYXlOYW1lID0gJ1ByZXNlbmNlJztcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogdXNlUHJlc2VuY2VcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gdXNlUHJlc2VuY2UocHJlc2VudDogYm9vbGVhbikge1xuICBjb25zdCBbbm9kZSwgc2V0Tm9kZV0gPSBSZWFjdC51c2VTdGF0ZTxIVE1MRWxlbWVudD4oKTtcbiAgY29uc3Qgc3R5bGVzUmVmID0gUmVhY3QudXNlUmVmPENTU1N0eWxlRGVjbGFyYXRpb24+KHt9IGFzIGFueSk7XG4gIGNvbnN0IHByZXZQcmVzZW50UmVmID0gUmVhY3QudXNlUmVmKHByZXNlbnQpO1xuICBjb25zdCBwcmV2QW5pbWF0aW9uTmFtZVJlZiA9IFJlYWN0LnVzZVJlZjxzdHJpbmc+KCdub25lJyk7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHByZXNlbnQgPyAnbW91bnRlZCcgOiAndW5tb3VudGVkJztcbiAgY29uc3QgW3N0YXRlLCBzZW5kXSA9IHVzZVN0YXRlTWFjaGluZShpbml0aWFsU3RhdGUsIHtcbiAgICBtb3VudGVkOiB7XG4gICAgICBVTk1PVU5UOiAndW5tb3VudGVkJyxcbiAgICAgIEFOSU1BVElPTl9PVVQ6ICd1bm1vdW50U3VzcGVuZGVkJyxcbiAgICB9LFxuICAgIHVubW91bnRTdXNwZW5kZWQ6IHtcbiAgICAgIE1PVU5UOiAnbW91bnRlZCcsXG4gICAgICBBTklNQVRJT05fRU5EOiAndW5tb3VudGVkJyxcbiAgICB9LFxuICAgIHVubW91bnRlZDoge1xuICAgICAgTU9VTlQ6ICdtb3VudGVkJyxcbiAgICB9LFxuICB9KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgcHJldkFuaW1hdGlvbk5hbWVSZWYuY3VycmVudCA9IHN0YXRlID09PSAnbW91bnRlZCcgPyBjdXJyZW50QW5pbWF0aW9uTmFtZSA6ICdub25lJztcbiAgfSwgW3N0YXRlXSk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZXNSZWYuY3VycmVudDtcbiAgICBjb25zdCB3YXNQcmVzZW50ID0gcHJldlByZXNlbnRSZWYuY3VycmVudDtcbiAgICBjb25zdCBoYXNQcmVzZW50Q2hhbmdlZCA9IHdhc1ByZXNlbnQgIT09IHByZXNlbnQ7XG5cbiAgICBpZiAoaGFzUHJlc2VudENoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHByZXZBbmltYXRpb25OYW1lID0gcHJldkFuaW1hdGlvbk5hbWVSZWYuY3VycmVudDtcbiAgICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXMpO1xuXG4gICAgICBpZiAocHJlc2VudCkge1xuICAgICAgICBzZW5kKCdNT1VOVCcpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50QW5pbWF0aW9uTmFtZSA9PT0gJ25vbmUnIHx8IHN0eWxlcz8uZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGV4aXQgYW5pbWF0aW9uIG9yIHRoZSBlbGVtZW50IGlzIGhpZGRlbiwgYW5pbWF0aW9ucyB3b24ndCBydW5cbiAgICAgICAgLy8gc28gd2UgdW5tb3VudCBpbnN0YW50bHlcbiAgICAgICAgc2VuZCgnVU5NT1VOVCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHByZXNlbnRgIGNoYW5nZXMgdG8gYGZhbHNlYCwgd2UgY2hlY2sgY2hhbmdlcyB0byBhbmltYXRpb24tbmFtZSB0b1xuICAgICAgICAgKiBkZXRlcm1pbmUgd2hldGhlciBhbiBhbmltYXRpb24gaGFzIHN0YXJ0ZWQuIFdlIGNob3NlIHRoaXMgYXBwcm9hY2ggKHJlYWRpbmdcbiAgICAgICAgICogY29tcHV0ZWQgc3R5bGVzKSBiZWNhdXNlIHRoZXJlIGlzIG5vIGBhbmltYXRpb25ydW5gIGV2ZW50IGFuZCBgYW5pbWF0aW9uc3RhcnRgXG4gICAgICAgICAqIGZpcmVzIGFmdGVyIGBhbmltYXRpb24tZGVsYXlgIGhhcyBleHBpcmVkIHdoaWNoIHdvdWxkIGJlIHRvbyBsYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaXNBbmltYXRpbmcgPSBwcmV2QW5pbWF0aW9uTmFtZSAhPT0gY3VycmVudEFuaW1hdGlvbk5hbWU7XG5cbiAgICAgICAgaWYgKHdhc1ByZXNlbnQgJiYgaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICBzZW5kKCdBTklNQVRJT05fT1VUJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZCgnVU5NT1VOVCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZQcmVzZW50UmVmLmN1cnJlbnQgPSBwcmVzZW50O1xuICAgIH1cbiAgfSwgW3ByZXNlbnQsIHNlbmRdKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgdGltZW91dElkOiBudW1iZXI7XG4gICAgICBjb25zdCBvd25lcldpbmRvdyA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA/PyB3aW5kb3c7XG4gICAgICAvKipcbiAgICAgICAqIFRyaWdnZXJpbmcgYW4gQU5JTUFUSU9OX09VVCBkdXJpbmcgYW4gQU5JTUFUSU9OX0lOIHdpbGwgZmlyZSBhbiBgYW5pbWF0aW9uY2FuY2VsYFxuICAgICAgICogZXZlbnQgZm9yIEFOSU1BVElPTl9JTiBhZnRlciB3ZSBoYXZlIGVudGVyZWQgYHVubW91bnRTdXNwZW5kZWRgIHN0YXRlLiBTbywgd2VcbiAgICAgICAqIG1ha2Ugc3VyZSB3ZSBvbmx5IHRyaWdnZXIgQU5JTUFUSU9OX0VORCBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgYW5pbWF0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgICAgIGNvbnN0IGlzQ3VycmVudEFuaW1hdGlvbiA9IGN1cnJlbnRBbmltYXRpb25OYW1lLmluY2x1ZGVzKGV2ZW50LmFuaW1hdGlvbk5hbWUpO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBub2RlICYmIGlzQ3VycmVudEFuaW1hdGlvbikge1xuICAgICAgICAgIC8vIFdpdGggUmVhY3QgMTggY29uY3VycmVuY3kgdGhpcyB1cGRhdGUgaXMgYXBwbGllZCBhIGZyYW1lIGFmdGVyIHRoZVxuICAgICAgICAgIC8vIGFuaW1hdGlvbiBlbmRzLCBjcmVhdGluZyBhIGZsYXNoIG9mIHZpc2libGUgY29udGVudC4gQnkgc2V0dGluZyB0aGVcbiAgICAgICAgICAvLyBhbmltYXRpb24gZmlsbCBtb2RlIHRvIFwiZm9yd2FyZHNcIiwgd2UgZm9yY2UgdGhlIG5vZGUgdG8ga2VlcCB0aGVcbiAgICAgICAgICAvLyBzdHlsZXMgb2YgdGhlIGxhc3Qga2V5ZnJhbWUsIHJlbW92aW5nIHRoZSBmbGFzaC5cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIFByZXZpb3VzbHkgd2UgZmx1c2hlZCB0aGUgdXBkYXRlIHZpYSBSZWFjdERvbS5mbHVzaFN5bmMsIGJ1dCB3aXRoXG4gICAgICAgICAgLy8gZXhpdCBhbmltYXRpb25zIHRoaXMgcmVzdWx0ZWQgaW4gdGhlIG5vZGUgYmVpbmcgcmVtb3ZlZCBmcm9tIHRoZVxuICAgICAgICAgIC8vIERPTSBiZWZvcmUgdGhlIHN5bnRoZXRpYyBhbmltYXRpb25FbmQgZXZlbnQgd2FzIGRpc3BhdGNoZWQsIG1lYW5pbmdcbiAgICAgICAgICAvLyB1c2VyLXByb3ZpZGVkIGV2ZW50IGhhbmRsZXJzIHdvdWxkIG5vdCBiZSBjYWxsZWQuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JhZGl4LXVpL3ByaW1pdGl2ZXMvcHVsbC8xODQ5XG4gICAgICAgICAgc2VuZCgnQU5JTUFUSU9OX0VORCcpO1xuICAgICAgICAgIGlmICghcHJldlByZXNlbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEZpbGxNb2RlID0gbm9kZS5zdHlsZS5hbmltYXRpb25GaWxsTW9kZTtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uRmlsbE1vZGUgPSAnZm9yd2FyZHMnO1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHN0eWxlIGFmdGVyIHRoZSBub2RlIGhhZCB0aW1lIHRvIHVubW91bnQgKGZvciBjYXNlc1xuICAgICAgICAgICAgLy8gd2hlcmUgdGhlIGNvbXBvbmVudCBjaG9vc2VzIG5vdCB0byB1bm1vdW50KS4gRG9pbmcgdGhpcyBhbnlcbiAgICAgICAgICAgIC8vIHNvb25lciB0aGFuIGBzZXRUaW1lb3V0YCAoZS5nLiB3aXRoIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgKVxuICAgICAgICAgICAgLy8gc3RpbGwgY2F1c2VzIGEgZmxhc2guXG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBvd25lcldpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUuc3R5bGUuYW5pbWF0aW9uRmlsbE1vZGUgPT09ICdmb3J3YXJkcycpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbkZpbGxNb2RlID0gY3VycmVudEZpbGxNb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBoYW5kbGVBbmltYXRpb25TdGFydCA9IChldmVudDogQW5pbWF0aW9uRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbm9kZSkge1xuICAgICAgICAgIC8vIGlmIGFuaW1hdGlvbiBvY2N1cnJlZCwgc3RvcmUgaXRzIG5hbWUgYXMgdGhlIHByZXZpb3VzIGFuaW1hdGlvbi5cbiAgICAgICAgICBwcmV2QW5pbWF0aW9uTmFtZVJlZi5jdXJyZW50ID0gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbnN0YXJ0JywgaGFuZGxlQW5pbWF0aW9uU3RhcnQpO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25jYW5jZWwnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgb3duZXJXaW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uc3RhcnQnLCBoYW5kbGVBbmltYXRpb25TdGFydCk7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uY2FuY2VsJywgaGFuZGxlQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgdW5tb3VudGVkIHN0YXRlIGlmIHRoZSBub2RlIGlzIHJlbW92ZWQgcHJlbWF0dXJlbHkuXG4gICAgICAvLyBXZSBhdm9pZCBkb2luZyBzbyBkdXJpbmcgY2xlYW51cCBhcyB0aGUgbm9kZSBtYXkgY2hhbmdlIGJ1dCBzdGlsbCBleGlzdC5cbiAgICAgIHNlbmQoJ0FOSU1BVElPTl9FTkQnKTtcbiAgICB9XG4gIH0sIFtub2RlLCBzZW5kXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc1ByZXNlbnQ6IFsnbW91bnRlZCcsICd1bm1vdW50U3VzcGVuZGVkJ10uaW5jbHVkZXMoc3RhdGUpLFxuICAgIHJlZjogUmVhY3QudXNlQ2FsbGJhY2soKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpZiAobm9kZSkgc3R5bGVzUmVmLmN1cnJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgc2V0Tm9kZShub2RlKTtcbiAgICB9LCBbXSksXG4gIH07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXM/OiBDU1NTdHlsZURlY2xhcmF0aW9uKSB7XG4gIHJldHVybiBzdHlsZXM/LmFuaW1hdGlvbk5hbWUgfHwgJ25vbmUnO1xufVxuXG4vLyBCZWZvcmUgUmVhY3QgMTkgYWNjZXNzaW5nIGBlbGVtZW50LnByb3BzLnJlZmAgd2lsbCB0aHJvdyBhIHdhcm5pbmcgYW5kIHN1Z2dlc3QgdXNpbmcgYGVsZW1lbnQucmVmYFxuLy8gQWZ0ZXIgUmVhY3QgMTkgYWNjZXNzaW5nIGBlbGVtZW50LnJlZmAgZG9lcyB0aGUgb3Bwb3NpdGUuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yODM0OFxuLy9cbi8vIEFjY2VzcyB0aGUgcmVmIHVzaW5nIHRoZSBtZXRob2QgdGhhdCBkb2Vzbid0IHlpZWxkIGEgd2FybmluZy5cbmZ1bmN0aW9uIGdldEVsZW1lbnRSZWYoZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50KSB7XG4gIC8vIFJlYWN0IDw9MTggaW4gREVWXG4gIGxldCBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGVsZW1lbnQucHJvcHMsICdyZWYnKT8uZ2V0O1xuICBsZXQgbWF5V2FybiA9IGdldHRlciAmJiAnaXNSZWFjdFdhcm5pbmcnIGluIGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmc7XG4gIGlmIChtYXlXYXJuKSB7XG4gICAgcmV0dXJuIChlbGVtZW50IGFzIGFueSkucmVmO1xuICB9XG5cbiAgLy8gUmVhY3QgMTkgaW4gREVWXG4gIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbWVudCwgJ3JlZicpPy5nZXQ7XG4gIG1heVdhcm4gPSBnZXR0ZXIgJiYgJ2lzUmVhY3RXYXJuaW5nJyBpbiBnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nO1xuICBpZiAobWF5V2Fybikge1xuICAgIHJldHVybiBlbGVtZW50LnByb3BzLnJlZjtcbiAgfVxuXG4gIC8vIE5vdCBERVZcbiAgcmV0dXJuIGVsZW1lbnQucHJvcHMucmVmIHx8IChlbGVtZW50IGFzIGFueSkucmVmO1xufVxuXG5leHBvcnQgeyBQcmVzZW5jZSB9O1xuZXhwb3J0IHR5cGUgeyBQcmVzZW5jZVByb3BzIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgTWFjaGluZTxTPiA9IHsgW2s6IHN0cmluZ106IHsgW2s6IHN0cmluZ106IFMgfSB9O1xudHlwZSBNYWNoaW5lU3RhdGU8VD4gPSBrZXlvZiBUO1xudHlwZSBNYWNoaW5lRXZlbnQ8VD4gPSBrZXlvZiBVbmlvblRvSW50ZXJzZWN0aW9uPFRba2V5b2YgVF0+O1xuXG4vLyDwn6SvIGh0dHBzOi8vZmV0dGJsb2cuZXUvdHlwZXNjcmlwdC11bmlvbi10by1pbnRlcnNlY3Rpb24vXG50eXBlIFVuaW9uVG9JbnRlcnNlY3Rpb248VD4gPSAoVCBleHRlbmRzIGFueSA/ICh4OiBUKSA9PiBhbnkgOiBuZXZlcikgZXh0ZW5kcyAoeDogaW5mZXIgUikgPT4gYW55XG4gID8gUlxuICA6IG5ldmVyO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGVNYWNoaW5lPE0+KFxuICBpbml0aWFsU3RhdGU6IE1hY2hpbmVTdGF0ZTxNPixcbiAgbWFjaGluZTogTSAmIE1hY2hpbmU8TWFjaGluZVN0YXRlPE0+PlxuKSB7XG4gIHJldHVybiBSZWFjdC51c2VSZWR1Y2VyKChzdGF0ZTogTWFjaGluZVN0YXRlPE0+LCBldmVudDogTWFjaGluZUV2ZW50PE0+KTogTWFjaGluZVN0YXRlPE0+ID0+IHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSAobWFjaGluZVtzdGF0ZV0gYXMgYW55KVtldmVudF07XG4gICAgcmV0dXJuIG5leHRTdGF0ZSA/PyBzdGF0ZTtcbiAgfSwgaW5pdGlhbFN0YXRlKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbXBvc2VkUmVmcyIsInVzZUxheW91dEVmZmVjdCIsInVzZVN0YXRlTWFjaGluZSIsImluaXRpYWxTdGF0ZSIsIm1hY2hpbmUiLCJ1c2VSZWR1Y2VyIiwic3RhdGUiLCJldmVudCIsIm5leHRTdGF0ZSIsIlByZXNlbmNlIiwicHJvcHMiLCJwcmVzZW50IiwiY2hpbGRyZW4iLCJwcmVzZW5jZSIsInVzZVByZXNlbmNlIiwiY2hpbGQiLCJpc1ByZXNlbnQiLCJSZWFjdDIiLCJDaGlsZHJlbiIsIm9ubHkiLCJyZWYiLCJnZXRFbGVtZW50UmVmIiwiZm9yY2VNb3VudCIsImNsb25lRWxlbWVudCIsImRpc3BsYXlOYW1lIiwibm9kZSIsInNldE5vZGUiLCJ1c2VTdGF0ZSIsInN0eWxlc1JlZiIsInVzZVJlZiIsInByZXZQcmVzZW50UmVmIiwicHJldkFuaW1hdGlvbk5hbWVSZWYiLCJzZW5kIiwibW91bnRlZCIsIlVOTU9VTlQiLCJBTklNQVRJT05fT1VUIiwidW5tb3VudFN1c3BlbmRlZCIsIk1PVU5UIiwiQU5JTUFUSU9OX0VORCIsInVubW91bnRlZCIsInVzZUVmZmVjdCIsImN1cnJlbnRBbmltYXRpb25OYW1lIiwiZ2V0QW5pbWF0aW9uTmFtZSIsImN1cnJlbnQiLCJzdHlsZXMiLCJ3YXNQcmVzZW50IiwiaGFzUHJlc2VudENoYW5nZWQiLCJwcmV2QW5pbWF0aW9uTmFtZSIsImRpc3BsYXkiLCJpc0FuaW1hdGluZyIsInRpbWVvdXRJZCIsIm93bmVyV2luZG93Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3Iiwid2luZG93IiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiaXNDdXJyZW50QW5pbWF0aW9uIiwiaW5jbHVkZXMiLCJhbmltYXRpb25OYW1lIiwidGFyZ2V0IiwiY3VycmVudEZpbGxNb2RlIiwic3R5bGUiLCJhbmltYXRpb25GaWxsTW9kZSIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25TdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlQ2FsbGJhY2siLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxlbWVudCIsImdldHRlciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsIm1heVdhcm4iLCJpc1JlYWN0V2FybmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@radix-ui+react-presence@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs\n");

/***/ })

};
;