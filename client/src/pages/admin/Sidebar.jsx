import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((store) => store.auth);
  console.log("user data is : ", user);
  return (
    <SidebarProvider>
      <div className="flex w-full max-h-screen">
        <AppSidebar user={user} />

        <SidebarTrigger />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Sidebar;
