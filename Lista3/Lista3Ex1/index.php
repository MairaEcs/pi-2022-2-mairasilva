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
    <div id="container">
      <?php
        include "insert.php";

        $host = "localhost";
        $user = "root";
        $pass = "";
        $db = "recados";

        $conn = mysqli_connect($host, $user, $pass, $db);

        echo "<h2>Mural de recados</h2><br>";

        if(!$conn){
            die("Conexão com o SGBD falhou." . mysqli_connect_error());
        }

        $sql = "select * from muralrecados";
        $result = mysqli_query($conn, $sql); 

        if($result){
            echo "<div class='recados'>";

            echo "<div class='quant-msg'>---------------------------------------";
            echo mysqli_num_rows($result) . " Messages(s)";
            echo "---------------------------------------</div>";
            
            while($row = mysqli_fetch_assoc($result)){
                echo "<b>" . $row['nome'] . "</b>" . " (" . $row['dataHora'] . ")";
                echo "<p>" . $row['mensagem'] . "</p><br>";
            }

            echo "</div>";
        }else{
            echo "Ocorreu um erro na consulta";
        }

        mysqli_close($conn);

        
      ?>
    </div>
</body>
</html>