/***********GLOBLA VARIABLES*******************/
var operand_array = ["", ""];//array for my operand1 and operand2 input
var index_pointer = 0;//determines which index position to push to
var the_operator;//holds the operator that is clicked

/*************************
 * NAME: input_digit
 * @param operand
 * PURPOSE: takes the input of the calculator buttons
 * GLOBALS: operand_array
 * ADDITIONAL FUNCTIONS USED: none
 */
function input_digit(operand) {
    var input_digit = $('#input_field').val();//retrieves the value of the display
    var input_concat = input_digit + operand;//concat the value in the display with the next number clicked
    $('#input_field').val(input_concat);//inserts concatenated value into the display field
    operand_array[index_pointer] += operand;//store the number clicked into the operand_array[0] if variable index_pointer = 0
}

/*************************
 * NAME: operator
 * @param op
 * PURPOSE: inserts operator into display and will calculate if input_field has numbers
 * GLOBALS: operand_array, the_operator, index_pointer
 * ADDITIONAL FUNCTIONS USED: array_calc()
 */
function operator(op) {
    var input_number = operand_array[0];//retrieves value from display
    var operator_concat = input_number + op;//concatenates the operator clicked to the current value of the display
    $('#input_field').val(operator_concat);//inserts concatenated value and operator back into display
    index_pointer = 1;//changes index_pointer = 1, the next number clicked will be inserted into operand_array[1]
    the_operator = op;//stores the operator clicked to be used in calculation comparison
    array_calc();
}

/*************************
 * NAME: add
 * @param operand1, operand2
 * PURPOSE: adds operand1 and operand 2
 * GLOBALS: none
 * ADDITIONAL FUNCTIONS USED: store_index_0()
 */
function add(operand1, operand2) {//adds operand1 and operand 2
    var add = parseFloat(operand1) + parseFloat(operand2);//parses the operands and stores them in the variable 'add
    $('#result_field').val(add);//inserts the calculated function into the display
    store_index_0();//stores the result into operand_array[0] and clears operand_array[1] for next selected number
}

/*************************
 * NAME: sub
 * @param operand1, operand2
 * PURPOSE: subtracts operand1 and operand 2
 * GLOBALS: none
 * ADDITIONAL FUNCTIONS USED: store_index_0()
 */
function sub(operand1, operand2) {
    var sub = parseFloat(operand1) - parseFloat(operand2);//parses the operands and stores them in the variable 'sub
    $('#result_field').val(sub);//inserts the calculated function into the display
    store_index_0();//stores the result into operand_array[0] and clears operand_array[1] for next selected number
}

/*************************
 * NAME: mult
 * @param operand1, operand2
 * PURPOSE: multiplies operand1 and operand 2
 * GLOBALS: none
 * ADDITIONAL FUNCTIONS USED: store_index_0()
 */
function mult(operand1, operand2) {
    var mult = parseFloat(operand1) * parseFloat(operand2);//parses the operands and stores them in the variable 'mult
    $('#result_field').val(mult);//inserts the calculated function into the display
    store_index_0();//stores the result into operand_array[0] and clears operand_array[1] for next selected number
}

/*************************
 * NAME: div
 * @param operand1, operand2
 * PURPOSE: divides operand1 and operand 2
 * GLOBALS: none
 * ADDITIONAL FUNCTIONS USED: store_index_0()
 */
function div(operand1, operand2) {//divides operand1 and operand 2
    if (operand2 == 0) {//if operand2 equals the number 0
        $('#result_field').val("Undefined");//displays undefined if the number clicked was divided by 0
    } else {
        var div = parseFloat(operand1) / parseFloat(operand2);//parses the operands and stores them in the variable 'div
        $('#result_field').val(div);//inserts the calculated function into the display
    }
    store_index_0();//stores the result into operand_array[0] and clears operand_array[1] for next selected number
}

/*************************
 * NAME: array_calc
 * @param none
 * PURPOSE: this runs the calculation if an operator is pushed
 * GLOBALS: operand_array, the_operator
 * ADDITIONAL FUNCTIONS USED: store_index_0()
 */
function array_calc(){//this runs the calculation if an operator is pushed
    if((operand_array[0] != "") && (operand_array[1] != "")){//checks if both array index [0] and [1] to be a value to be calculated
        calculate();//runs the calculate function
        var array_result = $('#result_field').val();//stores the result of the calculation in a variable
        var array_op = array_result + the_operator;//concatenates the selected operator to the result variable
        $('#input_field').val(array_op);//inserts the concatenated result and operator into the input field
        store_index_0();//stores the result into operand_array[0] and clears operand_array[1] for next selected number

    }
}

/*************************
 * NAME: calculate
 * @param none
 * PURPOSE: determines the operator to be used in and runs the function associated with that operato
 * GLOBALS: operand_array, the_operator
 * ADDITIONAL FUNCTIONS USED: add(), sub(), mult(), div()
 */
function calculate() {//determines the operator to be used in and runs the function associated with that operator
    var num1 = operand_array[0];//stores the [0] position from the operand array into the num1 variable
    var num2 = operand_array[1];//stores the [1] position from the operand array into the num2 variable
    switch (the_operator) {//switch statement to determine the operator to use
        case '+'://if the_operator variable is holding a '+'
            add(num1, num2);//runs the add() function
            break;
        case '-'://if the_operator variable is holding a '-'
            sub(num1, num2);//runs the sub() function
            break;
        case '*'://if the_operator variable is holding a '*'
            mult(num1, num2);//runs the mult() function
            break;
        case '/'://if the_operator variable is holding a '/'
            div(num1, num2);//runs the div() function
            break;
    }
}

/*************************
 * NAME: store_index_0
 * @param none
 * PURPOSE: stores the result into operand_array[0] and clears operand_array[1] for next selected number
 * GLOBALS: operand_array
 * ADDITIONAL FUNCTIONS USED: none
 */
function store_index_0(){
    operand_array[0] = $('#result_field').val();//store the result into operand_array[0]
    operand_array[1] = "";//clears operand_array[1];
}

/*************************
 * NAME: all_clear
 * @param none
 * PURPOSE: clears all values and display
 * GLOBALS: operand_array, the_operator, index_pointer
 * ADDITIONAL FUNCTIONS USED: none
 */
function all_clear() {
    $('#input_field').val("");//inserts an empty string back into the input field
    $('#result_field').val("");//inserts and empty string back into the result field
    operand_array[0] = "";//inserts an empty string back into the operand_array[0]
    operand_array[1] = "";//inserts an empty string back into the operand_array[1]
    index_pointer = 0;//sets the next input_digit() to go into operand_array[0]
}

/*************************
 * NAME: clear
 * @param none
 * PURPOSE: clears the result field and resets operand_array[1]
 * GLOBALS: operand_array
 * ADDITIONAL FUNCTIONS USED: none
 */
function clear() {
    $('#result_field').val("");//inserts an empty string back into the display
    operand_array[1] = "";//inserts an empty string back into the operand_array[1]
}

/*************************
 * NAME: refresh_display
 * @param none
 * PURPOSE: inserts current array and operator into input field
 * GLOBALS: operand_array, the_operator
 * ADDITIONAL FUNCTIONS USED: none
 */
function refresh_display() {
    var output = operand_array[0] + the_operator + operand_array[1];//holds the values of operand_array[0], the operator, and operand_array[1] in a variable
    $('#input_field').val(output);//inserts the output variable into the input field
}

/*************************
 * NAME: invert
 * @param none
 * PURPOSE: inverts pos or neg sign of result
 * GLOBALS: operand_array
 * ADDITIONAL FUNCTIONS USED: none
 */
//DWP THIS ONE
function invert() {//inverts pos or neg sign to result
    var number = operand_array[0];//stores value of operand_array[0] into variable
    var inversion =  number * -1;//multiplies number variable by -1 and stores it on inversion variable
    operand_array[0] = inversion;//inserts inversion variable into operand_array[0]
    $('#input_field').val(inversion);//inserts inversion variable value into input field
}

$('#all_clear').click(function () {//click function to run all_clear()
    all_clear();//calls all_clear() function
})

$('#clear').click(function () {//click function to run clear() and refresh()
    clear();//clears the result field and resets operand_array[1]
    refresh_display();//inserts current operand_array values and operator into input field
})




