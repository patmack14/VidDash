/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          borderColor: "#80080",
          backgroundColor: "#80080",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354],
        },
        {
          borderColor: "#1E90FF",
          backgroundColor: "#1E90FF",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420],
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

const dashboardEmailStatisticsChart = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

//const theFile = './converjson.json' ;
/*



  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = evt => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      resolve(data);
      console.log(data);
    };
    reader.onerror = err => {
      reject(err);
      reader.abort();
    };
    reader.readAsBinaryString(Faucett);
  });

export default () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFiles = async files => {
    try {
      const d = await readJsonFromExcel(files[0]);
      setData(d);
    } catch (err) {
      setError(err);
    }
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  
 const fs = require('fs');
 var data= [];
 data.push(`"Scott Faucett, MD",https://vidscrip-static-content-api-vidscrip-com.s3-us-west-2.amazonaws.com/avatars/250X250/58n3cAGWDzQbNDmbAMWc25lTIbiM9MPy8jn82g9W.jpg,Off The Shelf vs Customized Knee Replacement,Why do you choose customized knee replacements for your patients?,5aa05af69fb3a50007478e7c,Wed Apr 18 2018 15:22:59 GMT-0500 (Central Daylight Time),video_progress,5aa05af69fb3a50007478e7c,0,0,0,0,0"`)
 //console.log(`${data} Hello World`)
 Papa.parse(data,{
   header:true,
   complete:function(results){
     console.log("Row:", results.data);
     
   },
    error:function(error){
      console.log(error)
    }
 });
 */
/*
const fs = require('fs');

const papa= require('papaparse');
const file = fs.createReadStream('temp.json');
var count = 0; // cache the running count
papa.parse(file, {
    worker: true, // Don't bog down the main thread if its a big file
    step: function(result) {
        // do stuff with result
    },
    complete: function(results, file) {
        console.log('parsing complete read', count, 'records.'); 
    }
});
*/
const Papa = require('papaparse');
var file = new File(["temp"], "temp.json", {
  type: "application/json",
});
Papa.parse(File, {
	complete: function(results) {
		console.log("Finished:", results.data.toString());
	}
});

const dashboardNASDAQChart = {
 
  data: {
    labels: [
      
    "Januaray",
    "Feburaray",
      
    ],
    datasets: [
      {
        data: [],
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
     
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
};
