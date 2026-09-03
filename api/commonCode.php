<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
	http_response_code(204);
	exit;
}

$conn = mysqli_connect("localhost", "root", "", "profile-info");
if (!$conn) {
	http_response_code(500);
	echo json_encode(["success" => false, "message" => "Database connection failed."]);
	exit;
}

mysqli_set_charset($conn, "utf8mb4");

$createTableSql = "CREATE TABLE IF NOT EXISTS profile_info (
    username VARCHAR(100) NOT NULL PRIMARY KEY,
    gmail VARCHAR(200) NOT NULL
)";

if (!mysqli_query($conn, $createTableSql)) {
	http_response_code(500);
	echo json_encode(["success" => false, "message" => "Unable to prepare the profile table."]);
	exit;
}