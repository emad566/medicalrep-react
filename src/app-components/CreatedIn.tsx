import React, { useState } from 'react';
import DateRangeEditor from './DateRangeEditor';

const formatDate = (date: any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const getDateRange = (buttonName: string): [String, String] | null => {
    const currentDate = new Date();
    let startDate = new Date();
    let endDate = new Date();

    switch (buttonName) {
        case 'اليوم':
            startDate = new Date(currentDate.setHours(0, 0, 0, 0));
            endDate = new Date(currentDate.setHours(23, 59, 59, 999));

            break;
        case 'أمس':
            startDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
            startDate.setHours(0, 0, 0, 0);
            endDate = new Date(currentDate.setHours(23, 59, 59, 999));
            break;
        case 'هذا الأسبوع':
            const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();
            const lastDayOfWeek = firstDayOfWeek + 6;
            startDate = new Date(currentDate.setDate(firstDayOfWeek));
            startDate.setHours(0, 0, 0, 0);
            endDate = new Date(currentDate.setDate(lastDayOfWeek));
            endDate.setHours(23, 59, 59, 999);
            break;
        case 'الشهر الحالي':
            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            startDate = new Date(firstDayOfMonth.setHours(0, 0, 0, 0));
            endDate = new Date(lastDayOfMonth.setHours(23, 59, 59, 999));
            break;
        case 'ربع العام الحالي':
            const quarterStartMonth = Math.floor(currentDate.getMonth() / 3) * 3;
            const firstDayOfQuarter = new Date(currentDate.getFullYear(), quarterStartMonth, 1);
            const lastDayOfQuarter = new Date(currentDate.getFullYear(), quarterStartMonth + 3, 0);
            startDate = new Date(firstDayOfQuarter.setHours(0, 0, 0, 0));
            endDate = new Date(lastDayOfQuarter.setHours(23, 59, 59, 999));
            break;
        case 'ربع العام السابق':
            const previousQuarterStartMonth = Math.floor(currentDate.getMonth() / 3 - 1) * 3;
            const firstDayOfPreviousQuarter = new Date(currentDate.getFullYear(), previousQuarterStartMonth, 1);
            const lastDayOfPreviousQuarter = new Date(currentDate.getFullYear(), previousQuarterStartMonth + 3, 0);
            startDate = new Date(firstDayOfPreviousQuarter.setHours(0, 0, 0, 0));
            endDate = new Date(lastDayOfPreviousQuarter.setHours(23, 59, 59, 999));
            break;
        case 'العام الحالي':
            const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
            const lastDayOfYear = new Date(currentDate.getFullYear(), 11, 31);
            startDate = new Date(firstDayOfYear.setHours(0, 0, 0, 0));
            endDate = new Date(lastDayOfYear.setHours(23, 59, 59, 999));
            break;
        case 'مخصص':
            return null;
        default:
            break;
    }
    return [formatDate(startDate), formatDate(endDate)];
};

interface CreatedInProps {
    setQueryDateRange: (dateRange: any) => void;
}

const CreatedIn: React.FC<CreatedInProps> = ({ setQueryDateRange }) => {
    const [selectedButton, setSelectedButton] = useState<string | null>("الكل");
    const [dateRange, setDateRange] = useState<any>(["2020-01-01 00:00:00", "2050-01-01 00:00:00"]);

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
        handleSetDateRangeBasedButton(buttonName);
    };

    const handleSetDateRangeBasedButton = (buttonName: string): void => {
        if (buttonName == 'الكل') {
            setDateRange(["2020-01-01 00:00:00", "2050-01-01 00:00:00"]);
            setQueryDateRange(["2020-01-01 00:00:00", "2050-01-01 00:00:00"]);
            return;
        }
        setQueryDateRange(getDateRange(buttonName) ?? dateRange);
        setDateRange(getDateRange(buttonName) ?? dateRange);
    };

    const handleSetDateRange = (newDateRange: any): void => {
        setQueryDateRange(newDateRange);
        setDateRange(newDateRange);
    };


    return (
        <div>
            {['الكل', 'اليوم', 'أمس', 'هذا الأسبوع', 'الشهر الحالي', 'ربع العام الحالي', 'ربع العام السابق', 'العام الحالي', 'مخصص'].map((buttonName) => (
                <button
                    key={buttonName}
                    style={{ backgroundColor: selectedButton === buttonName ? 'blue' : 'initial', color: selectedButton === buttonName ? 'white' : 'black' }}
                    onClick={() => handleButtonClick(buttonName)}
                >
                    {buttonName}
                </button>
            ))}
            {selectedButton && (
                <DateRangeEditor dateRange1={dateRange}  handleSetDateRange={handleSetDateRange} />
            )}
        </div>
    );
};

export default CreatedIn;