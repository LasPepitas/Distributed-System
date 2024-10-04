<?php

namespace App\Models;

use CodeIgniter\Model;

class UsersModel extends Model
{
    protected $table      = 'users'; // Reemplaza 'nombre_de_la_tabla' con el nombre real de la tabla
    protected $primaryKey = 'cod_est';

    protected $useAutoIncrement = true;

    // Campos permitidos para operaciones de inserción/actualización
    protected $allowedFields = [
        'nombres',
        'paterno',
        'materno',
        'dni',
        'fecha_nac',
        'edad',
        'apodo'
    ];

    // Tipos de retorno: si quieres que devuelva objetos o arrays
    protected $returnType     = 'array';
    protected $useSoftDeletes = false;

    // Validación (opcional, si quieres agregar reglas para cada campo)
    protected $validationRules    = [
        'nombres'    => 'required|min_length[2]|max_length[100]',
        'paterno'    => 'required|min_length[2]|max_length[40]',
        'materno'    => 'required|min_length[2]|max_length[40]',
        'dni'        => 'required|integer|max_length[11]',
        'fecha_nac'  => 'required|valid_date',
        'edad'       => 'required|integer',
        'apodo'      => 'permit_empty|max_length[45]',
    ];

    protected $validationMessages = [];
    protected $skipValidation     = false;
}
