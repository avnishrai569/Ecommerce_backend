const fs = require('fs');
const csv = require('csv-parser');

exports.processProductCSV = () => {
  const results = [];
  fs.createReadStream('products.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
};
