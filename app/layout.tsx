import type { Metadata } from "next";
import { CartProvider } from "@/lib/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aprilia Parts For Sale - Premium Spare Parts Store",
  description: "Get premium and authentic OEM Aprilia spare parts online. Exhausts, engines, bodywork, brakes, and more for RSV4, Tuono V4, RS 660, and Tuono 660.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
