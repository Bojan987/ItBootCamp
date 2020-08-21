 let queryEl = function () {
    return {
      selectValue: document.querySelector("#selectBox").value,
      descriptionValue: document.querySelector("#description").value,
      amountValue: document.querySelector("#amount").value,
      description:document.querySelector("#description"),
      amount:document.querySelector("#amount"),
      uListaInc: document.querySelector(".ulistaInc"),
      uListaExp: document.querySelector(".ulistaExp"),
      ukupanPrihod: document.querySelector(".ukupanPrihod"),
      ukupanRashod: document.querySelector(".ukupanRashod"),
      ukupanBudzet: document.querySelector(".totalBudget"),
      totalPercentage: document.querySelector(".totalPerc"),
      datum: document.querySelector(".datum")
    };
  };

  export {queryEl}