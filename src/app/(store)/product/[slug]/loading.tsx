import Skeleton from '@/components/skeleton'

const LoadingProduct = () => {
  return (
    <div className="gap-6 grid grid-cols-3 max-h-[860px]">
      <Skeleton className="col-span-2 h-[860px]" />
      <Skeleton className="col-span-1 h-[860px]" />
    </div>
  )
}

export default LoadingProduct
