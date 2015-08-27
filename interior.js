$(document).ready(function(){
	$("#my-name").click(function(){
		$("#page-content").slideUp(400, function(){
			$("#page-content").html("STEM educator and all-around badass");
			$("#page-content").slideDown(400, function(){$("#top-thingy").animate({'margin-top':'20%'}, {complete: function(){window.location.href='index.html';}});});
		});
	});
	$("#programmer").click(function(){
		$("#page-content").html("");
		$("#footer-icons").animate({'margin-top':'604.5px'}, {complete: function(){window.location.href='programmer.html';}});
	});
	$("#pro-choice").click(function(){
		$("#page-content").html("");
		$("#footer-icons").animate({'margin-top':'70px'}, {complete: function(){window.location.href='pro-choice.html';}});
	});
	$("#punk").click(function(){
		$("#page-content").html("");
		$("#footer-icons").animate({'margin-top':'790px'}, {complete: function(){window.location.href='punk.html';}});
	});
});

/*Old function for my-name that would direct back to index.html at some point...

	$("#my-name").click(function(){
		$("#header").animate({'margin-top': '20%'});
		$("#contact-icons").animate({'margin-top': '0'});
		$("#page-content").html("")
		//$("#main-stuff").css({'margin-top':0})

	});
	
*/


/*Old punk function that had footer jump up to underneath header, then scroll back down to reload page.
	
	$("#punk").click(function(){
		$("#tagline").slideUp();
		$("#homepage-content").animate({'margin-top': 5});
		$("#page-content").html("");
		$("#contact-icons").animate({'padding-top': '40%'}, {complete: function(){window.location.href='punk.html';}});
	});
	
*/