"use client"

import { useState } from "react"
import { auth } from "@/firebase/config";
import { loginUser } from "@/firebase/login/firebaseLogin";
import { useRouter } from "next/navigation";



export default function Login(){

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formLogin, setformLogin] = useState({
      email : '',
      password : '',
    });


    const handleChange = (e) =>{
      const {name, value} = e.target;

      setformLogin((prevData) => ({
          ...prevData,
          [name] : value
  
      
      }))
    }


    const handleSubmit = async(e) =>{
      e.preventDefault();


      if (!formLogin.email || !formLogin.password) {
        setError('Todos os campos são obrigatórios')
        return
      }

      setLoading(true);

      try {
        const user = await loginUser(auth, formLogin.email, formLogin.password);
    
        if (user) {

          setTimeout(() => {
            router.replace("/account/inbox"); 
          }, 3000);

        } else {
          setError("Sua senha está incorreta. Confira-a");
        }
      } catch (error) {
        setError("Erro no login. Tente novamente.");
      }finally {
        
      }

    }

    return(        
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formLogin.email}
                onChange={handleChange}
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
                value={formLogin.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            
            {loading ? (
               <button
               type="submit"
               className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 flex justify-center">
                 <svg class="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 12h2zm2 5.292a8 8 0 005.292-5.292H6v5.292z"></path>
                 </svg>
               </button>
            ) : (
                <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                Log in
                </button>
            )}
            

          </form>   
      </section>
    </main>
    )
}