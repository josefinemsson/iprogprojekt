tasteMeApp.controller('MainCtrl', function ($scope,Model) {

	$scope.status= "Add some things you like to the left and get recommendations!";

	$scope.getLikeList = function (){
		return Model.getLikeList();
	}

	$scope.addToLikeList = function (item){
		console.log('Lägger till i likelist')
		Model.addToLikeList(item);
	}

	$scope.removeFromLikeList = function (name){
		return Model.removeFromLikeList(name);
	}


	$scope.createNewRecList = function() {

   		Model.likeSearch.get({q:Model.getStringLikeList()},function(data){

   		var allData = data.Similar;
   		var ourData = allData.Results;
   		$scope.getRecList = ourData;
   		console.log(data);
   		$scope.status = "";
   },function(data){
     $scope.status = "There was an error";
   });
 }
	
});