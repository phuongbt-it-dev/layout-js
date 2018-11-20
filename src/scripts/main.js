function devTool(){
	var butDev = '<div class="togglegird"> <button class="btn btn-primary" id="button" type="submit">Bật/Tắt</button> </div>'

	var butDev2 = '<div class="togglegird2"> <button class="btn btn-primary" id="button" type="submit">Fluid</button> </div>'

	var girdDev = '<div class="luoi active"> <div class="container"> <div class="row"> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> <div class="item"> <div class="bg"></div> </div> </div> </div> </div>'


	var cssDev = '.togglegird { position: fixed; right: 1rem; bottom: 1rem; z-index: 9000; } .luoi { position: fixed; top: 0; left: 0; height: 100vh; z-index: 8000; display: none; width: 100%; } .luoi.active { display: flex; } .luoi .item { flex-basis: 0; flex-grow: 1; max-width: 100%; height: 100vh; padding-top: 0; padding-right: 15px; padding-bottom: 0; padding-left: 15px; } .luoi .item .bg { background: pink; height: 100vh; opacity: .5; } @media (max-width: 1199.98px) { .item:nth-child(9), .item:nth-child(10), .item:nth-child(11), .item:nth-child(12) { display: none; } } @media (max-width: 767.98px) { .item:nth-child(5), .item:nth-child(6), .item:nth-child(7), .item:nth-child(8) { display: none; } }'

	var cssDev2 = '.togglegird2 { position: fixed; right: 1rem; bottom: 5rem; z-index: 9001; }'
	
	$('head').append('<style type="text/css">'+cssDev+'</style>')

	$('head').append('<style type="text/css">'+cssDev2+'</style>')

	$('body').append(butDev).append(girdDev).append(butDev2)

	$('.togglegird button').on('click', function(){
		$('.luoi').toggleClass('active')
	})

	$('.togglegird2 button').on('click', function(){
		var fs = $('.luoi .container').hasClass('container')
		if (fs){
			$('.luoi .container').removeClass('container').addClass('container-fluid')
		}  else{
			$('.luoi .container-fluid').removeClass('container-fluid').addClass('container')
		}
	})
}
devTool()
