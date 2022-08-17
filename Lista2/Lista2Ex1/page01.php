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
    <h2>Número de linhas e colunas (url)</h2>
    <div id="container1">
    <?php
        $linhas = 0;
        $colunas = 0;

        if(isset($_GET['linhas'])){
            $linhas = $_GET['linhas'];
            //echo "L = " . $linhas . "<br>";
        }
        if(isset($_GET['colunas'])){
            $colunas = $_GET['colunas'];
            //echo "C = " . $colunas . "<br>";
        }

        function cor_random($start = 0x000000, $end = 0xFFFFFF){
            return sprintf('#%06x', mt_rand($start, $end)); // valores preenchidos de 0 a 6
        }

        $cont = 1;

        for($i=0; $i<$linhas; $i++){
            for($j=0; $j<$colunas; $j++){
                echo "<div class='ret' style='background-color:" . cor_random() . "'>" . $cont++ . "</div>";
                if($j == ($colunas-1)){
                    echo "<div class='break'></div>";
                }
                
            }
        }
    ?>
    </div>
</body>
</html>