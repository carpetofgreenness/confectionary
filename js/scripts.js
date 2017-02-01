$("document").ready(function() {
	
	if (Cookies.get("Sugar Cookies") == null) {
		Cookies.set("Sugar Cookies",1);
	} //start off everyone with one of each cookie

	if (Cookies.get("Chocolate Cookies") == null) {
		Cookies.set("Chocolate Cookies",1);
	}

	if (Cookies.get("Lemon Cookies") == null) {
		Cookies.set("Lemon Cookies",1);
	}

	drawCookies("sugar",false);
	drawCookies("chocolate",false);
	drawCookies("lemon",false);

	$("#sugarColumn").on("click",".sugar",function() { //event delegation
		num = parseInt(Cookies.get("Sugar Cookies"))+1
		Cookies.set("Sugar Cookies",num);
		drawCookies("sugar",true);
	});

	$("#chocolateColumn").on("click",".chocolate",function() {
		num = parseInt(Cookies.get("Chocolate Cookies"))+1
		Cookies.set("Chocolate Cookies",num);
		drawCookies("chocolate",true);
	});

	$("#lemonColumn").on("click",".lemon",function() {
		num = parseInt(Cookies.get("Lemon Cookies"))+1
		Cookies.set("Lemon Cookies",num);
		drawCookies("lemon",true);
	});

	function drawCookies(cookie,isClicked) {
		htmlString = "<img src=\"" + cookie + ".jpg\" class=\"" + cookie + "\">"
		cookieString = capitalizeFirstLetter(cookie) + " Cookies"
		cookieNum = Cookies.get(cookieString)
		if (Cookies.get(cookieString) != null) {
			for (var i=1; i<cookieNum; i++) {
				htmlString += "<img src=\"" + cookie + ".jpg\" class=\"" + cookie + "\">"
			}
		}

		idName = "#" + cookie + "Column"
		$(idName).html(htmlString);
		if (isClicked) {
			// location.reload();
			$(idName).redraw();	
		}
	}

})



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

jQuery.fn.redraw = function() {
    return this.hide(0, function() {
        $(this).show();
    });
};

