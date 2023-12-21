export const formatCurrency = (amount: number) => {
  return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
};
