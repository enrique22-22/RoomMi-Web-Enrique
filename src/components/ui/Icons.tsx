export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="40" height="40" rx="12" fill="url(#logoGrad)" />
      <path
        d="M12 26V18l8-6 8 6v8h-5v-6h-6v6H12z"
        fill="white"
        fillOpacity="0.95"
      />
      <circle cx="28" cy="14" r="4" fill="#34d399" />
      <defs>
        <linearGradient id="logoGrad" x1="8" y1="4" x2="32" y2="36">
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const paths: Record<string, string> = {
  shield: "M12 2l8 3v7c0 5-3.5 9.7-8 11-4.5-1.3-8-6-8-11V5l8-3z",
  scale: "M12 2v20M5 8h14M7 14h10",
  chat: "M4 5a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-6l-4 4V5z",
  home: "M4 11l8-6 8 6v10a1 1 0 01-1 1H5a1 1 0 01-1-1V11z",
  message: "M5 5h14a2 2 0 012 2v8a2 2 0 01-2 2H9l-4 4V5z",
  star: "M12 2l2.5 6.1L21 8.5l-5 4.8 1.2 6.2L12 16.8 6.8 19.5 8 13.3 3 8.5l6.5-.4L12 2z",
  match: "M8 10a4 4 0 108 0M16 10a4 4 0 104 0",
};

export function FeatureIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const d = paths[name] ?? paths.home;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}
