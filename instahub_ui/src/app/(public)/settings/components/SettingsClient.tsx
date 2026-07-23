'use client';

import { useMemo, useState } from 'react';
import { settingsGroups } from '../../../../data/settings';
import SettingsFooter from './SettingsFooter';
import SettingsPanel from './SettingsPanel';
import SettingsSidebar from './SettingsSidebar';

export default function SettingsClient() {
  const [activeSection, setActiveSection] = useState('edit-profile');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return settingsGroups;

    return settingsGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.label.toLowerCase().includes(query)
        )
      }))
      .filter((group) => group.items.length > 0);
  }, [searchQuery]);

  return (
    <div className='fixed inset-y-0 right-0 left-18 z-40 flex overflow-hidden text-[#f5f5f5]'>
      <SettingsSidebar
        activeSection={activeSection}
        filteredGroups={filteredGroups}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSectionChange={setActiveSection}
      />

      <main className='min-w-0 flex-1 overflow-y-auto px-10'>
        <div className='flex min-h-full flex-col'>
          <div className='flex-1'>
            <SettingsPanel activeSection={activeSection} />
          </div>
          <SettingsFooter />
        </div>
      </main>
    </div>
  );
}
