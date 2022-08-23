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
    <div id="idform">
        <h1>Recados</h1>
        
        <form action="index.php" method="post">
            <label for="nome">Nome</label><br>
            <input type="text" name="nome" id="idnome"><br>

            <label for="mensagem">Mensagem</label><br>
            <input type="textarea" name="mensagem" id="idmensagem"><br>

            <input type="submit" value="Add New Message" id="idenviar">
        </form>

    </div>
</body>
</html>