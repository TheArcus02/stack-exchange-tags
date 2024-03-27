import * as React from 'react'

import { useState } from 'react'
import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/react-table'
import { useGetTags } from '@/hooks/use-tags'
import { useDebounce } from '@/hooks/use-debounce'
import { columns } from '@/components/datatable/columns/columns'
import { DataTable } from '@/components/datatable/data-table'

const Home = () => {
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

  const [columnFilters, setColumnFilters] =
    useState<ColumnFiltersState>([])

  const debouncedFilters = useDebounce(columnFilters, 500)

  const { data, isPlaceholderData, status, error, isFetching } =
    useGetTags(
      pagination.pageIndex + 1,
      pagination.pageSize,
      sorting[0],
      debouncedFilters[0]?.value as string | undefined,
    )

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
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
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
          isPlaceholderData={isPlaceholderData}
          status={status}
          error={error || undefined}
          isFetching={isFetching}
        />
      </div>
    </div>
  )
}

export default Home
