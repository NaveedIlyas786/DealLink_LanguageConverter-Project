import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ReusableTable = ({ headers, data, statusColors }) => {
  const { t } = useTranslation()

  return (
    <div className='overflow-auto'>
      <table className='min-w-full text-sm'>
        <thead className='bg-gray-100'>
          <tr>
            {headers.map((header) => (
              <th key={header.key} className='text-left px-4 py-3'>
                {t(header.label)}
              </th>
            ))}
            <th className='text-left px-4 py-2'>{t('Actions')}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className='border-b'>
              {headers.map((header) => (
                <td key={header.key} className='px-4 py-3'>
                  {header.key === 'status' ? (
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        statusColors?.[row.status] ?? ''
                      }`}
                    >
                      {t(`statuses.${row.status}`, row.status)}
                    </span>
                  ) : header.key === 'offerName' ? (
                    t(`offerNames.${row.offerName}`, row.offerName)
                  ) : header.key === 'merchant' ? (
                    t(`merchants.${row.merchant}`, row.merchant)
                  ) : header.key === 'category' ? (
                    t(`categories.${row.category}`, row.category)
                  ) : (
                    row[header.key]
                  )}
                </td>
              ))}

              <td className='px-4 py-2 flex gap-2'>
                <Pencil className='w-4 h-4 text-blue-600 cursor-pointer' />
                <Trash2 className='w-4 h-4 text-red-600 cursor-pointer' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReusableTable
