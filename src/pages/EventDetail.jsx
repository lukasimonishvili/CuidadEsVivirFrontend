import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EventDetail() {
  const { id } = useParams();

  const [events, setEvents] = useState([
    { id: 1, title: "Reparto de comida", description: "Ayuda a repartir comida a personas necesitadas.", date: "2025-09-10", location: "Comedor Social", joined: false },
    { id: 2, title: "Donación de ropa", description: "Organiza ropa para familias necesitadas.", date: "2025-09-12", location: "Centro Comunitario", joined: false },
    { id: 3, title: "Clases de apoyo escolar", description: "Apoyo escolar para niños de la comunidad.", date: "2025-09-15", location: "Biblioteca Local", joined: false },
  ]);

  const event = events.find(e => e.id === parseInt(id));
  if (!event) return <p className="p-6">Evento no encontrado</p>;

  const handleJoin = () => {
    setEvents(events.map(e =>
      e.id === event.id ? { ...e, joined: !e.joined } : e
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow p-6 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-600 mb-2"><strong>Fecha:</strong> {event.date}</p>
        <p className="text-gray-600 mb-2"><strong>Lugar:</strong> {event.location}</p>
        <p className="text-gray-700 mb-4">{event.description}</p>

        <button
          onClick={handleJoin}
          className={`w-full py-2 px-4 rounded-xl font-medium transition ${
            event.joined
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {event.joined ? "Te uniste al evento ✅" : "Unirse al evento"}
        </button>
      </div>
    </div>
  );
}
