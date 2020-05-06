const { ipcMain } = require('electron');

const pathsToRows = require('./pathToRows');
const prepareData = require('./prepareData');

ipcMain.on('process-subtitles', (event, paths) => {

  pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words => console.log(words));

  event.reply('process-subtitles', "pong");
});