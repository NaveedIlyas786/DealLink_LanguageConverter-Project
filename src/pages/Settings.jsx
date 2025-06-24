import { useSidebar } from '@/components/SidebarContext'
import React from 'react'

const Settings = () => {
  const { openSidebar } = useSidebar()
  return (
    <div
      className={`min-h-screen ${
        openSidebar ? 'ml-[266px]' : 'ml-[80px]'
      } overflow-y-auto flex flex-col flex-1 p-3 bg-gray-50`}
    >
      <h1>Settings</h1>
    </div>
  )
}

export default Settings
