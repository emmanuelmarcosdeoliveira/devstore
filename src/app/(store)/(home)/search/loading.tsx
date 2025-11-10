'use client'

import Skeleton from '@/components/skeleton'

const LoadingSearch = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">Resultados</p>

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
