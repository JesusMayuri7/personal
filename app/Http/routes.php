<?php
use Illuminate\Http\Request;

$app->get('/', function () use ($app) {
    return view('index');
});

$app->get('api/personal','CtrlPersonal@show');
$app->get('api/personal/{dni}','CtrlPersonal@index');
$app->put('api/personal','CtrlPersonal@update');
$app->delete('api/personal/{dni}','CtrlPersonal@delete');
$app->post('api/personal','CtrlPersonal@create');

$app->get('{slug:.*}', function () use ($app) {
    return view('index');
});



