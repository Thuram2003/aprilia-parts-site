"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlass,
  Check,
  Truck,
  ShieldCheck,
  Wrench,
  ArrowRight,
  ChatCenteredText,
  Plus,
  Minus,
  X
} from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useCart } from "@/lib/CartContext";
import AnimatedCounter from "@/components/AnimatedCounter";

// Import custom inline SVGs
import {
  EngineIcon,
  ExhaustIcon,
  BodyworkIcon,
  BrakesIcon,
  SuspensionIcon,
  EcuIcon
} from "@/components/CategoryIcons";

// Mock Parts Data
const MOCK_PARTS = [
  {
    id: "part-1",
    name: "Akrapovič Titanium Slip On Exhaust System",
    category: "Exhausts",
    price: 2450.0,
    sku: "AP-RSV4-AKRAP-01",
    compatibility: "RSV4 (2021 to 2025)",
    image: "/exhaust.jpg",
    imageBg: "bg-zinc-50",
    description: "Premium titanium exhaust system with carbon fiber end cap. Reduces weight by 2.5kg and adds 8HP."
  },
  {
    id: "part-2",
    name: "Brembo GP4 RX CNC Front Brake Calipers Set",
    category: "Brakes",
    price: 1580.0,
    sku: "AP-BRM-GP4RX",
    compatibility: "RSV4 and Tuono V4 (All Years)",
    image: "/frontwheel.jpg",
    imageBg: "bg-red-50",
    description: "Race-proven monobloc calipers with radial mount. Direct OEM replacement for ultimate braking performance."
  },
  {
    id: "part-3",
    name: "OEM Carbon Fiber Front Mudguard and Fender",
    category: "Carbon Bodywork",
    price: 295.0,
    sku: "AP-OEM-CARB-F03",
    compatibility: "RSV4 and Tuono V4 (2018 to 2025)",
    image: "/fueltank.jpg",
    imageBg: "bg-zinc-50",
    description: "Authentic Aprilia Racing carbon fiber fender. Glossy finish with UV protection clear coat."
  },
  {
    id: "part-4",
    name: "Aprilia Racing ECU UpMap Kit (T800+)",
    category: "Electricals & ECU",
    price: 399.0,
    sku: "AP-RACE-UPMAP",
    compatibility: "RS 660 and Tuono 660 (2021 to 2026)",
    image: "/helmet.jpg",
    imageBg: "bg-white",
    description: "Official Aprilia Racing ECU tuning module. Multiple maps for track, sport, and touring."
  },
  {
    id: "part-5",
    name: "Ohlins TTX GP Rear Mono Shock Absorber",
    category: "Suspension",
    price: 1350.0,
    sku: "AP-OHL-TTXGP",
    compatibility: "RSV4 (2015 to 2025)",
    image: "/exhaust.jpg",
    imageBg: "bg-zinc-50",
    description: "Top-spec Ohlins TTX shock with remote pre-load adjustment. Factory racing specification."
  },
  {
    id: "part-6",
    name: "OEM Complete Engine Piston Kit (1099cc)",
    category: "Engine Parts",
    price: 490.0,
    sku: "AP-OEM-PSTN-11",
    compatibility: "RSV4 1100 (2021 to 2025)",
    image: "/frontwheel.jpg",
    imageBg: "bg-zinc-50",
    description: "Complete piston kit with rings, pins, and circlips. OEM quality for engine rebuilds."
  }
];

const CATEGORIES = [
  { name: "Engine Parts", icon: EngineIcon, count: 142 },
  { name: "Exhausts", icon: ExhaustIcon, count: 34 },
  { name: "Carbon Bodywork", icon: BodyworkIcon, count: 87 },
  { name: "Brakes", icon: BrakesIcon, count: 56 },
  { name: "Suspension", icon: SuspensionIcon, count: 29 },
  { name: "Electricals & ECU", icon: EcuIcon, count: 48 }
];

const BIKE_MODELS = [
  { name: "RSV4 / Factory", desc: "1100cc Superbike (2019 to 2025)", segment: "RSV4 1100" },
  { name: "Tuono V4 / Factory", desc: "1100cc Hypernaked (2019 to 2025)", segment: "Tuono V4" },
  { name: "RS 660 / Trofeo", desc: "660cc Supersport (2021 to 2026)", segment: "RS 660" },
  { name: "Tuono 660 / Factory", desc: "660cc Naked (2021 to 2025)", segment: "Tuono 660" }
];

const PARTNER_BRANDS = [
  "Akrapovič",
  "Brembo",
  "Öhlins",
  "Marchesini",
  "Racing UpMap",
  "Castrol",
  "PZ Racing",
  "Sprint Filter"
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fitmentModel, setFitmentModel] = useState("");
  const [fitmentCategory, setFitmentCategory] = useState("");
  const [fitmentResult, setFitmentResult] = useState<string | null>(null);
  
  const [selectedProduct, setSelectedProduct] = useState<typeof MOCK_PARTS[0] | null>(null);
  const [productQuantities, setProductQuantities] = useState<{ [key: string]: number }>({});
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});
  const [toast, setToast] = useState<{ visible: boolean; itemName: string } | null>(null);
  
  const { addToCart, setIsOpen } = useCart();

  const handleQuantityChange = (partId: string, delta: number) => {
    setProductQuantities(prev => {
      const current = prev[partId] || 1;
      const newQty = Math.max(1, Math.min(10, current + delta));
      return { ...prev, [partId]: newQty };
    });
  };

  const handleAddToBag = (part: typeof MOCK_PARTS[0]) => {
    const quantity = productQuantities[part.id] || 1;
    
    // Mark as added with visual feedback
    setAddedItems(prev => ({ ...prev, [part.id]: true }));
    
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: part.id,
        name: part.name,
        price: part.price,
        sku: part.sku,
        image: part.image,
        imageBg: part.imageBg
      });
    }
    
    setToast({ visible: true, itemName: part.name });
    setSelectedProduct(null);
    
    // Reset button after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [part.id]: false }));
    }, 2000);
    
    setTimeout(() => {
      setToast((prev) => prev && prev.itemName === part.name ? null : prev);
    }, 3500);
  };

  const filteredParts =
    selectedCategory === "All"
      ? MOCK_PARTS
      : MOCK_PARTS.filter((part) => part.category === selectedCategory);

  const handleCheckFitment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fitmentModel || !fitmentCategory) {
      setFitmentResult("Please select both model and category.");
      return;
    }
    setFitmentResult(
      `✓ Verification Success: We found 18 matching ${fitmentCategory} spares in stock for the Aprilia ${fitmentModel}.`
    );
  };

  const handleBikeClick = (modelSegment: string) => {
    setFitmentModel(modelSegment);
    const finderSection = document.getElementById("compatibility-finder");
    if (finderSection) {
      finderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black font-sans">
      <Header />

      {/* Welcome Banner */}
      <div className="bg-black text-white z-20 relative">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2.5 px-4 py-3.5 text-center text-xs sm:px-6 lg:px-8">
          <span className="font-extrabold text-primary tracking-widest uppercase">PROMO ENQUIRY</span>
          <span className="text-zinc-600 sm:inline">·</span>
          <span className="text-zinc-300 font-medium">Use code <span className="font-mono text-primary font-bold">APRILIA10</span> for 10% off your checkout invoice</span>
        </div>
      </div>

      <main className="flex-1">
        
        {/* HERO SECTION - Clean Professional Design with Subtle Animations */}
        <section className="relative overflow-hidden bg-black py-12 md:py-20 lg:py-24">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#DC262615_0%,transparent_50%)]" />
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              
              {/* Left Column - Content First on Mobile with Staggered Animation */}
              <div className="text-center lg:text-left space-y-6 order-2 lg:order-1 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 rounded-full animate-in fade-in duration-700 delay-100 fill-mode-both">
                  <span className="text-xs font-bold tracking-wider uppercase text-primary">Official OEM Parts Supplier</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-extrabold text-white animate-in fade-in slide-in-from-bottom-3 duration-700 delay-200 fill-mode-both">
                  Premium <span className="text-primary">Aprilia</span><br className="hidden sm:block" /> Performance Parts
                </h1>
                
                <div className="max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-zinc-400 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300 fill-mode-both">
                  <p>
                    Original spare parts and racing accessories for RSV4, Tuono V4, RS 660, and Tuono 660. Every component meets factory specifications and includes compatibility verification.
                  </p>
                </div>

                {/* Animated Stats Row with Counters */}
                <div className="flex items-center justify-center lg:justify-start gap-8 md:gap-12 py-6 animate-in fade-in duration-700 delay-300 fill-mode-both">
                  <AnimatedCounter end={500} suffix="+" label="Parts in Stock" delay={400} />
                  <div className="w-px h-16 bg-zinc-700"></div>
                  <AnimatedCounter end={100} suffix="%" label="OEM Genuine" delay={600} />
                  <div className="w-px h-16 bg-zinc-700 hidden sm:block"></div>
                  <AnimatedCounter end={24} suffix="/7" label="Fast Dispatch" delay={800} />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 animate-in fade-in slide-in-from-bottom duration-600 delay-700 fill-mode-both">
                  <Button variant="primary" size="lg" className="px-8 w-full sm:w-auto font-bold transition-all hover:scale-105 active:scale-95" onClick={() => {
                    const sparesSection = document.getElementById("spares-catalog");
                    if (sparesSection) sparesSection.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Browse Catalog
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" weight="bold" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 w-full sm:w-auto border-white/30 text-white hover:bg-white/10 font-bold transition-all hover:scale-105 active:scale-95" onClick={() => {
                    const contactSection = document.getElementById("parts-enquiry");
                    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Request Quote
                  </Button>
                </div>
              </div>

              {/* Right Column - Hero Image with Zoom Animation */}
              <div className="relative aspect-[4/3] md:aspect-[3/2] lg:aspect-square w-full order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-700 delay-100 fill-mode-both">
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 transition-transform hover:scale-[1.02] duration-500">
                  <Image
                    src="/bike.jpg"
                    alt="Aprilia RSV4 Racing Superbike"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Simple dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Partner Brands */}
        <section className="py-6 md:py-8 bg-black text-white/70 border-t border-b border-white/10 overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-widest">
              {PARTNER_BRANDS.map((brand, idx) => (
                <span key={idx} className="hover:text-primary transition duration-150">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Shop by Bike Model Grid Section */}
        <section className="py-12 md:py-20 bg-white border-b border-black/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10 md:mb-14 space-y-2">
              <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Compatible Fleets</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase">
                Select your machine
              </h2>
              <div className="h-1 w-12 bg-primary mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BIKE_MODELS.map((bike, idx) => (
                <div
                  key={idx}
                  onClick={() => handleBikeClick(bike.segment)}
                  className="group rounded-lg border border-black/10 p-6 bg-zinc-50 hover:bg-white hover:border-primary transition duration-300 shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <h3 className="text-sm font-bold text-black uppercase tracking-wide group-hover:text-primary transition duration-150">
                      {bike.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      {bike.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition duration-300">
                    <span>Configure parts</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compatibility Finder */}
        <section id="compatibility-finder" className="py-10 md:py-12 border-b border-black/10 bg-zinc-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto rounded-lg border border-black/10 bg-white p-5 md:p-6 shadow-md">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4 text-center">
                Verify Part Compatibility
              </h3>
              <form onSubmit={handleCheckFitment} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <select
                  value={fitmentModel}
                  onChange={(e) => setFitmentModel(e.target.value)}
                  className="h-12 rounded-lg border border-black/20 bg-white px-4 text-sm text-black outline-none transition focus:border-primary"
                >
                  <option value="">Select Aprilia Model</option>
                  <option value="RSV4 1100">RSV4 1100 / Factory</option>
                  <option value="Tuono V4">Tuono V4 / Factory</option>
                  <option value="RS 660">RS 660</option>
                  <option value="Tuono 660">Tuono 660</option>
                </select>

                <select
                  value={fitmentCategory}
                  onChange={(e) => setFitmentCategory(e.target.value)}
                  className="h-12 rounded-lg border border-black/20 bg-white px-4 text-sm text-black outline-none transition focus:border-primary"
                >
                  <option value="">Select Category</option>
                  <option value="Exhausts">Exhaust Systems</option>
                  <option value="Engine Parts">Engine Components</option>
                  <option value="Carbon Bodywork">Carbon Fairings</option>
                  <option value="Brakes">Brake Calipers</option>
                </select>

                <Button type="submit" variant="primary" className="h-12 w-full">
                  Check Stock
                </Button>
              </form>
              {fitmentResult && (
                <p className={`mt-4 text-center text-sm font-semibold ${fitmentResult.startsWith('✓') ? 'text-emerald-600' : 'text-red-500'}`}>
                  {fitmentResult}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-20 border-b border-black/10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12 md:mb-16 space-y-3">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">Shop by</h2>
              <p className="text-2xl md:text-3xl font-extrabold text-black uppercase">
                Component category
              </p>
              <div className="h-1 w-16 bg-primary mx-auto" />
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {CATEGORIES.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat.name === selectedCategory ? "All" : cat.name)}
                    className={`group flex flex-col items-center justify-center p-4 md:p-6 border rounded-lg transition-all duration-300 text-center ${
                      selectedCategory === cat.name
                        ? "border-primary bg-primary/5 text-black scale-[1.03] shadow-lg"
                        : "border-black/10 bg-zinc-50 text-zinc-600 hover:border-primary hover:text-black shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div className={`p-3 rounded-lg mb-3 md:mb-4 transition-colors ${
                      selectedCategory === cat.name ? "bg-primary text-white" : "bg-white text-zinc-600 group-hover:text-primary group-hover:bg-red-50"
                    }`}>
                      <IconComponent className="h-6 w-6 md:h-7 md:w-7 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black">
                      {cat.name}
                    </h3>
                    <span className="text-[9px] md:text-[10px] mt-1 text-zinc-500 block">
                      {cat.count} items
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Section with Enhanced Mobile View */}
        <section id="spares-catalog" className="py-12 md:py-20 bg-zinc-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
              <div className="space-y-2">
                <h2 className="text-xs font-bold tracking-widest text-primary uppercase">Just in</h2>
                <p className="text-2xl md:text-3xl font-extrabold text-black uppercase">
                  New arrivals
                </p>
                <div className="h-1 w-16 bg-primary" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <Button
                  variant={selectedCategory === "All" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory("All")}
                >
                  Show All
                </Button>
                {CATEGORIES.slice(0, 3).map((cat, idx) => (
                  <Button
                    key={idx}
                    variant={selectedCategory === cat.name ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.name)}
                    className="whitespace-nowrap"
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Product Grid - Enhanced for Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredParts.map((part) => (
                <Card key={part.id} className="product-card group overflow-hidden flex flex-col justify-between h-full bg-white border border-black/10 rounded-lg hover:border-primary">
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="h-48 md:h-52 w-full relative overflow-hidden border-b border-black/10 bg-zinc-50">
                      <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-full text-[10px] font-bold z-10">
                        {part.sku}
                      </div>
                      <Image
                        src={part.image}
                        alt={part.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
                        <span>{part.category}</span>
                      </div>
                      <h3 className="text-sm font-bold text-black uppercase group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
                        {part.name}
                      </h3>
                      <p className="text-xs text-zinc-600 line-clamp-2">
                        {part.description}
                      </p>
                      <p className="text-xs text-zinc-500">
                        Fits: <span className="text-black font-semibold">{part.compatibility}</span>
                      </p>
                    </div>
                  </CardContent>

                  {/* Price and Actions */}
                  <div className="px-4 pb-4 pt-3 border-t border-black/10 mt-auto space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase block">Price</span>
                        <span className="text-lg md:text-xl font-extrabold text-black">£{part.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                      </div>
                      
                      {/* Quantity Selector - Mobile Optimized */}
                      <div className="flex items-center border border-black/20 rounded-lg bg-zinc-50">
                        <button
                          onClick={() => handleQuantityChange(part.id, -1)}
                          className="p-2 hover:bg-zinc-100 transition rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4 text-black" weight="bold" />
                        </button>
                        <span className="px-3 md:px-4 text-sm font-bold text-black select-none min-w-[40px] text-center">
                          {productQuantities[part.id] || 1}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(part.id, 1)}
                          className="p-2 hover:bg-zinc-100 transition rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4 text-black" weight="bold" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs w-full"
                        onClick={() => setSelectedProduct(part)}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        className="text-xs w-full"
                        onClick={() => handleAddToBag(part)}
                        disabled={addedItems[part.id]}
                      >
                        {addedItems[part.id] ? (
                          <span className="flex items-center justify-center gap-1">
                            <Check className="h-4 w-4" weight="bold" />
                            Added!
                          </span>
                        ) : (
                          "Add to Bag"
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 border-t border-b border-black/10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-lg border border-black/10 bg-zinc-50 hover:bg-white hover:border-primary shadow-sm hover:shadow-md transition duration-200">
                <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded-lg shrink-0">
                  <Truck className="h-6 w-6 md:h-7 md:w-7" weight="bold" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-black uppercase tracking-wider">Worldwide Shipping</h4>
                  <p className="text-xs md:text-sm text-zinc-600 mt-2 leading-relaxed">
                    Fast courier shipping from the UK. Tracked and insured delivery for engines, electronics, exhausts, and smaller mechanical parts.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-lg border border-black/10 bg-zinc-50 hover:bg-white hover:border-primary shadow-sm hover:shadow-md transition duration-200">
                <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded-lg shrink-0">
                  <ShieldCheck className="h-6 w-6 md:h-7 md:w-7" weight="bold" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-black uppercase tracking-wider">100% Genuine Guarantee</h4>
                  <p className="text-xs md:text-sm text-zinc-600 mt-2 leading-relaxed">
                    Every OEM part is sourced directly from Aprilia distributors. Certified authentic and high performance aftermarket parts.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-lg border border-black/10 bg-zinc-50 hover:bg-white hover:border-primary shadow-sm hover:shadow-md transition duration-200">
                <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded-lg shrink-0">
                  <Wrench className="h-6 w-6 md:h-7 md:w-7" weight="bold" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-black uppercase tracking-wider">Expert Advice & Fitment</h4>
                  <p className="text-xs md:text-sm text-zinc-600 mt-2 leading-relaxed">
                    Not sure what matches your RSV4 or Tuono? Send your VIN or frame number. Our experts double-check compatibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="parts-enquiry" className="py-12 md:py-20 bg-zinc-50 border-t border-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto rounded-lg border border-black/10 bg-white p-6 md:p-10 lg:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary">
                    <ChatCenteredText className="h-5 w-5 text-primary" weight="fill" />
                    Specialist Orders
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-black uppercase">
                    Can't find a specific part?
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Submit your details and required parts list (including part number or bike model/year) and our support team will reply via WhatsApp or Email within 24 hours.
                  </p>
                </div>

                <form className="lg:col-span-7 space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Enquiry submitted successfully! We will get in touch with you shortly."); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="h-12 rounded-lg border border-black/20 bg-white px-4 text-sm text-black placeholder-zinc-400 outline-none focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="WhatsApp Number"
                      required
                      className="h-12 rounded-lg border border-black/20 bg-white px-4 text-sm text-black placeholder-zinc-400 outline-none focus:border-primary"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Bike Model, Variant & Year (e.g. RSV4 Factory 2023)"
                    required
                    className="h-12 w-full rounded-lg border border-black/20 bg-white px-4 text-sm text-black placeholder-zinc-400 outline-none focus:border-primary"
                  />
                  <textarea
                    placeholder="List the parts you need (Engine cover, OEM windshield, gear lever, etc...)"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-black/20 bg-white p-4 text-sm text-black placeholder-zinc-400 outline-none focus:border-primary resize-none"
                  />
                  <Button type="submit" variant="primary" className="w-full h-12 text-sm font-bold">
                    Submit Parts Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />

      {/* Product Details Modal - Mobile Optimized */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />
          
          <div className="absolute inset-x-0 bottom-0 md:inset-0 flex md:items-center md:justify-center p-0 md:p-4">
            <div className="bg-white w-full md:max-w-3xl md:rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom md:slide-in-from-bottom-0 duration-300 max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between sticky top-0 bg-white z-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black">Product Details</h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 text-zinc-500 hover:text-black transition outline-none"
                >
                  <X className="h-6 w-6" weight="bold" />
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto">
                {/* Product Image */}
                <div className="h-64 md:h-80 w-full relative overflow-hidden border-b border-black/10 bg-zinc-50">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-6">
                  <div>
                    <p className="text-xs text-primary uppercase font-bold tracking-wider mb-2">{selectedProduct.category}</p>
                    <h2 className="text-xl md:text-2xl font-extrabold text-black uppercase mb-2">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-sm text-zinc-600 mb-4">{selectedProduct.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-zinc-500">SKU:</span>
                        <span className="ml-2 font-mono font-bold text-black">{selectedProduct.sku}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">Compatibility:</span>
                        <span className="ml-2 font-semibold text-black">{selectedProduct.compatibility}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xs text-zinc-500 uppercase block mb-1">Price</span>
                        <span className="text-3xl font-extrabold text-black">
                          £{selectedProduct.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      {/* Quantity Selector */}
                      <div className="flex items-center border-2 border-black/20 rounded-lg bg-zinc-50">
                        <button
                          onClick={() => handleQuantityChange(selectedProduct.id, -1)}
                          className="p-3 hover:bg-zinc-100 transition rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-5 w-5 text-black" weight="bold" />
                        </button>
                        <span className="px-6 text-lg font-bold text-black select-none min-w-[60px] text-center">
                          {productQuantities[selectedProduct.id] || 1}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(selectedProduct.id, 1)}
                          className="p-3 hover:bg-zinc-100 transition rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-5 w-5 text-black" weight="bold" />
                        </button>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      className="w-full h-14 text-base font-bold"
                      onClick={() => handleAddToBag(selectedProduct)}
                    >
                      Add to Bag
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification - Mobile Optimized */}
      {toast && toast.visible && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-5 md:right-5 md:left-auto z-50 max-w-sm bg-black text-white rounded-lg border border-white/20 p-4 shadow-2xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-primary uppercase font-bold tracking-widest">Added to Bag</span>
            <span className="text-sm font-semibold text-white line-clamp-1 mt-1">{toast.itemName}</span>
          </div>
          <button
            onClick={() => {
              setIsOpen(true);
              setToast(null);
            }}
            className="text-xs font-bold uppercase tracking-widest text-white border-b border-primary hover:text-primary transition shrink-0"
          >
            View Bag
          </button>
        </div>
      )}
    </div>
  );
}
