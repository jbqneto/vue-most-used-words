const { ipcMain } = require('electron');

ipcMain.on('sendSubtitles', (event, args) => {
  console.log(args);
  event.reply('sendSubtitles', "pong");
});