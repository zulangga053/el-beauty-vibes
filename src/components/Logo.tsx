interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({
  size = 48,
  className = "",
}: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Logo"
      width={size}
      height={size}
      decoding="async"
      className={`rounded-full object-cover ${className}`}
    />
  );
}
