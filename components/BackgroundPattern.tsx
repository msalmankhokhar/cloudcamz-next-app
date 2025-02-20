export function HeroPattern() {
  return (
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-brandLight-400/10 via-brandLight-400/5 to-transparent" />
      <svg
        className="absolute right-0 top-0 h-[64rem] w-[128rem] translate-y-[-10%] translate-x-[30%] stroke-brandLight-400/10"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-pattern"
            width={100}
            height={100}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M50 100V.5M.5 .5H100" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-pattern)" />
      </svg>
    </div>
  )
}

export function FeaturesPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgb(131 189 213 / 0.05) 1px, transparent 0),
            linear-gradient(rgb(131 189 213 / 0.05) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  )
}
