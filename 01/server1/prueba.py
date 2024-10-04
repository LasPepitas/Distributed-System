import mysql.connector
from mysql.connector import Error

def conectar_base_datos():
    connection = None  # Inicializa la variable connection
    try:
        # Establecer la conexión
        connection = mysql.connector.connect(
            host='192.250.227.17',         # Dirección IP del servidor
            database='endogast_devtest',    # Nombre de la base de datos
            user='endogast_dev',            # Nombre de usuario
            password='C,E7f,27md-E',        # Contraseña
            port=3306                        # Puerto (opcional, 3306 por defecto)
        )

        if connection.is_connected():
            print("Conexión exitosa a la base de datos")
            # Aquí puedes realizar tus consultas

    except Error as e:
        print("Error al conectar a la base de datos:", e)
    finally:
        # Cerrar la conexión
        if connection is not None and connection.is_connected():
            connection.close()
            print("Conexión cerrada")

if __name__ == "__main__":
    conectar_base_datos()
