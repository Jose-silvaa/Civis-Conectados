import Link from 'next/link';


export default function Sidebar() {

  return (
    <div className="w-64 h-full bg-red shadow-md flex flex-col">
      <div className="flex items-center justify-center p-4 border-b">
        <img src="/logo.png" alt="App Logo" className="h-12 w-auto" />
      </div>

      <nav className="flex-1 p-4 space-y-4">
        <Link href="/inbox" className="block p-2 rounded hover:bg-gray-200">
          Inbox
        </Link>
        <Link href="/relatar" className="block p-2 rounded hover:bg-gray-200">
          Registrar Ocorrência
        </Link>
        <Link href="/notifications" className="block p-2 rounded hover:bg-gray-200">
          Notifications
        </Link>
        <Link href="/profile" className="block p-2 rounded hover:bg-gray-200">
          Profile
        </Link>
      </nav>

    </div>
  );
}