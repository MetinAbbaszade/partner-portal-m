// src/components/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import React from "react"; // Explicitly import React

interface INavigation {
    href: string;
    placeholder: string;
    icon: React.ReactElement;
}

const NavigationData: INavigation[] = [
    {
        href: '/',
        placeholder: 'Home',
        icon: <RiHome2Fill />
    },
    {
        href: '/dashboard',
        placeholder: 'Dashboard',
        icon: <MdOutlineSpaceDashboard />
    },
    {
        href: '/settings',
        placeholder: 'Settings',
        icon: <IoIosSettings />
    },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <div
            className="
            w-64 fixed top-0 left-0 h-full bg-gray-900 text-white flex flex-col shadow-lg z-20
            transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out
            "
        >

            <div className="p-6 border-b border-gray-700 flex items-center justify-center">
                <h1 className="text-2xl font-bold text-indigo-400">Admin Panel</h1>
            </div>

            <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
                <ul className="space-y-2">
                    {NavigationData.map(({ href, placeholder, icon }) => (
                        <li key={href}>
                            <Link
                                to={href}
                                className={`
                                flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white
                                transition-colors duration-200 ease-in-out
                                ${location.pathname === href
                                        ? "bg-indigo-600 text-white shadow-md"
                                        : ""
                                    }
                                `}
                            >
                                {icon}
                                <span className="font-medium">{placeholder}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-6 border-t border-gray-700 text-sm text-gray-400">
                <p>&copy; 2025 Your Company</p>
            </div>
        </div>
    );
};

export default Sidebar;