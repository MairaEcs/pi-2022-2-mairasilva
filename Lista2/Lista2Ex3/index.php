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
    <h2>Recados</h2>
    
    <form action="index.php" method="post">
        <label for="nome">Nome</label><br>
        <input type="text" name="nome" id="idnome"><br>

        <label for="mensagem">Mensagem</label><br>
        <input type="textarea" name="mensagem" id="idmensagem"><br>

        <input type="submit" value="Enviar" id="idenviar">
    </form>

    <div id="container">
      <?php
        date_default_timezone_set('America/Sao_Paulo');
        
        echo "<h2>Mural de recados</h2><br>";

        echo "<div class='recados'>";
        if(isset($_POST['nome'])){
            echo "<b>" . $_POST['nome'] . "</b>" . " (" . date("Y-m-d") . " " . date("h:i A") . ")";
        }

        if(isset($_POST['mensagem'])){
            echo "<p>" . $_POST['mensagem'] . "</p><br>";
        }
        echo "</div>";
      ?>
    </div>
</body>
</html>