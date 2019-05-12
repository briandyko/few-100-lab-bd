import { add, billTotal, tipCalculation } from "./utils";

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(true).toBe(true);
    });
    it('can add DELETE ME', () => {
        expect(add(2,2)).toBe(4);
    });
});

describe('does what tips supposed to do', () =>{
    it('caluculates amount of tip', () => {
        const billAmount:number = 100;
        const tipSelection:number = 20;
        const tipAmount = tipCalculation(billAmount, tipSelection);
        expect(tipAmount).toBe(20);
    });
    it('calculates Bill Total', () => {
        const billAmount:number = 100;
        const tipTotal:number = 20;
        const total:number = billTotal(billAmount, tipTotal);
        expect(total).toBe(120);
    });
});