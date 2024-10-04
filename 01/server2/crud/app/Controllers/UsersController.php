<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UsersModel;

class UsersController extends BaseController
{
    protected $usersModel;

    public function __construct()
    {
        $this->usersModel = new UsersModel();
    }

    public function añadir(){
        // Obtener los datos del cuerpo de la solicitud JSON
        $data = $this->request->getJSON(true); // true para obtenerlo como array asociativo
    
        $this->usersModel->insert($data);
    
        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Usuario creado correctamente'
            ]
        ];
    
        return $this->response->setJSON($response);
    }
    

    public function actualizar($id = null){
        //actualizar un usuario
        $data = $this->request->getJSON(true);

        $this->usersModel->update($id, $data);
        
        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Usuario actualizado correctamente'
            ]
        ];

        return $this->response->setJSON($response);
    }

    public function borrar($id = null){
        //borrar un usuario
        $this->usersModel->delete($id);

        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Usuario eliminado correctamente'
            ]
        ];

        return $this->response->setJSON($response);
    }

    public function listar(){

        //listar todos los usuarios
        $users = $this->usersModel->findAll();
        $data = [
            'users' => $users
        ];
        return  $this->response->setJSON($data);
    }
}
