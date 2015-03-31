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

	$scope.getOurHeartList = function (){

		$scope.getHeartList = Model.getHeartList();
	}

	
	

	$scope.addToHeartList = function(item){
		console.log('Add to heartList')
		return Model.addToHeartList(item);
	}

	$scope.removeFromHeartList = function(item){
		return Model.removeFromHeartList(item);
	}

	$scope.createNewRecList = function() {
		console.log('JAG LADDAR OM')

   		Model.likeSearch.get({q:Model.getStringLikeList()},function(data){
   		var heartList = Model.getHeartList();
   		var allData = data.Similar;
   		var ourData = allData.Results;
   		for(var i = 0; i<ourData.length; i++){
   			for(var j=0; j<heartList.length; j++){
   				if(ourData[i].Name === heartList[j]){
   					ourData.splice(i,1);
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