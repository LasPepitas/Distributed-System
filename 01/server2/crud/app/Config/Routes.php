<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');


$routes->post('users/add', 'UsersController::a単adir');
$routes->put('users/edit/(:num)', 'UsersController::actualizar/$1');
$routes->delete('users/delete/(:num)', 'UsersController::borrar/$1');
$routes->get('users/list', ['filter' => 'cors:default'], 'UsersController::listar');