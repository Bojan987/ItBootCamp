import { queryEl } from "./getElements.js";
import { updateSum, data, calcPerc } from "./data.js";
let id = 0;
let addToUI = function (
  select,
  description,
  amount,
  fatherElInc,
  fatherElexp,
  totalInc
) {
  let li = document.createElement("li");
  li.classList.add("list-group-item", "li-element");
  calcPerc();

  // za income - kreiram za svaki li element : h5-description , div-->h5 , button(sa id kao i svaki objekat u income nizu) i appendujem

  if (select === "income") {
    li.innerHTML = `  <h5>${description}</h5>`;
    let innerDivInc = document.createElement("div");
    innerDivInc.classList.add("innerDivInc");
    innerDivInc.innerHTML = `<h5>+${amount}</h5>`;
    let btnDel = document.createElement("button");
    btnDel.classList.add("badge", "badge-danger", "btnDel");
    btnDel.innerText = "X";
    btnDel.id = id;
    id++;
    totalInc;
    // console.log(btnDel);
    innerDivInc.appendChild(btnDel);
    li.append(innerDivInc);
    fatherElInc.appendChild(li);

    // event za delete button

    btnDel.addEventListener("click", (e) => {
      // console.log(btnDel);
      btnDel.parentElement.parentElement.remove();

      data.incomeArr.splice(
        data.incomeArr.findIndex((el) => el.id === e.target.id, 1)
      );
      //kada obrise radim update svega u updateSum(prihod,rashod, budzet,procenat)
      updateSum();

      updateSumUI(
        queryEl().ukupanPrihod,
        queryEl().ukupanRashod,
        queryEl().ukupanBudzet,
        queryEl().totalPercentage
      );
      // update za procenat za svaku promenu income
      calcPerc();
      console.log(data);

      // selektujem node listu elemenata sa badgevima - procentima
      let niznode = document.querySelectorAll(".badge-primary");

      // svakom elementu u node listi dodeljujem procenat u array-u procenata sa istim indexom
      niznode.forEach((el, idx) => {
        el.textContent = calcPerc()[idx];
      });
    });
  }
  // za expense - kreiram za svaki li element : h5 - description,  div-->h5 , badge(procenat) , button(sa id kao i svaki objekat u expense nizu) i appendujem
  else if (select === "expense") {
    li.innerHTML = `  <h5>${description}</h5>`;
    let innerDivExp = document.createElement("div");
    innerDivExp.classList.add("innerDivExp");
    innerDivExp.innerHTML = `<h5>-${amount}</h5>`;
    var badgePerc = document.createElement("span");
    badgePerc.classList.add("badge", "badge-primary");
    badgePerc.textContent = 0;

    // console.log(typeof +amount)
    // console.log(totalInc)
    let btnDel = document.createElement("button");
    btnDel.classList.add("badge", "badge-danger", "btnDel");
    btnDel.id = id;
    id++;
    btnDel.innerText = "X";
    // console.log(btnDel);
    innerDivExp.append(badgePerc, btnDel);
    li.append(innerDivExp);

    fatherElexp.appendChild(li);

    // event za expense button

    btnDel.addEventListener("click", (e) => {
      // console.log(btnDel);

      btnDel.parentElement.parentElement.remove();
      data.expenseArr.splice(
        data.expenseArr.findIndex((el) => el.id === e.target.id, 1)
      );
      // update nakon brisanja objekta
      updateSum();

      updateSumUI(
        queryEl().ukupanPrihod,
        queryEl().ukupanRashod,
        queryEl().ukupanBudzet,
        queryEl().totalPercentage
      );

      // console.log(data)
    });
  }
  //na svaki klik dodeljuje procenat node-u iz niza sa istim indexom
  let niznode = document.querySelectorAll(".badge-primary");
  niznode.forEach((el, idx) => {
    el.textContent = calcPerc()[idx] + "%";
  });
};

// update UI za total income, Expense ,Budzet ,Procente
let updateSumUI = function (totalInc, totalExp, totalBudget, totalPerc) {
  totalInc.textContent = data.totalIncome;
  totalExp.textContent = data.totalExpense;
  totalBudget.textContent = data.totalBudget;
  totalPerc.textContent = data.totalPercentage + "%";

  // console.log(totalPerc)
};

let clearInput = function (description, amount) {
  amount.value = "";
  amount.classList.remove("is-invalid");
  amount.placeholder = "Enter amount";

  description.value = "";
  description.classList.remove("is-invalid");
  description.placeholder = "Enter description";
};


// error msg kada ne unesem pravilno u input polja
let errorMsg = function (description, amount) {
  if (description.value === "") {
    description.classList.add("is-invalid");
    description.placeholder = "invalid description";
    
  }
  if (isNaN(parseInt(amount.value)) || parseInt(amount.value) <= 0) {
    amount.value = "";
    amount.classList.add("is-invalid");
    amount.placeholder = "invalid amount";
  }
};

let datum = function(datum){

  
  let currentDate = new Date()
  let month = currentDate.getMonth()
  month++
  datum.textContent = "Budzet za : " + currentDate.getDate() + "-" + month + "-" + currentDate.getFullYear()
 
}
datum(queryEl().datum)

export { addToUI, updateSumUI, errorMsg, clearInput };
