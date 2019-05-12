export const add = (a:number, b:number) => a + b;
export function tipCalculation(billAmount:number, tipSelection:number){
    const percentify = (tipAmount:number) => tipAmount/100;
    return (billAmount * percentify(tipSelection));
} 
export function billTotal(billAmount:number, tipAmount:number){
    return add(billAmount, tipAmount);
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  