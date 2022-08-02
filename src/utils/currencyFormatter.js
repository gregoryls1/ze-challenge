const currencyFormatter = {
  'format': (type, value) => {
      let currency = value.toFixed(2).toString();
      switch (type) {
          case 'br':
            currency = currency.replace('.', ',')
              return `R$ ${currency}`
          default:
              return `R$ ${currency}`
      }

  }
}
export default currencyFormatter;