'use client'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

const SearchForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }
    router.push(` /search?q=${query}`)
  }

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="bg-zinc-900 flex gap-3 items-center px-5 py-3 ring-bg-zinc-700 rounded-full w-[320px]"
      >
        <Search className="h-5 text-zinc-700 w-5" />
        <input
          defaultValue={query ?? ''}
          name="q"
          placeholder="Buscar produto ..."
          className="bg-transparent flex-1 focus:bg-transparent focus:outline-none placeholder:text-zinc-500 text-sm"
          type="text"
          required
        />
      </form>
    </>
  )
}

export default SearchForm
