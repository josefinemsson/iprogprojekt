tasteMeApp.factory('Model',function ($resource,$http) {

	var likeList= [];
	var recList = [];
	var heartList = [];
	var dataLikeList = [];


	this.getStringLikeList = function(){
		var string = ''
		for(var i = 0; i<likeList.length ; i++){
			string += likeList[i]+',';
		}
		string = string.substring(0,string.length-1);
		return string;
	}

	this.changeDataLikeList = function(data){
		dataLikeList = data
	}

	this.getDataLikeList = function(){
		return dataLikeList
	}


	this.likeSearch = $resource('http://www.tastekid.com/api/similar?k=76627-TasteMe-RG4042W1',{callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	
	this.getLikeList = function(){
		return likeList;
	}


	this.addToLikeList = function(likedItem,type){
		if(likedItem.length!=0){
	 	likeList.push(type+likedItem)}

	}


	this.removeFromLikeList = function (name){
	 	for (i=0;i<likeList.length;i++){
	 		console.log(name)
	 		console.log(likeList[i])
	 		if (likeList[i].toLowerCase().substring(likeList[i].indexOf(":") + 1)===name.toLowerCase()){
	 			likeList.splice(i,1);
	 		}
	 		else{ if (likeList[i].toLowerCase()===name.toLowerCase()){
	 			likeList.splice(i,1);}
	 		}
	 	}
	}

	this.getRecList = function (){
		return recList
	}

	this.changeRecList = function (data){
		recList = data;
	}

	this.filterRecList = function (filter){
		alert('model filter')
		for(var i = recList.length-1; i>=0; i--){
			if(recList[i].Type != filter){
				recList.splice(i,1);
			}
		}
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
