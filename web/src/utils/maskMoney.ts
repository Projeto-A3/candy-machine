function maskMoney (value: number) {
  return value.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  });
}

export default maskMoney;