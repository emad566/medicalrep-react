import { useTranslation } from "react-i18next";
import AppLangKeys from "../../../localization/AppLangKeys";
import Switch from 'react-switch';

export const SpecialistColumns = (): any => {
    const { t } = useTranslation();

    return [
        {
            name: t(AppLangKeys.specialist_name),
            columnName: "specialist_name",
            selector: (row: any) => row.specialist_name,
            sortsortable: false,
            center: true,
            glow: 1,
        },
        {
            name: t(AppLangKeys.products),
            columnName: "products",
            selector: (row: any) => row.products.map((pro: any) => (pro.Product_Name)).join(", "),
            sortsortable: false,
            center: true,
            glow: 1,
        },
        {
            name: `${t(AppLangKeys.is_active)}`,
            columnName: "is_try",
            selector: (row: any) => <Switch id="is_active"
              checked={row.is_active}
              onChange={() => { }}
              disabled={true}
            />,
            sortable: true,
            center: true,
            glow: 1,
          },
    ]
};