"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersProveedor = require("../controllers/controllers.proveedor.js");
var rutaproveedor = (0, _express.Router)();
rutaproveedor.post("/proveedor", _controllersProveedor.insertarproveedor);
rutaproveedor.get("/proveedor", _controllersProveedor.mostrarproveedores);
rutaproveedor.put("/proveedor", _controllersProveedor.modificarproveedor);
rutaproveedor.get("/proveedor/:id", _controllersProveedor.mostrarproveedor);
rutaproveedor["delete"]("/proveedor/:id", _controllersProveedor.eliminarproveedor);
var _default = exports["default"] = rutaproveedor;