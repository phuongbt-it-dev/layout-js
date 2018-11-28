var appSEO = {
	title: 'Tiêu đề trang',
	url: 'https://demo.com/',
	address: 'Địa chỉ',
	maps: {
		lg: '10.827831',
		ln: '106.681231',
		code: 'VN'
	},
	buildForm: function(a,b){
		return '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text">'+a.charAt(0).toUpperCase() + a.slice(1) +'</span></div> <input class="form-control" id="seo-'+a+'" type="text" placeholder="'+b+'"> </div>'
	}
}

for (var key in appSEO){
	if (appSEO.hasOwnProperty(key)){
		// let inputTmp = '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text">'+key.charAt(0).toUpperCase() + key.slice(1) +'</span></div> <input class="form-control" id="seo-'+key+'" type="text" placeholder="'+appSEO[key]+'"> </div>'
		
		// console.log( typeof appSEO[key])

		// typeof appSEO[key] !== 'object' ? $('#genform').append(inputTmp) : null
		

		// XÉT ĐIỀU KIỆN
		if (typeof appSEO[key] === 'string'){
				$('#genform').append(appSEO.buildForm(key, appSEO[key]))
			} else if( typeof appSEO[key] === 'object' ) {
				for (var k in appSEO[key]){
					if (appSEO[key].hasOwnProperty(k)){
					// console.log(k, appSEO[key] [k])
						$('#genform').append(appSEO.buildForm(k, appSEO[key] [k]))
					}
			}
			
		}
	}
}


// function buildForm(a,b){
// 	return '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text">'+a.charAt(0).toUpperCase() + a.slice(1) +'</span></div> <input class="form-control" id="seo-'+a+'" type="text" placeholder="'+b+'"> </div>'
// }
