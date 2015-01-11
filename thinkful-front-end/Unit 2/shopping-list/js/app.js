$(document).ready(function() { 
  
  //Add item to list
    //Need to add validation so empty items can't be added
  $("#add-button").click(function() {
    $("ul").append('<li class="todo"><input type="checkbox"><span>' 
      + $("#add-item").val() 
      + '</span><button class="delete-button">Delete</button></li>');
    $("#add-item").val("");
  });

  //Toggle item as completed/incomplete
    //Need to add event listener for li that don't exist when page loads
  $("input[type='checkbox']").change(function() {
   $(this).closest("li").toggleClass("todo done");
  });


  //Delete item from list
    //Need to add event listener for li that don't exist when page loads
  $(".delete-button").click(function() { 
    $(this).parent().remove();
  });



});