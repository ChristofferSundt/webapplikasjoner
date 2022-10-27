"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/shoppinglist";
exports.ids = ["pages/api/shoppinglist"];
exports.modules = {

/***/ "(api)/./data/shoppinglist.js":
/*!******************************!*\
  !*** ./data/shoppinglist.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shoppingList\": () => (/* binding */ shoppingList)\n/* harmony export */ });\nconst shoppingList = [\n    {\n        name: \"Melk\",\n        quantity: 1\n    },\n    {\n        name: \"Ost\",\n        quantity: 1\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL3Nob3BwaW5nbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsZUFBZTtJQUFDO1FBQ3pCQyxNQUFNO1FBQ05DLFVBQVU7SUFDZDtJQUFHO1FBQ0NELE1BQU07UUFDTkMsVUFBVTtJQUNkO0NBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWludHJvLy4vZGF0YS9zaG9wcGluZ2xpc3QuanM/YjM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2hvcHBpbmdMaXN0ID0gW3tcbiAgICBuYW1lOiBcIk1lbGtcIixcbiAgICBxdWFudGl0eTogMSxcbn0sIHtcbiAgICBuYW1lOiBcIk9zdFwiLFxuICAgIHF1YW50aXR5OiAxLFxufV0iXSwibmFtZXMiOlsic2hvcHBpbmdMaXN0IiwibmFtZSIsInF1YW50aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./data/shoppinglist.js\n");

/***/ }),

/***/ "(api)/./pages/api/shoppinglist.js":
/*!***********************************!*\
  !*** ./pages/api/shoppinglist.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_shoppinglist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/shoppinglist */ \"(api)/./data/shoppinglist.js\");\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(_data_shoppinglist__WEBPACK_IMPORTED_MODULE_0__.shoppingList);\n    } else if (req.method === \"POST\") {\n        const { name , quantity  } = req.body;\n        _data_shoppinglist__WEBPACK_IMPORTED_MODULE_0__.shoppingList.push({\n            name,\n            quantity\n        });\n        res.status(200).json(_data_shoppinglist__WEBPACK_IMPORTED_MODULE_0__.shoppingList);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcHBpbmdsaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEO0FBRXhDLFNBQVNDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLElBQUdELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3JCRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTiw0REFBWUE7SUFDckMsT0FBTyxJQUFHRSxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUM3QixNQUFNLEVBQUVHLEtBQUksRUFBRUMsU0FBUSxFQUFFLEdBQUdOLElBQUlPLElBQUk7UUFDbkNULGlFQUFpQixDQUFDO1lBQUVPO1lBQU1DO1FBQVM7UUFDbkNMLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOLDREQUFZQTtJQUNyQyxPQUFPO1FBQ0hHLElBQUlRLFNBQVMsQ0FBQyxTQUFTO1lBQUM7WUFBTztTQUFPO1FBQ3RDUixJQUFJRSxNQUFNLENBQUMsS0FBS08sR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFVixJQUFJRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzFELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1pbnRyby8uL3BhZ2VzL2FwaS9zaG9wcGluZ2xpc3QuanM/MGNhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG9wcGluZ0xpc3QgfSBmcm9tIFwiLi4vLi4vZGF0YS9zaG9wcGluZ2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNob3BwaW5nTGlzdCk7XG4gICAgfSBlbHNlIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHF1YW50aXR5IH0gPSByZXEuYm9keTtcbiAgICAgICAgc2hvcHBpbmdMaXN0LnB1c2goeyBuYW1lLCBxdWFudGl0eSB9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2hvcHBpbmdMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BPU1QnXSk7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJzaG9wcGluZ0xpc3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJxdWFudGl0eSIsImJvZHkiLCJwdXNoIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/shoppinglist.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/shoppinglist.js"));
module.exports = __webpack_exports__;

})();