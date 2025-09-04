import { useState } from "react";

export default function AyudadosList() {
  
  const [ayudados, setAyudados] = useState([
    { id: 1, name: "Juan Pérez", need: "Comida" , assisted: false},
    { id: 2, name: "María López", need: "Ropa", assisted: false },
    { id: 3, name: "Carlos Ruiz", need: "Transporte", assisted: false },
  ]);

  const handleAssist = (id) => {
    setAyudados(ayudados.map(a =>
      a.id === id ? { ...a, assisted: !a.assisted } : a
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Personas que necesitan ayuda</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ayudados.map((a) => (
          <div key={a.id} className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold">{a.name}</h2>
            <p className="text-gray-600 mb-3">Necesita: {a.need}</p>
            <button
              onClick={() => handleAssist(a.id)}
              className={`w-full py-2 px-4 rounded-xl font-medium transition ${
                a.assisted
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {a.assisted ? "Ayuda asignada ✅" : "Ayudar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
