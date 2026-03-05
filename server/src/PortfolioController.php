<?php
    include_once("./Database.php");

    class PortfolioController {

        public function get_portfolio() {

            $db = new Database();
            $pdo = $db->connect();

            try {
                $stmt = $pdo->query("SELECT * FROM projects");
                $projects = $stmt->fetchAll(PDO::FETCH_ASSOC);

                http_response_code(200);
                echo json_encode($projects);

            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Database error']);
            }
        }
    }

?>
