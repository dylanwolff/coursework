$(document).ready(function() { 
  
  //Use Enter to submit
  $('#add-item').keyup(function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      $('#add-button').click();
    };
  });

  //Add item to list
    //Add validation so empty items can't be added
  $('#add-button').click(function() {
    if( $('#add-item').val().trim().length == 0 ) {
        $('#add-item').css('border', '1px solid #CF2323');
        $('#add-item').val('');
    } else { 
    $('ul').append('<li class="todo"><input type="checkbox"><span>' 
      + $('#add-item').val() 
      + '</span><button class="delete-button">Delete</button></li>');
      $('#add-item').css('border', 'none');
      $('#add-item').val('');
    };
  });

  //Toggle item as completed/incomplete
    //Event listener for list items that don't exist when the page loads
  $('ul').on('change', "input[type='checkbox']", function() {
   $(this).closest('li').toggleClass('todo done');
  });

  //Delete item from list
    //Event listener for list items that don't exist when the page loads
  $('ul').on('click', '.delete-button', function() { 
    $(this).parent().remove();
  });

});