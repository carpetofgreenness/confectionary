$("document").ready(function() {

	$("#sugar").click(function() {
		if (Cookies.get("Sugar Cookies") == null) {
			console.log("no cookies")
			Cookies.set("Sugar Cookies",1);
		} else {
			num = parseInt(Cookies.get("Sugar Cookies"))+1
			Cookies.set("Sugar Cookies",num);
			console.log(num);
		}
	})

	$("#chocolate").click(function() {
		if (Cookies.get("Cholocate Cookies") == null) {
			console.log("no cookies")
			Cookies.set("Cholocate Cookies",1);
		} else {
			num = parseInt(Cookies.get("Cholocate Cookies"))+1
			Cookies.set("Cholocate Cookies",num);
			console.log(num);
		}
	})

	$("#lemon").click(function() {
		if (Cookies.get("Leomon Cookies") == null) {
			console.log("no cookies")
			Cookies.set("Leomon Cookies",1);
		} else {
			num = parseInt(Cookies.get("Leomon Cookies"))+1
			Cookies.set("Leomon Cookies",num);
			console.log(num);
		}
	})

})