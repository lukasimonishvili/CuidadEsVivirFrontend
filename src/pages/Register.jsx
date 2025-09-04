import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Register() {
  const { setUserRole, setUserInfo } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [disabilityPercent, setDisabilityPercent] = useState(70);
  const [role, setRole] = useState("ayudado");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setUserRole(role);
    setUserInfo({ name, email, childName, childAge, disabilityPercent });
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-blue-50">
      <form onSubmit={handleRegister} className="w-96 p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Registro Familiar / Voluntario</h1>
        <Input label="Nombre" value={name} onChange={(e)=>setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Input label="Contraseña" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {role === "ayudado" && (
          <>
            <Input label="Nombre del niño" value={childName} onChange={(e)=>setChildName(e.target.value)} />
            <Input label="Edad del niño" type="number" value={childAge} onChange={(e)=>setChildAge(e.target.value)} />
            <Input label="Porcentaje de discapacidad (%)" type="number" value={disabilityPercent} onChange={(e)=>setDisabilityPercent(e.target.value)} />
          </>
        )}
        <label className="block mt-3 mb-1 font-semibold">Rol</label>
        <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full border rounded px-2 py-1 mb-4">
          <option value="admin">Admin</option>
          <option value="ayudante">Voluntario</option>
          <option value="ayudado">Familia</option>
        </select>
        <Button type="submit" className="w-full">Registrarse</Button>
      </form>
    </div>
  );
}

