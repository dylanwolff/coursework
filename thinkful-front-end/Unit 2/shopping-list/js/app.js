//Add item to list
$('#add-button').click(function() {
    $('.list').append('<li class="todo"><input type="checkbox"><span>' 
      + $('#add-item').val() 
      + '</span><button class="delete-button">Delete</button></li>');
    $('#add-item').val("");
  }
)

//Toggle item as completed/incomplete



//Delete item from list