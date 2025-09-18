'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// display bank statement
const displayAmountMovement = function (amount) {
  containerMovements.innerHTML = '';

  amount.forEach((movement, index) => {
    const movementType = movement > 0 ? 'deposit' : 'withdrawal';
    const data = `
        <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${
      index + 1
    } ${movementType}</div>
          <div class="movements__value">${movement}💲</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', data);
  });
};

//Display balance amount
const calcDisplayBalance = function (account) {
  account.totalBalance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.totalBalance}💲`;
};

// Create username of account
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

// Display summary of amount
const calcDisplaySummary = function (movement, interest) {
  const inAmount = movement
    .filter(mov => mov > 0)
    .reduce((acc, inAm) => inAm + acc, 0);
  labelSumIn.textContent = `${inAmount}💲`;

  const outAmount = movement
    .filter(mov => mov < 0)
    .reduce((acc, outAm) => outAm + acc, 0);
  labelSumOut.textContent = `${Math.abs(outAmount)}💲`;

  const interestAmt = movement
    .filter(mov => mov > 0)
    .map(dep => (dep * interest) / 100)
    .filter(int => int > 1)
    .reduce((acc, inAm) => inAm + acc, 0);
  labelSumInterest.textContent = `${interestAmt}💲`;
};

// testing
// calcDisplaySummary(account1.movements);
// calcDisplayBalance(account1.movements);
// displayAmountMovement(account1.movements);

createUserNames(accounts);

const updateUI = function (account) {
  console.log(account, "aaa");
  
      // Display bank statement
    displayAmountMovement(account?.movements)
    // Display total balance
    calcDisplayBalance(account);
    // Display summary
    calcDisplaySummary(account?.movements, account?.interestRate);
}
// Event Handler of Login

let currentUserAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent defaul submitting form
  e.preventDefault();

  currentUserAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentUserAccount, accounts, 'cuu');

  if (currentUserAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and login message

    labelWelcome.textContent = `Welcome back, ${
      currentUserAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentUserAccount);
  }
});

// transfer money handler

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  const transferAccountTo = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferTo.value = inputTransferAmount.value = '';
  if(transferAmount > 0 && transferAccountTo && currentUserAccount.totalBalance > transferAmount && transferAccountTo?.username !== currentUserAccount.username) {
    currentUserAccount.movements.push(-transferAmount);
    transferAccountTo.movements.push(transferAmount)
  }

  // update UI
  updateUI(currentUserAccount);
})
