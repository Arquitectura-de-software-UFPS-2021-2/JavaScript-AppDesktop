const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 750
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true,
        title: 'DoConver'
    }))
});