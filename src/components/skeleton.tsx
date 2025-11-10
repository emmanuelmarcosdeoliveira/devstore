import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const Skeleton = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge('animate-pulse bg-zinc-50/10 rounded-md', className)}
      {...props}
    />
  )
}

export default Skeleton
