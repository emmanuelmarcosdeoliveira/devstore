import SearchContent from '@/components/search-content'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading'

interface SearchProps {
  searchParams: Promise<{
    q?: string
  }>
}

const Search = async ({ searchParams }: SearchProps) => {
  const params = await searchParams
  const query = params?.q

  if (!query) {
    return redirect('/')
  }

  return (
    <Suspense fallback={<Loading />}>
      <SearchContent query={query} />
    </Suspense>
  )
}

export default Search
