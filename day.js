var trace1 = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  values: [42233, 43075, 45402, 43099, 47695, 40797, 37698],
   type: 'pie'
 };

var data = [trace1];

var layout = {
  title: "Crime by Day",
};

Plotly.newPlot("plot", data, layout);