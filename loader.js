$(document).ready(function(){
    $("#content").load("Calender/jan.html");
});

$('a').click(function(){
    var page= $(this).attr('href');
   $("#content").load(page);
    return false;
});