tasteMeApp.factory('Model',function ($resource,$http) {

	var likeList= [];
	var recList = [];
	var heartList = [];
	/*var chosenItem= "";*/


	this.getStringLikeList = function(){
		var string = ''
		for(var i = 0; i<likeList.length ; i++){
			string += likeList[i]+',';
		}
		string = string.substring(0,string.length-1);
		return string;
	}

	this.likeSearch = $resource('http://www.tastekid.com/api/similar?k=76627-TasteMe-RG4042W1',{limit:40,callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});


	this.getLikeList = function(){
		return likeList;
	}


	this.addToLikeList = function(likedItem){	
	 	likeList.push(likedItem)

	}


	this.removeFromLikeList = function (name){
		console.log('hohoho')
	 	for (i=0;i<likeList.length;i++){
	 		if (likeList[i].toLowerCase()===name.toLowerCase()){
	 			likeList.splice(i,1);
	 		}
	 	}
	}

	this.getRecList = function (){
		return recList
	}

	this.getHeartList = function(){
		console.log('Get heartList')
		return heartList;
	}

	this.addToHeartList = function(name){
		heartList.push(name);
	}

	this.removeFromHeartList = function (name){
		for (i=0;i<heartList.length;i++){
	 		if (heartList[i]===name){
	 			heartList.splice(i,1);
	 		}
	 	}

	}

	/*this.setSpecificLike = function (thingLiked){
		chosenItem = thingLiked;

	}

	this.getSpecificLike = function (thingLiked){
		return chosenItem;

	}*/
	
	return this;
});
