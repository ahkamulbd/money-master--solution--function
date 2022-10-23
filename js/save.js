//console.log('Save.js File Added');

document.getElementById('save-btn').addEventListener('click', function () {
    //console.log('Save Button Clicked');

    // Saving Amount:
    const income = getInputFieldValueById('income-field');

    const savingAmount = income * 0.2;

    const setSavingAmount = setTextElementValueById('saving-amount', savingAmount);

    // Remaining Balance: 
    const foodExpense = getInputFieldValueById('food-expense');
    const rentExpense = getInputFieldValueById('rent-expense');
    const clothesExpense = getInputFieldValueById('clothes-expense');

    const totalExpense = foodExpense + rentExpense + clothesExpense;

    const balanceValue = income - totalExpense;

    const remainingBalance = balanceValue - savingAmount;

    const setRemainingBalance = setTextElementValueById('remaining-balance', remainingBalance);
})