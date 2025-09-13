import { useTranslation } from "react-i18next";
import AppLangKeys from "../../../localization/AppLangKeys";

export const UsersVisitsStatisticsColumns = (): any => {
    const { t } = useTranslation();

    return [
        {
            name: t(AppLangKeys.user_id),
            columnName: "user_id",
            selector: (row: any) => row.user_id,
            sortable: true,
            center: true,
            grow: 0.8,
        },
        {
            name: t(AppLangKeys.username),
            columnName: "username",
            selector: (row: any) => row.username,
            sortable: true,
            center: true,
            grow: 1.5,
        },
        
        {
            name: t(AppLangKeys.first_AM_city),
            columnName: "first_AM_city",
            selector: (row: any) => row.first_AM_city || '-',
            sortable: false,
            center: true,
            grow: 1,
        },
        {
            name: t(AppLangKeys.first_AM_time),
            columnName: "first_AM_time",
            selector: (row: any) => row.first_AM_time || '-',
            sortable: false,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.last_AM_time),
            columnName: "last_AM_time",
            selector: (row: any) => row.last_AM_time || '-',
            sortable: false,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.AM_count),
            columnName: "AM_count",
            selector: (row: any) => row.AM_count,
            sortable: true,
            center: true,
            grow: 0.8,
        },
        {
            name: t(AppLangKeys.AM_double_triple_count),
            columnName: "AM_double_triple_count",
            selector: (row: any) => row.AM_double_triple_count,
            sortable: true,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.first_PM_city),
            columnName: "first_PM_city",
            selector: (row: any) => row.first_PM_city || '-',
            sortable: false,
            center: true,
            grow: 1,
        },
        {
            name: t(AppLangKeys.first_PM_time),
            columnName: "first_PM_time",
            selector: (row: any) => row.first_PM_time || '-',
            sortable: false,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.last_PM_time),
            columnName: "last_PM_time",
            selector: (row: any) => row.last_PM_time || '-',
            sortable: false,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.PM_count),
            columnName: "PM_count",
            selector: (row: any) => row.PM_count,
            sortable: true,
            center: true,
            grow: 0.8,
        },
        {
            name: t(AppLangKeys.PM_double_triple_count),
            columnName: "PM_double_triple_count",
            selector: (row: any) => row.PM_double_triple_count,
            sortable: true,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.first_PH_city),
            columnName: "first_PH_city",
            selector: (row: any) => row.first_PH_city || '-',
            sortable: false,
            center: true,
            grow: 1,
        },
        {
            name: t(AppLangKeys.first_PH_time),
            columnName: "first_PH_time",
            selector: (row: any) => row.first_PH_time || '-',
            sortable: false,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.last_PH_time),
            columnName: "last_PH_time",
            selector: (row: any) => row.last_PH_time || '-',
            sortable: false,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.PH_count),
            columnName: "PH_count",
            selector: (row: any) => row.PH_count,
            sortable: true,
            center: true,
            grow: 0.8,
        },
        {
            name: t(AppLangKeys.PH_double_triple_count),
            columnName: "PH_double_triple_count",
            selector: (row: any) => row.PH_double_triple_count,
            sortable: true,
            center: true,
            grow: 1.2,
        },
        {
            name: t(AppLangKeys.total_visits_count),
            columnName: "total_visits_count",
            selector: (row: any) => row.total_visits_count,
            sortable: true,
            center: true,
            grow: 1,
            cell: (row: any) => (
                <span style={{ 
                    fontWeight: 'bold', 
                    color: row.total_visits_count > 0 ? '#28a745' : '#6c757d' 
                }}>
                    {row.total_visits_count}
                </span>
            ),
        },
    ]
};
