// create an app that display random facts of number
// based on user input (whole number)

const numbersApp = {};

// AJAX
// get info from API http://numbersapi.com/
numbersApp.getNumberFacts = (inputNumber) => {
    // console.log(inputNumber)
    $.ajax(`http://numbersapi.com/${inputNumber}`).then((numberFacts) => {
        $('h1').empty();
        numbersApp.displayFacts(numberFacts);
    })
}

// function to display the fact
numbersApp.displayFacts = (numberFacts) => {
    $('h1').text(numberFacts);
}

// init function
numbersApp.init = () => {
    numbersApp.getNumberFacts();

    // event listener to get facts based on the number that users input
    $('form').on('submit', function(e) {
        e.preventDefault();

        // get the value of users' input to be searched at API
        const inputNumber = $('input[type="number"]').val();

        numbersApp.getNumberFacts(inputNumber)
    })
}


// document ready
$(function() {
    numbersApp.init();
})