// $("h1").css("color","green")    //-->to change color of hello word from jquery
// $("h1").addClass("big-title");     //->to add undeclared css property
// $("button");
// $("h1").removeClass("big-title");    //--> to remove that

// $("h1").hasClass("margin-50");        //-->to check in the cconsole it it has class or not ,it will return boolean
// $("h1").text("bye");                   //--> to manipulate the text
//  $("h1").html("<em>hey</em>")                 //--> to manipulate the text
// $("button").text("bye");                 //--> to manipulate the text in button
// console.log($("img").attr("src"));
// $("a").attr("href","https://www.yahoo.com")       //-->changing href attribute to yahoo.com
/////////////////////////////////////////////////////
//event listeners jquery
// $("h1").click(function(){
//     $("h1").css("color","purple");
// })
///////////////////////
// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple";
//     })
// }
                //or
// $("button").click(function(){
//     $("h1").css("color","purple");
// })

////////////////////////////////////////
// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });
 //or
//  $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
//  })
//////////////////////////////////////////animation
$("button").on("click",function(){
    // $("h1").fadeOut();  // some methods -->fadein,fadetoggle,slideup,slidedown,animate({opacity:0.5}),animate({margin: "20%"})                            //after clicking any button it will hide it
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})