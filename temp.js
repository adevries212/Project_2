var trace1 = {
    x: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
    y: [0, 127, 891, 7756, 16348, 27166, 58840, 70279, 76272, 30508, 11854, 2895, 941, 327, 0, 0],
    type: "bar"
};

var data = [trace1];

var layout = {
    title: "Total Crimes by Temperature",
    xaxis: {
        title: "Temperature (Fahreneit)"
    },
    yaxis: {
        title: "Number of Crimes"
    },
    };


Plotly.newPlot("plot", data, layout);