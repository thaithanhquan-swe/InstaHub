import Sidebar from "@/layouts/Sidebar/Sidebar";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-(--background-color)">
      <Sidebar />
      <div className="">{children}</div>
    </div>
  );
}

export default PublicLayout;
