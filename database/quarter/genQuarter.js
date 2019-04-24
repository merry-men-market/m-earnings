const fs = require('fs');
const { bar } = require('../progressBar');

const EPSQuarter = [
  'Q4 2017',
  'Q1 2018',
  'Q2 2018',
  'Q3 2018',
  'Q4 2018',
  'Q1 2019',
  'Q2 2019'
];

const quantity = 10000000
let writer = fs.createWriteStream(__dirname + '/quarterDetails.csv');

function writeTenMillionTimes(writer, dataGenerator, encoding, callback, i) {
  function write() {
    let ok = true;
    do {
      i++;
      let quarterNumber = 0;
      for (const quarter of EPSQuarter) {
        quarterNumber += 1;
        let result = dataGenerator(i, quarter,  quarterNumber) + '\n';
        if (i === quantity && quarterNumber === 7) {
          writer.write(result, encoding, callback);
        } else {
          ok = writer.write(result, encoding);
        }
      }
      bar.tick();
    } while (i < quantity && ok);
    if(i < quantity) {
      writer.once('drain', write);
    }
  }
  write();
}

function generateQuarterInfo(company_id, quarterName, quarterNumber) {
  const quarterData = [];
  let actualEarning = Math.random() * 7;
  let estimatedEarning = actualEarning;

  let range = Math.floor(Math.random() * 100);
  range *= Math.floor(Math.random() * 2) === 1 ? 0.45 : -0.40;
  actualEarning *= (1 + range / 100);
  actualEarning = actualEarning.toFixed(2);

  let estimateRange = Math.floor(Math.random() * 100);
  estimateRange *= Math.floor(Math.random() * 2) === 1 ? 0.10 : -0.10;
  estimatedEarning = actualEarning * (1 + estimateRange / 100);
  estimatedEarning = estimatedEarning.toFixed(2);
  actualEarning = Number(actualEarning);
  estimatedEarning = Number(estimatedEarning);

  quarterData.push(company_id, quarterName, quarterNumber, actualEarning, estimatedEarning)

  return quarterData.join();
}

writeTenMillionTimes(writer, generateQuarterInfo, encoding = 'UTF-8', callback = () => console.log('completed the file write'), i = 0);