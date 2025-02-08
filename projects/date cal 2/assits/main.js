document.addEventListener('DOMContentLoaded', () => {
    
    const inputday = document.querySelector('.input-days');
    const inputmonth = document.querySelector('.input-months');
    const inputyear = document.querySelector('.input-years');

    const button = document.querySelector('.caculator__user-input-btn');

    function validateinput(input, condition, errormassage) {
        if (condition) {
            input.nextElementSibling.innerHTML = errormassage;
            input.parentElement.classList.add('error');
        }
        else {
            input.nextElementSibling.innerHTML = '';
            input.parentElement.classList.remove('error');
        }
    }

    inputday.addEventListener('input', function() {
        validateinput(inputday, inputday.value > 31 || inputday.value < 1, 'must be a valid day');
    })

    inputmonth.addEventListener('input', function() {
        validateinput(inputmonth, inputmonth.value > 12 || inputmonth.value < 1, 'must be a valid month');
    })

    inputyear.addEventListener('input', function() {
        const yearnow = new Date().getFullYear
        validateinput(inputyear, inputyear.value > yearnow || inputyear.value < 0, 'must be in past');
    })

    button.addEventListener('click', function() {
        const day = parseInt(inputday.value);
        const month = parseInt(inputmonth.value);
        const year = parseInt(inputyear.value);
    

        if (!day || !month || !year) {
            validateinput(inputday, !day, "this field is required");
            validateinput(inputmonth, !month, "this field is required");
            validateinput(inputyear, !year, "this field is required");
            return;
        }

        const inputDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        if (inputDate.getDate() !== day) {
            validateinput(inputday, true, 'must be a valid date');
            return;
        }

        if (inputDate.getMonth() !== month) {
            validateinput(inputmonth, true, 'must be a valid date');
            return;
        }

        if (inputDate.getFullYear() !== year || inputDate > currentDate) {
            validateinput(inputyear, true, 'must be a valid date');
            return;
        }

        if (inputDate > currentDate) {
            validateinput(inputday, true, 'must be a valid date');
            validateinput(inputmonth, true, 'must be a valid date');
            validateinput(inputyear, true, 'must be a valid date');
            return
        }

        let ageyear = currentDate.getFullYear() - inputDate.getFullYear();
        let agemonth = currentDate.getMonth() - inputDate.getMonth();
        let ageday = currentDate.getDate() - inputDate.getDate();

        if (ageday < 0) {
            agemonth -= 1;
            ageday += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        if (agemonth < 0) {
            ageyear -= 1;
            agemonth += 12;
        }
        

        const outputday = document.querySelector('.output-days span');
        const outputmonth = document.querySelector('.output-months span');
        const outputyear = document.querySelector('.output-years span');

        animateoutput(outputyear, ageyear);
        animateoutput(outputmonth, agemonth);
        animateoutput(outputday, ageday);
        
    });


    function animateoutput(el, num) {
        let step = 50
        num > 25 && (step = 35);
        num > 50 && (step = 25);
        num > 75 && (step = 20);
        num > 100 && (step = 10);
        num > 200 && (step = 1);

        let n = 0;
        if (num === 0) {
            el.innerHTML = n;
        }
        else {
            let interval = setInterval(() => {
                n = n + 1;
                if (n === num) {
                    clearInterval(interval);
                }
                el.innerHTML = n;
            }, step);
        }
    }
});