import { Outlet } from "react-router-dom";
import SidebarAdmin from "../../components/Elements/SidebarAdmin";

const Admin = () => {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
