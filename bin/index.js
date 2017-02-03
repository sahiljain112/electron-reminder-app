'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      ReminderText: true
    };
    _this.timer = _this.timer.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'timer',
    value: function timer(ms) {
      var _this2 = this;

      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(_this2.setState({ ReminderText: !_this2.state.ReminderText }));
        }, ms);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.timer(2000);
      var ReminderText = _react2.default.createElement(
        'div',
        { className: 'MainAppTile' },
        _react2.default.createElement(
          'div',
          { className: 'ReminderText' },
          _react2.default.createElement(
            'span',
            null,
            'It\'s Time To Dance'
          )
        )
      );

      var Timer = _react2.default.createElement(
        'div',
        { className: 'MainAppTile' },
        _react2.default.createElement(
          'div',
          { className: 'ReminderText' },
          _react2.default.createElement(
            'span',
            null,
            'Heldlo'
          )
        )
      );

      return _react2.default.createElement(
        'div',
        null,
        this.state.ReminderText ? ReminderText : Timer
      );
    }
  }]);

  return App;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.querySelector('#root'));