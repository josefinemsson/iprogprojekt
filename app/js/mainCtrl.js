tasteMeApp.controller('MainCtrl', function ($scope,Model) {

	$scope.status= "Add some things you like to the left and get recommendations!";

	/*$scope.specificLike = function (item){
		Model.setSpecificLike(item);
	}*/

	$scope.getLikeList = function (){
		return Model.getLikeList();
	}

	$scope.addToLikeList = function (item){
		Model.addToLikeList(item);
	}

	$scope.removeFromLikeList = function (name){
		return Model.removeFromLikeList(name);
	}

	$scope.getOurHeartList = function (){

		$scope.getHeartList = Model.getHeartList();
	}


	$scope.addToHeartList = function(item){
		return Model.addToHeartList(item);
	}

	$scope.removeFromHeartList = function(item){
		return Model.removeFromHeartList(item);
	}

	$scope.createNewRecList = function() {

   		Model.likeSearch.get({q:Model.getStringLikeList()},function(data){
   		var heartList = Model.getHeartList();
   		var allData = data.Similar;
   		var ourData = allData.Results;
   		$scope.dataLikeList = allData.Info;
   		console.log($scope.dataLikeList)

   		for(var i = ourData.length - 1; i>=0; i--){
  			for( var j=0; j<heartList.length; j++){
    			if(ourData[i].Name === heartList[j].Name){
      				ourData.splice(i, 1);
      				break
    			}
  			}
		}

   		$scope.getRecList = ourData;
   		console.log(data);
   		$scope.status = "";
   },function(data){
     $scope.status = "There was an error";
   });
 }
	
});