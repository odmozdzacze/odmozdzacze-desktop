const electron = require('electron');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;


function openWindow() {
    mainWindow = new BrowserWindow({
        icon: path.join(__dirname, "odmozdzacze_logo.png"),
        webPreferences: {
            devTools: false,
            nodeIntegration: false
        }
    });
    mainWindow.loadURL("https://odmozdzacze.chimekkoo.repl.co");

    const menu = Menu.buildFromTemplate([]);
    Menu.setApplicationMenu(menu);
}

app.on('ready', openWindow)

app.on('activate', openWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})