//chart.jsで速度、落下エリア、勝敗を散布図で描画
var cvs = document.createElement("canvas");
cvs.width = 1200;
cvs.height = 1200;
document.getElementById("container2").appendChild(cvs);
var ctx = cvs.getContext("2d");

    var scatter_data = {
      datasets:[{
        label: "win",
        data: chart_win2,
        borderColor: chart_color_win,
        backgroundColor: chart_color_win,
        pointRadius: 5,

      },
      {
        label: "lose",
        data: chart_lose2,
        borderColor: chart_color_lose,
        backgroundColor: chart_color_lose,
        pointRadius: 5,

      }],
    };
    console.log(scatter_data);

    // var ctx = document.getElementById('canvas2').getContext('2d');
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
            type: 'category',
            labels: ['','Center', 'Body', 'Wide',' '],
            display: true,                //表示設定
            scaleLabel: {                 //軸ラベル設定
               display: true,             //表示設定
               labelString: 'サーブの落ちたエリア',  //ラベル
               fontSize: 10               //フォントサイズ
            },

            ticks: {
                display: true,
                min: '',
                max: ' ',
                fontSize: 10,
                stepSize: 10,
            },
        }],

        },
        title: {
          display: true,
          text: "Second Serve"
        },
      }
    });
