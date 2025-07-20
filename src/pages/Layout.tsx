import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 bg-slate-800 text-white flex-shrink-0">
                <nav className="p-4">
                    <nav>
                        {/* Apply padding directly to the ul */}
                        <ul className="flex flex-col gap-4 p-4">
                            <li className="hover:bg-gray-700 p-2 rounded">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="hover:bg-gray-700 p-2 rounded">
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </div>
            <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;