const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
// const Earnings = require('../database/Earning/EarningScheme');
const earningDb  = require('../database/queries.js');
const app1 = express();
const port1 = process.env.PORT || 3002;
const db = require('../database/index.js');

app1.use(cors());
app1.use(morgan('tiny'));
app1.use(bodyParser.json());
app1.use(bodyParser.urlencoded({ extended: true }));
app1.use(express.static(`${__dirname}/../public/`));
app1.use('/earnings/:query', express.static(path.join(__dirname, '../public')));
app1.locals.newrelic = newrelic;

app1.get('/api/earnings/:query', earningDb.getEarningsById);

// app1.get('/:id', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
// });

// READ - SDC
// app1.get('/api/earnings', (req, res) => {
  // set Default data equal to 001
    // db.getEarning("001", (data) => {
    //   res.status(200).json(data)
    // })

//     Earnings.find({}, (err, data) => {
//       if (err) {return err}
//       res.send(data)
//     });
// });




// app1.get('/api/earnings/:id', (req, res) => {
  // set Default data equal to 001
    // db.getEarning(req.params.id, (data) => {
    //   res.status(200).json(data)
    // })
//     Earnings.find({id: req.params.id}, (err, data) => {
//       if (err) {return err}
//       res.send(data)
//     });
// });

// POST - SDC

// app1.post('/api/earnings', (req, res) => {
//   const { body } = req;
//    console.log('body: ', body);
//   if(!body.id || !body.company || !body.actualEarning || !body.estimatedEarning || !body.quarter || !body.quarterNumber) {
//     return res.status(500);
//   } else {
//     Earnings.create(body, function(err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Successfully added the new post');
//         res.send(data);
//       }
//     });
//   }
// });

// UPDATE - SDC

// app1.patch('/api/earnings/:id', function(req, res) {
//   var id =  req.params.id;
//   Earnings.findOneAndUpdate({id: id}).exec((err, docs) => {
//     if (err){
//       res.status(500).send(err)
//     }
//     res.send(docs)
//   });
// });

// DELETE - SDC

// app1.delete('/api/earnings/:id', function (req, res) {
//   var id = req.params.id;
//   Earnings.deleteOne({ id: id }, (error) => {
//     if (error){
//       res.status(500).send(error);
//     } else {
//        console.log('DELETE was success');
//       res.status(200);
//     }
//   });
// });

app1.listen(port1, () => {
  console.log(`server running at: ec2-52-53-226-249.us-west-1.compute.amazonaws.com:${port1}`);
});

