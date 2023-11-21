const display = document.querySelector('.js-display');
const btnsCalculate = document.querySelectorAll('.js-btn-calculate');

const btns = document.querySelectorAll('.js-btn');

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
      
        if(itemText === "*") {
            itemText = "*";
        }
        if(itemText === "/") {
            itemText = "/";
        }
        if(itemText === "+/-") {
            itemText = "-";
        }
        if(itemText === "AC") {
            display.value = "";
        }
        if(itemText === "C") {
            display.value = display.value.slice(0, -1);
        }

        if(itemText !== "C" && itemText !== "=" && itemText !== "AC") {
            display.value += itemText;
        }
        if(itemText === "=") {
            display.value = eval(display.value);
        }
        
        console.log(itemText);

    });
});