const fs = require('file-system');

const EPSQuarter = [
  'Q4 2017',
  'Q1 2018',
  'Q2 2018',
  'Q3 2018',
  'Q4 2018',
  'Q1 2019',
  'Q2 2019'
];

const companyData = [{
    company: 'Snap'
  },
  {
    company: 'Tesla'
  },
  {
    company: 'Amazon'
  },
  {
    company: 'Twitter'
  },
  {
    company: 'Alibaba'
  },
  {
    company: 'Bank of America'
  },
  {
    company: 'Netflix'
  },
  {
    company: 'NVIDIA'
  },
  {
    company: 'Disney'
  },
  {
    company: 'Plug Power'
  },
  {
    company: 'Square'
  },
  {
    company: 'Zynga'
  },
  {
    company: 'Chesapeake Energy'
  },
  {
    company: 'NIO'
  },
  {
    company: 'AT&T'
  },
  {
    company: 'Hexo'
  },
  {
    company: 'Micron Technology'
  },
  {
    company: 'Groupon'
  },
  {
    company: 'Starbucks'
  },
  {
    company: 'Aphria'
  },
  {
    company: 'Rite Aid'
  },
  {
    company: 'Sirius XM'
  },
  {
    company: 'Activision Blizzard'
  },
  {
    company: 'Nintendo'
  },
  {
    company: 'Nike'
  },
  {
    company: 'Intel'
  },
  {
    company: 'iQIYI'
  },
  {
    company: 'Vanguard'
  },
  {
    company: 'Sprint'
  },
  {
    company: 'Weatherford'
  },
  {
    company: 'Coca-Cola'
  },
  {
    company: 'Berkshire Hathaway'
  },
  {
    company: 'Tilray'
  },
  {
    company: 'Boeing'
  },
  {
    company: 'ETFMG Alternative Harvest'
  },
  {
    company: 'JD.com'
  },
  {
    company: 'Visa'
  },
  {
    company: 'Yamana Gold'
  },
  {
    company: 'SPDR'
  },
  {
    company: 'Geron'
  },
  {
    company: 'PayPal'
  },
  {
    company: 'Tencent'
  },
  {
    company: 'Alphabet'
  },
  {
    company: 'Cisco'
  },
  {
    company: 'Salesforce'
  },
  {
    company: 'Roku'
  },
  {
    company: 'Corbus Pharmaceuticals'
  },
  {
    company: 'Dropbox'
  },
  {
    company: 'Walmart'
  },
  {
    company: 'J.C. Penney'
  },
  {
    company: 'GM'
  },
  {
    company: 'Vanguard Total'
  },
  {
    company: 'Bilibili'
  },
  {
    company: 'Nokia'
  },
  {
    company: 'Glu Mobile'
  },
  {
    company: 'Verizon'
  },
  {
    company: 'Vivint Solar'
  },
  {
    company: 'Shopify'
  },
  {
    company: 'Cara Therapeutics'
  },
  {
    company: 'Sony'
  },
  {
    company: 'Pfizer'
  },
  {
    company: 'Enphase Energy'
  },
  {
    company: 'CVS'
  },
  {
    company: 'Spotify'
  },
  {
    company: 'Costco'
  },
  {
    company: 'TransEnterix'
  },
  {
    company: 'Twilio'
  },
  {
    company: 'PG&E'
  },
  {
    company: 'Kraft Foods'
  },
  {
    company: 'Insys Therapeutics'
  },
  {
    company: 'AK Steel'
  },
  {
    company: 'Southwest Airlines'
  },
  {
    company: 'CRISPR'
  },
  {
    company: 'FeDex'
  },
  {
    company: 'Viking Therapeutics'
  },
  {
    company: 'JPMorgan Chase'
  },
  {
    company: 'Denbury'
  },
  {
    company: 'SunPower'
  },
  {
    company: 'Under Armour'
  },
  {
    company: 'Global X Robotics & Artificial Intelligence ETF'
  },
  {
    company: 'Stitch Fix'
  },
  {
    company: 'Applied Materials'
  },
  {
    company: 'YETI'
  },
  {
    company: 'EA'
  },
  {
    company: 'Qualcomm'
  },
  {
    company: 'Target'
  },
  {
    company: 'Teva Pharmaceutical'
  },
  {
    company: 'Johnson & Johnson'
  },
  {
    company: 'Innovative Industrial Properties'
  },
  {
    company: 'Aurora Cannabis'
  },
  {
    company: 'GE'
  },
  {
    company: 'Apple'
  },
  {
    company: 'Ford'
  },
  {
    company: 'Cronos Group'
  },
  {
    company: 'Microsoft'
  },
  {
    company: 'GoPro'
  },
  {
    company: 'Fitbit'
  },
  {
    company: 'AMD'
  },
  {
    company: 'Facebook'
  },
  {
    company: 'Canopy Growth'
  }
];

let writer = fs.createWriteStream(__dirname + '/datafile.csv');

function writeOneMillionTimes(writer, dataGenerator, encoding, callback, i) {
  function write() {
    let ok = true;
    do {
      i++;
      let result = dataGenerator(i) + '\n';
      if (i === 10000000) {
        writer.write(result, encoding, callback);
      } else {
        ok = writer.write(result, encoding);
      }
    } while (i < 10000000 && ok);
    if(i < 10000000) {
      writer.once('drain', write);
    }
  }
  write();
}

function generateCompanyInfo(i){
  const sampleData = []
  var randomIdx = Math.floor(Math.random() * 100);
  const companyName = companyData[randomIdx].company
  
  sampleData.push(i, companyName)

  let actualEarning = Math.random() * 7;
  let estimatedEarning = actualEarning;
  let quarterNumber = 0;

    for (const quarter of EPSQuarter) {
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

      sampleData.push(quarter, quarterNumber, actualEarning, estimatedEarning)
      quarterNumber += 1;
    }
    return sampleData.join()
};

writeOneMillionTimes(writer, generateCompanyInfo, encoding = 'UTF-8', callback = () => console.log('completed the file write'), i = 1);