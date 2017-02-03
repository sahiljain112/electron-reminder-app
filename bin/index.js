'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFormattedTime = function getFormattedTime(secondsLeft) {
  var mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;
  return [mins, secondsLeft];
};

var DisplayText = function DisplayText(props) {
  return _react2.default.createElement(
    'div',
    { className: 'display-content slide-right' },
    props.message
  );
};

var DisplayClock = function DisplayClock(props) {
  var secondsLeft = props.secondsLeft;

  var _getFormattedTime = getFormattedTime(secondsLeft),
      _getFormattedTime2 = _slicedToArray(_getFormattedTime, 2),
      mins = _getFormattedTime2[0],
      secs = _getFormattedTime2[1];

  console.log('Mins and secs', mins, secs);

  return _react2.default.createElement(
    'div',
    { className: 'display-content slide-right' },
    mins,
    ' : ',
    secs
  );
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      reminder: false,
      secondsLeft: props.reminderTime
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
        if (secondsLeft === 0) {
          (function () {
            var _props = _this2.props,
                resetTime = _props.resetTime,
                reminderTime = _props.reminderTime;

            if (_this2.state.reminder) {
              _this2.setState({
                reminder: !_this2.state.reminder,
                secondsLeft: reminderTime
              }, function () {
                _this2.timeKeeper(reminderTime);
              });
            } else {
              _this2.setState({
                reminder: !_this2.state.reminder,
                secondsLeft: reminderTime
              }, function () {
                _this2.timeKeeper(resetTime);
              });
            }
          })();
        } else {
          secondsLeft = secondsLeft - 1;
          _this2.timeKeeper(secondsLeft);
          _this2.setState({ secondsLeft: _this2.state.secondsLeft - 1 });
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

      console.log(__dirname);
      var _state = this.state,
          reminder = _state.reminder,
          secondsLeft = _state.secondsLeft;
      //  console.log('Rendered on state change')

      var message = 'Time to drink water';
      var displayContent = this.state.reminder ? _react2.default.createElement(DisplayText, { message: message }) : _react2.default.createElement(DisplayClock, { secondsLeft: secondsLeft });

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        displayContent
      );
    }
  }]);

  return App;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(App, { resetTime: 5, reminderTime: 900 }), document.querySelector('#root'));