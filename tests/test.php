<?php 

    $host = 'db';
    $port = '5432';
    $db = 'portfolio';
    $user = 'test';
    $passwd = 'test';

    $dsn = "pgsql:host=$host;port=$port;dbname=$db";

    header('Content-Type: application/json');
    
    try {

        $connection = new PDO($dsn, $user, $passwd,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]);

        $projects = $connection->query("SELECT * FROM projects")->fetchAll();
        $certificates = $connection->query("SELECT * FROM certifications")->fetchAll();
 
        echo json_encode([
            'projects' => $projects,
            'certificates' => $certificates
        ]);

    } catch (PDOException $e) {
        die("connection failed! " . $e->getMessage());
    }
?>
