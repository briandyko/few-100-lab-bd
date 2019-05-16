export const add = (a:number, b:any) => a + b;
export function tipCalculation(billAmount:any, tipSelection:any){
    const percentify = (tipAmount:any) => tipAmount/100;
    return (billAmount * percentify(tipSelection));
} 
export function billTotal(billAmount:any, tipAmount:any){
    return add(billAmount, tipAmount);
}
export const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  export const formatPercentage  = (percentage:any) => percentage + '%';

  