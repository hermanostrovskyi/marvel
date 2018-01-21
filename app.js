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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _general = __webpack_require__(1);

var _general2 = _interopRequireDefault(_general);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselGeneral = function (_General) {
  _inherits(CarouselGeneral, _General);

  function CarouselGeneral() {
    _classCallCheck(this, CarouselGeneral);

    return _possibleConstructorReturn(this, (CarouselGeneral.__proto__ || Object.getPrototypeOf(CarouselGeneral)).call(this));
  }

  _createClass(CarouselGeneral, [{
    key: '_setCarouselParams',
    value: function _setCarouselParams() {
      this.currentNum = 0;
      this.items = this.carousel.querySelector('.' + this.cls + '__container');
      this.prevBtn = this.carousel.querySelector('.' + this.cls + '__arrow--prev');
      this.nextBtn = this.carousel.querySelector('.' + this.cls + '__arrow--next');
      this.count = this.items.children.length;
      this.carousel.addEventListener('click', this._handler.bind(this));
    }
  }, {
    key: '_setWidth',
    value: function _setWidth() {
      this.width = this.items.offsetWidth / this.count;
    }
  }, {
    key: '_handler',
    value: function _handler() {
      if (event.target == this.prevBtn) {
        this._showPrev();
      }
      if (event.target == this.nextBtn) {
        this._showNext();
      }
    }
  }, {
    key: '_showPrev',
    value: function _showPrev() {
      this._setWidth();

      this.currentNum--;
      if (this.currentNum < 0) this.currentNum = 0;

      this._setMargin();
    }
  }, {
    key: '_showNext',
    value: function _showNext() {
      this._setWidth();

      this.currentNum++;
      if (this.currentNum > this.count - 1) this.currentNum = this.count - 1;

      this._setMargin();
    }
  }, {
    key: '_setMargin',
    value: function _setMargin() {
      this.items.style.marginLeft = -(this.currentNum * this.width) + 'px';
    }
  }]);

  return CarouselGeneral;
}(_general2.default);

exports.default = CarouselGeneral;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var General = function () {
    function General() {
        _classCallCheck(this, General);
    }

    _createClass(General, [{
        key: '_setSwitchersList',
        value: function _setSwitchersList(cls) {
            this.switcherCls = cls;
            this.switchers = document.querySelectorAll('.' + this.switcherCls);
            this.switcher = document.querySelector('.' + this.switcherCls);
        }
    }, {
        key: '_switchAlloff',
        value: function _switchAlloff() {
            for (var i = 0; i < this.switchers.length; i++) {
                if (this._isActive(this.switchers[i])) {
                    this.switchers[i].classList.remove(this.switcherCls + '--active');
                    break;
                }
            }
        }
    }, {
        key: '_setActive',
        value: function _setActive(elem) {
            elem.classList.add(this.switcherCls + '--active');
        }
    }, {
        key: '_isActive',
        value: function _isActive(elem) {
            return elem.classList.contains(this.switcherCls + '--active') ? true : false;
        }
    }]);

    return General;
}();

exports.default = General;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _carouselBlog = __webpack_require__(3);

var _carouselBlog2 = _interopRequireDefault(_carouselBlog);

var _carouselTeam = __webpack_require__(4);

var _carouselTeam2 = _interopRequireDefault(_carouselTeam);

var _carouselHeader = __webpack_require__(5);

var _carouselHeader2 = _interopRequireDefault(_carouselHeader);

var _portfolio = __webpack_require__(6);

var _portfolio2 = _interopRequireDefault(_portfolio);

var _menu = __webpack_require__(7);

var _menu2 = _interopRequireDefault(_menu);

var _form = __webpack_require__(8);

var _form2 = _interopRequireDefault(_form);

var _toTop = __webpack_require__(9);

var _toTop2 = _interopRequireDefault(_toTop);

var _smoothScroll = __webpack_require__(10);

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

var _main = __webpack_require__(11);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _carouselBlog2.default({ carousel: document.querySelector('.blog .carousel'), cls: 'carousel' });
new _carouselTeam2.default({ carousel: document.querySelector('.team-carousel'), cls: 'team-carousel' });
new _carouselHeader2.default({ carousel: document.querySelector('.main-header .slider'), cls: 'slider', switcherCls: 'slider__switch' });
new _portfolio2.default({ itemCls: 'portfolio__link' });
new _menu2.default({ menuCls: 'main-nav' });
new _toTop2.default({ cls: 'toTopBtn' });
new _form2.default({ cls: 'form' });
new _smoothScroll2.default();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _carouselGeneral = __webpack_require__(0);

var _carouselGeneral2 = _interopRequireDefault(_carouselGeneral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselBlog = function (_CarouselGeneral) {
  _inherits(CarouselBlog, _CarouselGeneral);

  function CarouselBlog(_ref) {
    var carousel = _ref.carousel,
        cls = _ref.cls;

    _classCallCheck(this, CarouselBlog);

    var _this = _possibleConstructorReturn(this, (CarouselBlog.__proto__ || Object.getPrototypeOf(CarouselBlog)).call(this));

    _this.carousel = carousel;
    _this.cls = cls;
    _this._setCarouselParams();
    return _this;
  }

  _createClass(CarouselBlog, [{
    key: '_setCarouselParams',
    value: function _setCarouselParams() {
      var _this2 = this;

      _get(CarouselBlog.prototype.__proto__ || Object.getPrototypeOf(CarouselBlog.prototype), '_setCarouselParams', this).call(this);
      window.addEventListener('resize', function () {
        if (parseInt(_this2.items.style.marginLeft) < 0) {
          _this2._setWidth();
          _this2._setMargin();
        }
      });
    }
  }]);

  return CarouselBlog;
}(_carouselGeneral2.default);

exports.default = CarouselBlog;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _carouselGeneral = __webpack_require__(0);

var _carouselGeneral2 = _interopRequireDefault(_carouselGeneral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselTeam = function (_CarouselGeneral) {
  _inherits(CarouselTeam, _CarouselGeneral);

  function CarouselTeam(_ref) {
    var carousel = _ref.carousel,
        cls = _ref.cls;

    _classCallCheck(this, CarouselTeam);

    var _this = _possibleConstructorReturn(this, (CarouselTeam.__proto__ || Object.getPrototypeOf(CarouselTeam)).call(this));

    _this.carousel = carousel;
    _this.cls = cls;
    _this._setCarouselParams();
    return _this;
  }

  _createClass(CarouselTeam, [{
    key: '_setCarouselParams',
    value: function _setCarouselParams() {
      var _this2 = this;

      _get(CarouselTeam.prototype.__proto__ || Object.getPrototypeOf(CarouselTeam.prototype), '_setCarouselParams', this).call(this);
      window.addEventListener('resize', function () {
        if (document.documentElement.clientWidth > 480) {
          _this2.items.style.marginLeft = 0 + 'px';
        }
        if (parseInt(_this2.items.style.marginLeft) < 0) {
          _this2._setWidth();
          _this2._setMargin();
        }
      });
    }
  }]);

  return CarouselTeam;
}(_carouselGeneral2.default);

exports.default = CarouselTeam;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _carouselGeneral = __webpack_require__(0);

var _carouselGeneral2 = _interopRequireDefault(_carouselGeneral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselHeader = function (_CarouselGeneral) {
  _inherits(CarouselHeader, _CarouselGeneral);

  function CarouselHeader(_ref) {
    var carousel = _ref.carousel,
        cls = _ref.cls,
        switcherCls = _ref.switcherCls;

    _classCallCheck(this, CarouselHeader);

    var _this = _possibleConstructorReturn(this, (CarouselHeader.__proto__ || Object.getPrototypeOf(CarouselHeader)).call(this));

    _this.carousel = carousel;
    _this.switcherCls = switcherCls;
    _this.cls = cls;
    _this._setCarouselParams();
    _this._setSwitchersList(_this.switcherCls);
    setInterval(_this._autoSlideChande.bind(_this), 4000);
    return _this;
  }

  _createClass(CarouselHeader, [{
    key: '_setSwitchersList',
    value: function _setSwitchersList(cls) {
      _get(CarouselHeader.prototype.__proto__ || Object.getPrototypeOf(CarouselHeader.prototype), '_setSwitchersList', this).call(this, cls);
      this.switcher.closest('ul').addEventListener('click', this._switcherHandler.bind(this));
    }
  }, {
    key: '_switcherHandler',
    value: function _switcherHandler() {
      var target = event.target;
      if (!target.classList.contains('' + this.switcherCls)) return;
      event.preventDefault();

      if (_get(CarouselHeader.prototype.__proto__ || Object.getPrototypeOf(CarouselHeader.prototype), '_isActive', this).call(this, target)) return;else {
        _get(CarouselHeader.prototype.__proto__ || Object.getPrototypeOf(CarouselHeader.prototype), '_switchAlloff', this).call(this);
        _get(CarouselHeader.prototype.__proto__ || Object.getPrototypeOf(CarouselHeader.prototype), '_setActive', this).call(this, target);
        this._showSlide(target);
      }
    }
  }, {
    key: '_showSlide',
    value: function _showSlide(target) {
      this.currentNum = this._getSlideNum(target);
      this._setWidth();
      this._setMargin();
    }
  }, {
    key: '_getSlideNum',
    value: function _getSlideNum(elem) {
      for (var i = 0; i < this.switchers.length; i++) {
        if (this.switchers[i] === elem) {
          return i;
        }
      }
    }
  }, {
    key: '_getSwitcherNum',
    value: function _getSwitcherNum(num) {
      for (var i = 0; i < this.switchers.length; i++) {
        if (i === num) {
          return this.switchers[i];
        }
      }
    }
  }, {
    key: '_setCarouselParams',
    value: function _setCarouselParams() {
      var _this2 = this;

      this.currentNum = 0;
      this.items = this.carousel.querySelector('.' + this.cls + '__container');
      this.list = this.carousel.querySelector('.' + this.cls + '__list');
      this.count = this.list.children.length;

      window.addEventListener('resize', function () {
        if (parseInt(_this2.list.style.marginLeft) < 0) {
          _this2._setWidth();
          _this2._setMargin();
        }
      });
    }
  }, {
    key: '_setWidth',
    value: function _setWidth() {
      this.width = this.list.offsetWidth / this.count;
    }
  }, {
    key: '_setMargin',
    value: function _setMargin() {
      this.list.style.marginLeft = -(this.currentNum * this.width) + 'px';
    }
  }, {
    key: '_autoSlideChande',
    value: function _autoSlideChande() {
      this._setWidth();
      this.currentNum++;
      if (this.currentNum === this.count) {
        this.currentNum = 0;
      }
      this._setMargin();
      _get(CarouselHeader.prototype.__proto__ || Object.getPrototypeOf(CarouselHeader.prototype), '_switchAlloff', this).call(this);
      _get(CarouselHeader.prototype.__proto__ || Object.getPrototypeOf(CarouselHeader.prototype), '_setActive', this).call(this, this._getSwitcherNum(this.currentNum));
    }
  }]);

  return CarouselHeader;
}(_carouselGeneral2.default);

exports.default = CarouselHeader;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _general = __webpack_require__(1);

var _general2 = _interopRequireDefault(_general);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortfolioMenu = function (_General) {
  _inherits(PortfolioMenu, _General);

  function PortfolioMenu(_ref) {
    var itemCls = _ref.itemCls;

    _classCallCheck(this, PortfolioMenu);

    var _this = _possibleConstructorReturn(this, (PortfolioMenu.__proto__ || Object.getPrototypeOf(PortfolioMenu)).call(this));

    _this.itemCls = itemCls;
    _this._setSwitchersList();
    return _this;
  }

  _createClass(PortfolioMenu, [{
    key: '_setSwitchersList',
    value: function _setSwitchersList() {
      _get(PortfolioMenu.prototype.__proto__ || Object.getPrototypeOf(PortfolioMenu.prototype), '_setSwitchersList', this).call(this, this.itemCls);
      this.switcher.closest('ul').addEventListener('click', this._switcherHandler.bind(this));
    }
  }, {
    key: '_switcherHandler',
    value: function _switcherHandler() {
      var target = event.target;
      if (!target.classList.contains('' + this.switcherCls)) return;
      event.preventDefault();

      if (_get(PortfolioMenu.prototype.__proto__ || Object.getPrototypeOf(PortfolioMenu.prototype), '_isActive', this).call(this, target)) return;else {
        _get(PortfolioMenu.prototype.__proto__ || Object.getPrototypeOf(PortfolioMenu.prototype), '_switchAlloff', this).call(this);
        _get(PortfolioMenu.prototype.__proto__ || Object.getPrototypeOf(PortfolioMenu.prototype), '_setActive', this).call(this, target);
      }
    }
  }]);

  return PortfolioMenu;
}(_general2.default);

exports.default = PortfolioMenu;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu(_ref) {
    var menuCls = _ref.menuCls;

    _classCallCheck(this, Menu);

    this.cls = menuCls;
    this.toggle = document.querySelector('.' + this.cls + '__toggle');
    this.menu = document.querySelector('.' + this.cls + '__list');
    this.toggle.addEventListener('click', this.__toggle.bind(this));
  }

  _createClass(Menu, [{
    key: '__toggle',
    value: function __toggle() {
      this.menu.classList.toggle(this.cls + '__list--active');
      this.toggle.classList.toggle(this.cls + '__toggle--active');
    }
  }]);

  return Menu;
}();

exports.default = Menu;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
  function Form(_ref) {
    var cls = _ref.cls;

    _classCallCheck(this, Form);

    this.cls = cls;
    this.form = document.querySelector('.' + this.cls + ' form');
    this.submit = this.form.querySelector('[type = submit]');
    this.fname = this.form.querySelector('[name = fname]');
    this.lname = this.form.querySelector('[name = lname]');
    this.email = this.form.querySelector('[name = email]');
    this.form.addEventListener('focus', this._removePlaceholder.bind(this), true);
    this.form.addEventListener('blur', this._pastePlaceholder.bind(this), true);
    this.submit.addEventListener('click', this._validation.bind(this));
  }

  _createClass(Form, [{
    key: '_removePlaceholder',
    value: function _removePlaceholder(e) {
      e.target.setAttribute('placeholder', '');
      if (e.target.classList.contains('warning')) {
        e.target.classList.remove('warning');
        document.querySelector('.' + e.target.getAttribute('name') + '__note').remove();
      }
    }
  }, {
    key: '_pastePlaceholder',
    value: function _pastePlaceholder(e) {
      if (!e.target.value) {
        e.target.setAttribute('placeholder', e.target.getAttribute('data-placeholder'));
      }
    }
  }, {
    key: '_validation',
    value: function _validation(e) {
      e.preventDefault();
      if (this.fname.value.match(/\d/i) || this.fname.value.replace(/\s+/g, '') === '') {
        this._showNote(this.fname, 'Please enter correct first name');
        this.fname.classList.add('warning');
      }

      if (this.lname.value.match(/\d/i) || this.lname.value.replace(/\s+/g, '') === '') {
        this._showNote(this.lname, 'Please enter correct last name');
        this.lname.classList.add('warning');
      }

      if (!this.email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
        this._showNote(this.email, 'Email is wrong');
        this.email.classList.add('warning');
      }
    }
  }, {
    key: '_showNote',
    value: function _showNote(anchor, text) {
      var note = document.createElement('div');
      note.className = anchor.getAttribute('name') + '__note';
      note.classList.add('note');
      note.innerHTML = text;
      document.body.appendChild(note);
      this._notePosition(anchor, note);
    }
  }, {
    key: '_notePosition',
    value: function _notePosition(anchor, elem) {
      var anchorCoords = this._getCoords(anchor);
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
    }
  }, {
    key: '_getCoords',
    value: function _getCoords(elem) {
      var box = elem.getBoundingClientRect();
      var body = document.body;
      var docEl = document.documentElement;

      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      var clientTop = docEl.clientTop || body.clientTop || 0;
      var clientLeft = docEl.clientLeft || body.clientLeft || 0;

      var top = box.top + scrollTop - clientTop;
      var left = box.left + scrollLeft - clientLeft;

      return {
        top: top,
        left: left
      };
    }
  }]);

  return Form;
}();

exports.default = Form;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToTop = function () {
  function ToTop(_ref) {
    var cls = _ref.cls;

    _classCallCheck(this, ToTop);

    this.cls = cls;
    this.btn = document.querySelector('.' + this.cls);
    this.btn.addEventListener('click', this._up.bind(this));
    window.addEventListener('scroll', this._scroled.bind(this));
  }

  _createClass(ToTop, [{
    key: '_scroled',
    value: function _scroled() {
      if (window.pageYOffset >= document.documentElement.clientHeight) {
        this.btn.classList.add(this.cls + '__active');
      }
      if (window.pageYOffset < document.documentElement.clientHeight) {
        this.btn.classList.remove(this.cls + '__active');
      }
    }
  }, {
    key: '_up',
    value: function _up() {
      var t = void 0;
      this.top = window.pageYOffset;
      if (this.top > 0) {
        window.scrollBy(0, -100);
        t = setTimeout(this._up.bind(this), 20);
      } else {
        clearTimeout(t);
      }
    }
  }]);

  return ToTop;
}();

exports.default = ToTop;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SmoothScroll = function () {
  function SmoothScroll() {
    _classCallCheck(this, SmoothScroll);

    this.menu = document.querySelector('.main-nav');
    this.menu.addEventListener('click', this.scrollToAnchor.bind(this));
  }

  _createClass(SmoothScroll, [{
    key: 'getCurrentYPosition',
    value: function getCurrentYPosition() {
      if (window.pageYOffset || document.documentElement.scrollTop) {
        return window.pageYOffset || document.documentElement.scrollTop;
      }
      return 0;
    }
  }, {
    key: 'getElemYPosition',
    value: function getElemYPosition(elemId) {
      var elem = document.querySelector(elemId);
      return elem.offsetTop;
    }
  }, {
    key: 'smoothScroll',
    value: function smoothScroll(elemId) {
      var startY = this.getCurrentYPosition();
      var stopY = this.getElemYPosition(elemId);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY);
        return;
      }

      var speed = Math.round(distance / 100);
      if (speed >= 20) speed = 30;
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 1;
      if (stopY > startY) {
        for (var _i = startY; _i < stopY; _i += step) {
          setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
          leapY += step;
          if (leapY > stopY) leapY = stopY;
          timer++;
        }
        return;
      }

      for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
      }
    }
  }, {
    key: 'scrollToAnchor',
    value: function scrollToAnchor(e) {
      e.preventDefault();
      if (e.target.closest('a')) {
        var currentId = e.target.getAttribute('href');
        if (currentId === '#top') {
          window.scrollTo(0, 0);
          return;
        }
        this.smoothScroll(currentId);
      }
    }
  }]);

  return SmoothScroll;
}();

exports.default = SmoothScroll;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);