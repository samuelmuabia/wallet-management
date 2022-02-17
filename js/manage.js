//function for getting income amount
function getIncome(){
    amount = parseInt(document.getElementById("income-input").value);
    if (isNaN(amount) || amount<0)
    {
        showAlert("income. Amount cannot be negative or cannot be empty.");
    }
    else{
        return amount;
    }
}
//function for showing alert
function showAlert(field){
    alert("Please give a valid input of "+field);
}
//function to get total expense amount
function getTotalExpense(){
    foodExpense = parseInt(document.getElementById("food-input").value)
    rentExpense = parseInt(document.getElementById("rent-input").value)
    clothesExpense = parseInt(document.getElementById("clothes-input").value)
    if (foodExpense<0 || rentExpense<0 || clothesExpense<0
        || isNaN(foodExpense)|| isNaN(rentExpense)|| isNaN(clothesExpense))
    {
        showAlert("Expenses . Amount cannot be negative or cannot be empty.")
    }
    else{
        calulatedTotalExpense = foodExpense+rentExpense+clothesExpense;
        return calulatedTotalExpense;
    }
}
//funtion for resetting any text field
function resetText(textField){
    textField.innerText ="";
}
// function for setting remaining balance and saving amount .
function savingTextField(){
    savePecentage = parseInt(document.getElementById("saving-input").value);
    remainingBalanceText = document.getElementById("remaining-balance");
    if (savePecentage<0 || savePecentage>100)
    {
        showAlert("save percetage")
        resetText(remainingBalanceText)
        resetText(document.getElementById("saving"))
    }
    else if(isNaN(savePecentage))
    {
        resetText(remainingBalanceText)
        resetText(document.getElementById("saving"))
    }

    else if (!isNaN(getIncome())){
        savingAmount =  getIncome()* savePecentage/100;
        balance = parseInt(document.getElementById("balance").innerText);
        remainingBalanceText = document.getElementById("remaining-balance");
        if (isNaN(balance))
        {
            remainingBalanceText.innerText = getIncome()-savingAmount;
            document.getElementById("saving").innerText = savingAmount;
        }
        else if(balance<savingAmount){
            showAlert("save percentage. Saving amount cannot exceed balance. sorry!!")
            resetText(remainingBalanceText)
            resetText(document.getElementById("saving"))
        }
        else{
             remainingBalanceText.innerText = balance - savingAmount;
             document.getElementById("saving").innerText = savingAmount;
        }
    }
}
// calculate button click handler
document.getElementById("calculate-btn").addEventListener("click",function(){
    income = getIncome();
    totalExpenses = getTotalExpense();
    totalExpenseField = document.getElementById("total-expense");
    balanceField = document.getElementById("balance");
    // checking the total expense and income
    if (totalExpenses>income){
        showAlert("income/expense.Expenses are exceeding the income")
        resetText(balanceField);
        resetText(totalExpenseField);
    }
    else if (totalExpenses<income){
        balance = income - totalExpenses;
        totalExpenseField.innerText = totalExpenses;
        balanceField.innerText = balance;
        savingTextField();  // resetting the saving amount and remaining balance calling this function .
    }
});
// save button click handler
document.getElementById("save-btn").addEventListener("click",function savingText(){
    //a function for setting the text
    savingTextField(); 
})