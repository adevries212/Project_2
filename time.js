var trace1 = {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    y: [11469, 6289, 5093, 3990, 3181, 3227, 5766, 8948, 11439, 10076, 12217, 19217, 24081, 17398, 14805, 15680, 17218, 17677, 24471, 22995, 17879, 11682, 10675, 9527],
    type: "line"
};

var data = [trace1];

var layout = {
    title: "Crime Rate by Time",
    xaxis: {
        title: "Time"
    },
    yaxis: {
        title: "Number of Crimes"
    },
    };


Plotly.newPlot("plot", data, layout);