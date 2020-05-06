const { ipcMain } = require('electron');

const pathsToRows = require('./pathToRows');

ipcMain.on('process-subtitles', (event, paths) => {

  const rows = pathsToRows(paths);

  console.log(rows);

  event.reply('process-subtitles', "pong");
});