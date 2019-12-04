window.chartColors = {
  red: "#FF0000",
  blue: "#00FF00"
};

var color = Chart.helpers.color;
var scatter_data = {
  datasets:[{
    label: "schatter dots",
    borderColor: window.chartColors.blue,
    backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
    pointRadius: 5,

    data: [{
      x: 10,
      y: 150
    },{
      x: 20,
      y: 120
    },{
      x: 30,
      y: 160
    }]

  }]
};

var ctx = document.getElementById('canvas2').getContext('2d');
window.myScatter = Chart.Scatter(ctx, {
  data: scatter_data,
  options:{
    scales:{
      yAxes :[{
        display: true,
        scaleLabel:{
          display: true,
          labelString: '速度',
          fontSize: 10
        },
        ticks: {                      //最大値最小値設定
          min: 100,                   //最小値
          max: 230,                  //最大値
          fontSize: 10,             //フォントサイズ
          stepSize: 20,              //軸間隔
        },
      }],
      xAxes: [{                         //x軸設定
        display: true,                //表示設定
        scaleLabel: {                 //軸ラベル設定
           display: true,             //表示設定
           labelString: 'サーブの落ちたエリア',  //ラベル
           fontSize: 10               //フォントサイズ
        },

        ticks: {
            display: false,
            min: 0,
            max: 40,
            fontSize: 10,
            stepSize: 10
        },
    }],

    },
    title: {
      display: true,
      text: "Chart.js Scatter Chart"
    },
  }
});
