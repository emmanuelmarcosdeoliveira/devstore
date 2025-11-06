'use client'
import { useCart } from '@/context/cart-context'
import { ShoppingBag } from 'lucide-react'

const CardWidget = () => {
  const { items } = useCart()
  return (
    <>
      <div className="flex gap-2 items-center">
        <ShoppingBag className="h-4 w-4" />
        <span className="text-sm">Cart({items.length})</span>
      </div>
    </>
  )
}

export default CardWidget
