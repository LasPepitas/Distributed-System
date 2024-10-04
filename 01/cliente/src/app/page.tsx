"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  UserService,
  ProfesorService,
  CalificacionService,
} from "@/services/index";
type Employee = {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  fecha_contratacion: string;
  departamento_id: number;
};

type Student = {
  cod_est: string;
  nombres: string;
  paterno: string;
  materno: string;
  dni: string;
  fecha_nac: string;
  edad: string;
  apodo: string;
};

type Grade = {
  id: number;
  cod_est: string;
  materia: string;
  calificacion: number;
};
const UserServiceApi = new UserService();
const ProfessorServiceApi = new ProfesorService();
const CalificacionServiceApi = new CalificacionService();

export default function Component() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      nombre: "TESTE",
      apellido: "Perez",
      email: "juan.perez@example.com",
      telefono: "123456789",
      fecha_contratacion: "2022-01-15",
      departamento_id: 1,
    },
    {
      id: 2,
      nombre: "Maria",
      apellido: "Garcia",
      email: "maria.garcia@example.com",
      telefono: "987654321",
      fecha_contratacion: "2021-11-01",
      departamento_id: 2,
    },
    {
      id: 3,
      nombre: "Carlos",
      apellido: "Rodriguez",
      email: "carlos.rodriguez@example.com",
      telefono: "456789123",
      fecha_contratacion: "2022-03-22",
      departamento_id: 1,
    },
  ]);

  const [students, setStudents] = useState<Student[]>([
    {
      cod_est: "001",
      nombres: "Ana",
      paterno: "López",
      materno: "Sánchez",
      dni: "12345678",
      fecha_nac: "1998-07-15",
      edad: "25",
      apodo: "Ani",
    },
    {
      cod_est: "002",
      nombres: "Pedro",
      paterno: "Martínez",
      materno: "Gómez",
      dni: "87654321",
      fecha_nac: "1999-03-22",
      edad: "24",
      apodo: "Pete",
    },
    {
      cod_est: "003",
      nombres: "Lucía",
      paterno: "Fernández",
      materno: "Torres",
      dni: "23456789",
      fecha_nac: "2000-11-10",
      edad: "23",
      apodo: "Lu",
    },
  ]);

  const [grades, setGrades] = useState<Grade[]>([
    {
      id: 1,
      cod_est: "001",
      materia: "Mathematics",
      calificacion: 85,
    },
    {
      id: 2,
      cod_est: "002",
      materia: "History",
      calificacion: 78,
    },
    {
      id: 3,
      cod_est: "003",
      materia: "Physics",
      calificacion: 92,
    },
    {
      id: 4,
      cod_est: "001",
      materia: "Literature",
      calificacion: 88,
    },
  ]);

  const [newEmployee, setNewEmployee] = useState<Employee>({
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha_contratacion: "",
    departamento_id: 0,
  });

  const [newStudent, setNewStudent] = useState<Student>({
    cod_est: "",
    nombres: "",
    paterno: "",
    materno: "",
    dni: "",
    fecha_nac: "",
    edad: "",
    apodo: "",
  });

  const [newGrade, setNewGrade] = useState<Grade>({
    id: 0,
    cod_est: "",
    materia: "",
    calificacion: 0,
  });

  useEffect(() => {
    async function fetchData() {
      // const users = await UserServiceApi.getUsers();
      const professors = await ProfessorServiceApi.getProfessors();
      // const grades = await CalificacionServiceApi.getCalificaciones();
      console.log(professors);
      setEmployees(professors);
      // console.log(grades);
      // setGrades(grades);
      // console.log(users);
    }

    fetchData();
  }, []);

  const handleAddEmployee = async () => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    // setNewEmployee({
    //   id: 0,
    //   nombre: "",
    //   apellido: "",
    //   email: "",
    //   telefono: "",
    //   fecha_contratacion: "",
    //   departamento_id: 0,
    // });
    await ProfessorServiceApi.registerProfesor(newEmployee);
  };

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      cod_est: "",
      nombres: "",
      paterno: "",
      materno: "",
      dni: "",
      fecha_nac: "",
      edad: "",
      apodo: "",
    });
  };

  const handleAddGrade = () => {
    setGrades([...grades, { ...newGrade, id: grades.length + 1 }]);
    setNewGrade({
      id: 0,
      cod_est: "",
      materia: "",
      calificacion: 0,
    });
  };

  const handleDeleteEmployee = (id: number) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleDeleteStudent = (cod_est: string) => {
    setStudents(students.filter((student) => student.cod_est !== cod_est));
  };

  const handleDeleteGrade = (id: number) => {
    setGrades(grades.filter((grade) => grade.id !== id));
  };

  return (
    <Tabs defaultValue="employees" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="employees">Employees</TabsTrigger>
        <TabsTrigger value="students">Students</TabsTrigger>
        <TabsTrigger value="grades">Grades</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <div className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Employee</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Employee</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newEmployee.nombre}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, nombre: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="lastname" className="text-right">
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    value={newEmployee.apellido}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        apellido: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={newEmployee.email}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, email: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={newEmployee.telefono}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        telefono: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="hire-date" className="text-right">
                    Hire Date
                  </Label>
                  <Input
                    id="hire-date"
                    type="date"
                    value={newEmployee.fecha_contratacion}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        fecha_contratacion: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="department" className="text-right">
                    Department ID
                  </Label>
                  <Input
                    id="department"
                    type="number"
                    value={newEmployee.departamento_id}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        departamento_id: parseInt(e.target.value),
                      })
                    }
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleAddEmployee}>Add Employee</Button>
            </DialogContent>
          </Dialog>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Hire Date</TableHead>
                <TableHead>Department ID</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.nombre}</TableCell>
                  <TableCell>{employee.apellido}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.telefono}</TableCell>
                  <TableCell>{employee.fecha_contratacion}</TableCell>
                  <TableCell>{employee.departamento_id}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => handleDeleteEmployee(employee.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="students">
        <div className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Student</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cod_est" className="text-right">
                    Student Code
                  </Label>
                  <Input
                    id="cod_est"
                    value={newStudent.cod_est}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, cod_est: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="nombres" className="text-right">
                    Names
                  </Label>
                  <Input
                    id="nombres"
                    value={newStudent.nombres}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, nombres: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="paterno" className="text-right">
                    Paternal Surname
                  </Label>
                  <Input
                    id="paterno"
                    value={newStudent.paterno}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, paterno: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="materno" className="text-right">
                    Maternal Surname
                  </Label>
                  <Input
                    id="materno"
                    value={newStudent.materno}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, materno: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dni" className="text-right">
                    DNI
                  </Label>
                  <Input
                    id="dni"
                    value={newStudent.dni}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, dni: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="fecha_nac" className="text-right">
                    Birth Date
                  </Label>
                  <Input
                    id="fecha_nac"
                    type="date"
                    value={newStudent.fecha_nac}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        fecha_nac: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edad" className="text-right">
                    Age
                  </Label>
                  <Input
                    id="edad"
                    value={newStudent.edad}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, edad: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="apodo" className="text-right">
                    Nickname
                  </Label>
                  <Input
                    id="apodo"
                    value={newStudent.apodo}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, apodo: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleAddStudent}>Add Student</Button>
            </DialogContent>
          </Dialog>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Code</TableHead>
                <TableHead>Names</TableHead>
                <TableHead>Paternal Surname</TableHead>
                <TableHead>Maternal Surname</TableHead>
                <TableHead>DNI</TableHead>
                <TableHead>Birth Date</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Nickname</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.cod_est}>
                  <TableCell>{student.cod_est}</TableCell>
                  <TableCell>{student.nombres}</TableCell>
                  <TableCell>{student.paterno}</TableCell>
                  <TableCell>{student.materno}</TableCell>
                  <TableCell>{student.dni}</TableCell>
                  <TableCell>{student.fecha_nac}</TableCell>
                  <TableCell>{student.edad}</TableCell>
                  <TableCell>{student.apodo}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => handleDeleteStudent(student.cod_est)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="grades">
        <div className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Grade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Grade</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cod_est" className="text-right">
                    Student Code
                  </Label>
                  <Input
                    id="cod_est"
                    value={newGrade.cod_est}
                    onChange={(e) =>
                      setNewGrade({ ...newGrade, cod_est: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="materia" className="text-right">
                    Subject
                  </Label>
                  <Input
                    id="materia"
                    value={newGrade.materia}
                    onChange={(e) =>
                      setNewGrade({ ...newGrade, materia: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="calificacion" className="text-right">
                    Grade
                  </Label>
                  <Input
                    id="calificacion"
                    type="number"
                    value={newGrade.calificacion}
                    onChange={(e) =>
                      setNewGrade({
                        ...newGrade,
                        calificacion: parseInt(e.target.value),
                      })
                    }
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleAddGrade}>Add Grade</Button>
            </DialogContent>
          </Dialog>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Student Code</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell>{grade.id}</TableCell>
                  <TableCell>{grade.cod_est}</TableCell>
                  <TableCell>{grade.materia}</TableCell>
                  <TableCell>{grade.calificacion}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => handleDeleteGrade(grade.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
    </Tabs>
  );
}
