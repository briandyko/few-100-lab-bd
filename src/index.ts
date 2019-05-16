import { billTotal, formatPercentage, formatterUSD, tipCalculation } from '../spec/utils';
import './styles.css';
console.log('Ready to Party');

let tipstore: number = 0;
let bill = document.getElementById("okay");
bill.addEventListener('input', displayBill);
// bill.addEventListener('input', startMath)

document.querySelectorAll('.bunch button').forEach(b =>
  b.addEventListener('click', tipTime));

function tipTime(e: any) {
  let selection: string = e.srcElement.innerHTML;
  console.log(selection);
  let tipString = 't' + selection;
  console.log(tipString);
  // let theAmountToTip = +this.dataset.amount;
  tipstore = +this.dataset.amount;
  console.log(tipstore);
  if (tipString === 't10%') {
    let tippy: any = document.getElementById('t10');
    let unTippy: any = document.getElementById('t15');
    let unTippy2: any = document.getElementById('t20');
    tippy.disabled = true;
    unTippy.disabled = false;
    unTippy2.disabled = false;
    tipstore = 10;
    document.getElementById("tipPercentage").innerHTML = `Amount of tip: ${(selection)}`;
    document.getElementById('tipInfo').innerHTML = `You are tipping: ${(selection)}`
  }
  if (tipString === 't15%') {
    let tippy: any = document.getElementById('t15');
    let unTippy: any = document.getElementById('t10');
    let unTippy2: any = document.getElementById('t20');
    tippy.disabled = true;
    unTippy.disabled = false;
    unTippy2.disabled = false;
    tipstore = 15;
    document.getElementById("tipPercentage").innerHTML = `Amount of tip: ${(selection)}`;
    document.getElementById('tipInfo').innerHTML = `You are tipping: ${(selection)}`
  }
  if (tipString === 't20%') {
    let tippy: any = document.getElementById('t20');
    let unTippy: any = document.getElementById('t10');
    let unTippy2: any = document.getElementById('t15');
    tippy.disabled = true;
    unTippy.disabled = false;
    unTippy2.disabled = false;
    tipstore = 20;
    document.getElementById("tipPercentage").innerHTML = `Amount of tip: ${(selection)}`;
    document.getElementById('tipInfo').innerHTML = `You are tipping: ${(selection)}`
  }
  startMath(tipstore);
}



function displayBill(num: any) {
  let what: number = num.srcElement.value;
  document.getElementById("ba").innerHTML = `Bill Amount: ${formatterUSD.format(what)}`;
}

function startMath(math: any) {
  let now = document.getElementById('okay') as HTMLInputElement;
  const amount = now.valueAsNumber;


  let x = tipCalculation(amount, tipstore);
  document.getElementById("tipAmount").innerHTML = `Amount of tip: ${formatterUSD.format(x)}`;
  let z = billTotal(amount, x);
  document.getElementById("billTotal").innerHTML = `Total to be Paid: ${formatterUSD.format(z)}`;
}


//input-type numbers on the input thing...but will still allow negatives
