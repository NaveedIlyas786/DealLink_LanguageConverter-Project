import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import tabledata from '@/data/tableEntries.json'
import summaryJson from '@/data/summary.json'
import offersNeedingReviewData from '@/data/offersNeedingReview.json'
import ReusableTable from '@/components/ReusableTable'
import '../App.css'
import { Input } from '@/components/ui/input'
import ProfileNotification from '@/components/ProfileNotification'
import { useTranslation } from 'react-i18next'
import RedemptionChart from '@/components/RedemptionChart'
import { useSidebar } from '@/components/SidebarContext'
import activeUsersImg from '../assets/activeUsers.png'
import totalUsersImg from '../assets/totalUsers.png'
import monthRevenueImg from '../assets/monthRevenue.png'
import totalRedemptionsImg from '../assets/totalRedemptions.png'
import { TrendingUp } from 'lucide-react'
const statusColors = {
  Approved: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
  Pending: 'bg-yellow-100 text-yellow-700',
}
const images = [
  activeUsersImg,
  totalUsersImg,
  monthRevenueImg,
  totalRedemptionsImg,
]
const Dashboard = () => {
  const { openSidebar } = useSidebar()
  const { t } = useTranslation()
  const headers = [
    { key: 'offerTitle', label: 'Offer Title' },
    { key: 'merchant', label: 'Merchant' },
    { key: 'category', label: 'Category' },
    { key: 'status', label: 'Status' },
  ]

  const [tableJson, setTableJson] = useState([])
  const [summaryData, setSummaryData] = useState([])

  useEffect(() => {
    setSummaryData(summaryJson)
  }, [summaryJson])

  useEffect(() => {
    setTableJson(offersNeedingReviewData)
  }, [offersNeedingReviewData])
  console.log('summaryData: ', summaryData)
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
      className={`min-h-screen ${
        openSidebar ? 'ml-[266px]' : 'ml-[80px]'
      } overflow-y-auto flex flex-col flex-1 p-3 bg-gray-50`}
    >
      {/* Header */}
      <ProfileNotification />
      <div className='my-5'>
        {/* <h1>Summary Overview</h1> */}
        <h2 className='text-md font-semibold'>Summary Overview</h2>
        <div className='flex flex-wrap gap-4'>
          {summaryData.map((a, index) => (
            <div
              key={index}
              className='p-4 rounded-2xl bg-white flex-1 min-w-[200px]'
            >
              <img
                src={images[index]}
                alt={a.title}
                className='w-10 h-10 mb-2'
              />
              <h2 className='text-lg font-semibold'>{a.title}</h2>
              <h1 className='text-[22px] font-bold flex items-center gap-2'>
                {a.value}{' '}
                <span className='text-[#17642F] text-sm flex items-center'>
                  <TrendingUp />
                  {a.change}
                </span>
              </h1>
              <p>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
      <RedemptionChart />
      <div className='flex bg-amber-400 overflow-x-auto w-full md:overflow-x-visible'>
        <Card className='flex-[0.70] min-w-[768px]'>
          <CardContent className='p-0'>
            <div className='p-4 flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>Offers Needing Review</h2>
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
        <Card className='flex-[0.30] min-w-[370px]'></Card>
      </div>
    </div>
  )
}

export default Dashboard
