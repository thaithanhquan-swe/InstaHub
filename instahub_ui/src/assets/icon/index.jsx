export const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
  </svg>
);

export const InstagramColorIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 108 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient
        id="instagramGradient"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(28 96) rotate(-52) scale(118)"
      >
        <stop offset="0%" stopColor="#FFD600" />
        <stop offset="25%" stopColor="#FF7A00" />
        <stop offset="50%" stopColor="#FF0169" />
        <stop offset="75%" stopColor="#D300C5" />
        <stop offset="100%" stopColor="#7638FA" />
      </radialGradient>
    </defs>

    <rect
      x="4"
      y="4"
      width="100"
      height="100"
      rx="28"
      fill="url(#instagramGradient)"
    />

    <rect
      x="27"
      y="27"
      width="54"
      height="54"
      rx="17"
      stroke="white"
      strokeWidth="7"
    />

    <circle cx="54" cy="54" r="13" stroke="white" strokeWidth="7" />

    <circle cx="72.5" cy="35.5" r="4.5" fill="white" />
  </svg>
);
