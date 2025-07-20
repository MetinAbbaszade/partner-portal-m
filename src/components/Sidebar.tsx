
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { GrProductHunt } from "react-icons/gr";


interface SubMenuItem {
    href: string;
    placeholder: string;
}

interface MenuItem {
    href?: string;
    placeholder: string;
    icon: React.ReactElement;
    subItems?: SubMenuItem[];
}

const NavigationData: MenuItem[] = [
    {
        href: "/",
        placeholder: "Home",
        icon: <RiHome2Fill />,
    },
    {
        href: "/dashboard",
        placeholder: "Dashboard",
        icon: <MdOutlineSpaceDashboard />,
    },
    {
        placeholder: "Products",
        icon: <GrProductHunt />,
        subItems: [
            { href: "/products/list", placeholder: "All Products" },
            { href: "/products/add", placeholder: "Add New Product" },
            { href: "/products/categories", placeholder: "Categories" },
        ],
    },
    {
        placeholder: "Orders",
        icon: <TbCategory />,
        subItems: [
            { href: "/orders/all", placeholder: "All Orders" },
            { href: "/orders/pending", placeholder: "Pending Orders" },
            { href: "/orders/completed", placeholder: "Completed Orders" },
        ],
    },
    {
        href: "/settings",
        placeholder: "Settings",
        icon: <IoIosSettings />,
    },
];


const Sidebar: React.FC = () => {
    const location = useLocation();
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

    const toggleSubMenu = (placeholder: string) => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [placeholder]: !prev[placeholder],
        }));
    };


    const isSubPathActive = (subItems: SubMenuItem[] | undefined) => {
        if (!subItems) return false;
        return subItems.some((item) => location.pathname === item.href);
    };

    return (
        <div
            className={`
                w-64 fixed top-0 left-0 h-full bg-gray-800 text-white flex flex-col shadow-lg z-20
                transition-transform duration-300 ease-in-out
                lg:translate-x-0
            `}
        >
            <div className="p-6 border-b border-gray-700 flex items-center justify-center">
                <h1 className="text-2xl font-bold text-indigo-400">Admin Panel</h1>
            </div>

            <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
                <ul className="space-y-2">
                    {NavigationData.map(({ placeholder, href, subItems, icon }) => (
                        <li key={placeholder}>
                            {href ? (
                                <Link
                                    to={href}
                                    className={`
                                            flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white
                                            transition-colors duration-200 ease-in-out
                                            ${location.pathname === href ? "bg-indigo-600 text-white shadow-md" : ""}
                                    `}
                                >
                                    {icon}
                                    <span className="font-medium">{placeholder}</span>
                                </Link>
                            ) : (

                                <div>
                                    <button
                                        onClick={() => toggleSubMenu(placeholder)}
                                        className={`
                                                    w-full flex items-center justify-between gap-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white
                                                    transition-colors duration-200 ease-in-out
                                                    ${isSubPathActive(subItems) || openSubMenus[placeholder] ? "bg-gray-700 text-white" : ""}
                                        `}
                                    >
                                        <div className="flex items-center gap-3">
                                            {icon}
                                            <span className="font-medium">{placeholder}</span>
                                        </div>
                                        {openSubMenus[placeholder] ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                                    </button>
                                    {openSubMenus[placeholder] && subItems && (
                                        <ul className="pl-8 mt-2 space-y-1">
                                            {subItems.map(({ href, placeholder }) => (
                                                <li key={href}>
                                                    <Link
                                                        to={href}
                                                        className={`
                                                            flex items-center p-2 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white
                                                            transition-colors duration-200 ease-in-out
                                                            ${location.pathname === href ? "bg-indigo-700 text-white font-semibold" : ""}
                                                        `}
                                                    >
                                                        <span className="text-sm">{placeholder}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
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