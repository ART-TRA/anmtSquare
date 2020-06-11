$(document).ready(function(){
	$('.middle_fourth .front').click(function(){
		$(this).closest('.middle_fourth').toggleClass('broken_middle_fourth');
		// $('.up_fourth').css("animation", "none");
		$('.up_fourth').toggleClass('broken_up_fourth');
		$('.up_third').toggleClass('broken_up_third');
		$('.up_second').toggleClass('broken_up_second');
		$('.up_first').toggleClass('broken_up_first');

		$('.middle_third').toggleClass('broken_middle_third');
		$('.middle_second').toggleClass('broken_middle_second');
		$('.middle_first').toggleClass('broken_middle_first');

		$('.middle_two_fourth').toggleClass('broken_middle_two_fourth');
		$('.middle_two_third').toggleClass('broken_middle_two_third');
		$('.middle_two_second').toggleClass('broken_middle_two_second');
		$('.middle_two_first').toggleClass('broken_middle_two_first');

		$('.down_fourth').toggleClass('broken_down_fourth');
		$('.down_third').toggleClass('broken_down_third');
		$('.down_second').toggleClass('broken_down_second');
		$('.down_first').toggleClass('broken_down_first');
	});
});