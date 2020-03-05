<?php

$id = file_get_contents('save/id.txt');

$json = json_encode($_POST);

$id++;
file_put_contents('save/'.$id.'.txt', $json);
file_put_contents('save/id.txt', $id);


header('Content-Type: application/json');
echo json_encode(array('id' => $id));
