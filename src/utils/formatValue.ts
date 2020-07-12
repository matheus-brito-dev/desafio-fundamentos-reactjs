 const formatValue = (value: number): string =>
  Intl.NumberFormat([],{style:'currency',
  currency: 'BRL'}).format(value); // TODO


// export let formatDate = new Intl.DateTimeFormat('pt-br',{
//   year: '2-digit',
//   month: '2-digit',
//   day: '2-digit',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit'
// });

// export const formatDate = (value: Date): string =>
// Intl.DateTimeFormat().format(value);

export default formatValue;
