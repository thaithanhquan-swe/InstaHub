import FloatingMessages from '@/layouts/FloatingMessages/FloatingMessages';
import Sidebar from '@/layouts/Sidebar/Sidebar';

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <main className="col-span-10 min-w-0">{children}</main>

      <FloatingMessages />
    </div>
  );
}

export default PublicLayout;
