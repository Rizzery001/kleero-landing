type LogoProps = {
  className?: string;
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
};

/**
 * KLEERO brand mark — uses the actual logo path from /public/logo-mark.svg.
 * Re-rendered inline (not via <img>) so we can recolor it for light/dark contexts.
 */
export default function Logo({
  className = '',
  variant = 'dark',
  showWordmark = true,
}: LogoProps) {
  const fill = variant === 'dark' ? '#143A2C' : '#FAF7F2';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 1080 1080"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M657.249 747.474L611.14 626.532C601.216 600.495 577.034 582.831 549.503 581.057L547.059 747.474H369.14L371.202 613.694C371.612 586.922 352.998 559.476 327.305 559.476C293.471 559.476 261 527.067 261 488.763V347.004H429.612V488.763C429.612 517.573 446.81 542.348 471.492 553.433L543.56 347H710.038L636.224 558.462H714.783C745.435 558.462 772.621 578.167 782.151 607.302L828 747.474H657.249Z"
          fill={fill}
        />
      </svg>
      {showWordmark && (
        <span
          className="text-[1.4rem] tracking-tight font-display font-medium"
          style={{ color: fill, letterSpacing: '-0.02em' }}
        >
          kleero
        </span>
      )}
    </div>
  );
}
