/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/decorator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/decorator.js":
/*!**************************!*\
  !*** ./src/decorator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// function Animal() {
// }
// Object.defineProperties(Animal.prototype, {
//     name: {
//         value() {
//             return 'Animal~'
//         }
//     },
//     say: {
//         value() {
//             return `I'm ${this.name()}`
//         }
//     }
// })
// function Dog() {
// }
// Dog.prototype = Object.create(Animal.prototype, {
//     constructor: {
//         value: Dog,
//         enumerable: false
//     },
//     name: {
//         value() {
//             return 'Dog~'
//         }
//     }
// })
// console.log(new Dog().say())
// console.log(Dog.prototype.constructor)
var Animal =
/*#__PURE__*/
function () {
  function Animal() {
    _classCallCheck(this, Animal);
  }

  _createClass(Animal, [{
    key: "name",
    value: function name() {
      return 'Animal~';
    }
  }, {
    key: "say",
    value: function say() {
      return "I'm ".concat(this.name());
    }
  }]);

  return Animal;
}();

var Dog =
/*#__PURE__*/
function (_Animal) {
  _inherits(Dog, _Animal);

  function Dog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.food = 'bone';
    return _this;
  }

  _createClass(Dog, [{
    key: "name",
    value: function name() {
      return 'Dog~';
    }
  }]);

  return Dog;
}(Animal); // console.log(new Dog() instanceof Animal)

/**
 * @param {class} target 被修饰的类
 */


function log(target) {
  // 类修饰属性
  var desc = Object.getOwnPropertyDescriptors(target.prototype);

  var _loop = function _loop() {
    var key = _Object$keys[_i];

    if (key === 'constructor') {
      return "continue";
    }

    var func = desc[key].value;

    if (typeof func === 'function') {
      Object.defineProperty(target.prototype, key, {
        value: function value() {
          console.log('befor called::', key);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var res = func.apply(this, args);
          console.log('after called::', key);
          return res;
        }
      });
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(desc); _i < _Object$keys.length; _i++) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }
}
/**
 *
 * @param {class} target 类实例对象
 * @param {string} key 类属性成员名称
 * @param {object} descriptor 该类属性成员描述符
 */


function readonly(target, key, descriptor) {
  // console.log(target, key, descriptor)
  descriptor.writable = false;
}
/**
 *
 * @param {class} target 类实例对象
 * @param {string} key 类方法成员名称
 * @param {object} descriptor 该类方法成员描述符
 */


function validate(target, key, descriptor) {
  var func = descriptor.value;

  descriptor.value = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var _i2 = 0, _args = args; _i2 < _args.length; _i2++) {
      var _num = _args[_i2];

      if (typeof _num !== 'number') {
        throw new Error("".concat(_num, " is not a number!"));
      }
    }

    return func.apply(this, args);
  };
} // 类装饰器 transform-decorators-legacy


var Numberic = log(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function Numberic() {
    _classCallCheck(this, Numberic);

    _initializerDefineProperty(this, "PI", _descriptor, this);
  }

  _createClass(Numberic, [{
    key: "add",
    // 类方法成员装饰器
    value: function add() {
      for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        nums[_key4] = arguments[_key4];
      }

      return nums.reduce(function (p, n) {
        return p + n;
      }, 0);
    }
  }]);

  return Numberic;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PI", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.1415926;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "add", [validate], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype)), _class2)) || _class;

var num = new Numberic(); // num.add(1, 2, 3)
// num.add('1', '2')

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvci5qcyJdLCJuYW1lcyI6WyJBbmltYWwiLCJuYW1lIiwiRG9nIiwiZm9vZCIsImxvZyIsInRhcmdldCIsImRlc2MiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwicHJvdG90eXBlIiwia2V5IiwiZnVuYyIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25zb2xlIiwiYXJncyIsInJlcyIsImFwcGx5Iiwia2V5cyIsInJlYWRvbmx5IiwiZGVzY3JpcHRvciIsIndyaXRhYmxlIiwidmFsaWRhdGUiLCJudW0iLCJFcnJvciIsIk51bWJlcmljIiwibnVtcyIsInJlZHVjZSIsInAiLCJuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xG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QiIsImZpbGUiOiJkZWNvcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kZWNvcmF0b3IuanNcIik7XG4iLCIvLyBmdW5jdGlvbiBBbmltYWwoKSB7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhBbmltYWwucHJvdG90eXBlLCB7XHJcbi8vICAgICBuYW1lOiB7XHJcbi8vICAgICAgICAgdmFsdWUoKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiAnQW5pbWFsfidcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAgc2F5OiB7XHJcbi8vICAgICAgICAgdmFsdWUoKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBgSSdtICR7dGhpcy5uYW1lKCl9YFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vIGZ1bmN0aW9uIERvZygpIHtcclxuXHJcbi8vIH1cclxuXHJcbi8vIERvZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFuaW1hbC5wcm90b3R5cGUsIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yOiB7XHJcbi8vICAgICAgICAgdmFsdWU6IERvZyxcclxuLy8gICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxyXG4vLyAgICAgfSxcclxuLy8gICAgIG5hbWU6IHtcclxuLy8gICAgICAgICB2YWx1ZSgpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuICdEb2d+J1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vIGNvbnNvbGUubG9nKG5ldyBEb2coKS5zYXkoKSlcclxuLy8gY29uc29sZS5sb2coRG9nLnByb3RvdHlwZS5jb25zdHJ1Y3RvcilcclxuXHJcbmNsYXNzIEFuaW1hbCB7XHJcbiAgICBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnQW5pbWFsfidcclxuICAgIH1cclxuICAgIHNheSgpIHtcclxuICAgICAgICByZXR1cm4gYEknbSAke3RoaXMubmFtZSgpfWBcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRG9nIGV4dGVuZHMgQW5pbWFsIHtcclxuICAgIC8vIOexu+WxnuaAp+aIkOWRmOWumuS5iSB0cmFuc2Zvcm0tY2xhc3MtcHJvcGV0aWVzXHJcbiAgICBmb29kID0gJ2JvbmUnXHJcblxyXG4gICAgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0RvZ34nXHJcbiAgICB9XHJcbn1cclxuLy8gY29uc29sZS5sb2cobmV3IERvZygpIGluc3RhbmNlb2YgQW5pbWFsKVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Y2xhc3N9IHRhcmdldCDooqvkv67ppbDnmoTnsbtcclxuICovXHJcbmZ1bmN0aW9uIGxvZyh0YXJnZXQpIHtcclxuICAgIC8vIOexu+S/rumlsOWxnuaAp1xyXG4gICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldC5wcm90b3R5cGUpXHJcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGVzYykpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBkZXNjW2tleV0udmFsdWVcclxuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5wcm90b3R5cGUsIGtleSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZWZvciBjYWxsZWQ6OicsIGtleSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGNhbGxlZDo6Jywga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2NsYXNzfSB0YXJnZXQg57G75a6e5L6L5a+56LGhXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg57G75bGe5oCn5oiQ5ZGY5ZCN56ewXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXNjcmlwdG9yIOivpeexu+WxnuaAp+aIkOWRmOaPj+i/sOesplxyXG4gKi9cclxuZnVuY3Rpb24gcmVhZG9ubHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKVxyXG4gICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2NsYXNzfSB0YXJnZXQg57G75a6e5L6L5a+56LGhXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg57G75pa55rOV5oiQ5ZGY5ZCN56ewXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXNjcmlwdG9yIOivpeexu+aWueazleaIkOWRmOaPj+i/sOesplxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGUodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICAgIGNvbnN0IGZ1bmMgPSBkZXNjcmlwdG9yLnZhbHVlXHJcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgICAgIGZvciAobGV0IG51bSBvZiBhcmdzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbnVtICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke251bX0gaXMgbm90IGEgbnVtYmVyIWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncylcclxuICAgIH1cclxufVxyXG5cclxuLy8g57G76KOF6aWw5ZmoIHRyYW5zZm9ybS1kZWNvcmF0b3JzLWxlZ2FjeVxyXG5AbG9nXHJcbmNsYXNzIE51bWJlcmljIHtcclxuICAgIC8vIOexu+WxnuaAp+aIkOWRmOijhemlsOWZqFxyXG4gICAgQHJlYWRvbmx5IFBJID0gMy4xNDE1OTI2XHJcblxyXG4gICAgLy8g57G75pa55rOV5oiQ5ZGY6KOF6aWw5ZmoXHJcbiAgICBAdmFsaWRhdGVcclxuICAgIGFkZCguLi5udW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bXMucmVkdWNlKChwLCBuKSA9PiBwICsgbiwgMClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbnVtID0gbmV3IE51bWJlcmljKClcclxuLy8gbnVtLmFkZCgxLCAyLCAzKVxyXG4vLyBudW0uYWRkKCcxJywgJzInKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9