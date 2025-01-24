document.addEventListener("DOMContentLoaded", () => {

    const inputDay = document.querySelectorAll(".day-input");
    const inputMonth = document.querySelectorAll(".month-input");
    const inputYear = document.querySelectorAll(".year-input");
    const span1 = document.querySelectorAll(".text-color")
    const span2 = document.querySelectorAll(".text-color1")
    const span3 = document.querySelectorAll(".text-color2")

    const button = document.querySelector(".send-icon");
    inputDay.forEach(inputDay => {
        inputDay.addEventListener("input", function () {
            if (inputDay.value > 31) {
                inputDay.nextElementSibling.innerHTML = "Must be a valid day"
                inputDay.parentElement.classList.add('error');
            } else {
                inputDay.parentElement.classList.remove('error');
            }
        });
    });

    inputMonth.forEach(inputMonth => {
        inputMonth.addEventListener('input', function () {
            if (inputMonth.value > 12) {
                inputMonth.nextElementSibling.innerHTML = "Must be a valid month"
                inputMonth.parentElement.classList.add('error');
            } else {
                inputMonth.parentElement.classList.remove('error');
                
            };
        });
    });

    inputYear.forEach(inputYear => {
        inputYear.addEventListener('input', function () {
            let sysDate = new Date()
            if (inputYear.value > sysDate.getFullYear()) {
                inputYear.nextElementSibling.innerHTML = "Must be a valid year"
                inputYear.parentElement.classList.add('error');
            } else {
                inputYear.parentElement.classList.remove('error');
            };
        });
    });
    
    const usercalyear = inputYear[0].value;
    const usercalmonth = parseInt(inputMonth[0].value);
    const usercalday = inputDay[0].value;
    const yeard = new Date().getFullYear();
    const monthd = new Date().getMonth();
    const dayd = new Date().getDate();

    button.addEventListener('click', function() {
        let sysDate = new Date()
        let cal_year = yeard - usercalyear
        let cal_month = monthd - usercalmonth + 1
        let cal_day = dayd - usercalday 
        
        const span1 = document.querySelector(".text-color")
        const span2 = document.querySelector(".text-color1")
        const span3 = document.querySelector(".text-color2")

        
        span1.innerHTML = cal_year        
        span2.innerHTML = cal_month
        span3.innerHTML = cal_day


    })
});

    