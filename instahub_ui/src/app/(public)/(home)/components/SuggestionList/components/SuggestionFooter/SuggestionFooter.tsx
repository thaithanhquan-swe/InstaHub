const footerLinks = [
  'About',
  'Help',
  'Press',
  'API',
  'Jobs',
  'Privacy',
  'Terms',
  'Locations',
  'Language',
  'Meta Verified',
];

function SuggestionFooter() {
  return (
    <footer className="mt-8 text-xs leading-5 text-[#737373]">
      <div className="flex flex-wrap gap-x-1">
        {footerLinks.map((link, index) => (
          <span key={link}>
            <button type="button" className="cursor-pointer hover:underline">
              {link}
            </button>

            {index < footerLinks.length - 1 && <span className="ml-1">·</span>}
          </span>
        ))}
      </div>

      <p className="mt-4 uppercase">© 2026 INSTAHUB</p>
    </footer>
  );
}

export default SuggestionFooter;
