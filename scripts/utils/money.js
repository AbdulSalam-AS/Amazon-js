export function formatCurrency(pricCents){
    return (Math.round(pricCents/100)).toFixed(2);
}