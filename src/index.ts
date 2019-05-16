import { billTotal, formatterUSD, tipCalculation } from '../spec/utils';
import './styles.css';
console.log('Ready to Party');

let tipstore: number = 0;
let bill = document.getElementById("okay");
bill.addEventListener('input', displayBill);
bill.addEventListener('input', startMath);

document.querySelectorAll('.bunch button').forEach(b =>
  b.addEventListener('click', tipTime));

function tipTime(e: any) {
  let selection: string = e.srcElement.innerHTML;
  console.log(selection);
  let tipString = 't' + selection;
  console.log(tipString);

  tipstore = +this.dataset.amount;
  console.log(tipstore);
  if (tipString === 't10%') {
    let tippy: any = document.getElementById('t10');
    let unTippy: any = document.getElementById('t15');
    let unTippyTwo: any = document.getElementById('t20');
    tippy.disabled = true;
    unTippy.disabled = false;
    unTippyTwo.disabled = false;
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
  if (isNaN(this.value) || this.value < 0) {
    let box = document.getElementById('okay');
    box.addEventListener('blur', validateInput);
  }

  let bAmount: number = this.valueAsNumber;
  document.getElementById("ba").innerHTML = `Bill Amount: ${formatterUSD.format(bAmount)}`;
}

function validateInput(val: any) {
  let box = document.getElementById('okay');
  box.innerHTML = '';
  box.style.borderColor = 'red';
  this.value = null;
  document.getElementById("ba").innerHTML = 'Bill Amount:';
  document.getElementById("tipPercentage").innerHTML = 'Tip Percentage:';
  document.getElementById("tipAmount").innerHTML = 'Amount of tip:';
  document.getElementById("billTotal").innerHTML = 'Total to be Paid:';
}

function startMath(math: any) {
  let inputAmount = document.getElementById('okay') as HTMLInputElement;
  const amount = inputAmount.valueAsNumber;
  let tipCalc = tipCalculation(amount, tipstore);
  document.getElementById("tipAmount").innerHTML = `Amount of tip: ${formatterUSD.format(tipCalc)}`;
  let bTotal = billTotal(amount, tipCalc);
  document.getElementById("billTotal").innerHTML = `Total to be Paid: ${formatterUSD.format(bTotal)}`;
}


