import React from 'react';
import { motion } from 'motion/react';

export const ComplexWireframeSphere: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.8" />
    
    {/* Latitudes */}
    {[10, 20, 30, 40].map((ry) => (
      <ellipse key={`lat-${ry}`} cx="50" cy="50" rx="48" ry={ry} fill="none" stroke="currentColor" strokeWidth="0.2" strokeOpacity="0.4" />
    ))}

    {/* Longitudes */}
    {[10, 20, 30, 40].map((rx) => (
      <ellipse key={`long-${rx}`} cx="50" cy="50" rx={rx} ry="48" fill="none" stroke="currentColor" strokeWidth="0.2" strokeOpacity="0.4" />
    ))}

    {/* Diagonals to create spherical effect */}
    {[30, 60, 120, 150].map((deg) => (
      <ellipse
        key={`diag-${deg}`}
        cx="50" cy="50"
        rx="48" ry="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        strokeOpacity="0.3"
        style={{ transform: `rotate(${deg}deg)`, transformOrigin: '50% 50%' }}
      />
    ))}
    
    <circle cx="50" cy="18" r="1.5" fill="currentColor" fillOpacity="0.6" />
    <circle cx="50" cy="82" r="1.5" fill="currentColor" fillOpacity="0.6" />
  </motion.svg>
);

export const WireframeSphere: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="48" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="15" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="48" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="30" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
  </motion.svg>
);

export const WireframeGrid: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    animate={{ 
      skewX: [0, 5, 0],
      skewY: [0, -5, 0]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    <defs>
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#grid)" />
  </motion.svg>
);

export const DecoStar: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    animate={{ 
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0]
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z"
      fill="currentColor"
    />
  </motion.svg>
);

export const ZigzagLine: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 20"
    className={className}
    animate={{ 
      x: [-10, 10, -10]
    }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M0 10 L10 0 L20 20 L30 0 L40 20 L50 0 L60 20 L70 0 L80 20 L90 0 L100 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </motion.svg>
);

export const CircleGrid: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    animate={{ scale: [0.95, 1.05, 0.95] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  >
    {[10, 20, 30, 40, 48].map((r, i) => (
      <circle key={i} cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="0.5" />
    ))}
    {[0, 45, 90, 135].map((deg, i) => (
      <line
        key={i}
        x1="50" y1="50"
        x2={50 + 48 * Math.cos(deg * Math.PI / 180)}
        y2={50 + 48 * Math.sin(deg * Math.PI / 180)}
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ))}
    {[180, 225, 270, 315].map((deg, i) => (
      <line
        key={i}
        x1="50" y1="50"
        x2={50 + 48 * Math.cos(deg * Math.PI / 180)}
        y2={50 + 48 * Math.sin(deg * Math.PI / 180)}
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ))}
  </motion.svg>
);

export const WireframeTorus: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    animate={{ 
      rotateX: [60, 70, 60],
      rotateY: [0, 360],
    }}
    transition={{ 
      rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      rotateY: { duration: 25, repeat: Infinity, ease: "linear" }
    }}
    style={{ perspective: 1000 }}
  >
    <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="currentColor" strokeWidth="0.75" />
    <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
    <ellipse cx="50" cy="50" rx="25" ry="10" fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.3" />
    
    {[0, 30, 60, 90, 120, 150].map((deg, i) => {
      const rx = 45 * Math.cos(deg * Math.PI / 180);
      return (
        <ellipse key={i} cx="50" cy="50" rx={Math.abs(rx)} ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
      );
    })}
  </motion.svg>
);

export const WireframePlane: React.FC<{ className?: string }> = ({ className }) => (
  <motion.svg
    viewBox="0 0 100 60"
    className={className}
    animate={{ 
      skewY: [0, 2, -2, 0],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  >
    <defs>
      <pattern id="grid-plane" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2"/>
      </pattern>
    </defs>
    <rect width="100" height="60" fill="url(#grid-plane)" stroke="currentColor" strokeWidth="0.5" />
    <motion.path
      d="M 0 30 Q 25 10 50 30 T 100 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      animate={{ d: ["M 0 30 Q 25 10 50 30 T 100 30", "M 0 30 Q 25 50 50 30 T 100 30", "M 0 30 Q 25 10 50 30 T 100 30"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.svg>
);

export const Glass3DBox: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative ${className}`} style={{ perspective: '1200px' }}>
    <motion.div
      className="relative w-full h-full"
      style={{ transformStyle: 'preserve-3d' }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[
        { transform: 'translateZ(40px)', rotateY: 0 },
        { transform: 'translateZ(-40px) rotateY(180deg)', rotateY: 180 },
        { transform: 'translateX(40px) rotateY(90deg)', rotateY: 90 },
        { transform: 'translateX(-40px) rotateY(-90deg)', rotateY: -90 },
        { transform: 'translateY(-40px) rotateX(90deg)', rotateX: 90 },
        { transform: 'translateY(40px) rotateX(-90deg)', rotateX: -90 },
      ].map((face, i) => (
        <div
          key={i}
          className="absolute w-full h-full backdrop-blur-md border border-yellow-400/20 rounded-[40%] overflow-hidden"
          style={{
            transform: face.transform,
            background: 'radial-gradient(circle at 30% 30%, rgba(250, 204, 21, 0.4) 0%, rgba(250, 204, 21, 0.05) 60%, transparent 100%)',
            boxShadow: 'inset 0 0 40px rgba(250, 204, 21, 0.3), 0 0 30px rgba(250, 204, 21, 0.1)',
            left: '0',
            top: '0',
          }}
        >
          {/* Inner glow layers for volumentric effect */}
          <div className="absolute inset-0 bg-yellow-400/10 blur-xl" />
          <div className="absolute top-2 left-2 w-1/2 h-1/2 bg-white/20 rounded-full blur-lg" />
        </div>
      ))}
    </motion.div>
  </div>
);
