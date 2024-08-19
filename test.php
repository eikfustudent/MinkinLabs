<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = 1; // Замените на реальный идентификатор пользователя
    $score = $_POST['score'];

    $stmt = $pdo->prepare("INSERT INTO test_results (user_id, score) VALUES (?, ?)");
    $stmt->execute([$user_id, $score]);

    header('Location: ../test.html');
    exit();
}
?>
