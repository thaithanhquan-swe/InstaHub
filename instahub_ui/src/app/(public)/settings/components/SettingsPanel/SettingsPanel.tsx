import BlockedPanel from '../panels/BlockedPanel';
import EditProfilePanel from '../panels/EditProfilePanel';
import MetaVerifiedPanel from '../panels/MetaVerifiedPanel';
import PrivacyPanel from '../panels/PrivacyPanel';

type SettingsPanelProps = {
  activeSection: string;
};

export default function SettingsPanel({ activeSection }: SettingsPanelProps) {
  if (activeSection === 'edit-profile') return <EditProfilePanel />;
  if (activeSection === 'account-privacy') return <PrivacyPanel />;
  if (activeSection === 'blocked') return <BlockedPanel />;
  if (activeSection === 'meta-verified') return <MetaVerifiedPanel />;
}
