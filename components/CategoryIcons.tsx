import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

/**
 * Custom Automotive Icon System
 *
 * Designed to visually match the Phosphor icon philosophy:
 * - 64 × 64 viewBox
 * - consistent 2.5px stroke
 * - round caps / joins
 * - currentColor
 * - minimal internal detail
 * - clean geometric silhouettes
 */

/* =========================================================
   ENGINE
   ========================================================= */

export const EngineIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Cylinder block */}
    <path d="M16 22h28a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4Z" />

    {/* Cylinder head */}
    <path d="M18 22V14a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v8" />

    {/* Intake / exhaust ports */}
    <path d="M22 10v-4M34 10V6M42 10V6" />

    {/* Piston / cylinder indication */}
    <path d="M22 28v12a6 6 0 0 0 12 0V28" />

    {/* Connecting rod */}
    <path d="M28 46v6" />

    {/* Crank */}
    <circle cx="28" cy="54" r="4" />

    {/* Side accessory */}
    <path d="M48 30h6v14h-6" />

    {/* Engine mount */}
    <path d="M12 34H7M12 42H7" />
  </svg>
);


/* =========================================================
   EXHAUST
   ========================================================= */

export const ExhaustIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Exhaust pipe */}
    <path d="M8 42h12c4 0 6-2 8-6l5-10c2-4 5-6 9-6h5" />

    {/* Muffler */}
    <path d="M36 16h14a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H36a5 5 0 0 1-5-5V21a5 5 0 0 1 5-5Z" />

    {/* Muffler bands */}
    <path d="M40 17v18M48 17v18" />

    {/* Exhaust tip */}
    <path d="M55 23h5v6h-5" />

    {/* Mount */}
    <path d="M38 36v8M46 36v8" />
    <path d="M34 44h8M42 44h8" />
  </svg>
);


/* =========================================================
   BODYWORK / FAIRING
   ========================================================= */

export const BodyworkIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Main fairing silhouette */}
    <path d="M10 42c3-12 10-22 21-28 7-4 16-5 23-3-1 8-5 17-12 23-8 7-19 10-32 8Z" />

    {/* Air intake */}
    <path d="M34 25c5-4 11-6 16-5-2 5-5 9-9 12" />

    {/* Lower fairing line */}
    <path d="M13 42c8 3 18 3 27 0 5-2 9-5 13-9" />

    {/* Mounting points */}
    <circle cx="20" cy="38" r="2" />
    <circle cx="43" cy="24" r="2" />

    {/* Aero line */}
    <path d="M18 32c5 1 10 3 14 6" />
  </svg>
);


/* =========================================================
   BRAKES
   ========================================================= */

export const BrakesIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Brake rotor */}
    <circle cx="32" cy="32" r="22" />

    {/* Rotor hub */}
    <circle cx="32" cy="32" r="7" />

    {/* Rotor holes */}
    <circle cx="32" cy="17" r="2" />
    <circle cx="45" cy="24" r="2" />
    <circle cx="45" cy="40" r="2" />
    <circle cx="32" cy="47" r="2" />
    <circle cx="19" cy="40" r="2" />
    <circle cx="19" cy="24" r="2" />

    {/* Caliper */}
    <path d="M10 18c6-3 13-1 17 4l2 9-5 10c-4 5-10 7-16 4" />

    {/* Caliper detail */}
    <path d="M13 22c4-1 8 0 11 3" />
  </svg>
);


/* =========================================================
   SUSPENSION
   ========================================================= */

export const SuspensionIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Top mount */}
    <circle cx="27" cy="9" r="4" />

    {/* Upper shaft */}
    <path d="M27 13v7" />

    {/* Spring */}
    <path d="
      M20 20
      c4-4 10-4 14 0
      s10 4 14 0
      M20 27
      c4-4 10-4 14 0
      s10 4 14 0
      M20 34
      c4-4 10-4 14 0
      s10 4 14 0
      M20 41
      c4-4 10-4 14 0
      s10 4 14 0
    " />

    {/* Damper shaft */}
    <path d="M27 20v31" />

    {/* Reservoir */}
    <path d="M45 18h8v15h-8" />

    {/* Lower body */}
    <path d="M21 47h12v5H21z" />

    {/* Lower mount */}
    <circle cx="27" cy="56" r="4" />
  </svg>
);


/* =========================================================
   ECU / ELECTRONICS
   ========================================================= */

export const EcuIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* ECU housing */}
    <rect x="12" y="12" width="40" height="40" rx="5" />

    {/* Circuit board */}
    <path d="M20 22h8v8h-8z" />
    <path d="M36 22h8v8h-8z" />

    {/* Circuit traces */}
    <path d="M28 26h8M24 30v8M40 30v8M28 42h8" />

    {/* Main chip */}
    <rect x="26" y="34" width="12" height="12" rx="2" />

    {/* Connector */}
    <path d="M20 52v5M26 52v5M32 52v5M38 52v5M44 52v5" />

    {/* Side connector */}
    <path d="M12 27H7M12 35H7M12 43H7" />
  </svg>
);


/* =========================================================
   WHEEL
   ========================================================= */

export const WheelIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Outer rim */}
    <circle cx="32" cy="32" r="26" />
    
    {/* Inner rim */}
    <circle cx="32" cy="32" r="19" />
    
    {/* Hub */}
    <circle cx="32" cy="32" r="6" />
    
    {/* Spokes - 5-spoke design */}
    <path d="M32 13v13" />
    <path d="M44.8 19.2l-9.2 9.2" />
    <path d="M51 32H38" />
    <path d="M44.8 44.8l-9.2-9.2" />
    <path d="M32 51V38" />
    <path d="M19.2 44.8l9.2-9.2" />
    <path d="M13 32h13" />
    <path d="M19.2 19.2l9.2 9.2" />
  </svg>
);


/* =========================================================
   TIRE
   ========================================================= */

export const TireIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Outer tire */}
    <circle cx="32" cy="32" r="26" />
    
    {/* Inner tire */}
    <circle cx="32" cy="32" r="17" />
    
    {/* Tread pattern - radial lines */}
    <path d="M32 6v6" />
    <path d="M48.7 11.3l-4.2 4.2" />
    <path d="M58 32h-6" />
    <path d="M48.7 52.7l-4.2-4.2" />
    <path d="M32 58v-6" />
    <path d="M15.3 52.7l4.2-4.2" />
    <path d="M6 32h6" />
    <path d="M15.3 11.3l4.2 4.2" />
    
    {/* Sidewall detail */}
    <circle cx="32" cy="32" r="21.5" strokeDasharray="4 4" />
  </svg>
);


/* =========================================================
   CHAIN & SPROCKET
   ========================================================= */

export const ChainIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Front sprocket */}
    <circle cx="20" cy="32" r="10" />
    <circle cx="20" cy="32" r="5" />
    
    {/* Rear sprocket */}
    <circle cx="44" cy="32" r="14" />
    <circle cx="44" cy="32" r="7" />
    
    {/* Sprocket teeth */}
    <path d="M20 22v-3M20 42v3M13 27l-2-2M27 27l2-2M13 37l-2 2M27 37l2 2" />
    <path d="M44 18v-3M44 46v3M34 22l-2-2M54 22l2-2M34 42l-2 2M54 42l2 2" />
    
    {/* Chain links */}
    <path d="M30 26h8M30 38h8" />
    <circle cx="32" cy="26" r="1.5" fill="currentColor" />
    <circle cx="36" cy="26" r="1.5" fill="currentColor" />
    <circle cx="32" cy="38" r="1.5" fill="currentColor" />
    <circle cx="36" cy="38" r="1.5" fill="currentColor" />
  </svg>
);


/* =========================================================
   CLUTCH
   ========================================================= */

export const ClutchIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Outer basket */}
    <circle cx="32" cy="32" r="24" />
    
    {/* Pressure plate */}
    <circle cx="32" cy="32" r="18" />
    
    {/* Center hub */}
    <circle cx="32" cy="32" r="8" />
    
    {/* Friction plates */}
    <path d="M18 32h-4M50 32h-4" />
    <path d="M32 18v-4M32 50v-4" />
    <path d="M22 22l-3-3M45 22l3-3M22 42l-3 3M45 42l3 3" />
    
    {/* Spring positions */}
    <circle cx="24" cy="24" r="2" />
    <circle cx="40" cy="24" r="2" />
    <circle cx="40" cy="40" r="2" />
    <circle cx="24" cy="40" r="2" />
  </svg>
);


/* =========================================================
   FORK (Front Suspension)
   ========================================================= */

export const ForkIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Triple clamp top */}
    <path d="M20 10h24v6H20z" />
    
    {/* Left fork tube */}
    <path d="M24 16v36a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V16" />
    
    {/* Right fork tube */}
    <path d="M36 16v36a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V16" />
    
    {/* Fork seals */}
    <path d="M24 24h8M36 24h8" />
    
    {/* Axle mount */}
    <path d="M22 52h10M32 52h10" />
    <circle cx="27" cy="52" r="2" />
    <circle cx="37" cy="52" r="2" />
    
    {/* Adjusters */}
    <circle cx="27" cy="10" r="2" />
    <circle cx="37" cy="10" r="2" />
  </svg>
);


/* =========================================================
   HANDLEBAR
   ========================================================= */

export const HandlebarIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Center mount */}
    <rect x="28" y="28" width="8" height="8" rx="2" />
    
    {/* Handlebar left */}
    <path d="M28 32h-14a6 6 0 0 1-6-6v-4" />
    
    {/* Handlebar right */}
    <path d="M36 32h14a6 6 0 0 0 6-6v-4" />
    
    {/* Left grip */}
    <path d="M8 16v6" />
    <circle cx="8" cy="19" r="3" />
    
    {/* Right grip */}
    <path d="M56 16v6" />
    <circle cx="56" cy="19" r="3" />
    
    {/* Control levers */}
    <path d="M16 28l-4 8" />
    <path d="M48 28l4 8" />
  </svg>
);


/* =========================================================
   LIGHTING
   ========================================================= */

export const LightingIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Headlight housing */}
    <circle cx="32" cy="28" r="16" />
    
    {/* Lens */}
    <circle cx="32" cy="28" r="10" />
    
    {/* Light beam */}
    <path d="M24 20l-8-8M32 16V8M40 20l8-8" />
    
    {/* Mounting bracket */}
    <path d="M26 44h12v6H26z" />
    <path d="M32 44v-4" />
    
    {/* Reflector pattern */}
    <path d="M28 28l-4-4M32 24v-4M36 28l4-4" />
  </svg>
);


/* =========================================================
   MIRROR
   ========================================================= */

export const MirrorIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Mirror glass */}
    <ellipse cx="38" cy="22" rx="16" ry="12" />
    
    {/* Mirror housing */}
    <ellipse cx="38" cy="22" rx="12" ry="9" />
    
    {/* Stem */}
    <path d="M22 22l8 0" />
    
    {/* Ball joint */}
    <circle cx="26" cy="22" r="3" />
    
    {/* Mounting arm */}
    <path d="M18 30l8-8" />
    
    {/* Base mount */}
    <circle cx="18" cy="30" r="4" />
    <path d="M18 34v8" />
  </svg>
);


/* =========================================================
   SEAT
   ========================================================= */

export const SeatIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Seat cushion */}
    <path d="M12 28c0-4 2-6 6-6h28c4 0 6 2 6 6v8c0 3-2 5-5 5H17c-3 0-5-2-5-5v-8z" />
    
    {/* Seat contour */}
    <path d="M20 28c2-2 4-3 8-3h8c4 0 6 1 8 3" />
    
    {/* Stitching detail */}
    <path d="M22 32h20M22 36h20" strokeDasharray="2 2" />
    
    {/* Mounting brackets */}
    <path d="M18 41v8h4" />
    <path d="M46 41v8h-4" />
    
    {/* Rear cowl */}
    <path d="M46 28h8v8l-8 5" />
  </svg>
);