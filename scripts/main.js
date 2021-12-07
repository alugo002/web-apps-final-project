let onclickDivs = document.querySelector('.onclick-div');
let dataDivs = document.querySelectorAll('.data-div');



function hideAll() {
  dataDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

onclickDivs.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
      switch (e.target.getAttribute('id')) {
        case 'crime-rates':
          document.querySelector('#crimeRatesData')
            .style.display = 'block';
              break;
        case 'gru-rates':
          document.querySelector('#gruRatesData')
            .style.display = 'block';
              break;

        }
      }
    });
