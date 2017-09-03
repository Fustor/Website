var quotes = ["Never tell me the odds!","You do have your moments. Not many, but you have them.","Ben! I can be a Jedi. Ben, tell him I’m ready!(Thumps head on ceiling.)Ow!","Now, witness the power of this fully operational battle station.","…Scoundrel. I like that.","Hmm! Adventure. Hmmpf! Excitement. A Jedi craves not these things","Who’s the more foolish; the fool, or the fool who follows him?","That’s no moon","Laugh it up, fuzzball!","I happen to like… nice men","Your weapon… you will not need it","IT’S A TRAP","Shut him up or shut him down.","Shut him up or shut him down.","Would it help if I got out and pushed?!!","I want them alive — no disintegrations!","Now I know there is something strong than fear — far stronger. The Force.","That’s not how the Force works!","There is no ignorance, there is knowledge","Through strength I gain power"]; 
var authors = ["Han Solo","Leia Organa","Luke Skywalker","Darth Sidious","Han Solo","Yoda","Ben Kenobi","Ben Kenobi","Han Solo","Leia Organa","Yoda","Admiral Ackbar","Han Solo","Leia Organa","Leia Organa","Darth Vader","Kanan Jarrus","Han Solo","Jedi Code","Sith Code"];
var quoteNum = 0;

$(document).ready(function(){
  
  $("#getMessage").on("click",function(){
     var quoteNum = Math.floor(Math.random()*20);
    $(".message").html(quotes[quoteNum]);
    $(".author").html("- " + authors[quoteNum]);
    $("#tweet").on("click", function() {
      $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quotes[quoteNum] + " - " + authors[quoteNum]);
      $("#tweet").html("clicked");
   });
  });
  
});
