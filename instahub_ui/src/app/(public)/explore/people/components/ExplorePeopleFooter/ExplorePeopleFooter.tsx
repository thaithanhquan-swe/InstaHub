const footerLinks = [
  "ABOUT",
  "HELP",
  "PRESS",
  "API",
  "JOBS",
  "PRIVACY",
  "TERMS",
  "LOCATIONS",
  "Language",
  "META VERIFIED",
];

function ExplorePeopleFooter() {
  return (
    <footer className="mt-20 pb-10 text-center">
      <div className="mx-auto flex max-w-105 flex-wrap justify-center gap-x-5 gap-y-2">
        {footerLinks.map((link) => (
          <button
            key={link}
            type="button"
            className="cursor-pointer text-xs text-[#6275ff] hover:underline"
          >
            {link}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-(--text-secondary)">
        © 2026 INSTAHUB 
      </p>
    </footer>
  );
}

export default ExplorePeopleFooter;