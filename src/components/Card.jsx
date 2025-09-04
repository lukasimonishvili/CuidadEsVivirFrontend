export default function Card({ title, description, buttonText, buttonColor="green" }) {
  const colors = {
    green: "bg-green-500 hover:bg-green-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    purple: "bg-purple-500 hover:bg-purple-600"
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      {buttonText && <button className={`${colors[buttonColor]} text-white px-3 py-2 rounded-xl font-semibold`}>{buttonText}</button>}
    </div>
  );
}



