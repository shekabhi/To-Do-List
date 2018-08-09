// check off specific todos by clicking

$("ul").on("click", "li" ,function(){

	// we adding the property of onclick on "ul" which can only work on "li"
	// we are not doing onclick property on "li" because when we append the extra "li" then 
	//  then the property of the "li" will not show any action on new li . similarly we will do this on deleting the"li" using "span"


	// compare with only rgb code rgb(128, 128, 128)-> grey ;

	// if($(this).css("color") ==="rgb(128, 128, 128)"){

	// 	$(this).css({
	// 	color : "black",
	// 	textDecoration : "none"
	//     });
	// }
	// else{
	// 	$(this).css({
	// 	color : "grey",
	// 	textDecoration : "line-through"
	//     });
	// }

	// alternative 
	// completed class is in css which toggle the property

	$(this).toggleClass("completed"); 
});

// click on x to delete todos

$("ul").on("click" , "span" ,function(event){

   // here this is the "span" on which we click which do the action on
   // parent element "li" as fadeOut the text in li and then remove it ,
	
	$(this).parent().fadeOut(500 , function(){
		$(this).remove();
	});
	event.stopPropagation(); 
	 // event is used to stop working the property of parent element
     
});

$("input[type='text']").keypress(function(event){

	if(event.which ===13){
		//grabbing new todo text frome input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul 
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
    
});

// + sign working

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle() 
});