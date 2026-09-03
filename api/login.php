<?php
require_once __DIR__ . "/commonCode.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Only POST requests are allowed."]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
$username = trim((string) ($input["username"] ?? ""));
$gmail = trim((string) ($input["gmail"] ?? ""));

if ($username === "" || $gmail === "") {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Username and Gmail are required."]);
    exit;
}

$stmt = mysqli_prepare($conn, "SELECT username, gmail FROM profile_info WHERE username = ? AND gmail = ? LIMIT 1");
mysqli_stmt_bind_param($stmt, "ss", $username, $gmail);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if (mysqli_num_rows($result) === 1) {
    echo json_encode([
        "success" => true,
        "message" => "Signed in successfully.",
        "data" => mysqli_fetch_assoc($result)
    ]);
    exit;
}

http_response_code(401);
echo json_encode(["success" => false, "message" => "Invalid username or Gmail."]);
