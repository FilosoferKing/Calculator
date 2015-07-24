/***************************************
 =============Version 0.1===============
 $("#add_button").click(function(){
    var number0_val = $("#number_0").val();
    var number1_val = $("#number_1").val();
    add_numbers(number0_val, number1_val);
});

 function add_numbers(operand1, operand2){
    console.log('add numbers called');
    var result = parseInt(operand1) + parseInt(operand2);
    $("#result").val(result);
}
 *****************************************/

var operand_array = ["", ""];//array for my operand1 and operand2 input
var index_pointer = 0;//determines which index position to push to
var the_operator;//holds the operator that is clicked
var calc_result = null;

function input_digit(operand) {//takes the input of the calculator buttons
    var input_digit = $('#input_field').val();//retrieves the value of the display
    var input_concat = input_digit + operand;//concat the value in the display with the next number clicked
    $('#input_field').val(input_concat);//inserts concatenated value into the display field
    operand_array[index_pointer] += operand;//store the number clicked into the operand_array[0] if variable index_pointer = 0
}

function array_calc(){
    if((operand_array[0] != "") && (operand_array[1] != "")){
        calculate();
        var array_result = $('#result_field').val();
        var array_op = array_result + the_operator;
        $('#input_field').val(array_op);
        store_index_0()

    }
}

function store_index_0(){
    operand_array[0] = $('#result_field').val();
    operand_array[1] = "";
}

function operator(op) {
    var input_number = operand_array[0];//retrieves value from display
    var operator_concat = input_number + op;//concatenates the operator clicked to the current value of the display
    $('#input_field').val(operator_concat);//inserts concatenated value and operator back into display
    index_pointer = 1;//changes index_pointer = 1, the next number clicked will be inserted into operand_array[1]
    the_operator = op;//stores the operator clicked to be used in calculation comparison
    //refresh();
    array_calc();
}
function add(operand1, operand2) {//adds operand1 and operand 2
    var add = parseFloat(operand1) + parseFloat(operand2);//parses the operands and stores them in the variable 'add
    $('#result_field').val(add);//inserts the calculated function into the display
    store_index_0()
}

function sub(operand1, operand2) {//subtracts operand1 and operand 2
    var sub = parseFloat(operand1) - parseFloat(operand2);//parses the operands and stores them in the variable 'sub
    $('#result_field').val(sub);//inserts the calculated function into the display
    store_index_0()
}

function mult(operand1, operand2) {//multiplies operand1 and operand 2
    var mult = parseFloat(operand1) * parseFloat(operand2);//parses the operands and stores them in the variable 'mult
    $('#result_field').val(mult);//inserts the calculated function into the display
    console.log("Mult: ", mult)
    store_index_0()
}

function div(operand1, operand2) {//divides operand1 and operand 2
    if (operand2 == 0) {
        $('#result_field').val("Undefined");//displays undefined if the number clicked was divided by 0
    } else {
        var div = parseFloat(operand1) / parseFloat(operand2);//parses the operands and stores them in the variable 'div
        $('#result_field').val(div);//inserts the calculated function into the display
    }
    store_index_0()
}
//NEED TO WRITE CODE TO MOVE RESULT INTO FIRST ARRAY INDEX[0], SIMILAR TO ARRAY_CALC
function calculate() {//determines the operator to be used in and runs the function associated with that operator
    var num1 = operand_array[0];//stores the [0] position from the operand array into the num1 variable
    var num2 = operand_array[1];//stores the [1] position from the operand array into the num2 variable
    switch (the_operator) {//switch statement to determine the operator to use
        case '+':
            add(num1, num2);//runs the add() function
            break;
        case '-':
            sub(num1, num2);//runs the sub() function
            break;
        case '*':
            mult(num1, num2);//runs the mult() function
            break;
        case '/':
            div(num1, num2);//runs the div() function
            break;
    }
}

function all_clear() {
    $('#input_field').val("");//puts an empty string back into the display
    $('#result_field').val("");
    console.log("Clear called");
    operand_array[0] = "";
    operand_array[1] = "";
    index_pointer = 0;
    first_op_click = true;
}
$('#all_clear').click(function () {//clears the display
    all_clear();
})

$('#clear').click(function () {
    clear();
    refresh();
})

function invert() {
    var number = $('#input_field').val();
    var inversion = "-" + number;
    $('#input_field').val(inversion);
}

function clear() {
    $('#result_field').val("");//puts an empty string back into the display
    operand_array[1] = "";
}

function refresh() {
    var output = operand_array[0] + the_operator + operand_array[1];
    $('#input_field').val(output);
}




