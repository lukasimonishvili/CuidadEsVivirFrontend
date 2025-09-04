import { useUser } from "../UserContext";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Dashboard() {
  const { userRole } = useUser();

  const statsAdmin = { totalEvents: 12, totalMoney: 3500, totalHelpers: 25 };
  const statsVolunteer = { myEvents: 5, myMoney: 1200 };
  const statsFamily = { myTasks: 3, myEvents: 2 };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6">
        {userRole === 'ayudado' ? 'Panel Familiar' : 'Panel de Voluntarios'}
      </h1>

      {userRole === "admin" && (
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card title="Actividades realizadas" description={statsAdmin.totalEvents} />
          <Card title="Dinero recaudado (€)" description={statsAdmin.totalMoney} />
          <Card title="Voluntarios disponibles" description={statsAdmin.totalHelpers} />
        </div>
      )}

      {userRole === "ayudante" && (
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <Card title="Tus actividades" description={statsVolunteer.myEvents} />
          <Card title="Dinero recaudado por ti" description={`€${statsVolunteer.myMoney}`} />
        </div>
      )}

      {userRole === "ayudado" && (
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <Card title="Ayudas asignadas" description={statsFamily.myTasks} />
          <Card title="Actividades familiares" description={statsFamily.myEvents} />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {userRole === "admin" && (
          <>
            <Link to="/create-task" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-xl text-center font-semibold">Crear Actividad</Link>
            <Link to="/create-event" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-xl text-center font-semibold">Crear Evento</Link>
          </>
        )}
        {(userRole === "ayudante" || userRole === "admin") && (
          <>
            <Link to="/task/1" className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl text-center font-semibold">Ver Actividades</Link>
            <Link to="/event/1" className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl text-center font-semibold">Ver Eventos</Link>
            <Link to="/ayudados" className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-3 rounded-xl text-center font-semibold">Familias a apoyar</Link>
          </>
        )}
        {userRole === "ayudado" && <p className="text-lg text-gray-700">Aquí verás tus actividades y ayudas asignadas.</p>}
      </div>
    </div>
  );
}




