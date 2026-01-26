export default function ConceptoLogo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#14b8a6" /> {/* teal-500 */}
                    <stop offset="50%" stopColor="#06b6d4" /> {/* cyan-500 */}
                    <stop offset="100%" stopColor="#6366f1" /> {/* indigo-500 */}
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Outer Hexagon/C Shape Container */}
            <path
                d="M50 5 L88.97 27.5 V72.5 L50 95 L11.03 72.5 V27.5 L50 5 Z"
                stroke="url(#logo-gradient)"
                strokeWidth="2"
                strokeOpacity="0.3"
                className="animate-pulse"
            />

            {/* Stylized 'C' / Neural Architecture */}
            <path
                d="M85 35 C 80 20, 65 10, 50 10 C 27.909 10, 10 27.909, 10 50 C 10 72.091, 27.909 90, 50 90 C 65 90, 80 80, 85 65"
                stroke="url(#logo-gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#glow)"
            />

            {/* Central Neural Node */}
            <circle cx="50" cy="50" r="10" fill="url(#logo-gradient)" filter="url(#glow)" />

            {/* Synaptic Connections */}
            <path
                d="M50 50 L 85 35 M 50 50 L 85 65"
                stroke="url(#logo-gradient)"
                strokeWidth="3"
                strokeDasharray="4 4"
                strokeOpacity="0.8"
            />

            {/* Orbiting Particle */}
            <circle cx="50" cy="10" r="4" fill="#fff" className="animate-spin-slow origin-[50px_50px]" />
        </svg>
    );
}
