'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _menubar = require('menubar');

var _menubar2 = _interopRequireDefault(_menubar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dir = _path2.default.join(__dirname, '..');
var indexURL = _path2.default.join('file://', dir, 'index.html');
// const indexPath = path.join(__dirname, '..',)
// const indexURL = 'file://' + indexPath + '/index.html'
console.log(indexURL);
var mb = (0, _menubar2.default)({
  width: 400,
  height: 180,
  dir: dir,
  showDockIcon: true
});

mb.on('ready', function () {
  console.log('Menu bar');
  mb.showWindow();
  mb.app.dock.hide();
  //mb.window.toggleDevTools()
});

mb.on('after-hide', function () {
  console.log('Hiding window');
  mb.window.loadURL(indexURL);
});