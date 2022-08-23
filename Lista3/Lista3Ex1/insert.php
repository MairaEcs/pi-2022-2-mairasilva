<?php

$nome = $_POST['nome'];
$mensagem = $_POST['mensagem'];

$host = "localhost";
$user = "root";
$pass = "";
$db = "recados";

$conn = mysqli_connect($host, $user, $pass, $db);

if($conn){
    //consulta
    $sql = "insert into muralrecados (nome, mensagem) values ('" . $nome . "', '" . $mensagem . "')"; 
    //resulta
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo "Ocorreu um erro na consulta: " . mysqli_error($conn);
    }

}else{
    die("Conexão com o SGBD falhou." . mysqli_connect_error());
}

?>