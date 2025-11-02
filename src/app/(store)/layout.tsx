import Header from '@/components/header'
import { CartProvider } from '@/context/cart-context'
import React from 'react'

const LayoutStore = ({ children }: { children: React.ReactNode }) => {
  return (
    //TODO: VER COMO IMPORTAR UMA GRID ROWS CORRETAMENTE
    <CartProvider>
      <div className="gap-5 grid grid-rows-[min-content_max-content] max-w-[1600px] min-h-screen mx-auto p-8 w-full">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}

export default LayoutStore
