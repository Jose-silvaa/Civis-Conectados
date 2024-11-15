import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
    <div className="text-center max-w-3xl">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
        Junte-se à luta contra o crime
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Uma plataforma onde cidadãos podem colaborar diretamente com a polícia, compartilhando informações, fotos e vídeos em tempo real para auxiliar na investigação de crimes.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-12 w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Como Funciona</h2>
        <p className="text-gray-600 mb-4">
          Nossa plataforma permite que você envie informações vitais diretamente para as autoridades de forma rápida e segura.
        </p>
        <ul className="text-gray-600 space-y-2">
          <li>🔍 Envio de fotos e vídeos em tempo real</li>
          <li>🚔 Comunicação direta com a polícia</li>
          <li>🕒 Ajuda nas investigações e resolução de crimes</li>
        </ul>
      </div>

      <div className="flex flex-row justify-center flex-wrap">
      <Link
        href="/auth/register"
        className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 mr-4"
      >
        Cadastre-se Agora
      </Link>
      <Link
        href="/auth/login"
        className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 max-xs:mt-4 "
      >
        Fazer Login
      </Link>
      </div>
    </div>
  </main>
  );
}
