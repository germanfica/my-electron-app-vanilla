const { app, BrowserWindow } = require('electron');

// Keep a global reference of the window object, if you don't, the window will 
// be closed automatically when the JavaScript object is garbage collected.
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
}

// Create myWindow, load the rest of the app
app.whenReady().then(() => {
    createWindow();

    // Linux and Windows
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') app.quit()
    });
});

// macOS
// app.whenReady().then(() => {
//     createWindow()
  
//     app.on('activate', () => {
//       if (BrowserWindow.getAllWindows().length === 0) createWindow()
//     })
// });
