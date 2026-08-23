"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  sku: string;
  image: string | null;
  imageBg: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  setIsOpen: (isOpen: boolean) => void;
  cartCount: number;
  cartSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("aprilia_cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        
        // Migrate old cart items without image property
        const migratedCart = parsedCart.map((item: CartItem) => {
          if (!item.image || item.image.trim() === "") {
            // Use null instead of empty string to prevent Next.js Image warnings
            return { ...item, image: null };
          }
          return item;
        });
        
        setCart(migratedCart);
      } catch (e) {
        console.error("Failed to parse cart data", e);
        // Clear corrupted cart data
        localStorage.removeItem("aprilia_cart");
      }
    }
  }, []);

  // Save cart to localStorage on change
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("aprilia_cart", JSON.stringify(newCart));
  };

  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    const existingIndex = cart.findIndex((item) => item.id === newItem.id);
    let newCart = [...cart];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += 1;
    } else {
      newCart.push({ ...newItem, quantity: 1 });
    }
    saveCart(newCart);
  };

  const removeFromCart = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    saveCart(newCart);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        setIsOpen,
        cartCount,
        cartSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
