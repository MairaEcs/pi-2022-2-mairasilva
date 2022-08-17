<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Id para vídeo do YouTube (url)</h2>
    <div id="container2">
    <?php
        echo "<div class='video'>";
        if(isset($_GET['videoid'])){
            $videoid = $_GET['videoid'];
            echo "<iframe src='https://www.youtube.com/embed/" . $videoid . "'></iframe>";
        }
        echo "</div>";
    ?>
    </div>
</body>
</html>