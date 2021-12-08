let dataDivs = document.querySelectorAll('.data-div')
let crimeRates = document.querySelector('#crime-rates');
let crimeRatesDataDiv = document.querySelector('#crimeRatesData');
let gruRates = document.querySelector('#gru-rates');
let gruRatesDataDiv = document.querySelector('#gruRatesData');
let cityDevelopment = document.querySelector('#city-development');
let cityDevelopmentDiv = document.querySelector('#cityDevelopmentData');
let cityExpenditure = document.querySelector('#city-expenditure');
let cityExpenditureDiv = document.querySelector('#cityExpenditureData');


function hideAll() {
  dataDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

crimeRatesDataDiv.style.display = 'none';

crimeRates.onclick = () => {
  hideAll();
  if (crimeRatesDataDiv.style.display === 'none') {
    crimeRatesDataDiv.style.display = 'block';
  } else {
    crimeRatesDataDiv.style.display = 'none';
  }
};


gruRatesDataDiv.style.display = 'none';

gruRates.onclick = () => {
  hideAll();
  if (gruRatesDataDiv.style.display === 'none') {
    gruRatesDataDiv.style.display = 'block';
  } else {
    gruRatesDataDiv.style.display = 'none';
  }
};


cityExpenditureDiv.style.display = 'none';

cityExpenditure.onclick = () => {
  hideAll();
  if (cityExpenditureDiv.style.display === 'none') {
    cityExpenditureDiv.style.display = 'block';
  } else {
    cityExpenditureDiv.style.display = 'none';
  }
};


cityDevelopmentDiv.style.display = 'none';

cityDevelopment.onclick = () => {
  hideAll();
  if (cityDevelopmentDiv.style.display === 'none') {
    cityDevelopmentDiv.style.display = 'block';
  } else {
    cityDevelopmentDiv.style.display = 'none';
  }
};


cityExpenditureDiv.style.display = 'none';

cityExpenditure.onclick = () => {
  hideAll();
  if (cityExpenditureDiv.style.display === 'none') {
    cityExpenditureDiv.style.display = 'block';
  } else {
    cityExpenditureDiv.style.display = 'none';
  }
};

///*REPORTED CRIMES CHART
Highcharts.chart('container', {

    title: {
        text: 'Total Arrests in Gainesville, 2016-2021'
    },

    subtitle: {
        text: 'Source: data.cityofgainesville.org'
    },

    yAxis: {
        title: {
            text: 'Number of Arrests'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2016 to 2021'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2016
        }
    },

    series: [{
        name: 'Arrests',
        data: [4602, 4357, 3924, 2843, 2507, 2422]
      }, {
          name: 'Crime Responses',
          data: [17150, 16853, 16128, 13820, 13117, 10115]
      }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
