<?php
require_once __DIR__ . '/commonCode.php';

$sql = "SELECT username, gmail FROM profile_info";
$result = mysqli_query($conn, $sql);

if (!$result){
    echo json_encode([
        "success" => false,
        "message" => "Database query failed: " . mysqli_error($conn)
    ]);
    exit;
}
$data =[];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode([
    "success" => true,
    "data" => $data
]);