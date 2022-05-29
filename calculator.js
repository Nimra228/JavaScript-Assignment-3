var f_val = parseInt(prompt("Enter the first value"));
var arithmetic_opr = (prompt("Enter operator"));
var s_val = parseInt(prompt("Enter the second value"));

if (arithmetic_opr == "+") {
    result = f_val + s_val;
    alert(f_val + arithmetic_opr + s_val + " = " + result);
} else if (arithmetic_opr == "-") {
    result = f_val - s_val;
    alert(f_val + arithmetic_opr + s_val + " = " + result);
} else if (arithmetic_opr == "/") {
    result = f_val / s_val;
    alert(f_val + arithmetic_opr + s_val + " = " + result);
} else if (arithmetic_opr == "*") {
    result = f_val * s_val;
    alert(f_val + arithmetic_opr + s_val + " = " + result);
} else if (arithmetic_opr == "%") {
    result = f_val % s_val;
    alert(f_val + arithmetic_opr + s_val + " = " + result);
}