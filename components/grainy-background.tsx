export function GrainyBackground(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} className="texture">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={0.8}
          numOctaves={4}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#a)" />
    </svg>
  );
}
