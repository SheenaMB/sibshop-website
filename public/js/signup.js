// doc needs to be ready
$(document).ready(function () {
    console.log("ready!");
    //make sure this is updated with the new BUTTON ID for the form submit
    $("#submit").on("click", handleFormSubmit);
});
// place event listener

var handleFormSubmit = function (event) {
    event.preventDefault();
    var data = {
        name: $('#name').val().trim(),
        email: $('#email').val().trim(),
        state: $('#state').val().trim(),
    };

    // pull inputs
    // save inputs in object called data

    $.ajax({
        url: "/api/community",
        type: "POST",
        data: data
    }).then(
        function () {
            location.reload();
        });
}


