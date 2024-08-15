$(document).ready(function() {
	$('.icon-menu').click(function(){
        $('.icon-menu,.menu__body,.header__actions').toggleClass('_active');
        $('body').toggleClass('lock');

	});
});