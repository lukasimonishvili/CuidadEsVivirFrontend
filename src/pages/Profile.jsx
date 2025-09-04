import { useUser } from "../UserContext";
import Card from "../components/Card";
import { useState } from "react";

export default function Profile() {
  const { userRole } = useUser();

  // Mock del usuario logueado
  const user = {
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    dob: "1990-05-12",
    dni: "12345678A",
    role: userRole, // "admin" | "ayudante" | "ayudado"
  };

  // Mock de tareas asignadas al usuario
  const [tasks] = useState([
    { id: 1, title: "Reparto de comida", joined: true },
    { id: 2, title: "Clases de apoyo escolar", joined: false },
  ]);

  // Mock de eventos asignados al usuario
  const [events] = useState([
    { id: 1, title: "Donación de ropa", joined: true },
    { id: 2, title: "Transporte solidario", joined: false },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold mb-6">Perfil de Usuario</h1>

        {/* Información básica */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="font-semibold">Nombre:</p>
            <p className="text-gray-700">{user.name}</p>
          </div>
          <div>
            <p className="font-semibold">Correo:</p>
            <p className="text-gray-700">{user.email}</p>
          </div>
          <div>
            <p className="font-semibold">Fecha de nacimiento:</p>
            <p className="text-gray-700">{user.dob}</p>
          </div>
          <div>
            <p className="font-semibold">DNI/NIE:</p>
            <p className="text-gray-700">{user.dni}</p>
          </div>
          <div>
            <p className="font-semibold">Rol:</p>
            <p className="text-gray-700 capitalize">{user.role}</p>
          </div>
        </div>

        {/* Tareas asignadas */}
        <h2 className="text-2xl font-semibold mb-4">Tus Tareas</h2>
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {tasks.map(task => (
            <Card
              key={task.id}
              title={task.title}
              description=""
              buttonText={task.joined ? "Unido ✅" : "No unido"}
              buttonColor={task.joined ? "green" : "blue"}
            />
          ))}
        </div>

        {/* Eventos asignados */}
        <h2 className="text-2xl font-semibold mb-4">Tus Eventos</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {events.map(event => (
            <Card
              key={event.id}
              title={event.title}
              description=""
              buttonText={event.joined ? "Unido ✅" : "No unido"}
              buttonColor={event.joined ? "green" : "blue"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
