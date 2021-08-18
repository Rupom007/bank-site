// Deposit section
document.getElementById('deposit-button').addEventListener('click', function(){
    const inputValue = document.getElementById('deposit-input');
    const userInputValue = parseFloat(inputValue.value);
    
    // Deposit money
    const previousDeposit = document.getElementById('deposit-money');
    const previousDepositValue = parseFloat(previousDeposit.innerText);

    // Adding two value
    const totalDeposit = userInputValue + previousDepositValue;
    previousDeposit.innerText = totalDeposit;
    
    // Deposit and Balance section
    const inputBalance = document.getElementById('balance-money');
    const inputBalanceValue = parseFloat(inputBalance.innerText);
    const totalBalanceAdd = userInputValue + inputBalanceValue;
    inputBalance.innerText = totalBalanceAdd;

    // clear input field
    inputValue.value = '';
})

// Withdraw section
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInputValue = document.getElementById('withdraw-input');
    const userWithdrawInputValue = parseFloat(withdrawInputValue.value);
    
    // Deposit money
    const previousWithdraw = document.getElementById('withdraw-money');
    const previousWithdrawValue = parseFloat(previousWithdraw.innerText);

    // Adding two value
    const totalWithdraw = userWithdrawInputValue + previousWithdrawValue;
    previousWithdraw.innerText = totalWithdraw;
    
    // Deposit and Balance section
    const inputWithdrawBalance = document.getElementById('balance-money');
    const inputWithdrawBalanceValue = parseFloat(inputWithdrawBalance.innerText);
    const totalBalanceSubs = inputWithdrawBalanceValue - userWithdrawInputValue;
    inputWithdrawBalance.innerText = totalBalanceSubs;

    // clear input field
    withdrawInputValue.value = '';
})

