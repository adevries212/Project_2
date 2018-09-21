var trace1 = {
  labels: ["Theft", "Traffic Violation Arrest", "GTA", "Malicious Mischief", "Assault", "Prostitution", "Weapons Off.", "Fire Report", "Missing Person", "Non-Criminal", "Sex Offense", "Warrant", "Other"],
  values: [96311, 4184, 9808, 17517, 17746, 634, 3363, 284, 8902, 19469, 809, 11210, 126031],
   type: 'pie'
 };

var data = [trace1];

var layout = {
  title: "Type of Crime",
};

Plotly.newPlot("plot", data, layout);