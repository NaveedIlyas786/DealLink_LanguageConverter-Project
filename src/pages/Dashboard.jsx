import { useSidebar } from '@/components/SidebarContext'

const Dashboard = () => {
  const { openSidebar } = useSidebar()
  console.log(openSidebar)
  const dashboardWidth = openSidebar
    ? '[width:calc(100vw-266px)]'
    : '[width:calc(100vw-80px)]'

  return (
    <div className={`${dashboardWidth} h-screen bg-gray-100 pl-4 pt-4`}>
      Sidebar is {openSidebar ? 'Open' : 'Closed'}
    </div>
  )
}

export default Dashboard
