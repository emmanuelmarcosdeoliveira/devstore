'use client'
import LoadingSearch from '@/app/(store)/(home)/search/loading'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import CardWidget from './card-widget'
import SearchForm from './search-form'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <Link className="font-extrabold text-2xl text-white" href="/">
          devstore
        </Link>
        <Suspense fallback={<LoadingSearch />}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex gap-4 items-center">
        <CardWidget />
        <div className="bg-zinc-700 h-4 w-px" />
        <Link href="/" className="flex gap-2 hover:underline items-center">
          <span className="text-sm">Account</span>
          <Image
            className="h-6 rounded-full w-6"
            src="https://www.github.com/emmanuelmarcosdeoliveira.png"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
export default Header
