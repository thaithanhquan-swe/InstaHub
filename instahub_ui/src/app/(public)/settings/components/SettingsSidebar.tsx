import { Search, ShieldCheck, UserRound } from 'lucide-react';
import type { SettingsGroup } from '../../../../data/settings';

type SettingsSidebarProps = {
  activeSection: string;
  filteredGroups: SettingsGroup[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSectionChange: (sectionId: string) => void;
};

export default function SettingsSidebar({
  activeSection,
  filteredGroups,
  searchQuery,
  onSearchChange,
  onSectionChange
}: SettingsSidebarProps) {
  return (
    <aside className='h-full w-[390px] shrink-0 overflow-y-auto border-r border-white/10 px-6 py-8'>
      <h1 className='px-4 text-xl font-bold'>Settings</h1>

      <label className='mt-6 flex h-11 items-center gap-3 rounded-xl bg-[#26292e] px-4 text-[#a8a8a8]'>
        <Search size={18} />
        <input
          type='search'
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search'
          aria-label='Search settings'
          className='min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#a8a8a8]'
        />
      </label>

      {!searchQuery && (
        <div className='mt-7'>
          <div className='mb-3 flex items-center justify-between px-4 text-xs text-[#a8a8a8]'>
            <span>Your account</span>
          </div>
          <button
            type='button'
            onClick={() => onSectionChange('accounts-center')}
            className={`flex w-full cursor-pointer gap-3 rounded-xl p-4 text-left transition-colors hover:bg-[#26292e] ${
              activeSection === 'accounts-center' ? 'bg-[#26292e]' : ''
            }`}
          >
            <UserRound size={24} className='mt-0.5 shrink-0' />
            <span>
              <span className='block text-sm font-semibold'>
                Accounts Center
              </span>
              <span className='mt-1 block text-xs leading-5 text-[#c7c7c7]'>
                Password, security, personal details, connected experiences and
                ad preferences
              </span>
            </span>
          </button>

          <button
            type='button'
            onClick={() => onSectionChange('meta-verified')}
            className={`mt-2 flex h-12 w-full cursor-pointer items-center gap-3 rounded-xl px-4 text-sm transition-colors hover:bg-[#26292e] ${
              activeSection === 'meta-verified' ? 'bg-[#26292e]' : ''
            }`}
          >
            <ShieldCheck size={22} />
            Meta Verified
          </button>
        </div>
      )}

      <nav className='pb-8'>
        {filteredGroups.map((group) => (
          <section key={group.title} className='mt-7'>
            <h2 className='mb-3 px-4 text-xs text-[#a8a8a8]'>{group.title}</h2>
            <ul className='space-y-1'>
              {group.items.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    type='button'
                    onClick={() => onSectionChange(id)}
                    className={`flex h-12 w-full cursor-pointer items-center gap-4 rounded-xl px-4 text-left text-sm transition-colors hover:bg-[#26292e] ${
                      activeSection === id ? 'bg-[#26292e]' : ''
                    }`}
                  >
                    <Icon size={22} className='shrink-0' />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {filteredGroups.length === 0 && (
          <p className='mt-10 text-center text-sm text-[#a8a8a8]'>
            No settings found.
          </p>
        )}
      </nav>
    </aside>
  );
}
