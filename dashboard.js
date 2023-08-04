google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetId = '1kh865J7uGpI_FglAOGmOFKGGZatCn6Cc5oi-0l_0vgE';
    var range = 'TS!A16:C20';

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }
 
    var data = response.getDataTable();
    drawColumnChart(data);
    //drawPieChart(data);
    drawAreaChart(data);
    drawLineChart(data);
}

function drawColumnChart(data) {
    var options = {
        title: 'Tinggi kolom secara langsung mencerminkan nilai data yang terkait, sehingga perbandingan antara kategori dapat dengan cepat dipahami.',
        width: 400,
        height: 300
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart1'));
    chart.draw(data, options);
}



function drawAreaChart(data) {
    var options = {
        title: 'Memvisualisasikan data secara proporsional tinggi sehingga perbandingan antara kategori dapat dengan mudah dipahami secara visual. ',
        width: 400,
        height: 300
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart3'));
    chart.draw(data, options);
}

function drawLineChart(data) {
    var options = {
        title: 'Line chart memudahkan dalam mengenali puncak dan lembah dari data',
        width: 400,
        height: 300
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart4'));
    chart.draw(data, options);
}
