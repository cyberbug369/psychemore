export default function Logo() {
  return (
    <div className="group flex items-center gap-3">
      <svg
  width="42"
  height="42"
  className="transition-transform duration-300 group-hover:scale-110"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"

      >
        <path
          d="M20 18C12 18 10 24 10 29C10 34 13 38 18 39C18 45 22 50 28 50C32 50 35 48 37 45C39 48 42 50 46 50C52 50 56 45 56 39C61 38 54 34 54 29C54 24 52 18 44 18C41 14 36 12 32 12C28 12 23 14 20 18Z"
          stroke="#A855F7"
          strokeWidth="2.5"
        />

        <line
          x1="32"
          y1="50"
          x2="32"
          y2="60"
          stroke="#A855F7"
          strokeWidth="2.5"
        />
      </svg>

      <span className="text-2xl font-extrabold tracking-wide">
        <span className="text-purple-400">PSYCHE</span>MORE
      </span>
    </div>
  );
}