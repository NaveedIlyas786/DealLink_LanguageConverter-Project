import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Settings, UserCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import tabledata from '@/data/tableEntries.json'
import ReusableTable from '@/components/ReusableTable'
import '../App.css'
import { Input } from '@/components/ui/input'
import ProfileNotification from '@/components/ProfileNotification'
import { useTranslation } from 'react-i18next'
import { useSidebar } from '@/components/SidebarContext'

const statusColors = {
  Approved: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
  Pending: 'bg-yellow-100 text-yellow-700',
}

const OfferPage = () => {
  const { openSidebar } = useSidebar()
  const { t } = useTranslation()
  const headers = [
    { key: 'offerName', label: 'offerName' },
    { key: 'merchant', label: 'merchant' },
    { key: 'category', label: 'category' },
    { key: 'submittedOn', label: 'submittedOn' },
    { key: 'status', label: 'status' },
  ]

  const [tableJson, setTableJson] = useState([])

  useEffect(() => {
    setTableJson(tabledata)
  }, [tabledata])
  console.log('tableJson: ', tableJson)

  const [currentPage, setCurrentPage] = useState(1)
  const [searchVal, setsearchVal] = useState('')
  const [debounceVal, setDebounceVal] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

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
  useEffect(() => {
    setFilteredItems(activeItems)
  }, [tableJson])

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
      `${a.merchant} || ${a.offerName}`
        .toLowerCase()
        .includes(searchVal.toLowerCase())
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
              <h2 className='text-lg font-semibold'>Offers</h2>
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

export default OfferPage
