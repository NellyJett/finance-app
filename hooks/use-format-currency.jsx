import { useMemo } from "react";

const useFormatCurrency = (amount, currency = 'EUR') => {
    const formatCurrency = (amount) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);

    return useMemo(
        () => formatCurrency(amount),
        [amount]           
    );
};

export default useFormatCurrency;
