const decimalFormat = (value: number): string =>
  Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export default decimalFormat;
