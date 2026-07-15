import Sidebar from "@/layouts/Sidebar/Sidebar";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
}

export default PublicLayout;
