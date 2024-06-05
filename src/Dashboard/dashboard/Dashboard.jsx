import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardMenu from '../../components/dashboardMenu/DashboardMenu';
import LogoutButton from '../../components/logoutButton/LogoutButton';

const Dashboard = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <>

            <div className="flex min-h-screen">
                {/* Vertical Menu for Desktop */}
                <nav className="hidden md:block bg-gray-800 text-white flex-shrink-0">
                    <DashboardMenu />
                    <LogoutButton />
                </nav>

                {/* Content Area */}
                <div className="flex-1 p-4">
                    <header className="flex items-center justify-between md:hidden">
                        <button
                            className="text-gray-800 focus:outline-none"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            ☰
                        </button>
                    </header>

                    {/* Main Content */}
                    <main>
                        <Outlet></Outlet>
                    </main>
                </div>

                {/* Sidebar Menu for Mobile */}
                <div
                    className={`fixed inset-0 bg-gray-800 text-white p-4 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
                >
                    <button
                        className="text-white mb-4"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        ✕
                    </button>
                    <DashboardMenu />
                    <LogoutButton />
                </div>
            </div>
        </>
    );
};

export default Dashboard;