import Header from "./_components/Header";
import SideBar from "./_components/SideBar";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      {/* Header */}
      <Header />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content (ONLY THIS SCROLLS) */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
