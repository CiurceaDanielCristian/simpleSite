
$(document).ready(function(){
   
  $("input").focus(function(){
        $(this).css("background-color","red");

     });
   
  $("input").mouseleave(function(){
        $(this).css("background-color","white");
     });

  $("button").click(function(){
          $(this).hide();
     });

     $("form").submit(function(event){
          event.preventDefault();
          $("#p1").text("fnfnfnf");
     });
});
  

