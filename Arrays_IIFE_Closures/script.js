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

    movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

   movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

   movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'TRY',
  locale: 'en-TR',
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
const displayAmountMovement = function (amount, sort = false) {
  containerMovements.innerHTML = '';

  const sortedData = sort ? amount.slice().sort((a, b) => a - b) : amount

  sortedData.forEach((movement, index) => {
    const movementType = movement > 0 ? 'deposit' : 'withdrawal';
    const data = `
        <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${
      index + 1
    } ${movementType}</div>
          <div class="movements__value">${movement.toFixed(1)}💲</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', data);
  });
};

//Display balance amount
const calcDisplayBalance = function (account) {
  account.totalBalance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.totalBalance.toFixed(1)}💲`;
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
  labelSumIn.textContent = `${inAmount.toFixed(1)}💲`;

  const outAmount = movement
    .filter(mov => mov < 0)
    .reduce((acc, outAm) => outAm + acc, 0);
  labelSumOut.textContent = `${Math.abs(outAmount.toFixed(1))}💲`;

  const interestAmt = movement
    .filter(mov => mov > 0)
    .map(dep => (dep * interest) / 100)
    .filter(int => int > 1)
    .reduce((acc, inAm) => inAm + acc, 0);
  labelSumInterest.textContent = `${interestAmt.toFixed(1)}💲`;
};

// testing
// calcDisplaySummary(account1.movements);
// calcDisplayBalance(account1.movements);
// displayAmountMovement(account1.movements);

createUserNames(accounts);

const updateUI = function (account) {
      // Display bank statement
    displayAmountMovement(account?.movements)
    // Display total balance
    calcDisplayBalance(account);
    // Display summary
    calcDisplaySummary(account?.movements, account?.interestRate);
}
// Event Handler of Login

let currentUserAccount;

const currentDate = new Date();
const day = `${currentDate.getDay()}`.padStart(2, 0);
const month = `${currentDate.getMonth() + 1}`.padStart(2, 0);
const year = currentDate.getFullYear();
const hour = currentDate.getHours();
const min = currentDate.getMinutes();

labelDate.textContent = `${date}/${month}/${year}, ${hour}:${min}`


btnLogin.addEventListener('click', function (e) {
  // Prevent default submitting form
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
});

// loan handler

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if(amount > 0 && currentUserAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentUserAccount.movements.push(amount);
    updateUI(currentUserAccount);
  }
  inputLoanAmount.value = '';
});

// close account handler
btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentUserAccount.username && Number(inputClosePin.value) === currentUserAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentUserAccount.username)

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
})

//sorting data

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();

  displayAmountMovement(currentUserAccount.movements, !sorted);
  sorted = !sorted;
})

