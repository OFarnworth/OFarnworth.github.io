function poll_vote_yes_click_handler(event) {
    event.preventDefault();
    $('#readerInteraction #results #baryes').addClass("selected"); // Adds selected class to the yes bar in the results chart.
    $('#readerInteraction #poll').hide(); // Hides the question and voting radio buttons.
    $('#readerInteraction #results').show(); // Shows the results chart, also triggering the loading CSS animation.
};

function poll_vote_no_click_handler(event) {
    event.preventDefault();
    $('#readerInteraction #results #barno').addClass("selected"); // Adds selected class to the no bar in the results chart.
    $('#readerInteraction #poll').hide(); // Hides the question and voting radio buttons.
    $('#readerInteraction #results').show(); // Shows the results chart, also triggering the loading CSS animation.
};

$(document).ready(function(){ // Function runs when document has finished loading.
    $('#readerInteraction #results').hide(); // Hides the results so they can't be seen until after the user has voted.
    $('#readerInteraction #poll #pollyes').on('change', poll_vote_yes_click_handler); // Calls function when user votes for yes.
    $('#readerInteraction #poll #pollno').on('change', poll_vote_no_click_handler); // Calls function when user votes for no.
});

// In this example the percentages for yes and no bars on the chart are static and defined in the CSS.
// However if an API was used, the vote could actually contribute to a real score that is loaded from online and rendered using CSS.