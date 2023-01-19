const { app, BrowserWindow } = require('electron');

const createWindow = () => {

  const HomePage = new BrowserWindow({

    webPreferences: {

      // The following enable NodeJS integration and features in ElectronJS
      nodeIntegration: true,
      contextIsolation: false

    },

    fullscreen: true,
    backgroundColor: "#323232" // Dark Greyish

  });
 
  // Application Entry Point
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