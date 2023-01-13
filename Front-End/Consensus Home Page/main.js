const { app, BrowserWindow } = require('electron');

var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "jeffreylind",
  password: "Jefgillin2006!1",
  database: "ConsensusCoreData"
});

const createWindow = () => {

  const HomePage = new BrowserWindow({

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },

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