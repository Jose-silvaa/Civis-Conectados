
export default function StatusReport({ status }) {
  // Classes dinâmicas baseadas no status
  const statusClass = {
    Pendente: "bg-yellow-100 text-yellow-700",
    Verdadeiro: "bg-green-100 text-green-700",
    Falso : "bg-red-100 text-red-700",
    Outro: "bg-gray-100 text-gray-700",
  };

  return (
    <p
      className={`px-2 py-1 text-sm rounded cursor-pointer ${
        statusClass[status] || statusClass.Outro
      }`}
    >
      {status}
    </p>
  );
}

