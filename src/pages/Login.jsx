import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const { setUserRole } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ayudante"); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login con:", { email, password, role });
    setUserRole(role); 
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="w-96 p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        <Input label="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

        <label className="block mt-3 mb-1 font-semibold">Rol</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border rounded px-2 py-1 mb-4"
        >
          <option value="admin">Admin</option>
          <option value="ayudante">Ayudante</option>
          <option value="ayudado">Ayudado</option>
        </select>

        <Button type="submit">Iniciar sesión</Button>
      </form>
    </div>
  );
}

