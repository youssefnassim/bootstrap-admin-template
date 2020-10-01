(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /*
   * Author: Youssef Nassim
   * Date: 21 Sep 2020
   *
   **/
  var SIDEBAR_TOGGLE_BUTTON = '[data-widget="sidebar"]';

  var Sidebar = /*#__PURE__*/function () {
    function Sidebar() {
      _classCallCheck(this, Sidebar);

      console.log('Sidebar running...'); // defaults

      this.sidebar = document.querySelector('.sidebar');
      this.toggleBtn = document.querySelector(SIDEBAR_TOGGLE_BUTTON);
      this._isHidden = false;
      this.setClickEvent();
      this.setHoverEvent();
    } // Public methods


    _createClass(Sidebar, [{
      key: "toggle",
      value: function toggle() {
        return this._isHidden ? this.show() : this.hide();
      }
    }, {
      key: "hide",
      value: function hide() {
        this._isHidden = true;
        document.querySelector('body').classList.add('sidebar-collapse');
      }
    }, {
      key: "show",
      value: function show() {
        this._isHidden = false;
        document.querySelector('body').classList.remove('sidebar-collapse');
      }
    }, {
      key: "setHoverEvent",
      value: function setHoverEvent() {
        var _this = this;

        this.sidebar.addEventListener('mouseover', function () {
          if (_this._isHidden) {
            _this.sidebar.classList.add('overlay');
          }
        });
        this.sidebar.addEventListener('mouseout', function () {
          if (_this.toggleBtn.classList.contains('active')) {
            _this.sidebar.classList.remove('overlay');
          }
        });
      }
    }, {
      key: "setClickEvent",
      value: function setClickEvent() {
        var _this = this;

        this.toggleBtn.addEventListener('click', function () {
          if (_this.toggleBtn.classList.contains('active')) {
            _this.show();

            _this.sidebar.classList.remove('overlay');
          } else {
            _this.hide();
          }
        });
      }
    }, {
      key: "getToggleBtn",
      value: function getToggleBtn(btn) {
        this.toggleBtn = btn;
      }
    }]);

    return Sidebar;
  }();

  var sidebar = new Sidebar(); // Scroll event to update header style

  window.addEventListener('scroll', function () {
    return this.scrollY > 10 ? document.querySelector('.main header').classList.add('fixed') : document.querySelector('.main header').classList.remove('fixed');
  });

})));
//# sourceMappingURL=bbat.js.map
