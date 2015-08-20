
$(document).ready(function(){
	$("#my-name").click(function(){
		$("#homepage-content").animate({'margin-top': '20%'});
		$("#bottom").animate({'padding-top': 0});
		$("#main-stuff").html("")
		//$("#main-stuff").css({'margin-top':0})

	});
	$("#programmer").click(function(){
		$("#homepage-content").animate({'margin-top': 0});
		$("#bottom").animate({'padding-top': '40%'}, {complete: function(){window.location.href='programmer.html';}});
	});
	$("#punk").click(function(){
		$("#homepage-content").animate({'margin-top': 5});
		$("#main-stuff").html("this is all my punk content")
		$("#bottom").animate({'padding-top': '40%'}, {complete: function(){window.location.href='punk.html';}});
	});
});

/*var defaultHTML = "hi i'm chrissy<br/ >click around";
var punkHTML = "i sing songs in <strong>jack on fire</strong><br /><br /><img src='http://i58.tinypic.com/244pr0w.jpg' width='500'><br /><br />here are nice things people have said about us:<br/><br /><a href='http://pitchfork.com/thepitch/845-how-music-is-helping-abortion-rights-advocates-keep-up-the-fight/' target='_blank'>how music is helping abortion advocates keep up the fight</a><br />pitchfork :: july 15, 2015<br /><br /><a href='http://www.washingtoncitypaper.com/articles/47355/jack-on-fire-at-fort-reno-monday-july-27/' target='_blank'>jack on fire at fort reno</a></br />washington city paper :: july 24, 2015<br /><br /><a href='http://www.pilotwaves.com/chrissy-and-jason-of-jack-on-fire/' target='_blank'>pilot waves with alex</a><br />pilot waves :: may 31, 2015<br /><br /><a href='https://www.mixcloud.com/Radio_CPR_101_7/suggested-donation-05_13_15-with-chrissy/' target='_blank'>suggestion donation with tom and ron</a><br />radio cpr :: may 15, 2015<br /><br /><a href='http://www.washingtoncitypaper.com/blogs/artsdesk/music/2014/11/11/jack-on-fires-new-album-blasts-condos-catcallers-federal-databases-full-of-balls/' target='_blank'>jack on fire's new album blasts condos, catcallers, federal databases full of balls</a><br />washington city paper :: november 11, 2014<br /><br />";
var choiceHTML = "dcaf<br/ >femex";
var progHTML = "i teach computer science with <strong>girls who code</strong><br /><br /><img src='http://i57.tinypic.com/4sjziw.jpg' width='500'><br />hear me code</br >nickibot/other projects";


function defaultStuff(){
    document.getElementById("homepage-content").innerHTML = defaultHTML;
}

function showPunk(){
    document.getElementById("homepage-content").innerHTML = punkHTML;
}

function showChoice(){
    document.getElementById("homepage-content").innerHTML = choiceHTML;
}

function showProgram(){
    document.getElementById("homepage-content").innerHTML = progHTML;
}*/
