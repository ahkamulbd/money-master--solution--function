//console.log('Calculate.js File added');

document.getElementById('calculate-btn').addEventListener('click', function () {
    //console.log('Calculate Button Clicked');

    // Total Expenses:
    const foodExpense = getInputFieldValueById('food-expense');
    const rentExpense = getInputFieldValueById('rent-expense');
    const clothesExpense = getInputFieldValueById('clothes-expense');

    const totalExpense = foodExpense + rentExpense + clothesExpense;

    const setTotalExpense = setTextElementValueById('total-expenses', totalExpense);

    // Balance :
    const income = getInputFieldValueById('income-field');

    const balanceValue = income - totalExpense;
    const setBalanceValue = setTextElementValueById('total-balance', balanceValue);
})