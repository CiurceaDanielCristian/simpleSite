let person ={

     name:'dani',
     age:20


};
$(document).ready(function(){
   
  $("input").focus(function(){

    $(this).css("background-color","red");

  });
   $("input").mouseleave(function(){

      $(this).css("background-color","white");

   });
});
$("button").click(function(){

     $(this).hide();

});
