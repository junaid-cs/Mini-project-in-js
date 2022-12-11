// adding computed value to localStorage in display to side box as recent values
class Calculator {
    previous_oprend = '';
    current_oprend = "";
    constructor(current_oprend_element, previous_oprend_element) {
        this.current_oprend_element = current_oprend_element;
        this.previous_oprend_element = previous_oprend_element;
    }
    clear() {
        this.current_oprend = "";
        this.previous_oprend = "";
        this.opreation = undefined;
    }
    delete() {
        this.current_oprend = this.current_oprend.slice(0, -1)
    }
    appendnumber(number) {
        // console.log(this.current_oprend)
        if (number === '.' && this.current_oprend.includes('.')) return
        this.current_oprend = this.current_oprend.toString() + number.toString();
    }
    opreation_method(operator) {
        if (this.current_oprend == "") return
        if (this.previous_oprend !== "") {
            this.compute();
        }
        this.operator = operator;
        this.previous_oprend = `${this.current_oprend} ${this.operator}`;
        this.current_oprend = "";
        // console.log('operation display');
    }

    compute() {
        const cur = parseFloat(this.current_oprend);
        const prev = parseFloat(this.previous_oprend);
        let computed;
        // console.log(cur)
        // console.log(` perv = ${prev}`)
        if (isNaN(cur) || isNaN(prev)) { return}
            switch (this.operator) {
                case "+":
                    computed = prev + cur;
                    break;
                case "-":
                    if(prev > 0){
                        computed = prev - cur;
                    }
                    else{
                        computed =  - cur + prev;
                    }
                    break;
                case "*":
                    computed = prev * cur;
                    break;
                case "/":
                    computed = prev / cur;
                    break;
            }
            // adding computed value to localStorage in display to side box as recent values
        this.current_oprend = computed;
        this.operator= undefined;
        this.previous_oprend = "";
    }
    upadatedisplay() {
        // console.log(this.current_oprend)
        this.current_oprend_element.innerText = this.current_oprend;
        this.previous_oprend_element.innerText = this.previous_oprend;
    }
}

let previous_oprend_element = document.querySelector('.pervious-operaend');
let current_oprend_element = document.querySelector('[data-current-element]');
let allclearbtn = document.querySelector('[data-allclear]')
let deletebtn = document.querySelector('[data-delete]')
let number = document.querySelectorAll('[data-number]');
let opreation = document.querySelectorAll('[data-operator]');
let equal = document.querySelector('[data-equal]');

let calculator = new Calculator(current_oprend_element, previous_oprend_element);
number.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendnumber(button.innerText);
        calculator.upadatedisplay();
        // console.log(button.innerText);
    })
});
allclearbtn.addEventListener('click', () => {
    // console.log('clear')
    calculator.clear();
    calculator.upadatedisplay();
})
deletebtn.addEventListener('click', () => {
    calculator.delete();
    calculator.upadatedisplay();
})
opreation.forEach((operator) => {
    operator.addEventListener('click', () => {
        // console.log("loop")
        calculator.opreation_method(operator.innerText);
        calculator.upadatedisplay();
    })
})
equal.addEventListener('click', () => {
    calculator.compute();
    calculator.upadatedisplay();
});