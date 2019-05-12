import { add, percentage } from "./utils";

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(true).toBe(true);
    });
    it('can add DELETE ME', () => {
        expect(add(2,2)).toBe(4);
    });
});

describe('does what tips supposed to do', () =>{
    it('calculates percentages', () => {
        let base: number = 100;
        let tipAmount: number = 20;
        expect(percentage(100,20)).toBe(5);
    });
});