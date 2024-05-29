"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarproveedores = exports.mostrarproveedor = exports.modificarproveedor = exports.insertarproveedor = exports.eliminarproveedor = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dbConfig = _interopRequireDefault(require("../config/db.config.js"));
var _mensajes = require("../messages/mensajes.js");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var mostrarproveedores = exports.mostrarproveedores = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _dbConfig["default"].query("CALL sp_mostrarproveedores()");
        case 3:
          respuesta = _context.sent;
          (0, _mensajes.completado)(req, res, 200, respuesta[0]);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          (0, _mensajes.error)(req, res, 500, _context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function mostrarproveedores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var insertarproveedor = exports.insertarproveedor = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var nombre, contacto, empresa, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          nombre = req.body.nombre;
          contacto = req.body.contacto;
          empresa = req.body.empresa;
          _context2.prev = 3;
          _context2.next = 6;
          return _dbConfig["default"].query("CALL sp_insertarproveedor('".concat(nombre, "','").concat(contacto, "','").concat(empresa, "')"));
        case 6:
          respuesta = _context2.sent;
          (0, _mensajes.completado)(req, res, 200, "usuario insertado correctamente");
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](3);
          (0, _mensajes.error)(req, res, 200, "usuario insertado incorrecto");
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return function insertarproveedor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var mostrarproveedor = exports.mostrarproveedor = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params['id'];
          _context3.prev = 1;
          _context3.next = 4;
          return _dbConfig["default"].query("CALL sp_mostrarproveedor(".concat(id, ")"));
        case 4:
          respuesta = _context3.sent;
          (0, _mensajes.completado)(req, res, 200, respuesta[0]);
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          (0, _mensajes.error)(req, res, 500, _context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function mostrarproveedor(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var eliminarproveedor = exports.eliminarproveedor = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params['id'];
          _context4.prev = 1;
          _context4.next = 4;
          return _dbConfig["default"].query("CALL sp_eliminarproveedor(".concat(id, ")"));
        case 4:
          respuesta = _context4.sent;
          (0, _mensajes.completado)(req, res, 200, respuesta[0]);
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          (0, _mensajes.error)(req, res, 500, _context4.t0);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function eliminarproveedor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var modificarproveedor = exports.modificarproveedor = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, nombre, contacto, empresa, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          nombre = req.body.nombre;
          contacto = req.body.contacto;
          empresa = req.body.empresa;
          _context5.prev = 4;
          _context5.next = 7;
          return _dbConfig["default"].query("CALL sp_modificarproveedor(".concat(id, ", '").concat(nombre, "', '").concat(contacto, "','").concat(empresa, "')"));
        case 7:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _mensajes.completado)(req, res, 200, "usuario modificado");
          } else {
            (0, _mensajes.completado)(req, res, 200, "no se pudo modificar");
          }
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](4);
          (0, _mensajes.error)(req, res, 400, _context5.t0);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[4, 11]]);
  }));
  return function modificarproveedor(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();