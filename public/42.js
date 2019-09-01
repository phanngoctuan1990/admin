(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue */ "./node_modules/@coreui/vue/dist/coreui-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dashboard",
  components: {
    Callout: _coreui_vue__WEBPACK_IMPORTED_MODULE_0__["Callout"]
  },
  data: function data() {
    return {
      selected: "Month",
      tableItems: [{
        avatar: {
          url: "img/avatars/1.jpg",
          status: "success"
        },
        user: {
          name: "Yiorgos Avraamu",
          "new": true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "USA",
          flag: "us"
        },
        usage: {
          value: 50,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Mastercard",
          icon: "fa fa-cc-mastercard"
        },
        activity: "10 sec ago"
      }, {
        avatar: {
          url: "img/avatars/2.jpg",
          status: "danger"
        },
        user: {
          name: "Avram Tarasios",
          "new": false,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "Brazil",
          flag: "br"
        },
        usage: {
          value: 22,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Visa",
          icon: "fa fa-cc-visa"
        },
        activity: "5 minutes ago"
      }, {
        avatar: {
          url: "img/avatars/3.jpg",
          status: "warning"
        },
        user: {
          name: "Quintin Ed",
          "new": true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "India",
          flag: "in"
        },
        usage: {
          value: 74,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Stripe",
          icon: "fa fa-cc-stripe"
        },
        activity: "1 hour ago"
      }, {
        avatar: {
          url: "img/avatars/4.jpg",
          status: ""
        },
        user: {
          name: "Enéas Kwadwo",
          "new": true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "France",
          flag: "fr"
        },
        usage: {
          value: 98,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "PayPal",
          icon: "fa fa-paypal"
        },
        activity: "Last month"
      }, {
        avatar: {
          url: "img/avatars/5.jpg",
          status: "success"
        },
        user: {
          name: "Agapetus Tadeáš",
          "new": true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "Spain",
          flag: "es"
        },
        usage: {
          value: 22,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Google Wallet",
          icon: "fa fa-google-wallet"
        },
        activity: "Last week"
      }, {
        avatar: {
          url: "img/avatars/6.jpg",
          status: "danger"
        },
        user: {
          name: "Friderik Dávid",
          "new": true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "Poland",
          flag: "pl"
        },
        usage: {
          value: 43,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Amex",
          icon: "fa fa-cc-amex"
        },
        activity: "Last week"
      }],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          "class": "text-center"
        },
        user: {
          label: "User"
        },
        country: {
          label: "Country",
          "class": "text-center"
        },
        usage: {
          label: "Usage"
        },
        payment: {
          label: "Payment method",
          "class": "text-center"
        },
        activity: {
          label: "Activity"
        }
      }
    };
  },
  methods: {
    variant: function variant(value) {
      var $variant;

      if (value <= 25) {
        $variant = "info";
      } else if (value > 25 && value <= 50) {
        $variant = "success";
      } else if (value > 50 && value <= 75) {
        $variant = "warning";
      } else if (value > 75 && value <= 100) {
        $variant = "danger";
      }

      return $variant;
    },
    flag: function flag(value) {
      return "flag-icon flag-icon-" + value;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* IE fix */\n.icon-custom[data-v-2991c845] {\n  font-size: 50px;\n}\n#card-chart-01[data-v-2991c845],\n#card-chart-02[data-v-2991c845] {\n  width: 100% !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css&");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "animated fadeIn" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-info", attrs: { "no-body": "" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/users", tag: "p" } },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "pb-0" },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { cols: "9" } }, [
                                _c("h4", { staticClass: "mb-0" }, [
                                  _vm._v("Manager users")
                                ]),
                                _vm._v(" "),
                                _c("h4", { staticClass: "mb-0" }, [
                                  _vm._v("9.823")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "3" } }, [
                                _c("i", {
                                  staticClass: "icon-user icon-custom"
                                })
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", lg: "3" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-warning", attrs: { "no-body": "" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/users", tag: "p" } },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "pb-0" },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { cols: "9" } }, [
                                _c("h4", { staticClass: "mb-0" }, [
                                  _vm._v("Manager products")
                                ]),
                                _vm._v(" "),
                                _c("h4", { staticClass: "mb-0" }, [
                                  _vm._v("9.823")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "3" } }, [
                                _c("i", {
                                  staticClass: "icon-present icon-custom"
                                })
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/admin/views/Dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_2991c845_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=2991c845&scoped=true& */ "./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_2991c845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css& */ "./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_2991c845_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_2991c845_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2991c845",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_2991c845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css& */ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Dashboard.vue?vue&type=style&index=0&id=2991c845&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_2991c845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_2991c845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_2991c845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_2991c845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_2991c845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2991c845_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=2991c845&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Dashboard.vue?vue&type=template&id=2991c845&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2991c845_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2991c845_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);