import { columns } from './components/datatable/columns'
import { DataTable } from './components/datatable/data-table'
import { useGetTags } from './hooks/useTags'

function App() {
  const { data } = useGetTags()

  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh]'>
      <h1 className='text-3xl'>
        Stack Exchange Tags{' '}
        <span className='text-primary'>Datatable</span>
      </h1>
      <div className='mt-16'>
        <DataTable columns={columns} data={data?.items || []} />
      </div>
    </div>
  )
}

export default App
