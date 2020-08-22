webpackHotUpdate("main",{

/***/ "./src/refactoredComponents/Dropdown/styles.js":
/*!*****************************************************!*\
  !*** ./src/refactoredComponents/Dropdown/styles.js ***!
  \*****************************************************/
/*! exports provided: StyledDropdownMenu, StyledDropdownToggle, Svg, Span */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledDropdownMenu", function() { return StyledDropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledDropdownToggle", function() { return StyledDropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

 // export const StyledDropdown = styled(Dropdown)`
//   width: 100%;
//   height: 100%;
// `;

const StyledDropdownMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"])`
  width: 160px;
`;
const StyledDropdownToggle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"])`
  background-color: #E7E8F2;
  border: none;
  border-radius: 2px;
  width: 160px;
  height: 34px;
  display: flex;
  justify-content: space-between;
`;
const Svg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg`
  color: #D4D4D4;
`;
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  &::after {
    content: " ";
    background-color: #000000;
    height: 100%; 
  }
`;

/***/ })

})
//# sourceMappingURL=main.40cd44f2582313cfd9f1.hot-update.js.map