var app = angular.module("moremallApp", ["firebase"]);

// hardcoded for prototype
var username = "shikai";
var userphoto = "data:image/jpeg;base64,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";

var moremallHelper = moremallHelper || {};

moremallHelper.helpers = {
	unixToTimeFrom: function(number) {
		return moment.unix(number).fromNow();
	}
};

app.controller("homeCtrl", function($scope, $firebase) {
	$scope.helpers = moremallHelper.helpers;

	// init form elements
	$('select.dropdown').dropdown();
	$scope.malls = [];
	var mallRef = new Firebase("https://malls.firebaseio.com/");
	var mallSync = $firebase(mallRef);
	$scope.malls = mallSync.$asArray();

	var loadedCount = 5, fetchLimit = 5;
	var ref = new Firebase("https://moremall.firebaseio.com/");
	var sync = $firebase(ref.orderByChild("timestamp").limitToLast(fetchLimit));
	$scope.products = sync.$asArray();

	$scope.products.$loaded(function(data) {
		$(".loader").removeClass("active");
		$(".load-more-btn").removeClass("hide");
		fetchNextPage();

	});

	// add product function
	$scope.addProduct = function() {
		resetForm();
		console.log("add product");
		$('#addProduct').modal({
			blurring: true
		}).modal('show');
	}

	// submit add product function
	$scope.submitAddProduct = function() {
		if ($("[name=image-link]").val() == "" || $( "[name=shopping-mall] option:selected" ).text() == "") {
			console.log($("[name=image-link]").val());
			console.log($( "[name=shopping-mall] option:selected" ).text());
			$(".form").addClass("error");
			$(".required").addClass("error");
		} else {
			$(".form").removeClass("error");
			$(".required").removeClass("error");
			$scope.products.$add({
				comments: 0,
				likes: 0,
				mall_name: $( "[name=shopping-mall] option:selected" ).text(),
				product_description: $("[name=product-description]").val(),
				product_image: $("[name=image-link]").val(),
				product_name: $("[name=product-name]").val(),
				product_price: $("[name=price]").val(),
				product_tags: $("[name=tags]").val(),
				shop_name: $("[name=shop-name]").val(),
				timestamp: Math.floor(Date.now() / 1000),
				username: username,
				userphoto: userphoto
			});
			$('#addProduct').modal('hide');
		}
	}

	// like product
	$scope.likeBtn = function(obj) {
		var heartObj = $(event.currentTarget).children(".heart");

		// like
		if (heartObj.hasClass("outline")) {
			heartObj.removeClass("outline");
			heartObj.addClass("red");

			var random = Math.floor(Math.random() * 10);

			if (random < 4) {
				$('#surveyModal1').modal({
					blurring: true
				}).modal('show');
			}

			animateLike(heartObj);

			obj.likes = obj.likes + 1;
			$scope.products.$save(obj);
		} else {
			// unlike
			heartObj.addClass("outline");
			heartObj.removeClass("red");

			obj.likes = obj.likes - 1;
			$scope.products.$save(obj);
		}
	}

	// add product function
	$scope.clickTag = function() {
		var tag = $(event.currentTarget);
		if (tag.hasClass("blue")) {
			tag.removeClass("blue");
			tag.addClass("basic");
			var tagInput = $("[name=tags]").val();
			var tagValue = tag.html();
			var tagValue1 = ',' + tag.html();
			var tagValue2 = tag.html() + ',';
			$("[name=tags]").val(tagInput.replace(new RegExp(tagValue1, 'g'), ''));
			var tagInput = $("[name=tags]").val();
			$("[name=tags]").val(tagInput.replace(new RegExp(tagValue2, 'g'), ''));
			var tagInput = $("[name=tags]").val();
			$("[name=tags]").val(tagInput.replace(new RegExp(tagValue, 'g'), ''));
		} else {
			tag.removeClass("basic");
			tag.addClass("blue");
			if ($("[name=tags]").val() == "") {
				$("[name=tags]").val($("[name=tags]").val() + tag.html());
			} else {
				$("[name=tags]").val($("[name=tags]").val() + "," + tag.html());
			}
		}
	}

	// lazy load next page
	var nextPageData = null;
	// load more
	function fetchNextPage() {
		var oldItems = $scope.products;
		loadedCount += fetchLimit;
		nextPageData = $firebase(ref.orderByChild("timestamp").limitToLast(loadedCount)).$asArray();
	}

	$scope.loadNextPage = function() {
		var originalScrollPos = window.pageYOffset;
		$scope.products = nextPageData;
		$scope.$on('$destroy', function() {
			$scope.products.$off();
		});
		setTimeout(function() {
			window.scrollTo(0, originalScrollPos || originalScrollPos);
		}, 1);
		fetchNextPage();
	}
});

resetForm = function() {
	$(".form").find("input").val("");
	$(".form").find("textarea").val("");
	$(".form").find("select").val('');
	$(".tag-label").removeClass("blue");
	$(".tag-label").addClass("basic");
}

animateLike = function(obj) {
	var animatedHeart = obj.closest(".extra").siblings(".image").children(".animated-heart");
	animatedHeart.removeClass('hide');
	animatedHeart.addClass('animated zoomIn');
	animatedHeart.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		animatedHeart.addClass('animated zoomOut');
		animatedHeart.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			animatedHeart.addClass('hide');
			animatedHeart.removeClass('animated zoomIn');
			animatedHeart.removeClass('animated zoomOut');
		});
	});
}


app.controller("mallsCtrl", function($scope, $firebase) {
	var ref = new Firebase("https://malls.firebaseio.com/");
	var sync = $firebase(ref);
	$scope.malls = sync.$asArray();

	$scope.malls.$loaded(function(data) {
		$(".loader").removeClass("active");
	});
});

app.controller("giftIdeasCtrl", function($scope, $firebase) {
	$('.ui.dropdown')
	.dropdown({
		on: 'hover'
	});

	$('.ui.dropdown')
	.popup();

	var ref = new Firebase("https://moremall.firebaseio.com/");
	var sync = $firebase(ref);
	var loadedData = sync.$asArray();
	loadedData.$loaded(function(data) {
		$(".loader").removeClass("active");
	});

	$scope.searchedProduct = [];

	$scope.recommend = function() {
		// clear existing
		$scope.searchedProduct = [];

		var occasion = $(".occasion-dd").children(".text").html().toLowerCase();
		var relationship = $(".relationship-dd").children(".text").html().toLowerCase();
		var gender = $(".gender-dd").children(".text").html().toLowerCase();
		var price = $(".price-dd").children(".text").html().toLowerCase();
		var personality = $(".personality-dd").children(".text").html().toLowerCase();

		if (occasion == "occasion" || occasion == "any") {
			occasion = "";
		}
		if (relationship == "relationship" || relationship == "any") {
			relationship = "";
		}
		if (gender == "gender" || gender == "any") {
			gender = "";
		}

		for (i = 0; i < loadedData.length; i++) {
			
			var tags = loadedData[i].product_tags;
			if (typeof tags !== "undefined") {
				if (tags.toLowerCase().indexOf(occasion) > -1 && tags.toLowerCase().indexOf(relationship) > -1 && tags.toLowerCase().indexOf(gender) > -1) {
					$scope.searchedProduct.push(loadedData[i]);
				}
			}
			
		}
		// $scope.searchedProduct = $scope.loadedData;
		// $(".loader").removeClass("active");
	}
});