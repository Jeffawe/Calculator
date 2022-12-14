let a = null;
let b = null;

let c = null;

//This sets the form of calculation the calculator should do
//1 for addition
//2 for subtraction
//3 for division
//4 for Multiplication
let calculation = null;
let string = "=";

const Calculate = {
    add: Addition = () => {
        calculation = 1;
        string = "+"
        GetVariables(string);
    },

    subtract: Subtract = () => {
        calculation = 2;
        string = "-"
        GetVariables(string);
    },

    divide: Division = () => {
        calculation = 3;
        string = "/"
        GetVariables(string);
    },

    multiply: Multiply = () => {
        calculation = 4;
        string = "x"
        GetVariables(string);
    },

    test: Test = () => {
        document.getElementById('text').value = 1;
    }
}


const Solve = (a, b) => {
    let c = 0;
    switch (calculation) {
        case 1:
            c = a + b;
            break;

        case 2:
            c = a - b;
            break;

        case 3:
            c = a / b;
            break;

        case 4:
            c = a * b;
            break;

        default:
            c = a + b;
            break;
    }

    return c;
}

const EqualsTo = () => {
    if(a != null && b == null){
        b = parseFloat(document.getElementById('input').value)
        document.getElementById('input').value = null;
        document.getElementById('text').value = a + string + b;
        c = Solve(a, b);
        document.getElementById('text').value = c;
    }else if(a != null && b != null){
        c = Solve(a, b);
        document.getElementById('text').value = c;
    }
}

const Clear = () => {
    a = null;
    b = null;
    c = null;
    calculation = null;
    document.getElementById('input').value = null;
    document.getElementById('text').value = null;
}

const GetVariables = (string) => {
    if(a == null){
        a = parseFloat(document.getElementById('input').value)
        document.getElementById('input').value = null;
        document.getElementById('text').value = a + string;
    }else if(a != null && b != null){
        a = c;
        b = parseFloat(document.getElementById('input').value)
        if(isNaN(b)){
            b = null
            document.getElementById('input').value = null;
            document.getElementById('text').value = a + string;
        }else{
            document.getElementById('input').value = null;
            document.getElementById('text').value = a + string + b;
        }
    }else if(a != null && b == null){
        b = parseFloat(document.getElementById('input').value)
        if(isNaN(b)){
            b = null
            document.getElementById('input').value = null;
            document.getElementById('text').value = a + string;
        }else{
            document.getElementById('input').value = null;
            document.getElementById('text').value = a + string + b;
            c = Solve(a, b);
            a = c;
            document.getElementById('text').value = a + string;
            b = null;
        }
    }
}