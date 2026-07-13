import Sidebar from "@/layouts/Sidebar/Sidebar";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <div className="">{children}</div>
    </div>
  );
}

export default PublicLayout;
