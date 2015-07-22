
function input_digit(operand){
    var input1 = $('#result_field').val();
    var input_concat = input1 + operand;
    $('#result_field').val(input_concat);
};


function add(operand1, operand2) {
    var add = parseInt(operand1) + parseInt(operand2);
    $('result_field').val(add);
}

function sub(operand1, operand2){
    var sub = parseInt(operand1) - parseInt(operand2);
    $('result_field').val(sub);
}

function mult(operand1, operand2){
    var mult = parseInt(operand1) * parseInt(operand2);
    $('result_field').val(mult);
}

function div(operand1, operand2){
    var div = parseInt(operand1) / parseInt(operand2);
    $('result_field').val(div);
}

$('#plus').click(function(){
    var first_num = $('reslut_field').val();
});


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