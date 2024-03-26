import { useGetTags } from './hooks/useTags'

function App() {
  const { data } = useGetTags()

  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh]'>
      <h1 className='text-3xl'>
        Stack Exchange Tags{' '}
        <span className='text-primary'>Datatable</span>
      </h1>
      <div className='mt-16'>{JSON.stringify(data, null, 2)}</div>
    </div>
  )
}

export default App
