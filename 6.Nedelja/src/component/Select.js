
export let select = (launch)=>{

    const selectBox = document.createElement('select')
    selectBox.classList.add('sb')
    const defOption = document.createElement('option')
    defOption.value = "svi"
    defOption.textContent = "Prikazi sve"
    // defOption.selected = " selected"
    selectBox.appendChild(defOption)

    let godine =  launch.map(el=>
        el.launch_year
    )
    let godineFilter = [...new Set(godine)]
    console.log(godineFilter)
    
    godineFilter.forEach(e=>{
        let option = document.createElement('option')
        option.value = e
        option.textContent = e + " godina"
        selectBox.appendChild(option)
    })
    return selectBox

}