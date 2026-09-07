// Dil seçici bayrakları — hepsi 3:2 oranında inline SVG
// (Windows'ta emoji bayraklar görünmediği için gerçek SVG kullanılıyor).

export function FlagTR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11.5" cy="10" r="5" fill="#fff" />
      <circle cx="12.75" cy="10" r="4" fill="#E30A17" />
      <polygon
        fill="#fff"
        points="18.5,7.7 19.06,9.23 20.69,9.29 19.4,10.29 19.85,11.86 18.5,10.95 17.15,11.86 17.6,10.29 16.31,9.29 17.94,9.23"
      />
    </svg>
  );
}

export function FlagEN({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
}

export function FlagFR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </svg>
  );
}
