import Skeleton from '@/components/skeleton'

const LoadingStore = () => {
  return (
    <div className="gap-6 grid grid-cols-9 grid-rows-6 h-full">
      <Skeleton className="col-span-6 h-[800px] row-span-6" />
      <Skeleton className="col-span-3 row-span-3" />
      <Skeleton className="col-span-3 row-span-3" />
    </div>
  )
}

export default LoadingStore
