// "use strict";
class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(` 6. satir,Hello! My name is ${this.name}`);
  }
}

class BankAccount extends Person {
  #balance = 0;
  #cat = "Minnos";
  constructor(name, balance) {
    super(name);
    this.#balance = balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount < this.#balance) {
      this.#balance -= amount;
      console.log(`22.satir,Your new amount is ${this.#balance}`);
    } else {
      console.log(`24.satir,Funds are insufficient`);
    }
  }

  getBalance() {
    return {
      balance: this.#balance,
      cat: this.#cat,
    };
  }
}

const accountCate = new BankAccount("Cate", 1800);
// console.log("34", accountCate.balance);
accountCate.getBalance();
console.log(accountCate.cat);

// accountCate.deposit(200);
// // console.log(accountCate.getBalance());
// accountCate.withdraw(300);
// accountCate.withdraw(500);
console.log(accountCate.getBalance());
// console.log(accountCate.getBalance);

// console.log(accountCate);
// console.log((accountCate.deposit = 500));
// accountCate.withdraw(500);
// accountCate.deposit(700);
