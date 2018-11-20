$('.boxinput input').on('focus', function(){
	$(this).parents('.boxinput').toggleClass('active')
})

$('.boxinput input').on('blur', function(){
	$(this).val().length>0 ? $(this).parents('.boxinput').addClass('active') : $(this).parents('.boxinput').removeClass('active')
})

