import { Outlet } from "react-router";
import DashboardNav from "../../components/DashboardNav";
import DashboardSidebar from "../../components/DashboardSidebar";

const UsersLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardNav />
      <div className="flex flex-1 ">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-gray-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UsersLayout;
