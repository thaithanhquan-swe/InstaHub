export function createAiArtwork(prompt: string) {
  const safePrompt = prompt.trim().slice(0, 70) || 'Your imagination';
  const hue =
    Array.from(safePrompt).reduce(
      (total, character) => total + character.charCodeAt(0),
      0
    ) % 360;
  const escapedPrompt = safePrompt
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="hsl(${hue} 82% 58%)"/>
        <stop offset=".48" stop-color="hsl(${(hue + 75) % 360} 78% 42%)"/>
        <stop offset="1" stop-color="hsl(${(hue + 170) % 360} 88% 24%)"/>
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="70"/></filter>
    </defs>
    <rect width="1080" height="1080" fill="url(#background)"/>
    <circle cx="170" cy="220" r="250" fill="white" opacity=".2" filter="url(#blur)"/>
    <circle cx="900" cy="820" r="300" fill="white" opacity=".14" filter="url(#blur)"/>
    <path d="M90 780 C260 570 420 940 610 700 S920 520 1030 650" fill="none" stroke="white" stroke-opacity=".42" stroke-width="15"/>
    <text x="540" y="485" fill="white" font-family="Arial, sans-serif" font-size="34" font-weight="700" text-anchor="middle" letter-spacing="5">AI CREATION</text>
    <foreignObject x="130" y="530" width="820" height="230">
      <div xmlns="http://www.w3.org/1999/xhtml" style="color:white;font:700 58px/1.18 Arial,sans-serif;text-align:center;word-wrap:break-word">${escapedPrompt}</div>
    </foreignObject>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
