<!DOCTYPE html>
<html lang="ja" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  <?php
  $file_names = glob('./data/*'); // ファイル名取得

  for ($i = 0; $i < count($file_names); $i++) {
    $game_title = explode("/", $file_names[$i]);
    $game_title = explode(".", $game_title[count($game_title)-1]);
    echo '<a target="_blank" href="./vis.php?file_name='.$file_names[$i].'">'.$game_title[0].'</a><br>'."\n";
  }
  ?>
  </body>
</html>
