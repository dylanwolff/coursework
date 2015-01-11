$(document).ready(function() { 
  
  //Use Enter to submit
  $("#add-item").keyup(function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      $("#add-button").click();
    };
  });

  //Add item to list
    //Need to add validation so empty items can't be added
  $("#add-button").click(function() {
    $("ul").append('<li class="todo"><input type="checkbox"><span>' 
      + $("#add-item").val() 
      + '</span><button class="delete-button">Delete</button></li>');
    $("#add-item").val("");
  });

  //Toggle item as completed/incomplete
    //Event listener for list items that don't exist when the page loads
  $("ul").on("change", "input[type='checkbox']", function() {
   $(this).closest("li").toggleClass("todo done");
  });

  //Delete item from list
    //Event listener for list items that don't exist when the page loads
  $("ul").on("click", ".delete-button", function() { 
    $(this).parent().remove();
  });

});