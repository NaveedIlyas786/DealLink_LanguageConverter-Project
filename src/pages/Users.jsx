import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import usersData from '@/data/users.json'
import ReusableTable from '@/components/ReusableTable'
import '../App.css'
import { Input } from '@/components/ui/input'
import ProfileNotification from '@/components/ProfileNotification'
import { useSidebar } from '@/components/SidebarContext'

const statusColors = {
  Approved: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
  Pending: 'bg-yellow-100 text-yellow-700',
}

const headers = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'joinOn', label: 'JoinOn' },
]

const Users = () => {
  const { openSidebar } = useSidebar()
  const [tableJson, setTableJson] = useState([])
  useEffect(() => {
    setTableJson(usersData)
  }, [usersData])
  // console.log('usersData: ', usersData)

  const [currentPage, setCurrentPage] = useState(1)
  const [searchVal, setsearchVal] = useState('')
  const [debounceVal, setDebounceVal] = useState('')

  const itemsPerPage = 10

  const start = (currentPage - 1) * itemsPerPage
  const activeItems = tableJson.slice(start, start + itemsPerPage)
  const totalPages = Math.ceil(tableJson.length / itemsPerPage)

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }
  const handlePrev = () => {
    setCurrentPage(currentPage < 1 ? 1 : currentPage - 1)
  }
  const handleChange = (e) => {
    setsearchVal(e.target.value)
  }
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    setFilteredItems(activeItems)
  }, [tableJson])

  // console.log('activeItems: ', activeItems)
  // console.log('filteredItems ', filteredItems)
  useEffect(() => {
    const interval = setTimeout(() => {
      setDebounceVal(searchVal)
    }, 500)
    return () => clearTimeout(interval)
  }, [searchVal])
  // console.log(searchVal)
  // console.log(debounceVal)

  useEffect(() => {
    const searchingItems = tableJson.filter((a) =>
      `${a.name} || ${a.role}`.toLowerCase().includes(searchVal.toLowerCase())
    )
    setFilteredItems(searchingItems)
  }, [debounceVal])

  return (
    <div
      className={`${
        openSidebar ? 'ml-[266px]' : 'ml-[80px]'
      } min-h-screen flex flex-col flex-1 p-3 bg-gray-50`}
    >
      {/* Header */}
      <ProfileNotification />

      <div className='overflow-x-auto md:overflow-x-visible'>
        <Card className='min-w-[768px]'>
          <CardContent className='p-0'>
            <div className='p-4 flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>Users</h2>
              <div className='flex gap-3'>
                <Input
                  className=' min-w-[450px]'
                  type='search'
                  placeholder='Search'
                  value={searchVal}
                  onChange={handleChange}
                />
                <Button variant='outline'>Filters</Button>
              </div>
            </div>

            <ReusableTable
              headers={headers}
              data={filteredItems}
              statusColors={statusColors}
            />

            <div className='flex justify-between items-center p-4 border-t text-sm'>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <div className='space-x-2'>
                <Button
                  disabled={currentPage === 1}
                  onClick={handlePrev}
                  variant='outline'
                  size='sm'
                >
                  Previous
                </Button>
                <Button
                  disabled={currentPage === totalPages}
                  onClick={handleNext}
                  variant='outline'
                  size='sm'
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Users
