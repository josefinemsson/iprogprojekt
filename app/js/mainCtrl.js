tasteMeApp.controller('MainCtrl', function ($scope,Model,$cookieStore) {

	$scope.status= "Add some things you like to the left and get recommendations!";
	$('#pop').popover({ trigger: "click" })
	
	var types="";

	$scope.dataLikeList = function() {
		return Model.getDataLikeList();
	}

	$scope.enableAdd = function() {
		document.getElementById("add").disabled=false;
	}


	$scope.setType = function(type) {
		types=type;
	}

	$scope.getRecList = function(){
		return Model.getRecList();
	}

	$scope.getHeartList = function(){
		return Model.getHeartList();
	}

	
	$scope.addToLikeList = function (item){
		Model.addToLikeList(item,types);
	}

	$scope.removeFromLikeList = function (name){
		return Model.removeFromLikeList(name);
	}

	$scope.addToHeartList = function(item){
		return Model.addToHeartList(item);
	}

	$scope.removeFromHeartList = function(item){
		return Model.removeFromHeartList(item);
	}

	$scope.createNewRecList = function(filter) {

   		Model.likeSearch.get({q:Model.getStringLikeList(), type:filter, limit: 40}, function(data){
   		var heartList = Model.getHeartList();
   		var allData = data.Similar;
   		var ourData = allData.Results;
   		
   		Model.changeDataLikeList(allData.Info);


   		for(var i = ourData.length - 1; i>=0; i--){
  			for( var j=0; j<heartList.length; j++){
    			if(ourData[i].Name === heartList[j].Name){
      				ourData.splice(i, 1);
      				break
    			}
  			}
		}

   		Model.changeRecList(ourData);
   		
   		$scope.status = "";
   },function(data){
     $scope.status = "There was an error";
   });
 }

 $scope.filterRecList = function(filter){
 	Model.filterRecList(filter);
 	
 }
	

	jQuery(document).ready(function ($) {
        $('#tabs').tab();
    });
$scope.createNewRecList()
});