
// Containers
var right_container = document.getElementsByClassName('right_container')[0];
var thank_you_container = document.getElementsByClassName('thank_you_container')[0];

// Input values
var input_holder_name = document.getElementById("input_holder_name");
var input_card_number = document.getElementById("input_card_number");
var input_expiry_month = document.getElementById("input_expiry_month");
var input_expiry_year = document.getElementById("input_expiry_yearut_cvc");
var input_cvc = document.getElementById("input_cvc");

// Error messages
const error_holder_name = document.querySelector('#error_holder_name');
const error_card_number = document.querySelector('#error_card_number');
const error_month_year = document.querySelector('#error_month_year');
const error_cvc = document.querySelector('#error_cvc');

var output_holder_name = document.getElementById("holder_name");
var output_card_number = document.getElementById("card_number");
var output_cvc = document.getElementById("cvc");

const confirm_button = document.querySelector("#confirm_button");
const continue_button = document.querySelector("#continue_button");

// Update the card details in realtime as each key is pressed
input_holder_name.addEventListener("keyup", update_Card_Details);
input_card_number.addEventListener("keyup", update_Card_Details);
input_cvc.addEventListener("keyup", update_Card_Details);


function initialise_Error_Messages() {
    error_holder_name.innerHTML = "";
    error_card_number.innerHTML = "";
    error_month_year.innerHTML = "";
    error_cvc.innerHTML = "";
}

function validate_Card_Details() {

    var card_details_valid = true;
    const regex = new RegExp("^[0-9]{13,19}$");

    initialise_Error_Messages();

    if (!input_holder_name.value) {
        error_holder_name.innerHTML = "Name cannot be blank";
        card_details_valid = false;
    }
    if (!input_card_number.value) {
        error_card_number.innerHTML = "Card number cannot be blank";
        card_details_valid = false;
    }

    //Check if the number contains only numeric values  
    //and is of between 13 to 19 digits
    if (!regex.test(input_card_number.value)) {
        error_card_number.innerHTML = "Wrong format, numbers only";
        card_details_valid = false;
    }

    if (!input_expiry_month.value) {
        error_month_year.innerHTML = "Month cannot be blank";
        card_details_valid = false;
    }
    if (card_details_valid) {
        update_Card_Details();
        show_Thank_You_Container();
    }
}
function update_Card_Details() {

    initialise_Error_Messages();

    const unformatted_card_number = input_card_number.value.replace(" ", "");
    let n = 4; // insert a character after every 5 characters
    let padding_character = " ";
    let formatted_card_number = "";
    for (let i = 0; i < unformatted_card_number.length; i += n) {
        let slice = unformatted_card_number.substr(i, n);
        if (slice.length == n)
            formatted_card_number = formatted_card_number.concat(slice, padding_character);
        else
            formatted_card_number = formatted_card_number.concat(slice);
    }

    output_holder_name.innerHTML = input_holder_name.value;
    output_card_number.innerHTML = formatted_card_number;

    output_cvc.innerHTML = input_cvc.value;


}

function show_Thank_You_Container() {
    right_container.style.visibility = 'hidden';
    thank_you_container.style.visibility = 'visible';

}

function hide_Thank_You_Container() {
    right_container.style.visibility = 'visible';
    thank_you_container.style.visibility = 'hidden';
}

