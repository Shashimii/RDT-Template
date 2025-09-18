import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function PrimaryLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [isLargeScreen, setIsLargeScreen] = useState(true);

	// Set initial sidebar state based on screen size
	useEffect(() => {
		const checkScreenSize = () => {
			const isLarge = window.innerWidth >= 769; // md breakpoint
			setIsLargeScreen(isLarge);

			if (isLarge) {
				setSidebarOpen(true);
			} else {
				setSidebarOpen(false);
			}
		};

		// Set initial state
		checkScreenSize();

		// Listen for resize events
		window.addEventListener('resize', checkScreenSize);

		// Cleanup
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	return (
		<div className="flex min-h-screen bg-gray-100">
			{/* Dark Overlay for Mobile */}

			<div 
				className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300
				${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
				onClick={() => setSidebarOpen(false)}
			/>

			{/* Sidebar */}
			<Sidebar isOpen={sidebarOpen} isLargeScreen={isLargeScreen} />

			{/* Content Area */}
			<div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : isLargeScreen ? 'ml-13' : 'ml-0'}`}>
				<Navbar
					onToggleSidebar={() => setSidebarOpen(prev => !prev)}
				/>

				{/* Main Content */}
				<main className="flex-1 p-6"><Outlet /></main>
			</div>
		</div>
	);
}
