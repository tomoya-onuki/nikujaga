<!DOCTYPE html>
<html lang="ja" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width" >
    <title><?php echo $_GET['link']; ?></title>
  </head>
  <body>
    <h2><?php echo $_GET['link']; ?></h2>
    <?php
    // ファイルポインタをオープン
    $handle = fopen($_GET['link'], "r");
    // ファイル内容を出力
    while ($line = fgets($handle)) {
      echo nl2br($line);
    }
    // ファイルポインタをクローズ
    fclose($handle);
    ?>
  </body>
</html>
