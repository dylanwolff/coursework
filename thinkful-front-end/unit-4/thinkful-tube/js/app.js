$(document).ready(function(){

  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    myData = data.Search[0].Title;
    console.log(myData);
});

  function showResults(results){
    var html = "";
    $.each(results, function(index,value){
      html += "<p>" + value.Title + "</p>";
      console.log(value.Title);
    });
    $("#search-results").html(html);
  }
})