import { billTotal, formatPercentage, formatterUSD, tipCalculation } from '../spec/utils';
import './styles.css';
console.log('Ready to Party');

let tipstore: number;
let bill = document.getElementById("okay");
bill.addEventListener('input', displayBill);
bill.addEventListener('input', startMath)

document.querySelectorAll('.bunch button').forEach(b =>
  b.addEventListener('click', tipTime));

function tipTime(e: any) {
  let selection: string = e.srcElement.innerHTML;
  console.log(selection);
  let tipString = 't' + selection;
  console.log(tipString);
  let theAmountToTip = +this.dataset.amount;
  console.log(theAmountToTip);
  if (tipString === 't10%') {
    let tippy: any = document.getElementById('t10');
    tippy.disabled = true;
    tipstore = 10;
    document.getElementById("tipPercentage").innerHTML = `Amount of tip: ${(selection)}`;
    document.getElementById('tipInfo').innerHTML = `You are tipping: ${(selection)}`
  }
  if (tipString === 't15%') {
    let tippy: any = document.getElementById('t15');
    tippy.disabled = true;
    tipstore = 15;
    document.getElementById("tipPercentage").innerHTML = `Amount of tip: ${(selection)}`;
    document.getElementById('tipInfo').innerHTML = `You are tipping: ${(selection)}`
  }
  if (tipString === 't20%') {
    let tippy: any = document.getElementById('t20');
    tippy.disabled = true;
    tipstore = 20;
    document.getElementById("tipPerecentage").innerHTML = `Amount of tip: ${(selection)}`;
    document.getElementById('tipInfo').innerHTML = `You are tipping: ${(selection)}`
  }
}

// const tipPercentage: any = 10;  //id of selected button
// console.log(formatPercentage(tipPercentage));


function displayBill(num: any) {
  let what: number = num.srcElement.value;
  document.getElementById("ba").innerHTML = `Bill Amount: ${formatterUSD.format(what)}`;
}

function startMath(math: any) {
  let now = parseFloat(math.srcElement.value);
  let x = tipCalculation(now, 10);
  document.getElementById("tipAmount").innerHTML = `Amount of tip: ${formatterUSD.format(x)}`;
  let z = billTotal(now, x);
  document.getElementById("billTotal").innerHTML = `Total to be Paid: ${formatterUSD.format(z)}`;
}


//input-type numbers on the input thing...but will still allow negatives
