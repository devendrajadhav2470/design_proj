
      const chartData = {
        labels: [],
        datasets: [{
          label: 'My Dataset',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

      const ctx = document.getElementById('line_chart1').getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 100
            }
          }
        }
      });


      // line_chart2


      const chartData2 = {
        labels: [],
        datasets: [{
          label: 'My Dataset1',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },{
                  label: 'My Dataset2',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1},
          {          label: 'My Dataset3',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1}

        ]
      };

      const ctx2 = document.getElementById('line_chart2').getContext('2d');
      const chart2 = new Chart(ctx2, {
        type: 'line',
        data: chartData2,
        options: {
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 100
            }
          }
        }
      });








      // Simulate new data arriving every 2 seconds
      setInterval(() => {
            const now = new Date();

    // format the time as a string in the desired format
    sec = now.getSeconds();
    if(sec<5){
      sec=0;
    }
    else{
      sec=sec-5;
    }
    const timeStr = `${now.getFullYear()}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}_${now.getMinutes().toString().padStart(2, '0')}_	${sec.toString().padStart(2, '0')}`;
     	url = "http://127.0.0.1:8000/data/"+timeStr+".txt";

	  fetch(url, { method: 'HEAD' })
  .then(response => {
    if (response.ok) {
      // If the file exists, fetch it and process the data
      fetch(url)
        .then(response => response.text())
        .then(data => {
          const cols=data.split(',');
          console.log(cols);

		
	const randomData = parseFloat(cols[0]);
        chartData.labels.push(new Date().toLocaleTimeString());
        chartData.datasets[0].data.push(randomData);

        chartData2.labels.push(new Date().toLocaleTimeString());
        chartData2.datasets[0].data.push(parseFloat(cols[1]));
        chartData2.datasets[1].data.push(parseFloat(cols[2]));
        chartData2.datasets[2].data.push(parseFloat(cols[3]));
        // Shift the chart leftward after plotting 10 points
        if (chartData.labels.length > 10) {
          chartData.labels.shift();
          chartData.datasets[0].data.shift();
        }
        if (chartData2.labels.length > 10) {
          chartData2.labels.shift();
          chartData2.datasets[0].data.shift();
          chartData2.datasets[1].data.shift();
          chartData2.datasets[2].data.shift();
        }

        chart.update();
        chart2.update();
		
        });
    } else {
      // If the file does not exist, call fetchData again after a delay
      // setTimeout(setData(data.datasets[0].data),1000);
    }
  })
  .catch(error => {
    console.error('Error checking file existence: ' + error.message);
    // If an error occurs, call fetchData again after a delay
    // setTimeout(setData(data.datasets[0].data),1000);
  }); 




      }, 4000);