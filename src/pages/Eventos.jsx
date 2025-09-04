import { useState } from "react";
import { Link } from "react-router-dom";

export default function Eventos() {
  const [events] = useState([
    { id: 1, title: "Reparto de comida", date: "2025-09-10", location: "Comedor Social" },
    { id: 2, title: "Donación de ropa", date: "2025-09-12", location: "Centro Comunitario" },
    { id: 3, title: "Clases de apoyo escolar", date: "2025-09-15", location: "Biblioteca Local" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Eventos</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600 mb-2">Fecha: {event.date}</p>
            <p className="text-gray-600 mb-3">Lugar: {event.location}</p>
            <Link
              to={`/evento/${event.id}`}
              className="w-full inline-block text-center py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium"
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
