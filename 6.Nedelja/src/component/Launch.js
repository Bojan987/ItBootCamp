export const Launch = (launch) => {

    // launch.launch_year
    // launch.rocket.rocket_name
    // launch.links.mission_patch  // slika
    const launchDiv = document.createElement('div')
    launchDiv.className = 'launch'
    launchDiv.innerHTML =`
    <div class="inner-div-0">
        <img src=${launch.links.mission_patch} alt="">
    </div>
    <div class="inner-div-1">
        <span>${launch.rocket.rocket_name}</span>
    </div>
    <div class="inner-div-2">
        <span>${launch.launch_year}</span>
    </div>
</div> `
    
    return launchDiv

}