import { useMemo } from 'react';

export default function useSearch(data, searchConfig) {
    return useMemo(() => {
        if (!searchConfig.searchTerm) return data;

        return data.filter(item => {
            const value = item[searchConfig.searchBy];

            if (searchConfig.searchBy === 'completed') {
                return (
                    (searchConfig.searchTerm === 'true' && value) ||
                    (searchConfig.searchTerm === 'false' && !value)
                );
            }

            return value
                ?.toString()
                .toLowerCase()
                .includes(searchConfig.searchTerm.toLowerCase());
        });
    }, [data, searchConfig]);
}
