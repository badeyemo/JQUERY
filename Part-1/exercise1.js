/*1. When the DOM is ready, console.log the message 
     "Let's get ready to party with jQuery!" */

$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!");
 })
 
    $(function(){

/*2. Give all images inside of an article tag the class 
     of image-center (this class is defined inside of the 
     style tag in the head). */

   $("img").addClass("image-center");
 
 //3. Remove the last paragraph in the article.

   $("article").find("p").eq(length -1).remove();
 
 /*4. Set the font size of h1 with an id of title 
      to be a random pixel size from 0 to 100.*/

   $("#title").css("font-size",`${Math.floor(Math.random() * 101)}px`);
 
 //5. Add an item to the list; it can say whatever you want.

   let $li = $("<li>",{
       text: "Hello World!!",
       css: {
           color: "green",
       }
   })
   $("ol").append($li);

/*6.Scratch that; the list is silly. Empty the aside and put a 
    paragraph in it apologizing for the list's existence. */

   $("aside").empty().append($("<p>",{
       text:"We don't really care"
   }));


/*7. When you change the numbers in the three inputs on 
     the bottom, the background color of the body should 
     change to match whatever the three values in the 
     inputs are. */

  $("img").on("click",function(){
          this.remove();
  })


/*8. Add an event listener so that when you click on
  the image, it is removed from the DOM. */

   $("input").on("change",function(){
       let $red = $("input").eq(0).val();
       let $blue = $("input").eq(1).val();
       let $green = $("input").eq(2).val();


        $("body").css("background-color",`rgb(${$red},${$green},${$blue})`)
   })


  


});