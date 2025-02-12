const BUTTONS = document.querySelectorAll('.button');
const DISPLAY = document.getElementById('equation');

let equation = "";

BUTTONS.forEach(function (button) {
    button.addEventListener('click', function () {
        const value = button.innerHTML;

        if (value === 'C') {
            equation = "";
            DISPLAY.innerHTML = "0";
        } else if (value === '=') {
            try {
                equation = eval(equation).toString();
            } catch (error) {
                equation = "Error";
            }
        } else {
            equation += value;
        }

        if (equation === "") {
            DISPLAY.innerHTML = "0";
        } else {
            DISPLAY.innerHTML = equation;
        }

        console.log(equation);
    });
});
