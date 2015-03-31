tasteMeApp.factory('Model',function ($resource,$http) {

	var likeList= [];
	var recList = [];


	this.getStringLikeList = function(){
		var string = ''
		for(var i = 0; i<likeList.length ; i++){
			string += likeList[i]+',';
		}
		string = string.substring(0,string.length-1);
		console.log(string)
		return string;
	}

	this.likeSearch = $resource('http://www.tastekid.com/api/similar?k=76627-TasteMe-RG4042W1',{limit:10,callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});


	this.getLikeList = function(){
		return likeList;
	}


	this.addToLikeList = function(likedItem){	
	 	likeList.push(likedItem)
	 	console.log(likeList);
	}


	this.removeFromLikeList = function (name){
	 	for (i=0;i<likeList.length;i++){
	 		if (likeList[i]===name){
	 			likeList.splice(i,1);
	 		}
	 	}
	}

	this.getRecList = function (){
		return recList
	}
	
	return this;
});
