const ctx = $("#graphics");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'População',
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
$("#graphics").hide();
const getCharts = (data) => {
    $("#graphics").show();
    myChart.data.labels = data.label;
    myChart.update();
    myChart.data.datasets[0].data = data.pop;
    myChart.update();
}


$("#search").click(() => {
    var ano = $("#ano").val();
    var municipio = $("#municipio").val();

    axios.get(`https://api-projeto-isp.vercel.app/${ano}/${municipio}`)
        .then(response => {
            getCharts(createArrays(response.data));
        })
        .catch(error => {
            console.log(error);
        })

})

const createArrays = (data) => {
    const ano = $("#ano").val();
    const municipio = $("#municipio").val();

    const res = { label: [], pop: [] };

    if (municipio == 'todos' && ano == 'todos') {
        data.forEach((response) => {
            res.pop.push(response.pop);
            res.label.push(response.ano);
        })


    } else if (municipio == 'todos' && ano != 'todos') {
        data.forEach((response) => {
            res.pop.push(parseFloat(response.pop));
            res.label.push(response.mes);
        })


    } else if (municipio != 'todos' && ano == 'todos') {
        data.forEach((response) => {
            res.pop.push(response.pop_munic);
            res.label.push(response.ano);
        })

    } else {
        data.forEach((response) => {
            res.pop.push(response.pop_munic);
            res.label.push(response.mes);
        })
    }

    return res;

}

