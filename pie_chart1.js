// Get the canvas element
var canvas = document.getElementById('pie_chart1');

// Set the data and options for the chart
var data = {
  labels: ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5'],
  datasets: [{
    data: [0, 0, 0, 0, 0],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#4BC0C0',
      '#9966FF'
    ]
  }]
};

var options = {
   responsive: false,
  maintainAspectRatio: false,
  width: 400,
  height: 400
};

// Create the chart
var pieChart = new Chart(canvas, {
  type: 'pie',
  data: data,
  options: options
});

// Generate random data and update the chart every 4 seconds
setInterval(function() {
  var newData = [];
  for (var i = 0; i < 5; i++) {
    newData.push(Math.floor(Math.random() * 100));
  }
  pieChart.data.datasets[0].data = newData;
  pieChart.update();
}, 4000);
