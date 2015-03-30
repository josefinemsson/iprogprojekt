tasteMeApp.controller('MainCtrl', function ($scope,Model) {


	$scope.getLikeList = function (){
		console.log('Gettar likelist')
		return Model.getLikeList();
	}

	$scope.addToLikeList = function (item){
		console.log('Lägger till i likelist')
		Model.addToLikeList(item);
	}

	$scope.removeFromLikeList = function (name){
		return Model.removeFromLikeList(name);
	}


});