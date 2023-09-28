export function numberformat(num:any) {
  return num.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
