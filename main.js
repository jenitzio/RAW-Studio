const { app, BrowserWindow } = require('electron');
const path = require('node:path');

app.whenReady().then(() => {
  const window = new BrowserWindow({
    width: 1400,
    height: 900,
    backgroundColor: '#2b2b2b',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    }
  });

  window.loadFile(path.join(__dirname, 'index.html'));
});

app.on('window-all-closed', () => app.quit());
