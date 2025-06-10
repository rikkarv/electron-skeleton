const { app, BrowserWindow, Menu } = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600
    });

    window.loadFile('index.html');

    const menuTemplate = [
        {
            label: 'say',
            submenu: [
                {
                    label: 'hello',
                    click: () => window.webContents.send('menu-say-hello')
                },
                {
                    label: 'goodbye',
                    click: () => window.webContents.send('menu-say-goodbye')
                },
                { type: 'separator' },
                { role: 'quit' }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});