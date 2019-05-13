import { billTotal, formatPercentage, formatterUSD, tipCalculation } from "../spec/utils";
import './styles.css';
console.log('Ready to Party');

const billAmount:number = 125; //input from User on form
console.log(formatterUSD.format(billAmount));

const tipPercentage:number = 10;  //id of selected button
console.log(formatPercentage(tipPercentage));

const tipAmount:number = tipCalculation(billAmount, tipPercentage) //amount of tip
console.log(formatterUSD.format(tipAmount));

const grandTotalBill:number = billTotal(billAmount, tipAmount);
console.log(formatterUSD.format(grandTotalBill));
