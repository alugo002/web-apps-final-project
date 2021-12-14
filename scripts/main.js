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
var crimeChart1 = Highcharts.chart('arrestChart', {

    title: {
        text: 'Total Arrests in Gainesville, 2016-2021'
    },

    subtitle: {
        text: 'Source: <a href="https://data.cityofgainesville.org/browse?category=Public+Safety&q=&sortBy=relevance">data.cityofgainesville.org</a>'
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



//*GRU RATES CHART
var gruChart1 = Highcharts.chart('gruRatesChart', {

    title: {
        text: 'North Central Florida Electric Bill Total Base Rate with Fuel/Cost Adjustment for the Month of Oct., 2017-2021'
    },

    subtitle: {
        text: 'Source: <a href="https://www.flpublicpower.com/electric-bill-comparisons">flpublicpower.com</a>'
    },

    yAxis: {
        title: {
            text: '1,000 kWh Residential Total Base Rate for Oct.'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2017 to 2021'
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
            pointStart: 2017
        }
    },

    series: [{
        name: 'Gainesville',
        data: [131.55, 122.87, 131.63,  123.13, 129.59]
      }, {
          name: 'Alachua',
          data: [113.40, 113.54, 113.29, 113.29, 112.79]
      }, {
          name: 'Jacksonville',
          data: [108.50, 108.50, 108.50, 108.50, 108.33]
      }, {
          name: 'Newberry',
          data: [107.50, 110.70, 89.50, 114.50, 114.04]
      }, {
          name: 'Ocala',
          data: [117.64, 119.20, 116.51, 120.64, 120.64]
      }, {
          name: 'Starke',
          data: [101.65, 103.74, 94.85, 106.08, 121.50 ]
      }, {
          name: 'Tallahassee',
          data: [112.81, 109.07, 110.59, 110.50, 117.85]
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


//*GRU REVENUE CHART
var gruChart2 = Highcharts.chart('gruRevenueChart', {

    title: {
        text: 'Residential Sales Revenues for Florida Utility Companies Serving Between 50,000-140,000 Customers, 2017-2020'
    },

    subtitle: {
        text: 'Source: <a href="http://www.psc.state.fl.us/Publications/ShowElectricStatistics">psc.state.fl.us</a>'
    },

    yAxis: {
        title: {
            text: 'Residential Retail Sales Revenue by Megawatt-Hours'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2017 to 2020'
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
            pointStart: 2017
        }
    },

    series: [{
        name: 'Gainesville Regional Utilities',
        data: [806074, 833940, 837470,  850316]
      }, {
          name: 'Kissimmee Utility Authority',
          data: [842714, 879291, 915297, 970014]
      }, {
          name: 'Lakeland Electric',
          data: [1460334, 1524441, 1539686, 1621806]
      }, {
          name: 'Ocala Electric Utility',
          data: [509389, 532411, 537008, 557510]
      }, {
          name: 'Tallahassee',
          data: [1059408, 1122468, 1151709, 1148933]
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



//*City Permits Issued chart
var developmentChart1 = Highcharts.chart('permitChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of Building Permits Issued by the City, 2016-2020'
    },
    subtitle: {
        text: 'Source: <a href="https://data.cityofgainesville.org/browse?category=Building+%26+Development&q=&sortBy=relevance&utf8=%E2%9C%93&page=1">data.cityofgainesville.org</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total permits issued'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}'
    },

    series: [
        {
            name: "Permits",
            colorByPoint: true,
            data: [
                {
                    name: "2016",
                    y: 8631,
                    drilldown: "2016"
                },
                {
                    name: "2017",
                    y: 7750,
                    drilldown: "2017"
                },
                {
                    name: "2018",
                    y: 8073,
                    drilldown: "2018"
                },
                {
                    name: "2019",
                    y: 9164,
                    drilldown: "2019"
                },
                {
                    name: "2020",
                    y: 6344,
                    drilldown: "2020"
                },
                {
                    name: "2021",
                    y: 11665,
                    drilldown: "2021"
                },
            ]
        }
    ],
});


//*Permit types charts
var developmentChart1 = Highcharts.chart('permitTypeChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Types of New Construction Commercial/Apartment Projects Listed in City Permits, 2016-2021'
    },
    xAxis: {
        categories: ['2016', '2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total New Commercial/Housing Projects Listed'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'New Apartment Construction',
        data: [60, 6, 6, 21, 5, 23]
    }, {
        name: 'New Commercial Construction',
        data: [81, 25, 35, 36, 21, 52]
    }, {
        name: 'New Residential Dwelling',
        data: [409, 119, 134, 185, 149, 214]
    }]
});


//*City Funds CHART
var expenseChart1 = Highcharts.chart('expenseChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of Building Permits Issued by the City, 2016-2020'
    },
    subtitle: {
        text: 'Source: <a href="https://data.cityofgainesville.org/browse?category=Public+Administration+%26+Finance&q=&sortBy=relevance&utf8=%E2%9C%93&page=1">data.cityofgainesville.org</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total expenses'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}'
    },

    series: [
        {
            name: "Expenses",
            colorByPoint: true,
            data: [
                {
                    name: "Amazon",
                    y: 113878.26,
                    drilldown: "Amazon"
                },
                {
                    name: "Gainesville Regional Utilities",
                    y: 4079687.62,
                    drilldown: "GRU"
                },
                {
                    name: "Zoom",
                    y: 10187.26,
                    drilldown: "Zoom"
                },
                {
                    name: "Lowes",
                    y: 59587.98,
                    drilldown: "Lowes"
                },
                {
                    name: "Home Depot",
                    y: 42222.68,
                    drilldown: "Home Depot"
                },
            ]
        }
    ],
});


//*ScrollMagic
  var arrestController = new ScrollMagic.Controller();
  var arrestScene = new ScrollMagic.Scene({
    triggerElement: '#arrestChart',
  })
  .setClassToggle('#arrestChart', 'show')
  .addTo(arrestController);



      var gruRatesController = new ScrollMagic.Controller();
      var gruRatesScene = new ScrollMagic.Scene({
        triggerElement: '#gruRatesChart',
      })
      .setClassToggle('#gruRatesChart', 'show')
      .addTo(gruRatesController);


        var gruRevenueController = new ScrollMagic.Controller();
        var gruRevenueScene = new ScrollMagic.Scene({
          triggerElement: '#gruRevenueChart',
        })
        .setClassToggle('#gruRevenueChart', 'show')
        .addTo(gruRevenueController);


          var permitController = new ScrollMagic.Controller();
          var permitScene = new ScrollMagic.Scene({
            triggerElement: '#permitChart',
          })
          .setClassToggle('#permitChart', 'show')
          .addTo(permitController);


            var permitTypeController = new ScrollMagic.Controller();
            var permitTypeScene = new ScrollMagic.Scene({
              triggerElement: '#permitTypeChart',
            })
            .setClassToggle('#permitTypeChart', 'show')
            .addTo(permitTypeController);


              var expenseController = new ScrollMagic.Controller();
              var expenseScene = new ScrollMagic.Scene({
                triggerElement: '#expenseChart',
              })
              .setClassToggle('#expenseChart', 'show')
              .addTo(expenseController);

//*Back to top button
    back2Top = document.getElementById("topButton");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        back2Top.style.display = "block";
      } else {
        back2Top.style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
