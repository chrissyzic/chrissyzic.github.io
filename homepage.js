$(document).ready(function(){
	$("#my-name").click(function(){
		window.location.href='index.html';
	});
	$("#programmer").click(function(){
		$("#page-content").html("");
		$("#tagline").slideUp(400, function(){
			$("#header").animate({'margin-top': '0px'});
			$("#contact-icons").animate({'top':'684.5px'}, {complete: function(){window.location.href='programmer.html';}});
		});
	});
	$("#pro-choice").click(function(){
		$("#page-content").html("");
		$("#tagline").slideUp(400, function(){
			$("#header").animate({'margin-top': '0px'});
			$("#contact-icons").animate({'top':'150px'}, {complete: function(){window.location.href='pro-choice.html';}});
		});
	});
	$("#punk").click(function(){
		$("#page-content").html("");
		$("#tagline").slideUp(400, function(){
			$("#header").animate({'margin-top': '0px'});
			$("#contact-icons").animate({'top':'870px'}, {complete: function(){window.location.href='punk.html';}});
		});
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