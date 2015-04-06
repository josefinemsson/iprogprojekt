tasteMeApp.controller('InfoCtrl', function ($scope, $routeParams, Model) {

$scope.param = $routeParams.infoName;


$scope.infoChosenItem = function() {
	console.log('hej')

   		Model.likeSearch.get({q:$scope.param, info: 1, limit:1}, function(data){
   		
   		console.log(data)

  			}
)}
$scope.infoChosenItem()

});