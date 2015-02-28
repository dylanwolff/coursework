$(document).ready(function() {
  //Query API
  function getResults(query) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search",
      {
        "part": "snippet",
        "key": "AIzaSyDGNutxEIevCGLqDLrQSQ_2rjqvgrGCTQc",
        "q": query
      },
      function (data) {
        if (data.pageInfo.totalResults == 0) {
          alert("No videos found");
        }
        showResults(data.items);
      }
    );
  }
  //Display results
  function showResults(videos){
    var html = "";
    $.each(videos, function (index,video){
      html += "<li><p>" + video.snippet.title + 
      "</p><img src='" + video.snippet.thumbnails.high.url + "'/></li>";
    });
    $("#search-results ul").html(html);
  }
  
  $("#search-term").submit(function (event) {
    event.preventDefault();
    getResults($("#query").val());
  });

})
