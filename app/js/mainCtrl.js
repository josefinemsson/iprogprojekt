tasteMeApp.controller('mainCtrl', function ($scope) {

	$scope.getLikeList = function (){
		return model.getLikeList();
	}

	$scope.addToLikeList = function (item){
		model.getLikeList(item);
	}

	$scope.removeFromLikeList = function (name){
		return model.removeFromLikeList(name);
	}


});