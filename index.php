<!DOCTYPE html>
<html lang="ja" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Visual K</title>
  <link rel="stylesheet" type="text/css" href="demo.css">
</head>

<body>
  <h1>Visual K</h1>

  <div>
    サーブの分析や練習をしたいテニスプレイヤー向けの、試合の進行とサーブの特徴を可視化するアプリケーション。
    試合の進行全体を把握するために行列表現を用いた。また、サーブの特徴を分析するために「落下地点」「球速」の二つのデータに
    着目し可視化を行った。今回利用したデータは2019 年の錦織圭選手の試合のものである。
  </div>

  <div>
    <h2>試合を見る</h2>
    <?php
    $file_names = glob('./data/*'); // ファイル名取得

    for ($i = 0; $i < count($file_names); $i++) {
      $game_title = explode("/", $file_names[$i]);
      $game_title = explode(".", $game_title[count($game_title) - 1]);
      // echo '<div>'."\n";
      echo '<a href="./vis.php?file_name=' . $file_names[$i] . '">' . $game_title[0] . '</a>' . "\n";
      echo "<br>\n";
    }
    ?>
  </div>
  <div>
    <h2>読み方</h2>
    <img src="./readme.png">
  </div>

  <hr>
  <center>©️2020 nikujaga.</center>
</body>

</html>