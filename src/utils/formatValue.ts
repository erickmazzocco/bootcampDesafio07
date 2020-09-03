const formatValue = (value: number): string => {
  const formatedValue = Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
  }).format(value);

  return `R$ ${formatedValue}`;
};

export default formatValue;
