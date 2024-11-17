"use client"

export default function Login(){
    return(        
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        
        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Log in
          </button>
        </form>

      </section>
    </main>
    )
}