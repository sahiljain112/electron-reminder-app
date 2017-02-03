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
      reminder: false
    };
    _this.timer = _this.timer.bind(_this);
    _this.timeKeeper = _this.timeKeeper.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'timer',
    value: function timer(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }, {
    key: 'timeKeeper',
    value: function timeKeeper(secondsLeft) {
      var _this2 = this;

      this.timer(1000).then(function () {
        console.log(secondsLeft);
        if (secondsLeft === 0) _this2.setState({ reminder: !_this2.state.reminder }, function () {
          console.log('reminder', _this2.state.reminder);
          var _props = _this2.props,
              resetTime = _props.resetTime,
              reminderTime = _props.reminderTime;

          _this2.state.reminder ? _this2.timeKeeper(resetTime) : _this2.timeKeeper(reminderTime);
        });else {
          secondsLeft = secondsLeft - 1;
          _this2.timeKeeper(secondsLeft);
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var reminderTime = this.props.reminderTime;

      this.timeKeeper(reminderTime);
    }
  }, {
    key: 'render',
    value: function render() {
      var timer = this.state;
      var ReminderText = _react2.default.createElement(
        'div',
        { className: 'main-title' },
        _react2.default.createElement(
          'div',
          { className: 'reminder-text' },
          _react2.default.createElement(
            'span',
            null,
            ' ',
            timer
          )
        )
      );

      var Timer = _react2.default.createElement(
        'div',
        { className: 'main-title' },
        _react2.default.createElement(
          'div',
          { className: 'reminder-text' },
          _react2.default.createElement(
            'span',
            null,
            'Heldlo'
          )
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        this.state.ReminderText ? ReminderText : Timer
      );
    }
  }]);

  return App;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(App, { resetTime: 5, reminderTime: 3 }), document.querySelector('#root'));