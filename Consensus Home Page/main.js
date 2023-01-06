const { app, BrowserWindow } = require('electron');

const createWindow = () => {

  const HomePage = new BrowserWindow({

    fullscreen: true,
    backgroundColor: "#323232"

  });

  HomePage.loadFile('HomePage.html');

};

app.whenReady().then(() => {

  createWindow();

  app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) {

      createWindow();

    }
  });
});

// Assists With Platform-Specific Application Closing
app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {

    app.quit();
    
  }
});