

export default function StatusReport({ status, onChange }) {

  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      className={`px-2 py-1 text-sm rounded cursor-pointer ${
        status === "Pendente"
          ? "bg-yellow-100 text-yellow-700"
          : status === "Confirmado"
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      <option value="Pendente">Pendente</option>
      <option value="Confirmado">Confirmado</option>
    </select>
  );
}
