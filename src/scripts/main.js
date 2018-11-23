$(window).scroll(function () {
	getCountUP()
})

$(window).resize(function () {
	getCountUP()
})
$(document).ready(function () {
	getCountUP()
})

function getCountUP() {
	$('[data-count]').each(function () {
		var elm = $(this).offset().top
		var docS = $(window).scrollTop()
		var docH = $(window).height()
		var num = $(this).attr('data-count')
		var f = $(this).attr('data-from')
		var run = false

		// console.log(elm, docS, docH)
		$(this).text(f)
		if (elm < ((docS + docH)) && !run) {
			// $(this).text(num)
			var $this = $(this),
				countTo = num,
				durationTo = 3000;
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			}, {
				duration: durationTo,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					run = true
				}
			});
		} else {
			$(this).text(f)
		}
	})
}


$(document).ready(function(){
	var a = $('.abc .heit').height()
	var b = a/2
	console.log(a, b)
	$('.abc .block:first-child .item').css("height", b)
	$('.abc .block:last-child .item').css("height", b)
	$('.abc .item.bbb').css({
		"height": a,
		"display" : "flex",
		"align-items" : "center"
	})
})


