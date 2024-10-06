<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->group('users', ['filter' => 'cors'], function ($routes) {
    $routes->get('add', 'UsersController::añadir');
    $routes->get('edit/(:num)', 'UsersController::actualizar/$1');
    $routes->get('delete/(:num)', 'UsersController::borrar/$1');
    $routes->get('list', 'UsersController::listar');
});
// $routes->post('users/add', 'UsersController::añadir');
// $routes->put('users/edit/(:num)', 'UsersController::actualizar/$1');
// $routes->delete('users/delete/(:num)', 'UsersController::borrar/$1');
// $routes->get('users/list', 'UsersController::listar');