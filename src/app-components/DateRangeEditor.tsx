import React, { useEffect, useState } from 'react';



interface Props {
    dateRange1: any;
    handleSetDateRange: any;
}

const DateRangeEditor: React.FC<Props> = ({ dateRange1, handleSetDateRange }) => {
    const [dateRange, setDateRange] = useState<any>({ dateFrom: dateRange1[0], dateTo: dateRange1[1] });

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateRange({ ...dateRange, dateFrom: e.target.value });
        handleSetDateRange([e.target.value, dateRange.dateTo]);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateRange({ ...dateRange, dateTo: e.target.value });
        handleSetDateRange([dateRange.dateFrom, e.target.value]);
    };

    useEffect(() => {
        setDateRange({ dateFrom: dateRange1[0], dateTo: dateRange1[1] });
    }, [dateRange1])


    return (
        <div>
            {/* {(dateRange1 && selectedButton != 'الكل') && ( */}
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }} className='input-group'>
                <span>تم الانشاء من :</span>
                <input type="datetime" className="form-control col-md-4 my-2" value={dateRange.dateFrom} onChange={handleStartDateChange} />
                <span>الى</span>
                <input type="datetime" className="form-control col-md-4 my-2" value={dateRange.dateTo} onChange={handleEndDateChange} />
            </div>
            {/* )} */}
        </div>
    );
};

export default DateRangeEditor;