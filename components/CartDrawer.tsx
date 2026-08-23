"use client";

import React from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash, ShoppingBag, Check } from "@phosphor-icons/react";
import { useCart } from "@/lib/CartContext";
import { Button } from "./ui/Button";

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, cartSubtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop with smooth fade */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 pl-4 sm:pl-10 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-400 ease-out">
          {/* Header with Pulse Animation on Badge */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-black/10 flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black font-display flex items-center gap-2 animate-in fade-in slide-in-from-left duration-500 delay-100 fill-mode-both">
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 text-primary" weight="bold" />
              <span>Shopping Bag</span>
              {cart.length > 0 && (
                <span className="ml-1 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-in zoom-in-50 duration-300 delay-200 fill-mode-both">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 sm:p-1 text-zinc-500 hover:text-black transition-all duration-200 outline-none rounded-lg hover:bg-zinc-100 hover:rotate-90 animate-in fade-in zoom-in-50 duration-500 delay-150 fill-mode-both"
              aria-label="Close cart"
            >
              <X className="h-5 w-5 sm:h-5 sm:w-5" weight="bold" />
            </button>
          </div>

          {/* Cart items list with Staggered Animation */}
          <div className="flex-1 overflow-y-auto py-4 sm:py-6 px-4 sm:px-6 space-y-4 sm:space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in-95 duration-500">
                <div className="p-6 sm:p-8 bg-zinc-50 border border-black/10 rounded-2xl text-zinc-400 animate-in zoom-in-75 duration-700 delay-100 fill-mode-both">
                  <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 mx-auto" weight="light" />
                </div>
                <div className="px-4 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-200 fill-mode-both">
                  <h3 className="text-sm sm:text-base font-bold uppercase text-black mb-2">Your bag is empty</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 max-w-xs mx-auto">
                    Add authentic OEM parts or racing components to start your build.
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setIsOpen(false)} className="mt-4 animate-in fade-in slide-in-from-bottom duration-500 delay-300 fill-mode-both hover:scale-105 transition-transform">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-black/10 last:border-b-0 last:pb-0 animate-in slide-in-from-right fade-in duration-400 fill-mode-both"
                  style={{ animationDelay: `${Math.min(index * 75, 400)}ms` }}
                >
                  {/* Product Image with Hover Effect */}
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg overflow-hidden border border-black/10 shrink-0 relative bg-zinc-50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
                    {item.image && item.image.trim() !== "" ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        sizes="96px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-100">
                        <svg className="h-8 w-8 text-zinc-400 animate-in fade-in duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <span className="text-[7px] sm:text-[8px] font-mono text-white bg-black/60 backdrop-blur-sm uppercase font-bold absolute bottom-0 left-0 right-0 text-center px-1 py-0.5 transition-all">
                      {item.sku.split("-")[2] || "PART"}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-black uppercase line-clamp-2 font-display leading-tight transition-colors hover:text-primary">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-400 hover:text-red-600 transition-all duration-200 shrink-0 p-1 rounded hover:bg-red-50 hover:scale-110 active:scale-95"
                          aria-label="Remove item"
                        >
                          <Trash className="h-4 w-4" weight="bold" />
                        </button>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-zinc-500 font-mono mt-1">SKU: {item.sku}</p>
                    </div>

                    <div className="flex justify-between items-center mt-3 gap-2">
                      {/* Quantity selector with Smooth Interactions */}
                      <div className="flex items-center border border-black/20 rounded-lg bg-zinc-50 shadow-sm transition-shadow hover:shadow-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 sm:p-2 hover:bg-zinc-100 transition-all duration-200 rounded-l-lg active:scale-90 hover:text-primary"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3 text-black transition-transform hover:scale-110" weight="bold" />
                        </button>
                        <span className="px-2 sm:px-3 text-xs font-bold text-black select-none min-w-[28px] sm:min-w-[32px] text-center transition-all">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 sm:p-2 hover:bg-zinc-100 transition-all duration-200 rounded-r-lg active:scale-90 hover:text-primary"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3 text-black transition-transform hover:scale-110" weight="bold" />
                        </button>
                      </div>

                      <span className="text-sm sm:text-base font-extrabold text-black font-display whitespace-nowrap transition-all">
                        £{(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout with Slide Up Animation */}
          {cart.length > 0 && (
            <div className="border-t border-black/10 px-4 sm:px-6 py-5 sm:py-6 bg-zinc-50 space-y-4 sticky bottom-0 animate-in slide-in-from-bottom fade-in duration-500 delay-300 fill-mode-both">
              {/* Savings badge with Pulse */}
              <div className="flex items-center justify-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 animate-in zoom-in-95 duration-400 delay-400 fill-mode-both">
                <Check className="h-4 w-4 animate-pulse" weight="bold" />
                <span className="font-semibold">Free UK shipping on orders over £100</span>
              </div>
              
              <div className="flex justify-between items-center text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2 duration-400 delay-500 fill-mode-both">
                <span className="text-zinc-600 uppercase font-bold tracking-wider">Subtotal</span>
                <span className="text-lg sm:text-xl font-extrabold text-black font-display transition-all">
                  £{cartSubtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
              </div>
              
              <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed animate-in fade-in duration-400 delay-[600ms] fill-mode-both">
                Shipping, taxes, and fitment verification calculated at checkout. All parts backed by warranty.
              </p>
              
              <Button
                variant="primary"
                className="w-full h-12 sm:h-13 text-xs sm:text-sm font-bold tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-in slide-in-from-bottom zoom-in-95 duration-500 delay-700 fill-mode-both"
                onClick={() => alert("Redirecting to secure checkout...")}
              >
                Proceed to Checkout
              </Button>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs font-semibold text-zinc-600 hover:text-black transition-all duration-200 py-2 hover:scale-105 active:scale-95 animate-in fade-in duration-400 delay-[800ms] fill-mode-both"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
