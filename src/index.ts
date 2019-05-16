import { billTotal, formatPercentage, formatterUSD, tipCalculation } from '../spec/utils';
import './styles.css';
console.log('Ready to Party');

let bill = document.getElementById("okay");
bill.addEventListener('input', displayBill);
bill.addEventListener('input', startMath)


const tipPercentage:any = 10;  //id of selected button
console.log(formatPercentage(tipPercentage));


function displayBill(num:any){
  let what:number = num.srcElement.value;
  document.getElementById("ba").innerHTML = `Bill Amount: ${formatterUSD.format(what)}`; 
}

function startMath(math:any){
let now = parseFloat(math.srcElement.value);
let tipPer = 10
let x = tipCalculation(now,10);
document.getElementById("tipAmount").innerHTML = `Amount of tip: ${formatterUSD.format(x)}`; 
let z = billTotal(now, x);
document.getElementById("billTotal").innerHTML = `Total to be Paid: ${formatterUSD.format(z)}`;
}



