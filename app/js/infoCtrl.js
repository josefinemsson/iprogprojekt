tasteMeApp.controller('InfoCtrl', function ($scope, $routeParams, Model) {

$scope.param = $routeParams.infoName;
$scope.param = $scope.param.split('+').join(' ');


$scope.infoChosenItem = function() {
	$scope.info = "Loading...";

   		Model.likeSearch.get({q:$scope.param, info: 1, limit:1}, function(data){
   		
   		console.log(data.Similar.Info[0])

   		$scope.object = data.Similar.Info[0];
   		var videoURL = 'http://youtube.com/embed/'+$scope.object.yID+'?rel=0&amp;showinfo=0';

   		$('#vid').attr('src',videoURL);

   		$scope.info = $scope.object.Name;


  			}
)}

$scope.infoChosenItem()





});