$(document).ready(function(){
	$("#my-name").click(function(){
		window.location.href='index.html';
	});
	$("#about").click(function(){
		$("#tagline").slideUp(1000, function(){
			$("#header").animate({'margin-top': '0%'});
			$("#contact-icons").animate({'top':'412px'}, {complete: function(){window.location.href='about.html';}});
		});
	});
	$("#projects").click(function(){
		$("#tagline").slideUp(400, function(){
			$("#header").animate({'margin-top': '0%'});
			$("#contact-icons").animate({'top':'412px'}, {complete: function(){window.location.href='projects.html';}});
		});
	});
	$("#press").click(function(){
		$("#tagline").slideUp(400, function(){
			$("#header").animate({'margin-top': '0px'});
			$("#contact-icons").animate({'top':'462px'}, {complete: function(){window.location.href='press.html';}});
		});
	});
});