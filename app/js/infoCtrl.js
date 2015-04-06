tasteMeApp.controller('InfoCtrl', function ($scope, $routeParams, Model) {

$scope.param = $routeParams.infoName;
$scope.param = $scope.param.split('+').join(' ');


$scope.infoChosenItem = function() {
	$scope.info = "Loading...";

   		Model.likeSearch.get({q:$scope.param, info: 1, limit:1}, function(data){
   		
   		console.log(data.Similar.Info[0])

   		$scope.object = data.Similar.Info[0];
   		var videoURL = $scope.object.yID;
   		$scope.info = $scope.object.Name;
   		$scope.video = '<iframe width="490" height="276" src="https://www.youtube.com/embed/'+videoURL+'&showinfo=0" frameborder="0" allowfullscreen></iframe>'


  			}
)}

$scope.infoChosenItem()
});