function load_reviews(amt) {
    var list = $("#reviews ul"); // Identifies the unordered list for Reviews in the Reviews section of the page.
    list.empty(); // Clears the initial 6 reviews. Prevents First 6 Reviews being duplicated when the button is pressed.
    var promise = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil');
    promise.done(function(data) {
        var review = "";
        for(var idx = 0; idx < data.length && idx < amt; idx++) { // Stops at amt, or the number of JSON objects, whichever comes first.
            review = ""
            review = review + '<li>'+
                                '<div class="reviewContent">'+
                                '<div class="pfp">'+
                                    '<img src="images/reviewicon' + Math.round(Math.random() + 1) +'.jpg">'+ // Randomly chooses profile picture 1 or 2.
                                '</div>'+
                                '<div class="reviewInfo">'+
                                    '<h3 class="username">' + data[idx].nickname + '</h3>'+
                                    '<div class="rating">'
            
            for(var red = 0; red < parseInt(data[idx].rating); red++) { // Adds N red star div elements to the html, with N being the review score out of 5.
                review = review + '<h2 class="star red">*</h2>'
            }   
            
            for(var black = 0; black < 5 - parseInt(data[idx].rating); black++) { // Adds 5 - N black star div elements to the html following the red star divs.
                review = review + '<h2 class="star black">*</h2>'
            }  
                                
            review = review +   '</div>'+
                                '<h3 class="summary">Great Greace!!</h3>'+ // The design image showed review titles instead of usernames so both are in the HTML, but only usernames are filled from the API.
                            '</div>'+
                            '<p>' + data[idx].review + '</p>'+
                            '</div>'+
                            '<div class="reviewDivider"></div>'+
                        '</li>'

            list.append(review); // Appends the new review as a <li> element.
    }
    promise.always(function() {
    });
});
}

function load_all_reviews_click_handler(event) {
    event.preventDefault();
    $('#showAllReviews').hide(); // Hide the button.
    load_reviews(Infinity); // Load EVERY Review.
};

$(document).ready(function(){ // Function Runs after page load has completed.
    load_reviews(6); // Load First 6 Reviews
    $('#showAllReviews').on('click', load_all_reviews_click_handler); // Calls the function when the 'Read All Reviews' button is clicked.
});