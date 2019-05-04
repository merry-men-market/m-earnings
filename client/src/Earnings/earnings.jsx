/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import EarningsChartFrame from './earningsChartFrame.jsx';
import EarningBottomBar from './earningBottomBar.jsx';
import $ from 'jquery';

const host = 'localhost';
let path = window.location.pathname;

// window.location.pathname
class Earnings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earnings: [],
    };
  }

  componentDidMount() {
  //  console.log("hitting path => ", path)
   path = window.location.pathname;
    $.get(`/api${path}`, (Data) => {
      // console.log('Data: ', Data)
      const finalData = [];
      var len = Data.length;
      for (var i = 0; i < len; i++) {
        finalData.push({
          actualEarning: Data[i].actual_earning,
          estimatedEarning: Data[i].estimate_earning,
          quarterNumber: Data[i].quarter_number,
          quarterName: Data[i].quarter_name
        });
      }
      // console.log(finalData);

      // console.log("earnings got called")
    // $.get('//front-end-capstone.herokuapp.com/data/earnings', (Data) => {
      this.setState({
        earnings: finalData,
      });
    });
  }




  render() {

    // let dataFormat = [
    //   {
    //     quarterNumber: "ssss",
    //     actualEarning: "2222",
    //     estimatedEarning: "assd"
    //   }
    // ]
  
    const earningsData = this.state.earnings;
    const actEarnings = [];
    const estEarnings = [];
    earningsData.sort((a, b) => a.quarterNumber - b.quarterNumber);
    earningsData.forEach(x => actEarnings.push(x.actualEarning));
    let actMax = Math.max(...actEarnings);
    let actMin = Math.min(...actEarnings);
    const actFirstQuartile = (actMin + (actMax - actMin) / 3).toFixed(2);
    const actSecondQuartile = (actMin + (actMax - actMin) / 3 * 2).toFixed(2);
    actMax = actMax.toFixed(2);
    actMin = actMin.toFixed(2);
    const actQrt = {
      actMax,
      actSecondQuartile,
      actFirstQuartile,
      actMin,
    };
    earningsData.forEach(x => estEarnings.push(x.estimatedEarning));
    let estMax = Math.max(...estEarnings);
    let estMin = Math.min(...estEarnings);
    const estFirstQuartile = (estMin + (estMax - estMin) / 3).toFixed(2);
    const estSecondQuartile = (estMin + (estMax - estMin) / 3 * 2).toFixed(2);
    estMax = estMax.toFixed(2);
    estMin = estMin.toFixed(2);
    const estQrt = {
      estMax,
      estSecondQuartile,
      estFirstQuartile,
      estMin,
    };
    return (
    <div className="Components">
      <p className='topic'>Earnings</p>
      <div className='line'></div>
      <EarningsChartFrame earnings={earningsData} actQrt={actQrt} estQrt={estQrt}/>
      <EarningBottomBar/>
    </div>
    );
  }
}

export default Earnings;
