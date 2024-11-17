import Sidebar from "@/components/SideBar";


export default function AccountLayout({
    children, 
  }) {
    return (
      <section className="flex">
       
        <nav>
          <Sidebar/>
        </nav>
        {children}
      </section>
    )
  }