import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">

        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
