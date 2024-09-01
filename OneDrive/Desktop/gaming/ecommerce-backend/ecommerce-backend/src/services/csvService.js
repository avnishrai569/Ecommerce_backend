const fs = require('fs');
const csv = require('csv-parser');

function processCSV(filePath, callback) {
    const results = [];
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            callback(results);
        });
}

module.exports = { processCSV };
