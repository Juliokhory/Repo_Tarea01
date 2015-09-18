google.load('visualization', '1.1',{'packages':['bar']});
google.setOnLoadCallback(draw_barras);

//Barras
function draw_barras() {
    var data = new google.visualization.arrayToDataTable([
          [' ', ' '],
          [" ", 90],
          [" ", 80],
          [" ", 50],
        ]);

    var options = {
        width: 350,
        legend: { position: 'none' },
        bars: 'horizontal',
        bar: { groupWidth: "100%" }
    }
    var chart = new google.charts.Bar(document.getElementById('aerobis'));
    chart.draw(data, options);
}
