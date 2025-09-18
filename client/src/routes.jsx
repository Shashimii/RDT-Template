import { Routes, Route } from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
import Dashboard from "./pages/Dashboard";
import Permit from "./pages/Permit";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PrimaryLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/permit" element={<Permit />} />
            </Route>
        </Routes>
    );
}