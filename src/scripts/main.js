

////////////////////// FOOTER /////////////////
$('#phuong').on('change', function(e){
	// var m = $(e).attr("data-bg")
	// var n = $(e).attr("data-bo")
	$('h5').css({
		'border' : e.target.value + 'px solid'
	})
	console.log(e.target.value)
})

function getContent(e) {

	////////////////////////////////
	var m = $(e).attr("data-bg")
	var n = $(e).attr("data-bo")
	$('h5').css({
		'background' : m,
		'border' : '3px solid' + n
	})
	////////////////////////////////


	////////////////////////////////
	// $('h5').css({
	// 	'background' : u,
	// 	'border' : "5px solid" + y,
	// 	'color' : 'white'
	// })
	////////////////////////////////


	////////////////////////////////
	// let g = $(u).text()
	// $('h1').text(g)
	////////////////////////////////

	////////////////////////////////
	// console.log($(u).html())
	// console.log($(u).attr('class'))
	// console.log($(u).attr('href'))
	////////////////////////////////
}
