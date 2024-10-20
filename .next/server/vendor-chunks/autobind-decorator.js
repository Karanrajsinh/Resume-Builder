"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/autobind-decorator";
exports.ids = ["vendor-chunks/autobind-decorator"];
exports.modules = {

/***/ "(ssr)/./node_modules/autobind-decorator/lib/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/autobind-decorator/lib/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   boundClass: () => (/* binding */ boundClass),\n/* harmony export */   boundMethod: () => (/* binding */ boundMethod),\n/* harmony export */   \"default\": () => (/* binding */ autobind)\n/* harmony export */ });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * Return a descriptor removing the value and returning a getter\n * The getter will return a .bind version of the function\n * and memoize the result against a symbol on the instance\n */\nfunction boundMethod(target, key, descriptor) {\n  var fn = descriptor.value;\n\n  if (typeof fn !== 'function') {\n    throw new TypeError(\"@boundMethod decorator can only be applied to methods not: \".concat(_typeof(fn)));\n  } // In IE11 calling Object.defineProperty has a side-effect of evaluating the\n  // getter for the property which is being replaced. This causes infinite\n  // recursion and an \"Out of stack space\" error.\n\n\n  var definingProperty = false;\n  return {\n    configurable: true,\n    get: function get() {\n      // eslint-disable-next-line no-prototype-builtins\n      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {\n        return fn;\n      }\n\n      var boundFn = fn.bind(this);\n      definingProperty = true;\n      Object.defineProperty(this, key, {\n        configurable: true,\n        get: function get() {\n          return boundFn;\n        },\n        set: function set(value) {\n          fn = value;\n          delete this[key];\n        }\n      });\n      definingProperty = false;\n      return boundFn;\n    },\n    set: function set(value) {\n      fn = value;\n    }\n  };\n}\n/**\n * Use boundMethod to bind all methods on the target.prototype\n */\n\nfunction boundClass(target) {\n  // (Using reflect to get all keys including symbols)\n  var keys; // Use Reflect if exists\n\n  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {\n    keys = Reflect.ownKeys(target.prototype);\n  } else {\n    keys = Object.getOwnPropertyNames(target.prototype); // Use symbols if support is provided\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));\n    }\n  }\n\n  keys.forEach(function (key) {\n    // Ignore special case target method\n    if (key === 'constructor') {\n      return;\n    }\n\n    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key); // Only methods need binding\n\n    if (typeof descriptor.value === 'function') {\n      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));\n    }\n  });\n  return target;\n}\nfunction autobind() {\n  if (arguments.length === 1) {\n    return boundClass.apply(void 0, arguments);\n  }\n\n  return boundMethod.apply(void 0, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXV0b2JpbmQtZGVjb3JhdG9yL2xpYi9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFelU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBLElBQUk7QUFDSix5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkVBQTZFOztBQUU3RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN1bWUtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9hdXRvYmluZC1kZWNvcmF0b3IvbGliL2VzbS9pbmRleC5qcz81MDA3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogUmV0dXJuIGEgZGVzY3JpcHRvciByZW1vdmluZyB0aGUgdmFsdWUgYW5kIHJldHVybmluZyBhIGdldHRlclxuICogVGhlIGdldHRlciB3aWxsIHJldHVybiBhIC5iaW5kIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uXG4gKiBhbmQgbWVtb2l6ZSB0aGUgcmVzdWx0IGFnYWluc3QgYSBzeW1ib2wgb24gdGhlIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3VuZE1ldGhvZCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQGJvdW5kTWV0aG9kIGRlY29yYXRvciBjYW4gb25seSBiZSBhcHBsaWVkIHRvIG1ldGhvZHMgbm90OiBcIi5jb25jYXQoX3R5cGVvZihmbikpKTtcbiAgfSAvLyBJbiBJRTExIGNhbGxpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5IGhhcyBhIHNpZGUtZWZmZWN0IG9mIGV2YWx1YXRpbmcgdGhlXG4gIC8vIGdldHRlciBmb3IgdGhlIHByb3BlcnR5IHdoaWNoIGlzIGJlaW5nIHJlcGxhY2VkLiBUaGlzIGNhdXNlcyBpbmZpbml0ZVxuICAvLyByZWN1cnNpb24gYW5kIGFuIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCIgZXJyb3IuXG5cblxuICB2YXIgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZEZuID0gZm4uYmluZCh0aGlzKTtcbiAgICAgIGRlZmluaW5nUHJvcGVydHkgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBib3VuZEZuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgIGZuID0gdmFsdWU7XG4gICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICByZXR1cm4gYm91bmRGbjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBmbiA9IHZhbHVlO1xuICAgIH1cbiAgfTtcbn1cbi8qKlxuICogVXNlIGJvdW5kTWV0aG9kIHRvIGJpbmQgYWxsIG1ldGhvZHMgb24gdGhlIHRhcmdldC5wcm90b3R5cGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRDbGFzcyh0YXJnZXQpIHtcbiAgLy8gKFVzaW5nIHJlZmxlY3QgdG8gZ2V0IGFsbCBrZXlzIGluY2x1ZGluZyBzeW1ib2xzKVxuICB2YXIga2V5czsgLy8gVXNlIFJlZmxlY3QgaWYgZXhpc3RzXG5cbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgUmVmbGVjdC5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAga2V5cyA9IFJlZmxlY3Qub3duS2V5cyh0YXJnZXQucHJvdG90eXBlKTtcbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0LnByb3RvdHlwZSk7IC8vIFVzZSBzeW1ib2xzIGlmIHN1cHBvcnQgaXMgcHJvdmlkZWRcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0LnByb3RvdHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gSWdub3JlIHNwZWNpYWwgY2FzZSB0YXJnZXQgbWV0aG9kXG4gICAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQucHJvdG90eXBlLCBrZXkpOyAvLyBPbmx5IG1ldGhvZHMgbmVlZCBiaW5kaW5nXG5cbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQucHJvdG90eXBlLCBrZXksIGJvdW5kTWV0aG9kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9iaW5kKCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBib3VuZENsYXNzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBib3VuZE1ldGhvZC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/autobind-decorator/lib/esm/index.js\n");

/***/ })

};
;