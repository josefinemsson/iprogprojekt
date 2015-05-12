tasteMeApp.controller('MainCtrl', function ($scope,Model,$cookieStore) {



	$('#pop').popover({ trigger: "click" })
	
	var types="";
	var filter ="";

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

	$scope.changeFilter = function(newFilter){
		filter = newFilter;
		$scope.createNewRecList();
	}

	$scope.createNewRecList = function() {
		console.log(filter)

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
   		

   },function(data){
     alert('There was an error getting your results, please try refreshing the page');
   });
 }


	jQuery(document).ready(function ($) {
        $('#tabs').tab();
    });


    $scope.createNewRecList();
});