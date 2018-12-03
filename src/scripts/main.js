var appSEO = {
	title: 'Tiêu đề trang',
	url: 'https://demo.com/',
	address: 'Địa chỉ',
	tel: '3532534;679679;1212212112;00000000',
	telCount: 0,
	map: {
		lg: '10.827831',
		ln: '106.681231',
		code: 'VN'
	},
	initForm: function () {
		for (var key in appSEO) {
			if (appSEO.hasOwnProperty(key)) {
				// Xét ĐK
				if (typeof appSEO[key] === 'string') {
					if (key === 'tel') {
						let u = appSEO[key].split(";")
						appSEO.telCount = u.length
						for (let index = 0; index < u.length; index++) {
							$('#genform').append(appSEO.buildForm(key + '-' + (index + 1), u[index]))
						}
					} else {
						$('#genform').append(appSEO.buildForm(key, appSEO[key]))
					}
				} else if (typeof appSEO[key] === 'object') {
					for (var k in appSEO[key]) {
						if (appSEO[key].hasOwnProperty(k)) {
							$('#genform').append(appSEO.buildForm(k, appSEO[key][k]))
						}
					}
				}
			}
		}
	},
	buildForm: function (a, b) {
		return '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text">' + a.charAt(0).toUpperCase() + a.slice(1) + '</span></div> <input class="form-control" id="seo-' + a + '" type="text" placeholder="' + b + '" value="' + b + '"> </div>'
	},
	resultForm: function (e) {
		for (var key in appSEO) {
			if (appSEO.hasOwnProperty(key)) {
				if (typeof appSEO[key] === 'string') {
					if (key === 'tel') {
						let tl = []
						for (let index = 0; index < appSEO.telCount; index++) {
							let mm = $('#genform #seo-' + key + '-'+ (index+1)).val()
							tl.push(mm)
						}
						let rl = tl.join(';').toString()
						appSEO[key] = rl
						this.doResult(key, rl)
					} else {
						let em = $('#genform #seo-' + key).val()
						appSEO[key] = em
						this.doResult(key, em)
					}
				} else if (typeof appSEO[key] === 'object') {
					for (var k in appSEO[key]) {
						if (appSEO[key].hasOwnProperty(k)) {
							let emk = $('#genform #seo-' + k).val()
							appSEO[key][k] = emk
							this.doResult(key, emk, k)
						}
					}
				}
			}
		}
		// console.log(appSEO)
	},
	doResult: function (e, m, k) {
		let tmp = ''
		if (e === 'title') {
			tmp = tmp + '<meta property="og:title" content="' + m + '">'
		} else if (e === 'url') {
			tmp = tmp + '<meta property="og:url" content="' + m + '">'
		} else if (e === 'address') {
			tmp = tmp + '<meta property="og:type" content="' + m + '">'
		} else if (e === 'tel') {
			tmp = tmp + '<meta property="og:tel" content="' + m + '">'
		} else {
			// Tu viet 
		}
		console.log(tmp)
		$('#result').val(tmp)
	}
}

appSEO.initForm()
