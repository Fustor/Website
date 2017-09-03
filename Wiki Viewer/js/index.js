
$(document).ready(function(){
 
  $("#search").click(function(){
    
 var searchTerm = $('#searchTerm').val();

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    
      $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data) {
             //heading console.log(data[1][0]);
             //description console.log(data[2][0]);
             //link console.log(data[3][0]);
          $('#output').html('');
          for(var i = 0;i<data[1].length;i++) {
            $('#output').prepend("<li><a target='_blank' href="+data[3][i]+">"+"<h3>"+data[1][i]+"</h3>"+"<p>"+data[2][i]+"</p></li>");
          }
   
        },
        error: function (errorMessage) {
         console.log(errorMessage);
        }
    });
    

  });
     
});