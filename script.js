document.querySelector("#myName").textContent = prompt();



function dayAndTime () {
    let today = new Date();
    
    let hour = today.getHours();
    let min = today.getMinutes();
    let second = today.getSeconds();
    let currentTime = `${hour} : ${min} : ${second};`

    
    let day = today.getDay();
    let dayList = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let currentDay = dayList[day];

    return `${currentTime}  ${currentDay}`;
}

document.querySelector("#myClock").textContent = dayAndTime();

// function currentDay () {
//     let today = new Date();
//     let day = today.getDate();
//     let month = today.getMonth() + 1; 
//     let year = today.getFullYear();

//     if (day < 10) {
    //          "0" + day;
    //     }
    //     if (month < 10) {
        //          "0" + month;
        //     }
        //     return `${day}/${month}/${year}`
        // }
// document.querySelector("#myClock").textContent = currentDay();