"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-context@1.1.0_@types+react@18.3.7_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-context@1.1.0_@types+react@18.3.7_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.3.7_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.3.7_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContext: () => (/* binding */ createContext2),\n/* harmony export */   createContextScope: () => (/* binding */ createContextScope)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n// packages/react/context/src/createContext.tsx\n\n\nfunction createContext2(rootComponentName, defaultContext) {\n  const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);\n  function Provider(props) {\n    const { children, ...context } = props;\n    const value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => context, Object.values(context));\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, { value, children });\n  }\n  function useContext2(consumerName) {\n    const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);\n    if (context) return context;\n    if (defaultContext !== void 0) return defaultContext;\n    throw new Error(`\\`${consumerName}\\` must be used within \\`${rootComponentName}\\``);\n  }\n  Provider.displayName = rootComponentName + \"Provider\";\n  return [Provider, useContext2];\n}\nfunction createContextScope(scopeName, createContextScopeDeps = []) {\n  let defaultContexts = [];\n  function createContext3(rootComponentName, defaultContext) {\n    const BaseContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);\n    const index = defaultContexts.length;\n    defaultContexts = [...defaultContexts, defaultContext];\n    function Provider(props) {\n      const { scope, children, ...context } = props;\n      const Context = scope?.[scopeName][index] || BaseContext;\n      const value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => context, Object.values(context));\n      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, { value, children });\n    }\n    function useContext2(consumerName, scope) {\n      const Context = scope?.[scopeName][index] || BaseContext;\n      const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);\n      if (context) return context;\n      if (defaultContext !== void 0) return defaultContext;\n      throw new Error(`\\`${consumerName}\\` must be used within \\`${rootComponentName}\\``);\n    }\n    Provider.displayName = rootComponentName + \"Provider\";\n    return [Provider, useContext2];\n  }\n  const createScope = () => {\n    const scopeContexts = defaultContexts.map((defaultContext) => {\n      return react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);\n    });\n    return function useScope(scope) {\n      const contexts = scope?.[scopeName] || scopeContexts;\n      return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(\n        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),\n        [scope, contexts]\n      );\n    };\n  };\n  createScope.scopeName = scopeName;\n  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];\n}\nfunction composeContextScopes(...scopes) {\n  const baseScope = scopes[0];\n  if (scopes.length === 1) return baseScope;\n  const createScope = () => {\n    const scopeHooks = scopes.map((createScope2) => ({\n      useScope: createScope2(),\n      scopeName: createScope2.scopeName\n    }));\n    return function useComposedScopes(overrideScopes) {\n      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {\n        const scopeProps = useScope(overrideScopes);\n        const currentScope = scopeProps[`__scope${scopeName}`];\n        return { ...nextScopes2, ...currentScope };\n      }, {});\n      return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);\n    };\n  };\n  createScope.scopeName = baseScope.scopeName;\n  return createScope;\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbnRleHRAMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjMuN19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb250ZXh0L2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUMrQjtBQUNTO0FBQ3hDO0FBQ0Esa0JBQWtCLGdEQUFtQjtBQUNyQztBQUNBLFlBQVksdUJBQXVCO0FBQ25DLGtCQUFrQiwwQ0FBYTtBQUMvQiwyQkFBMkIsc0RBQUcscUJBQXFCLGlCQUFpQjtBQUNwRTtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFnQjtBQUNwQztBQUNBO0FBQ0EseUJBQXlCLGFBQWEsMkJBQTJCLGtCQUFrQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQSxvQkFBb0IsMENBQWE7QUFDakMsNkJBQTZCLHNEQUFHLHFCQUFxQixpQkFBaUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFnQjtBQUN0QztBQUNBO0FBQ0EsMkJBQTJCLGFBQWEsMkJBQTJCLGtCQUFrQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdEQUFtQjtBQUNoQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsMENBQWE7QUFDMUIsaUJBQWlCLFdBQVcsVUFBVSxNQUFNLG1DQUFtQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkRBQTJELHFCQUFxQjtBQUNoRjtBQUNBLGtEQUFrRCxVQUFVO0FBQzVELGlCQUFpQjtBQUNqQixPQUFPLElBQUk7QUFDWCxhQUFhLDBDQUFhLFVBQVUsV0FBVyxvQkFBb0IsZ0JBQWdCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhZGNuLXNpZGViYXIvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbnRleHRAMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjMuN19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb250ZXh0L2Rpc3QvaW5kZXgubWpzPzIxMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZXMvcmVhY3QvY29udGV4dC9zcmMvY3JlYXRlQ29udGV4dC50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0Mihyb290Q29tcG9uZW50TmFtZSwgZGVmYXVsdENvbnRleHQpIHtcbiAgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZGVmYXVsdENvbnRleHQpO1xuICBmdW5jdGlvbiBQcm92aWRlcihwcm9wcykge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmNvbnRleHQgfSA9IHByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiBjb250ZXh0LCBPYmplY3QudmFsdWVzKGNvbnRleHQpKTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlLCBjaGlsZHJlbiB9KTtcbiAgfVxuICBmdW5jdGlvbiB1c2VDb250ZXh0Mihjb25zdW1lck5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcbiAgICBpZiAoY29udGV4dCkgcmV0dXJuIGNvbnRleHQ7XG4gICAgaWYgKGRlZmF1bHRDb250ZXh0ICE9PSB2b2lkIDApIHJldHVybiBkZWZhdWx0Q29udGV4dDtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYCR7Y29uc3VtZXJOYW1lfVxcYCBtdXN0IGJlIHVzZWQgd2l0aGluIFxcYCR7cm9vdENvbXBvbmVudE5hbWV9XFxgYCk7XG4gIH1cbiAgUHJvdmlkZXIuZGlzcGxheU5hbWUgPSByb290Q29tcG9uZW50TmFtZSArIFwiUHJvdmlkZXJcIjtcbiAgcmV0dXJuIFtQcm92aWRlciwgdXNlQ29udGV4dDJdO1xufVxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dFNjb3BlKHNjb3BlTmFtZSwgY3JlYXRlQ29udGV4dFNjb3BlRGVwcyA9IFtdKSB7XG4gIGxldCBkZWZhdWx0Q29udGV4dHMgPSBbXTtcbiAgZnVuY3Rpb24gY3JlYXRlQ29udGV4dDMocm9vdENvbXBvbmVudE5hbWUsIGRlZmF1bHRDb250ZXh0KSB7XG4gICAgY29uc3QgQmFzZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGRlZmF1bHRDb250ZXh0KTtcbiAgICBjb25zdCBpbmRleCA9IGRlZmF1bHRDb250ZXh0cy5sZW5ndGg7XG4gICAgZGVmYXVsdENvbnRleHRzID0gWy4uLmRlZmF1bHRDb250ZXh0cywgZGVmYXVsdENvbnRleHRdO1xuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKHByb3BzKSB7XG4gICAgICBjb25zdCB7IHNjb3BlLCBjaGlsZHJlbiwgLi4uY29udGV4dCB9ID0gcHJvcHM7XG4gICAgICBjb25zdCBDb250ZXh0ID0gc2NvcGU/LltzY29wZU5hbWVdW2luZGV4XSB8fCBCYXNlQ29udGV4dDtcbiAgICAgIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiBjb250ZXh0LCBPYmplY3QudmFsdWVzKGNvbnRleHQpKTtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWUsIGNoaWxkcmVuIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c2VDb250ZXh0Mihjb25zdW1lck5hbWUsIHNjb3BlKSB7XG4gICAgICBjb25zdCBDb250ZXh0ID0gc2NvcGU/LltzY29wZU5hbWVdW2luZGV4XSB8fCBCYXNlQ29udGV4dDtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xuICAgICAgaWYgKGNvbnRleHQpIHJldHVybiBjb250ZXh0O1xuICAgICAgaWYgKGRlZmF1bHRDb250ZXh0ICE9PSB2b2lkIDApIHJldHVybiBkZWZhdWx0Q29udGV4dDtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgJHtjb25zdW1lck5hbWV9XFxgIG11c3QgYmUgdXNlZCB3aXRoaW4gXFxgJHtyb290Q29tcG9uZW50TmFtZX1cXGBgKTtcbiAgICB9XG4gICAgUHJvdmlkZXIuZGlzcGxheU5hbWUgPSByb290Q29tcG9uZW50TmFtZSArIFwiUHJvdmlkZXJcIjtcbiAgICByZXR1cm4gW1Byb3ZpZGVyLCB1c2VDb250ZXh0Ml07XG4gIH1cbiAgY29uc3QgY3JlYXRlU2NvcGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2NvcGVDb250ZXh0cyA9IGRlZmF1bHRDb250ZXh0cy5tYXAoKGRlZmF1bHRDb250ZXh0KSA9PiB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0Q29udGV4dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVzZVNjb3BlKHNjb3BlKSB7XG4gICAgICBjb25zdCBjb250ZXh0cyA9IHNjb3BlPy5bc2NvcGVOYW1lXSB8fCBzY29wZUNvbnRleHRzO1xuICAgICAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgICAgICgpID0+ICh7IFtgX19zY29wZSR7c2NvcGVOYW1lfWBdOiB7IC4uLnNjb3BlLCBbc2NvcGVOYW1lXTogY29udGV4dHMgfSB9KSxcbiAgICAgICAgW3Njb3BlLCBjb250ZXh0c11cbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbiAgY3JlYXRlU2NvcGUuc2NvcGVOYW1lID0gc2NvcGVOYW1lO1xuICByZXR1cm4gW2NyZWF0ZUNvbnRleHQzLCBjb21wb3NlQ29udGV4dFNjb3BlcyhjcmVhdGVTY29wZSwgLi4uY3JlYXRlQ29udGV4dFNjb3BlRGVwcyldO1xufVxuZnVuY3Rpb24gY29tcG9zZUNvbnRleHRTY29wZXMoLi4uc2NvcGVzKSB7XG4gIGNvbnN0IGJhc2VTY29wZSA9IHNjb3Blc1swXTtcbiAgaWYgKHNjb3Blcy5sZW5ndGggPT09IDEpIHJldHVybiBiYXNlU2NvcGU7XG4gIGNvbnN0IGNyZWF0ZVNjb3BlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjb3BlSG9va3MgPSBzY29wZXMubWFwKChjcmVhdGVTY29wZTIpID0+ICh7XG4gICAgICB1c2VTY29wZTogY3JlYXRlU2NvcGUyKCksXG4gICAgICBzY29wZU5hbWU6IGNyZWF0ZVNjb3BlMi5zY29wZU5hbWVcbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVzZUNvbXBvc2VkU2NvcGVzKG92ZXJyaWRlU2NvcGVzKSB7XG4gICAgICBjb25zdCBuZXh0U2NvcGVzID0gc2NvcGVIb29rcy5yZWR1Y2UoKG5leHRTY29wZXMyLCB7IHVzZVNjb3BlLCBzY29wZU5hbWUgfSkgPT4ge1xuICAgICAgICBjb25zdCBzY29wZVByb3BzID0gdXNlU2NvcGUob3ZlcnJpZGVTY29wZXMpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSBzY29wZVByb3BzW2BfX3Njb3BlJHtzY29wZU5hbWV9YF07XG4gICAgICAgIHJldHVybiB7IC4uLm5leHRTY29wZXMyLCAuLi5jdXJyZW50U2NvcGUgfTtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+ICh7IFtgX19zY29wZSR7YmFzZVNjb3BlLnNjb3BlTmFtZX1gXTogbmV4dFNjb3BlcyB9KSwgW25leHRTY29wZXNdKTtcbiAgICB9O1xuICB9O1xuICBjcmVhdGVTY29wZS5zY29wZU5hbWUgPSBiYXNlU2NvcGUuc2NvcGVOYW1lO1xuICByZXR1cm4gY3JlYXRlU2NvcGU7XG59XG5leHBvcnQge1xuICBjcmVhdGVDb250ZXh0MiBhcyBjcmVhdGVDb250ZXh0LFxuICBjcmVhdGVDb250ZXh0U2NvcGVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.3.7_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs\n");

/***/ })

};
;