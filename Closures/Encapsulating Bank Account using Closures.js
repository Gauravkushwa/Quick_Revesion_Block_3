function createBankAccount(initialBalance) {
    let balance = initialBalance; // private variable

    return {
        deposit: function(amount) {
            if (amount <= 0) {
                console.log("Deposit amount must be positive.");
                return balance;
            }
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= 0) {
                console.log("Withdraw amount must be positive.");
                return balance;
            }
            if (amount > balance) {
                console.log("Insufficient funds.");
                return balance;
            }
            balance -= amount;
            return balance;
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(100);

console.log(account.deposit(50));    // Output: 150
console.log(account.withdraw(30));   // Output: 120
console.log(account.getBalance());   // Output: 120
