'use client'
import { useCart } from '@/context/cart-context'

export interface AddToCardButtonProps {
  productId: number
}

const AddToCardButton = ({ productId }: AddToCardButtonProps) => {
  const { addToCard } = useCart()

  function handleAddProductToCart() {
    addToCard(productId)
  }

  return (
    <button
      onClick={handleAddProductToCart}
      className="bg-emerald-600 cursor-pointer flex font-semibold h-12 items-center justify-center mt-8 rounded-full text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
export default AddToCardButton
