<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <?php
        echo "<h1>Informações do formulário</h1><br>";

        if(isset($_POST['nome'])){ // se existir
            echo "Nome: " . $_POST['nome'] . "<br>";
        }

        if(isset($_POST['senha'])){ 
            echo "Senha: " . $_POST['senha'] . "<br>";
        }

        if(isset($_POST['sexo'])){ 
            echo "Sexo: ";
            foreach($_REQUEST['sexo'] as $value){
                echo $value . "<br>";
            }
        }

        /*if(isset($_POST['masculino'])){ 
            echo "Sexo:" . $_POST['masculino'] . "<br>";
        }

        if(isset($_POST['feminino'])){ 
            echo "Sexo:" . $_POST['feminino'] . "<br>";
        }*/

        if(isset($_POST['profissao'])){
            echo "Profissão: "; 
            foreach($_REQUEST['profissao'] as $value){
                echo $value . "<br>";
            }
        }

        if(isset($_POST['cidade'])){ 
            echo "Cidade: " . $_POST['cidade'] . "<br>";
        }

        if(isset($_POST['estado'])){ 
            echo "Estado: " . $_POST['estado'] . "<br>";
        }

        if(isset($_POST['descricao'])){ 
            echo "Descrição: " . $_POST['descricao'] . "<br>";
        }
    ?>
</body>
</html>