import { Calendar, Home, PhoneCall, Settings } from "react-feather";
import AppLangKeys from "../../../localization/AppLangKeys";
import AppPaths from "../../../constant/AppPaths";

interface MenuItem {
  title: string;
  icon: React.ComponentType;
  type: "link" | "sublink" | "sub";
  badgeType: string;
  active: boolean;
  path: string;
  permissions: string[];
  role_types: string[];
  target?: string;
  bookmark?: any,
  children?: any,
  sidebartitle?: any,
  onClick?: (event: React.MouseEvent) => Promise<void>;
}

export const MENUITEMS: MenuItem[] = [

  {
    title: `${AppLangKeys.HomePage}`,
    icon: Home,
    type: "link",
    badgeType: "primary",
    active: false,
    path: "/dashboard/home",
    permissions: ['User'],
    role_types: ['Developer', 'Admin', "User"],

  },
  {
    title: `${AppLangKeys.settings}`,
    icon: Settings,
    type: "link",
    badgeType: "primary",
    active: false,
    path: "/dashboard/settings",
    permissions: ['Setting_Index'],
    role_types: ['Developer', 'Admin', "User"],
  },
  {
    title: `${AppLangKeys.MonthlyReport}`,
    icon: Calendar,
    type: "link",
    badgeType: "primary",
    active: false,
    path: AppPaths.CompanyProducts,
    permissions: ['User_Index'],
    role_types: ['Developer', 'Admin', "User"],
  }, 
  {
    title: `${AppLangKeys.ListVisits}`,
    icon: PhoneCall,
    type: "link",
    badgeType: "primary",
    active: false,
    path: AppPaths.ListVisits,
    permissions: ['User_Index'],
    role_types: ['Developer', 'Admin', "User"],
  }, 
];
