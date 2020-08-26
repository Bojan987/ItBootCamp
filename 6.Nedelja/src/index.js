


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





// Функција (Компонента) Launch враћа хтмл елемент

// let x =     {
//   "flight_number": 1,
//   "mission_name": "FalconSat",
//   "mission_id": [],
//   "upcoming": false,
//   "launch_year": "2006",
//   "launch_date_unix": 1143239400,
//   "launch_date_utc": "2006-03-24T22:30:00.000Z",
//   "launch_date_local": "2006-03-25T10:30:00+12:00",
//   "is_tentative": false,
//   "tentative_max_precision": "hour",
//   "tbd": false,
//   "launch_window": 0,
//   "rocket": {
//       "rocket_id": "falcon1",
//       "rocket_name": "Falcon 1",
//       "rocket_type": "Merlin A",
//       "first_stage": {
//           "cores": [
//               {
//                   "core_serial": "Merlin1A",
//                   "flight": 1,
//                   "block": null,
//                   "gridfins": false,
//                   "legs": false,
//                   "reused": false,
//                   "land_success": null,
//                   "landing_intent": false,
//                   "landing_type": null,
//                   "landing_vehicle": null
//               }
//           ]
//       },
//       "second_stage": {
//           "block": 1,
//           "payloads": [
//               {
//                   "payload_id": "FalconSAT-2",
//                   "norad_id": [],
//                   "reused": false,
//                   "customers": [
//                       "DARPA"
//                   ],
//                   "nationality": "United States",
//                   "manufacturer": "SSTL",
//                   "payload_type": "Satellite",
//                   "payload_mass_kg": 20,
//                   "payload_mass_lbs": 43,
//                   "orbit": "LEO",
//                   "orbit_params": {
//                       "reference_system": "geocentric",
//                       "regime": "low-earth",
//                       "longitude": null,
//                       "semi_major_axis_km": null,
//                       "eccentricity": null,
//                       "periapsis_km": 400,
//                       "apoapsis_km": 500,
//                       "inclination_deg": 39,
//                       "period_min": null,
//                       "lifespan_years": null,
//                       "epoch": null,
//                       "mean_motion": null,
//                       "raan": null,
//                       "arg_of_pericenter": null,
//                       "mean_anomaly": null
//                   }
//               }
//           ]
//       },
//       "fairings": {
//           "reused": false,
//           "recovery_attempt": false,
//           "recovered": false,
//           "ship": null
//       }
//   },
//   "ships": [],
//   "telemetry": {
//       "flight_club": null
//   },
//   "launch_site": {
//       "site_id": "kwajalein_atoll",
//       "site_name": "Kwajalein Atoll",
//       "site_name_long": "Kwajalein Atoll Omelek Island"
//   },
//   "launch_success": false,
//   "launch_failure_details": {
//       "time": 33,
//       "altitude": null,
//       "reason": "merlin engine failure"
//   },
//   "links": {
//       "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
//       "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
//       "reddit_campaign": null,
//       "reddit_launch": null,
//       "reddit_recovery": null,
//       "reddit_media": null,
//       "presskit": null,
//       "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
//       "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
//       "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
//       "youtube_id": "0a_00nJ_Y88",
//       "flickr_images": []
//   },
//   "details": "Engine failure at 33 seconds and loss of vehicle",
//   "static_fire_date_utc": "2006-03-17T00:00:00.000Z",
//   "static_fire_date_unix": 1142553600,
//   "timeline": {
//       "webcast_liftoff": 54
//   },
//   "crew": null
// }
// app.appendChild(Launch(x))
/* <div class="launch">
                <div class="inner-div-0">
                    <img src="https://images2.imgbox.com/18/17/gCjLjHbl_o.png" alt="">
                </div>
                <div class="inner-div-1">
                    <span>Falcon 9</span>
                </div>
                <div class="inner-div-2">
                    <span>2010</span>
                </div>
    </div> */