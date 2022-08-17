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
    <div class="container">
        <?php
            $tabela = range(1, 100);

            $cores = array('azul', 'verde', 'vermelho');

            $num_azul = 0;
            $num_verde = 0;
            $num_vermelho = 0;

            for($i = 0; $i < 100; $i++){
                $num = rand(0, 2); // valor do index (cor)
                
                if($num == 0){
                    $num_azul++;
                }
                if($num == 1){
                    $num_verde++;
                }
                if($num == 2){
                    $num_vermelho++;
                }

                if($num_azul <= 10 && $num_azul != 0 && $num == 0){ // selecionando 10 (azul)
                    echo "<div class='" . $cores[$num] . "'>";
                    echo $tabela[$i];
                    echo "</div>";
                }
                elseif($num_verde <= 10 && $num_verde != 0 && $num == 1){ // selecionando 10 (verde)
                    echo "<div class='" . $cores[$num] . "'>";
                    echo $tabela[$i];
                    echo "</div>";
                }
                elseif($num_vermelho <= 10 && $num_vermelho != 0 && $num == 2){ // selecionando 10 (vermelho)
                    echo "<div class='" . $cores[$num] . "'>";
                    echo $tabela[$i];
                    echo "</div>";
                }else{ // restante
                    echo "<div>";
                    echo $tabela[$i];
                    echo "</div>";
                }
            }
        ?>
    </div>
</body>
</html>