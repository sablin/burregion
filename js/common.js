$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));
$(function(){
	$(".pop").on("click",function(){
		$(".pop_up").show();
		$(".hover").show();
});
$(".hover").on("click",function(){
		$(".pop_up").hide();
		$(".hover").hide();	
});
}); 
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
	$("#one").on("click",function(){
		$(".only").show();
		$(".double").hide();
		$(".double2").hide();
		$("#one").css("background-color", "#ffdb4c");
		$("#two").css("background-color", "transparent");
		$("#three").css("background-color", "transparent");
		
	});	
		$("#two").on("click",function(){
			$(".only").hide();
		$(".double").show();
		$(".double2").hide();
		$("#one").css("background-color", "transparent");
		$("#two").css("background-color", "#ffdb4c");
		$("#three").css("background-color", "transparent");
		
	});	
		$("#three").on("click",function(){
			$(".only").hide();
		$(".double").hide();
		$(".double2").show();
		$("#one").css("background-color", "transparent");
		$("#two").css("background-color", "transparent");
		$("#three").css("background-color", "#ffdb4c");
		
	});	
	
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});