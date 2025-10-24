import { Outlet } from 'react-router-dom'
import LeftBar from '../components/LeftBar'
import Rightbar from '../components/RightBar'

export default function MainLayout() {
  return (
  <div className="min-h-screen">
  <div className="w-full h-full min-h-screen grid grid-cols-12 gap-0 ">
    
    {/* LeftBar izquierdo */}
    <aside className="col-span-3">
      <LeftBar />
    </aside>

    {/* Área central donde se renderizan las páginas */}
    <main className="col-span-6 md:col-span-6 lg:col-span-6">
      <Outlet />
    </main>

    {/* Sidebar derecho */}
    <aside className="hidden lg:block col-span-3">
      <Rightbar />
    </aside>
  </div>
</div>
  )
}
