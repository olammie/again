function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var ope = document.querySelector("#operator").value;
    var calculate;


    if (ope == "add") {
        calculate = a + b;
    } else if (ope == "min") {
        calculate = a - b;
    } else if (ope == "div") {
        calculate = a / b;
    } else if (ope == "mul") {
        calculate = a * b;
    }

    document.querySelector("#result").innerHTML = calculate;
}