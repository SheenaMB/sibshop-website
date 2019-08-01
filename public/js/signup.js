// doc needs to be ready
$( document ).ready(function() {
    console.log( "ready!" );
});
// place event listener
$("#submit").on("click", handleFormSubmit);

// pull inputs
// save inputs in object called data

$.ajax({
    url: "/api/community",
    type: "POST",
    data: data
  }).then(
    function() {
      location.reload();
    }
    
  );