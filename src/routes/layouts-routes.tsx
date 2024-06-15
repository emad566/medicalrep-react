import Default from "../components/dashboard/defaultCompo/default";
import HomePage from "../pages/home/HomePage";
import AppPaths from "../constant/AppPaths";
import Settings from "../pages/settings/Settings";

export const routes = [
  { path: AppPaths.home, Component: <HomePage /> },
  { path: AppPaths.settings, Component: <Settings /> },
  

  // {/* Widgets Menu */}
  { path: `dashboard/default`, Component: <Default /> },
];
