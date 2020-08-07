


const dugme1 = document.querySelector('.btn1')
const dugme2 = document.querySelector('.btn2')
const dugme3 = document.querySelector('.btn3')
const dugme4 = document.querySelector('.btn4')

const divBtn1 = document.querySelector('#dugme1')
const divBtn2 = document.querySelector('#dugme2')

let currentDate = new Date()
let mesec = currentDate.getMonth()
mesec++
let cuurentDateTime = currentDate.getDate() + "-" + mesec + "-" + currentDate.getFullYear() + "   Vreme:  " + currentDate.getHours() + " : " + currentDate.getMinutes() 


const par = document.createElement('p')
par.classList.add('par')

let count = 0
par.textContent = `Porucili ste: 0`

divBtn1.appendChild(par)

divBtn1.addEventListener('click', e=>{
    

    if(e.target.id === "btn1" || e.target.id === "btn2" )
    count++
    console.log(count)
    par.textContent = `Porucili ste: ${count}`
    

})


divBtn2.addEventListener('click', e=>{
    
    if(e.target.id === "btn3" || e.target.id === "btn4" ) {


    if (count !==0){

        const par2 = document.createElement('p')
        par2.classList.add('par2')
        par2.textContent = ` Vasa porudzbina iznosi ${count}. pizza . Datum : ${cuurentDateTime}`
        divBtn1.appendChild(par2)
        setTimeout(() => {
            par2.remove()
        },3000)
    
        count = 0
        console.log(count)
        par.textContent = `Porucili ste: ${count}`
    }
    else {
        const par3 = document.createElement('p')
        par3.classList.add('par3')
        par3.textContent ='Na zalost ne radimo dostavu za 0 pizza'
        divBtn1.appendChild(par3)
        setTimeout(() => {
            par3.remove()
        },3000)
    }
   
    }
})