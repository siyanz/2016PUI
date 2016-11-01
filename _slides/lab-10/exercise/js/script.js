var ctx = $("#myChart");

function dataGenerator(n) {
  var data = [];
  for (i = 0; i < n; i++) {
    data[i] = Math.floor((Math.random() * 10) + 1);
  }
  return data;
}

var data = dataGenerator(6);
var dataInput = {
  labels: ["random1", "my cat's weight", "my cat's age", "# of dumplings I can eat per bite",
              "amount of kids I will have", "# of beer I can tolerate"],
  datasets: [
    {
      label: "test data",
      data: data,
    }
  ]
}
console.log(ctx);
var chartInstance = new Chart(ctx, {
  type: 'bar',
  data: dataInput,
  options: {
    responsive: true
  }
});