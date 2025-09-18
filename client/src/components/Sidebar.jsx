import { Link } from "react-router-dom";
import Logo from "../assets/logo/denrLogo.png";
import DashboardIcon from "./icons/DashboardIcon";

export default function Sidebar({ isOpen, isLargeScreen}) {
	return (
		<aside
			className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-50
			${isOpen ? "translate-x-0" : isLargeScreen ? "-translate-x-50" : "-translate-x-full"}`}
		>
			<div className="p-4 text-lg font-bold flex items-center gap-2 border-b border-gray-700 ">
				<img
					src={Logo}  
					alt="DENRNCR"
					className={`h-9 w-auto transition-transform duration-300 ${isOpen ? "" : "translate-x-48"}`}
				/>
				<span
					className={`transition-opacity ${isOpen ? "duration-900 opacity-100" : "duration-100 opacity-0"}`}
				>
					My Admin
				</span>
			</div>
			<nav className="mt-4 space-y-1">
				<Link
					to="/dashboard"
					className="flex items-center gap-4 px-5 py-2 hover:bg-gray-800"
				>
					<span className={`transition-transform duration-300 ${isOpen ? "" : "translate-x-48.5"}`}>
						<DashboardIcon />
					</span>
					<span className={`transition-opacity ${isOpen ? "duration-900 opacity-100" : "duration-100 opacity-0" }`}>
						Dashboard
					</span>
				</Link>

			</nav>
		</aside>
  );
}


