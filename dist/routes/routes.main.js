"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var rutamain = (0, _express.Router)();
rutamain.get("/", function (req, res) {
  res.json("ruta principal");
});
var _default = exports["default"] = rutamain;