$(document).ready(function(){
	$("#my-name").click(function(){
		$(".page-content").html("");
		$(".page-content").animate({'height':'0px'});
		$(".page-content").attr("id", "tagline");
		$("#tagline").html("<p>STEM educator and all-around badass</p>");
		$("#footer-icons").css("margin-top", "48px");
		$("#top-thingy").animate({'margin-top':'20%'}, {complete: function(){window.location.href='index.html';}});
	});
	$("#about").click(function(){
		$(".page-content").html("");
		$(".page-content").css("height", "0px");
		$("#footer-icons").animate({'margin-top':'332px'}, {complete: function(){window.location.href='about.html';}});
	});
	$("#projects").click(function(){
		$(".page-content").html("");
		$(".page-content").css("height", "0px");
		$("#footer-icons").animate({'margin-top':'332px'}, {complete: function(){window.location.href='projects.html';}});
	});
	$("#press").click(function(){
		$(".page-content").html("");
		$(".page-content").css("height", "0px");
		$("#footer-icons").animate({'margin-top':'382px'}, {complete: function(){window.location.href='press.html';}});
	});
});

/*old #my-name function with lots of sliding

	$("#my-name").click(function(){
		$(".page-content").slideUp(400, function(){
			$(".page-content").html("STEM educator and all-around badass");
			$(".page-content").slideDown(400, function(){$("#top-thingy").animate({'margin-top':'20%'}, {complete: function(){window.location.href='index.html';}});});
		});
	});
*/