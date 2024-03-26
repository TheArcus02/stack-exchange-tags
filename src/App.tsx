import { useState } from 'react'
import { columns } from './components/datatable/columns'
import { DataTable } from './components/datatable/data-table'
import { useGetTags } from './hooks/useTags'
import { PaginationState, SortingState } from '@tanstack/react-table'

function App() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: 'count',
      desc: true,
    },
  ])

  const { data, isPlaceholderData } = useGetTags(
    pagination.pageIndex + 1,
    pagination.pageSize,
    sorting[0],
  )

  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh]'>
      <h1 className='text-3xl'>
        StackExchange Tags{' '}
        <span className='text-primary'>Datatable</span>
      </h1>
      <div className='mt-16'>
        <DataTable
          columns={columns}
          data={data?.items || []}
          rowCount={data?.total || -1}
          pagination={pagination}
          setPagination={setPagination}
          sorting={sorting}
          setSorting={setSorting}
          isPlaceholderData={isPlaceholderData}
        />
      </div>
    </div>
  )
}

export default App
