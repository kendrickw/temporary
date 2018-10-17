const path = require('path');
const csv = require('csvtojson');
const _ = require('lodash');

const csvConfig = {
    noheader: true,
};
const csvFilePath = path.resolve(__dirname, 'Workbook1.csv');

csv(csvConfig)
    .fromFile(csvFilePath)
    .then((json) => {
        _.forEach(json, (rowEntry, row) => {
            const cols = _.values(rowEntry);
            // console.log(`${row}: `, cols);
            _.forEach(cols, (colEntry, col) => {
                // console.log(`-- ${col}: `, colEntry);
                if (/\r|\n/.exec(colEntry)) {
                    console.log(`${row + 1}:${String.fromCharCode(65 + col)} has line break`);
                }
                // console.log(`${row}:${col} `, colEntry);
            });
        });
    });