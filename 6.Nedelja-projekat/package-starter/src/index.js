import {addItem,updateSum,data}  from './data.js'
import {queryEl} from './getElements.js'
import {addToUI,updateSumUI,errorMsg,clearInput} from './ui.js'


document.querySelector(".dugme").addEventListener("click", () => {
    let inputValues = queryEl();
    
    console.log(inputValues.descriptionValue , inputValues.amountValue)
    // console.log(inputValues.selectValue,inputValues.descriptionValue , inputValues.amountValue)
    if (inputValues.selectValue !=='' &&
        inputValues.descriptionValue!=='' &&
        !isNaN(parseInt(inputValues.amountValue)) &&
        inputValues.amountValue >0) {
          
      addItem(
        inputValues.selectValue,
        inputValues.descriptionValue,
        inputValues.amountValue
      );
  
      updateSum();
  
      // console.log( data.totalIncome.amount)
  
      updateSumUI(
        inputValues.ukupanPrihod,
        inputValues.ukupanRashod,
        inputValues.ukupanBudzet,
        inputValues.totalPercentage
      );
  
      console.log(data);
  
      addToUI(
        inputValues.selectValue,
        inputValues.descriptionValue,
        inputValues.amountValue,
        inputValues.uListaInc,
        inputValues.uListaExp,
        data.totalInc
      );
      
      clearInput(inputValues.description,inputValues.amount)


    } else {
      errorMsg(inputValues.description,inputValues.amount)
     
    }
    
    
    
  });