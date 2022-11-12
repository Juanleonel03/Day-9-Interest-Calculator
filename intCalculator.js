const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const interestPay = document.getElementById('interestPay');
const totalPay = document.getElementById('totalPay');
const button = document.getElementById('button');

button.addEventListener('click', (e)=>{
  e.preventDefault();
  let inte = `${(Number(amount.value) * (Number(interest.value)/100) * Number(years.value))}`
  interestPay.innerHTML = `Interest amount: $${inte}`
  totalPay.innerHTML = `Total Amount Payable: $${Number(amount.value) + Number(inte)} `
})


