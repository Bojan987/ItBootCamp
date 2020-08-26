import {Launch} from './Launch.js'
// import { getLaunches } from '../services.js'

export const LaunchList = (data) => {

    // launch.launch_year
    // launch.rocket.rocket_name
    // launch.links.mission_patch  // slika
    const launchListDiv = document.createElement('div')
    launchListDiv.className= 'launch-list'
    data.forEach(el => {
        launchListDiv.appendChild(Launch(el))
    });
//    getLaunches().then(res => {
//     //    console.log(res.data)
//         res.data.forEach(el => {
         
//             launchListDiv.appendChild(Launch(el))
//         })
//     })
    
    return launchListDiv 

}