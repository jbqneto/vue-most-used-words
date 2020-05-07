const { ipcMain } = require('electron');

const pathsToRows = require('./pathToRows');
const prepareData = require('./prepareData');
const groupWords = require('./groupWords');

ipcMain.on('process-subtitles', (event, paths) => {

  pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words => groupWords(words.sort()))
    .then(groupedWords => {
      event.reply('process-subtitles', groupedWords);
    });

});