import ToggleSidebarIcon from "./icons/ToggleSidebarIcon";

export default function Navbar({ onToggleSidebar }) {
  return (
	<header className="flex items-center justify-between bg-white shadow px-4 py-3.5 relative z-30">
		<div className="flex items-center space-x-3">
		<button 
			className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-400" 
			onClick={onToggleSidebar}
			aria-label="Toggle sidebar"
		>
			<span>
				<ToggleSidebarIcon />
			</span>
		</button>

			<h1 className="text-xl font-semibold">Dashboard</h1>
		</div>

		<div className="flex items-center space-x-4">
			<button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-400">
				<i className="fa-solid fa-bell"></i>
			</button>
			<img
				src="https://i.pravatar.cc/40"
				alt="User"
				className="w-10 h-10 rounded-full"
			/>
		</div>
	</header>
  );
}
