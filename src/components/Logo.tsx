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
      src="/logo-el-beauty-512.png"
      alt="Logo"
      width={size}
      height={size}
      decoding="async"
      className={`rounded-full object-cover ${className}`}
    />
  );
}
