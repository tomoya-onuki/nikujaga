var cvs = document.createElement("canvas");
cvs.width = 1200;
cvs.height = 1200;
document.getElementById("container1").appendChild(cvs);
var ctx = cvs.getContext("2d");

// hsv から rgb　へ変換
function hsv2rgb(h, s, v) {
    var r, g, b;
    s /= 255;
    var i = (0|(h / 60)) % 6,
    f = (h / 60) - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s);
    switch (i) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }
    return [0|r, 0|g, 0|b];
 }

// 円を書く関数
function ellipse(x, y){
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fill();
}


var rgb;

// ボールの軌道を書く関数
function line(x1, y1, x2, y2){
  var h = 180;
  var s = 255;
  var v = 255;
  rgb = hsv2rgb(h, s, v);
  ctx.strokeStyle = rgb;
  ctx.strokeStyle = "#000000";
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}


// コートで使う変数
var w = 300;
var h = 600;
// コートの描画
function court(){
  ctx.strokeStyle = "#4f4f4f";
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, w*0.1, h*0.5);
  ctx.strokeRect(w*0.1, 0, w*0.8, h*0.25);
  ctx.strokeRect(w*0.9, 0, w*0.1, h*0.5);
  ctx.strokeRect(w*0.1, h*0.25, w*0.4, h*0.25);
  ctx.strokeRect(w*0.5, h*0.25, w*0.4, h*0.25);// SCRIPTタグの生成
  ctx.strokeRect(0, h/2, w*0.1, h*0.5);
  ctx.strokeRect(w*0.1, h*0.75, w*0.8, h*0.25);
  ctx.strokeRect(w*0.9, h/2, w*0.1, h*0.5);
  ctx.strokeRect(w*0.1, h*0.5, w*0.4, h*0.25);
  ctx.strokeRect(w*0.5, h*0.5, w*0.4, h*0.25);
}


// // サーブのデータを入れる変数
// var side = 'ad';   //サーブした場所 deuceかad
// var course = 'w'; //落ちたエリア c,w,b

// 落ちたエリア別の座標
// センターの座標
var course_center_x =  w*0.5;
var course_center_y =  h*0.25;// SCRIPTタグの生成

// adから打ったときのワイド
var course_ad_wide_x = w*0.9;
var course_ad_wide_y = h*0.25;

// adから打ったときのボディ
var course_ad_body_x = w*0.7;
var course_ad_body_y = h*0.25;

// deuceから打ったときのワイド
var course_de_wide_x = w*0.1;
var course_de_wide_y = h*0.25;

// deuceから打ったときのボディ
var course_de_body_x = w*0.3;
var course_de_body_y = h*0.25;// SCRIPTタグの生成

// サーブした場所別の座標
var deuce_x = w*0.7;
var deuce_y = h;

var ad_x =  w*0.3;
var ad_y =  h;






//各コースのサーブの本数
var count_D_C = 0;
var count_D_B = 0;
var count_D_W = 0;
var count_A_C = 0;
var count_A_B = 0;
var count_A_W = 0;


// ボールの起動を書く関数
function ball_orbit(i) {
  if(side[i] == 'Deuce') {
    switch(course[i]) {
      //Deuceからcenter ===
      case 'c':
        count_D_C++;
        ctx.lineWidth = count_D_C;
        line(deuce_x, deuce_y, course_center_x, course_center_y);
      break;
      // =================

      //Deuceからwide
      case 'w':
        count_D_W++;
        ctx.lineWidth = count_D_W;
        line(deuce_x, deuce_y, course_de_wide_x, course_de_wide_y);
      break;
      // =================

      //Deuceからbody
      case 'b':
        count_D_B++;
        ctx.lineWidth = count_D_B;
        line(deuce_x, deuce_y, course_de_body_x, course_de_body_y);
      break;
      // =================

    }
  } else if (side[i] == 'Ad') {
    switch(course[i]) {
      //Adからcenter ====
      case 'c':
        count_A_C++;
        ctx.lineWidth = count_A_C;
        line(ad_x, ad_y, course_center_x, course_center_y);
      break;
      //===============

      //Adからwide ====
      case 'w':
        count_A_W++;
        ctx.lineWidth = count_A_W;
        line(ad_x, ad_y, course_ad_wide_x, course_ad_wide_y);
      break;
      //==============

      //Adからbody ====
      case 'b':
        count_A_B++;
        ctx.lineWidth = count_A_B;
        line(ad_x, ad_y, course_ad_body_x, course_ad_body_y);
      break;
      //==============
    }
  }
}

// while(!flag){}

// console.log(flag);


  console.log(player);
  ctx.strokeStyle = "#000000";
  ctx.save();
  ctx.translate(10, 10);
  court(); // 1stサーブのコートの描画
  for(var i = 0; i < side.length; i++){
    if(player[i] == '圭'){
      if(FirstSecond[i] == 1) {
        ball_orbit(i);
      }
    }
  }


  ctx.font = "20pt serif";
  ctx.fillStyle = "black";
  ctx.fillText("1stサーブ", 150-ctx.measureText("1stサーブ").width/2, 650);



  ctx.translate(320, 0);
  court(); // 2ndサーブのコートの描画
  for(var i = 0; i < side.length; i++){
    if(player[i] == '圭'){
      if(FirstSecond[i] == 2) {
        ball_orbit(i);
      }
    }
  }
  ctx.fillText("2ndサーブ", 150-ctx.measureText("2ndサーブ").width/2, 650);
  ctx.restore();
