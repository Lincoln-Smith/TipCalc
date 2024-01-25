//Function to Calc and display Tip, Total bill and amount per person
function calculateAndDisplay (){
//get the values from the html form
let bill = parseFloat(document.getElementById('totalBill').value)
    let numofPpl = parseInt(document.getElementById('numofPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value
//calculate tip, total Bill and the amount each person owes
let tip = calculateTip(bill, serviceQuality)
let totalBill = calculateTotalBill (bill, tip)
let amtPerPers = calcAmtPerPers (totalBill, numofPpl)


//display the results in the html
document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' + amtPerPers.toFixed(2)
}
//helper function to calculate tip based on bill amount and service quality
function calculateTip(bill, quality){
    if (quality === 'Great'){
        return  bill * .2
    } else if (quality === 'Good'){
        return bill * .15
    } else{
        return bill * .10
}
}

function calculateTotalBill(bill, tip){
    return bill + tip
}

function calcAmtPerPers (totalBill, numofPpl){
return totalBill / numofPpl 

}