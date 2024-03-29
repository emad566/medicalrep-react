import {useEffect, useState} from 'react';


export function useFetch(fetchFn, initialValue,  errorMsg = ''){
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('');
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        async function fetchData(){
            setIsFetching(true);
            try {
                const responseData = await fetchFn();
                setFetchedData(responseData);
            } catch (error) {
                setError({message: (error.message || 'Failed to fetch data') + `: ${errorMsg}`});
            }
            setIsFetching(false); 
        }
        fetchData();
    }, []);
    
    return {isFetching, fetchedData, setFetchedData, error};
}