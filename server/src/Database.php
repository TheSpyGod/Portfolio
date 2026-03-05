<?php 
class Database {
  
    public function connect() {
        $pdo = new PDO("pgsql:host=localhost;dbname=portfolio;user=test;pass=test");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    }

}

?>
