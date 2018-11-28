$(document).ready(function(){
	// $('.abc .aaa .details .b1').on('click', function(){
	// 	console.log(1)
	// 	var a = $(this).parents('.bbb').find('.owl-carousel').html()
	// 	console.log(a)
	// })

	$('.shop [data-toggle="modal"]').each(function(){
		$(this).click(function(){
			var getcnt = $(this).parents('.cnt')
			console.log(getcnt)
			$('#quickview .modal-title h2').html(getcnt.find('h3').html())
			$('#quickview .modal-body .col-5').html(getcnt.find('.hehe').html())
			$('#quickview .modal-body .col-7').html(getcnt.find('.desc').html())

			$('#quickview .modal-body .owl-carousel').removeClass('d-none').owlCarousel({
				loop: true,
				nav: true,
				item: 1
			})
		})
	})
})


