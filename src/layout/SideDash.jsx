import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import { SidebarContext } from '@/components/SidebarContext'

const SideDash = () => {
  const [openSidebar, setOpenSidebar] = useState(true)

  return (
    <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
      <div className='flex h-screen'>
        <Sidebar />
        <Dashboard />
      </div>
    </SidebarContext.Provider>
  )
}

export default SideDash
