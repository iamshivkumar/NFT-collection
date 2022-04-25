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
exports.id = "pages/api/[tokenId]";
exports.ids = ["pages/api/[tokenId]"];
exports.modules = {

/***/ "(api)/./pages/api/[tokenId].js":
/*!********************************!*\
  !*** ./pages/api/[tokenId].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nfunction handler(req, res) {\n    const tokenId = req.query.tokenId;\n    // As all the images are uploaded on github, we can extract the images from github directly.\n    const image_url = \"https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/\";\n    // The api is sending back metadata for a Crypto Dev\n    // To make our collection compatible with Opensea, we need to follow some Metadata standards\n    // when sending back the response from the api\n    // More info can be found here: https://docs.opensea.io/docs/metadata-standards\n    res.status(200).json({\n        name: \"Crypto Dev #\" + tokenId,\n        description: \"Crypto Dev is a collection of developers in crypto\",\n        image: image_url + tokenId + \".svg\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW3Rva2VuSWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFFOUQsU0FBU0EsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxNQUFNQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxPQUFPO0lBQ2pDLDRGQUE0RjtJQUM1RixNQUFNRSxTQUFTLEdBQ2IsOEZBQThGO0lBQ2hHLG9EQUFvRDtJQUNwRCw0RkFBNEY7SUFDNUYsOENBQThDO0lBQzlDLCtFQUErRTtJQUMvRUgsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNuQkMsSUFBSSxFQUFFLGNBQWMsR0FBR0wsT0FBTztRQUM5Qk0sV0FBVyxFQUFFLG9EQUFvRDtRQUNqRUMsS0FBSyxFQUFFTCxTQUFTLEdBQUdGLE9BQU8sR0FBRyxNQUFNO0tBQ3BDLENBQUMsQ0FBQztDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL1t0b2tlbklkXS5qcz84Yzg1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgdG9rZW5JZCA9IHJlcS5xdWVyeS50b2tlbklkO1xuICAvLyBBcyBhbGwgdGhlIGltYWdlcyBhcmUgdXBsb2FkZWQgb24gZ2l0aHViLCB3ZSBjYW4gZXh0cmFjdCB0aGUgaW1hZ2VzIGZyb20gZ2l0aHViIGRpcmVjdGx5LlxuICBjb25zdCBpbWFnZV91cmwgPVxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0xlYXJuV2ViM0RBTy9ORlQtQ29sbGVjdGlvbi9tYWluL215LWFwcC9wdWJsaWMvY3J5cHRvZGV2cy9cIjtcbiAgLy8gVGhlIGFwaSBpcyBzZW5kaW5nIGJhY2sgbWV0YWRhdGEgZm9yIGEgQ3J5cHRvIERldlxuICAvLyBUbyBtYWtlIG91ciBjb2xsZWN0aW9uIGNvbXBhdGlibGUgd2l0aCBPcGVuc2VhLCB3ZSBuZWVkIHRvIGZvbGxvdyBzb21lIE1ldGFkYXRhIHN0YW5kYXJkc1xuICAvLyB3aGVuIHNlbmRpbmcgYmFjayB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gIC8vIE1vcmUgaW5mbyBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9kb2NzLm9wZW5zZWEuaW8vZG9jcy9tZXRhZGF0YS1zdGFuZGFyZHNcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIG5hbWU6IFwiQ3J5cHRvIERldiAjXCIgKyB0b2tlbklkLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNyeXB0byBEZXYgaXMgYSBjb2xsZWN0aW9uIG9mIGRldmVsb3BlcnMgaW4gY3J5cHRvXCIsXG4gICAgaW1hZ2U6IGltYWdlX3VybCArIHRva2VuSWQgKyBcIi5zdmdcIixcbiAgfSk7XG5cbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW5JZCIsInF1ZXJ5IiwiaW1hZ2VfdXJsIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/[tokenId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[tokenId].js"));
module.exports = __webpack_exports__;

})();