/**
 * @param {Array} rows
 * @param {Number} minLength
 */
module.exports = (rows, minLength = 3) => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows
        .filter(filterValidRow)
        .map(removeSpecialChars)
        .map(removeTags)
        .reduce(mergeRows)
        .split(' ')
        .filter(word => (word.length > minLength))
        .map(word => word.toLowerCase());

      resolve(words);
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * 
 * @param {String} row 
 */
function filterValidRow(row) {
  const notNumber = !parseInt(row.trim());
  const notEmpty = !!row.trim();
  const notInterval = !row.includes('-->');

  return notNumber && notEmpty && notInterval;
}

/**
 * 
 * @param {String} row 
 */
function removeSpecialChars(row) {
  return row.replace(/[^\w\s]/gi, '').replace('"', '');
}

const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim();
const mergeRows = (concatText, row) => `${concatText} ${row}`;