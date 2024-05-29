"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _index = _interopRequireDefault(require("./routes/index.js"));
(0, _dotenv.config)();
var servidor = (0, _express["default"])();
servidor.use(_express["default"].json());
servidor.use(_express["default"].urlencoded({
  extended: true
}));
servidor.set("puerto", process.env.PUERTO || 6000);
servidor.use('/', _index["default"]);
var _default = exports["default"] = servidor;