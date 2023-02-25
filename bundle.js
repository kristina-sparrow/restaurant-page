/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$content\": () => (/* binding */ $content),\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav */ \"./src/modules/nav.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\n\n\nconst $content = document.getElementById(\"content\");\n\nfunction createHtmlElement(type, id, arrayClasses, content) {\n  const element = document.createElement(type);\n  if (id) element.id = id;\n  if (arrayClasses)\n    arrayClasses.forEach((myClass) => element.classList.add(myClass));\n  if (content) element.innerText = content;\n  return element;\n}\n\nfunction home() {\n  $content.innerHTML = \"\";\n  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__.renderNav)();\n  (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)();\n  (0,_modules_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\n}\nfunction menu() {\n  $content.innerHTML = \"\";\n  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__.renderNav)();\n  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__.renderMenu)();\n  (0,_modules_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\n}\nfunction contact() {\n  $content.innerHTML = \"\";\n  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__.renderNav)();\n  (0,_modules_contact__WEBPACK_IMPORTED_MODULE_5__.renderContact)();\n  (0,_modules_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\n}\n\nhome();\n\ndocument.addEventListener(\"click\", (e) => {\n  const target = e.target.innerText;\n  if (target === \"HOME\") home();\n  if (target === \"MENU\" || target === \"VIEW THE MENU\") menu();\n  if (target === \"CONTACT\") contact();\n});\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContact\": () => (/* binding */ renderContact)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nconst hours = [\n  \"Saturday: 8am - 4pm\",\n  \"Sunday: 8am - 4pm\",\n  \"Monday: Closed\",\n  \"Tuesday: 6am - 2pm\",\n  \"Wednesday: 6am - 2pm\",\n  \"Thursday: 6am - 2pm\",\n  \"Friday: 6am - 2pm\",\n];\n\nfunction renderContact() {\n  const $main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"main\", null, [\"contact\"], null);\n  const $p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"p\",\n    null,\n    [\"golden\", \"cursive\"],\n    \"Bienvenidos\"\n  );\n  const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h1\", null, [\"gray\"], \"Contact\");\n  const $hr = document.createElement(\"hr\");\n  const $p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"p\",\n    null,\n    [\"gray\"],\n    \"La Familia Panaderia is a neighborhood Mexican bakery that has been serving the community with fresh, authentic, and delicious baked goods for over 20 years. Our bakery is family-owned and operated, and we take pride in using only the freshest and highest quality ingredients in all of our recipes. From our traditional pan de elote to our savory empanadas de carne, we have something for everyone. Our customers are like family to us and we strive to make each visit a pleasant and satisfying experience. Come by and visit us today and taste the difference at La Familia Panaderia!\"\n  );\n  const $h2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\", null, [\"golden\"], \"Hours\");\n  const $ul = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"ul\", null, [\"hours\"], null);\n  hours.forEach((item) =>\n    $ul.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"li\", null, [\"gray\"], item))\n  );\n  const $h3 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\", null, [\"golden\"], \"Contact\");\n  const $p3 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, [\"gray\"], \"P: 123-456-7890\");\n  const $p4 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"p\",\n    null,\n    [\"gray\"],\n    \"E: panaderia@notarealemail.com\"\n  );\n\n  $main.appendChild($p1);\n  $main.appendChild($h1);\n  $main.appendChild($hr);\n  $main.appendChild($p2);\n  $main.appendChild($h2);\n  $main.appendChild($ul);\n  $main.appendChild($h3);\n  $main.appendChild($p3);\n  $main.appendChild($p4);\n\n  _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($main);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderFooter\": () => (/* binding */ renderFooter)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nfunction renderFooter() {\n  const $footer = document.createElement(\"footer\");\n  const $p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, null, \"123 Fake St Denver, CO\");\n  $footer.appendChild($p1);\n  _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($footer);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nfunction renderHome() {\n  const $main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"main\", null, [\"home\"], null);\n  const $p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"p\",\n    null,\n    [\"golden\", \"cursive\"],\n    \"Bienvenidos\"\n  );\n  const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h1\", null, [\"white\"], \"La Familia Panaderia\");\n  const $hr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"hr\", null, null, null);\n  const $p2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"p\",\n    null,\n    [\"white\", \"text-center\"],\n    \"Where tradition meets taste, savor the authentic flavors of Mexico in every bite of our carefully crafted pastries.\"\n  );\n  const $button = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"button\", null, null, \"View the Menu\");\n  $main.appendChild($p1);\n  $main.appendChild($h1);\n  $main.appendChild($hr);\n  $main.appendChild($p2);\n  $main.appendChild($button);\n  _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($main);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nconst menu = [\n  {\n    title: \"Pan de Elote\",\n    description:\n      \"A sweet and fluffy cornbread made with fresh corn and infused with a hint of vanilla and cinnamon. Perfectly paired with a cup of café de olla.\",\n    price: \"$4\",\n  },\n  {\n    title: \"Conchas\",\n    description:\n      \"A traditional Mexican sweet bread roll with a sugary, crunchy topping. Perfect for breakfast or as a mid-day treat with a cup of hot chocolate.\",\n    price: \"$3\",\n  },\n  {\n    title: \"Buñuelos\",\n    description:\n      \"Thin and crispy fried dough rounds dusted with a generous coating of cinnamon and sugar. A traditional Mexican dessert, perfect for satisfying a sweet tooth.\",\n    price: \"$3\",\n  },\n  {\n    title: \"Pastel de Tres Leches\",\n    description:\n      \"A traditional Mexican cake made with three milks and topped with a light whipped cream. A sweet and rich dessert that is sure to please any palate.\",\n    price: \"$8\",\n  },\n  {\n    title: \"Empanadas de Carne\",\n    description:\n      \"A savory pastry filled with seasoned beef, onions, and peppers. Served hot and crispy, perfect for a satisfying lunch or as a snack on the go.\",\n    price: \"$5\",\n  },\n  {\n    title: \"Tamales\",\n    description:\n      \"A traditional Mexican dish made with masa dough and filled with savory meats, cheeses, or vegetables. Wrapped in a corn husk and steamed to perfection, perfect for a hearty and satisfying meal.\",\n    price: \"$7\",\n  },\n  {\n    title: \"Cemita Poblana\",\n    description:\n      \"A traditional Mexican sandwich made with a sesame seed roll, filled with meat, cheese, avocado, and a spicy red sauce. Perfect for a hearty and satisfying lunch or dinner.\",\n    price: \"$10\",\n  },\n];\n\nfunction renderMenu() {\n  const $main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"main\", null, [\"menu\"], null);\n  const $p1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"p\",\n    null,\n    [\"golden\", \"cursive\"],\n    \"Bienvenidos\"\n  );\n  const $h1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h1\", null, [\"gray\"], \"Menu\");\n  const $hr = document.createElement(\"hr\");\n\n  $main.appendChild($p1);\n  $main.appendChild($h1);\n  $main.appendChild($hr);\n\n  menu.forEach((item) => {\n    const $div = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"menu-item\"], null);\n    const $title = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\", null, [\"golden\"], item.title);\n    const $description = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n      \"p\",\n      null,\n      [\"gray\"],\n      item.description\n    );\n    const $price = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\", null, [\"golden\"], item.price);\n    const $hr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"hr\", null, null, null);\n\n    $div.appendChild($title);\n    $div.appendChild($description);\n    $div.appendChild($price);\n    $div.appendChild($hr);\n\n    $main.appendChild($div);\n  });\n\n  _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($main);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ renderNav)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nfunction renderNav() {\n  const navItems = [\"Home\", \"Menu\", \"Contact\"];\n  const $ul = document.createElement(\"ul\");\n  navItems.forEach((item) =>\n    $ul.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"li\", null, null, item))\n  );\n  const $nav = document.createElement(\"nav\");\n  $nav.appendChild($ul);\n  _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($nav);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;