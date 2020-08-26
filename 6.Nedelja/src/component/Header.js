


export const header = (info)=>{
    const headerDiv = document.createElement('div')
    headerDiv.classList.add("headerDiv")

    const tittle = document.createElement('h1')
    tittle.textContent = info.name
    
   

    headerDiv.append(tittle)

    
    return headerDiv
}