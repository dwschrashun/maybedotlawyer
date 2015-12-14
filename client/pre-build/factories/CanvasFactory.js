app.factory("CanvasFactory", function ($rootScope) {
	//1435 x 1080
	function getSize (width) {
		var size = {};
		var lgWidthRatio = 993 / 1435;
		var mdWidthRatio = 704 / 1435;
		var smWidthRatio = 533 / 1435;
		var xlgWidthRatio = 1200 / 1435;
	    if (width < 768) {
	        size.width = 533;
	        size.height= 1080 * smWidthRatio;
	    }
	    else if (width >= 768 && width < 993) {
	        size.width = 704;
	        size.height= 1080 * mdWidthRatio;
	    }
	    else if (width >= 993 && width < 1200) {
	    	size.width = 993;
	        size.height= 1080 * lgWidthRatio;
	    }
	   	else if (width >= 1200) {
	    	size.width = 1200;
	        size.height= 1080 * xlgWidthRatio;
	    }
	    return size;
	}

	function drawImg (canvas, size, offset) {
		var ctx = canvas.getContext("2d");
		var immij = new Image();
		immij.src = "baglawyer-nm.gif";
		//chin position bottom right: 1260 x 845, top left 1221 x 806
		var ratio = size.width / 1435;
		var position = {x: 1221 * ratio, y: 806 * ratio + offset};
		var chin = new Image();
		chin.src = "chin.gif";
		ctx.drawImage(immij, 0, 0, size.width, size.height);
		immij.onload = function () {
			ctx.drawImage(immij, 0, 0, size.width, size.height);
			ctx.drawImage(chin, position.x, position.y, 39*ratio, 39*ratio);
			chin.onload = function () {
				ctx.drawImage(chin, position.x, position.y, 39 * ratio, 39 * ratio);
			};
		};
		chin.onerror = function () {
			console.log("chin error");
		};
		immij.onerror = function () {
			console.log("image error");
		};

	}
	function animateChin (canvas, size, position, vpWidth) {
		//var mouthPosition = size.width + (vpWith - size.width) / 2) + (1221 * size.width / 1435);
		//console.log("mouthPosition", mouthPosition);
		var ctx = canvas.getContext("2d");
		var delay = 100;
		while (position < 37 * size.width / 1435) {
			setTimeout(drawImg, delay, canvas, size, position);
			position++;
			delay += 100;
		}
		return new Promise(function(resolve) {
			setTimeout(function () {
				console.log("interval clear");
				return resolve("done");
			}, delay);
		});
	}
	return {
		drawImg: drawImg,
		animateChin: animateChin,
		getSize: getSize
	};
});