import { Home, Settings } from "react-feather";
import AppLangKeys from "../../../localization/AppLangKeys";

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


];
