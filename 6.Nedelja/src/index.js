


// import {  getAllAxios } from "./services"
import { LaunchList } from "./component/LaunchList"
import { header } from "./component/Header"
import { getCompanyName, getLaunches } from "./services"
import { select } from "./component/Select"
// import { Launch } from "./component/Launch"

// import Axios from "axios"

const app = document.querySelector('#app')


getCompanyName().then(resH=>{
    app.appendChild(header(resH.data))

    getLaunches().then(res=>{

        let selection = select(res.data)
        let LaunchListVar=LaunchList(res.data)

        app.append(selection,LaunchListVar)
        
            console.log(res.data)
        
        selection.addEventListener('change',e=>{
            
           console.log(e.target.value)
           if (e.target.value != "svi"){
            
               let filteredData = res.data.filter(el=>e.target.value == el.launch_year)
                console.log(filteredData)
                console.log(LaunchListVar)
                app.removeChild(app.lastChild)
               app.appendChild(LaunchList(filteredData))
           } else {
            app.removeChild(app.lastChild)
            app.append(LaunchListVar)
           }

        })
    })
})




// getAllAxios().then(Axios.spread((launcesObj,infObj)=>{

//   console.log(launcesObj,infObj)

// app.appendChild(header(infObj.data,launcesObj.data))


// app.appendChild(LaunchList(launcesObj.data))


// }))















// let arr = [1,2,3,4,5,6,7,8,2,3,4,5,6,7,8,10,11]



// // let filtARr = arr.filter((v)=>{
// //     console.log(arr.indexOf(v))
// // })
// // console.log(filtARr)

// var newarr = [new Set(arr)]
// console.log(newarr)





