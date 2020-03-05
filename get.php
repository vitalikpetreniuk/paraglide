<?php

$data = file_get_contents('save/'.$_POST['id'].'.txt');

header('Content-Type: application/json');
echo $data;