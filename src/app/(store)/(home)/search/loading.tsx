'use client'

import Skeleton from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

const LoadingSearch = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  console.log(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:<span className="font-semibold">{query}</span>
      </p>

      <div className="gap-6 grid grid-cols-3">
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
      </div>
    </div>
  )
}

export default LoadingSearch
