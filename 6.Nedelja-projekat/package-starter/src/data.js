

class Income {
    constructor(description, amount, id) {
      this.description = description;
      this.amount = amount;
      this.id = id;
    }
  }
  
  class Expense {
    constructor(description, amount, id) {
      this.description = description;
      this.amount = amount;
      this.id = id;
      this.percentage = 0;
    }
    getPerc(totalInc) {
      if (totalInc > 0 )
        this.percentage = Math.round((+this.amount / totalInc) * 100);
      else this.percentage = 0
      return this.percentage;
    }
  }
  let data = {
    incomeArr: [],
    expenseArr: [],
    totalIncome: 0,
    totalExpense: 0,
    totalBudget: 0,
    totalPercentage: 0
  }
  let id=0
  let addItem = function (select, description, amount) {
    let newElement
    
  //kreiram i ubacujem objekte u odgovarajuci niz
    if (select === "income") {
      newElement = new Income(description, amount, id);
      data.incomeArr.push(newElement);
      id++
    } else if (select === "expense") {
      newElement = new Expense(description, amount, id);
      data.expenseArr.push(newElement);
      id++
    }
  };  
  let updateSum = function () {
   // racunam sumu - iz niza objekata uzimama vrednost samo i pravim novi niz - mogao sam da dodajem samo na klik , mislio sam da ce mi trebati niz

   //total income
    let ArrIncVal = data.incomeArr.map((a) => parseInt(a.amount));
    if (ArrIncVal.length > 0) {
      data.totalIncome = ArrIncVal.reduce((a, b) => a + b);
      console.log(data.totalIncome)
    } else data.totalIncome = 0;
  
    //total expense 
    let ArrExpVal = data.expenseArr.map((a) => parseInt(-a.amount));
    // console.log(ArrExpVal)
    if (ArrExpVal.length > 0)
      data.totalExpense = ArrExpVal.reduce((a, b) => a + b);
    else data.totalExpense = 0;

   //budzet 
    data.totalBudget = data.totalIncome + data.totalExpense;
  
    // total procenat
    if (data.totalIncome > 0) {
      data.totalPercentage = Math.round(
        Math.abs(data.totalExpense / data.totalIncome) * 100
      );
    } else data.totalPercentage = 0;
  };

//racunanje procenata za svaki exppense element/objekat
  let calcPerc = function () {
    let elemPerc;
    elemPerc = data.expenseArr.map((a) => {
      a.getPerc(data.totalIncome);
      return a.percentage;
    });
    console.log(elemPerc);
    return elemPerc;
  };

  export{addItem,updateSum,calcPerc,data}