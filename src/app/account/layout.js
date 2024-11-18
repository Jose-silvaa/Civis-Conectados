import Sidebar from "@/components/SideBar";
import { AuthProvider } from "@/utils/authContext";


export default function AccountLayout({
    children, 
  }) {
    return (
      <AuthProvider>
          <section className="flex">
            <nav>
              <Sidebar/>
            </nav>
            {children}
          </section>
      </AuthProvider>

    )
  }