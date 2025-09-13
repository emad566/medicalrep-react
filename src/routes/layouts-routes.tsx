import Default from "../components/dashboard/defaultCompo/default";
import HomePage from "../pages/home/HomePage";
import AppPaths from "../constant/AppPaths";
import Settings from "../pages/settings/Settings";
import CompanyProducts from "../pages/CompanyProducts/CompanyProducts";
import ListVisits from "../pages/Reports/ListVisits/ListVisits";
import Specialists from "../pages/Specialists/Specialists";
import UsersVisitsStatistics from "../pages/UsersVisitsStatistics/UsersVisitsStatistics";

export const routes = [
  { path: "/dashboard", Component: <HomePage /> }, // Default dashboard route
  { path: AppPaths.home, Component: <HomePage /> },
  { path: AppPaths.settings, Component: <Settings /> },
  { path: AppPaths.CompanyProducts, Component: <CompanyProducts /> },
  { path: AppPaths.ListVisits, Component: <ListVisits /> },
  { path: AppPaths.Specialists, Component: <Specialists /> },
  { path: AppPaths.UsersVisitsStatistics, Component: <UsersVisitsStatistics /> },
  

  // {/* Widgets Menu */}
  { path: `dashboard/default`, Component: <Default /> },
];
