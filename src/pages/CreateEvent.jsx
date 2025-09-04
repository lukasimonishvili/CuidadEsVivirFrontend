import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  // Maneja la selección de fotos
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files.map(file => URL.createObjectURL(file))); // preview
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    // Aquí se llamaría al backend
    console.log("Evento creado:", { title, description, date, location, photos });
    // Para backend, enviar `photos` con FormData
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 overflow-auto">
      <form
        onSubmit={handleCreateEvent}
        className="w-96 p-6 bg-white rounded-2xl shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4">Crear Evento</h1>

        <Input label="Título del evento" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input label="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input label="Fecha" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Input label="Ubicación" value={location} onChange={(e) => setLocation(e.target.value)} />

        <label className="block mt-3 mb-1 font-semibold">Fotos del evento</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handlePhotoChange}
          className="w-full border rounded px-2 py-1 mb-4"
        />

        {/* Preview de las fotos */}
        {photos.length > 0 && (
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {photos.map((src, idx) => (
              <img key={idx} src={src} alt={`preview ${idx}`} className="w-24 h-24 object-cover rounded-xl" />
            ))}
          </div>
        )}

        <Button type="submit" className="w-full mt-2">Crear Evento</Button>
      </form>
    </div>
  );
}

