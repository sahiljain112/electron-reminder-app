import path from 'path'
import menubar from 'menubar'

const dir = path.join(__dirname, '..')
const indexURL = path.join('file://', dir, 'index.html')
// const indexPath = path.join(__dirname, '..',)
// const indexURL = 'file://' + indexPath + '/index.html'
console.log(indexURL)
const mb = menubar({
  width: 200,
  height: 90,
  dir,
  showDockIcon: true
})

mb.on('ready', () => {
  console.log('Menu bar')
  mb.showWindow()
  mb.app.dock.hide()
})

mb.on('after-hide', () => {
  console.log('Hiding window')
  mb.window.loadURL(indexURL)
})
