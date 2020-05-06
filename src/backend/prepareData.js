/**
 * @param {Array} rows
 */
module.exports = rows => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows.filter(filterValidRow);

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