const API_SERVER_1 = "http://api-system.endogastropuno.com/users";
const API_SERVER_2 = "https://distributed-system.onrender.com/api/profesor";
const API_SERVER_3 =
  "https://api-calificaciones.onrender.com/api/calificaciones";

export class UserService {
  registerUser(user) {
    return fetch(`${API_SERVER_1}/add`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  getUsers() {
    return fetch(`${API_SERVER_1}/list`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        return [];
      });
  }

  updateUser(id, user) {
    return fetch(`${API_SERVER_1}/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  deleteUser(id) {
    return fetch(`${API_SERVER_1}/${id}`, {
      method: "DELETE",
    });
  }
}

export class ProfesorService {
  registerProfesor(profesor) {
    return fetch(`${API_SERVER_2}/`, {
      method: "POST",
      body: JSON.stringify(profesor),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  getProfessors() {
    return fetch(`${API_SERVER_2}/`).then((response) => response.json());
  }

  updateProfesor(id, profesor) {
    return fetch(`${API_SERVER_2}/${id}`, {
      method: "PUT",
      body: JSON.stringify(profesor),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  deleteProfesor(id) {
    return fetch(`${API_SERVER_2}/${id}`, {
      method: "DELETE",
    });
  }
}

export class CalificacionService {
  getCalificaciones() {
    return fetch(`${API_SERVER_3}/`).then((response) => response.json());
  }
}
