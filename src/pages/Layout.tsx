// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const Layout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="ml-64 flex-1 flex flex-col">
                {/* Top Navbar */}
                <header className="h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-10">
                    <div className="text-xl font-semibold">Admin Panel</div>
                    <div className="flex items-center gap-4">
                        <button className="text-gray-600 hover:text-black">Settings</button>
                        <button className="text-gray-600 hover:text-black">Logout</button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;