const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');
const { title } = require('process');
const { constants } = require('crypto');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}


let mainWindow
let Word
let Excel
let Powerpoint
let PDF

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true,
        title: 'DoConver'
    }))


    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);

});


const templateMenu = [{
        label: 'File'
    }

];

if (process.env.NODE_ENV !== 'production') {
    templateMenu.push({
        label: 'devTools',
        submenu: [{
                label: 'Show/Hide Dev Tools',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}