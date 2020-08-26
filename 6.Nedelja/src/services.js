import axios from 'axios'


export let getLaunches = ()=>{
return axios.get('https://api.spacexdata.com/v3/launches')}

export let getCompanyName = ()=>{
    return axios.get ('https://api.spacexdata.com/v3/info')
}
// export let getAllAxios= ()=>{
//     return axios.all([getLaunches(),getCompanyName()])
// }