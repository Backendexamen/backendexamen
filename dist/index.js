"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
_app["default"].listen(_app["default"].get("puerto"), function () {
  console.log("ejecutando servidor en: http://localhost:3000/");
});