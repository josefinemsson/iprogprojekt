tasteMeApp.factory('Model',function ($resource,$http,$cookieStore) {



	//likeList contains the strings that the user puts in that they like
	if($cookieStore.get('likeList')){
		var likeList=$cookieStore.get('likeList')
	}
	else {
		var likeList = [];
	}

	//dataLikeList is the list of the things the user says he or she already likes, it is recieved from TasteKid after
	//the call to the API has been made
	if($cookieStore.get('dataLikeList')){
		var dataLikeList=$cookieStore.get('dataLikeList')
	}
	else {
		var dataLikeList = [];
	}


	
	//recList contains the recommendations recieved from TasteKid
	var recList = [];


	//heartList contains the objects the user added to the list of things he or she wants to check out
	if($cookieStore.get('heartList')){
		var heartList=$cookieStore.get('heartList')
	}
	else {
		var heartList = [];
	}


	//Turns the likelist into a string which can be sent to the API
	this.getStringLikeList = function(){
		var string = ''
		for(var i = 0; i<likeList.length ; i++){
			string += likeList[i]+',';
		}
		string = string.substring(0,string.length-1);
		return string;
	}


	//Updates the dataLikeList after the call to the API has been made so
	//We also update the likeList so it matches the dataLikeList
	this.changeDataLikeList = function(data){
		dataLikeList = data
		for(var i=0;i<likeList.length;i++){
			if(dataLikeList[i].Type != 'unknown'){
			likeList[i]=dataLikeList[i].Type + ':' + dataLikeList[i].Name}

			else{
				likeList[i]= dataLikeList[i].Name
			}
		}
		$cookieStore.put('dataLikeList',dataLikeList);
		$cookieStore.put('likeList',likeList);
	}


	//Returns the dataLikeList
	this.getDataLikeList = function(){
		return dataLikeList
	}

	//CALL TO THE API
	this.likeSearch = $resource('http://www.tastekid.com/api/similar?k=76627-TasteMe-YLKMHX14',{callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	
	
	//Adds something the user has put in to the likeList
	this.addToLikeList = function(likedItem,type){
		if(likedItem.length!=0){
	 	likeList.push(type+likedItem)}
	 	$cookieStore.put('likeList',likeList)
	}


	//Removes something from likeList after the user clicks the X next to the item in the list
	this.removeFromLikeList = function (name){
	 	for (i=0;i<likeList.length;i++){
	 	
	 		if (likeList[i].toLowerCase()===name.Type+':'+name.Name.toLowerCase()){
	 			likeList.splice(i,1);
	 		}
	 		else {if (likeList[i].toLowerCase()===name.Name.toLowerCase()){
	 			likeList.splice(i,1);}
	 		}
	 	}
	 	$cookieStore.put('likeList',likeList)
	}

	//Returns the recommended list
	this.getRecList = function (){
		return recList
	}

	//Updates the recommended list
	this.changeRecList = function (data){
		recList = data;
	}


	//Returns the list with the things the user wants to check out
	this.getHeartList = function(){
		return heartList;

	}

	//Adds an item to the list of things the user wants to check out
	this.addToHeartList = function(item){
		heartList.push(item);
		$cookieStore.put('heartList',heartList)
	}

	//Removes something from the list of things the user wants to check out
	this.removeFromHeartList = function (name){
		for (i=0;i<heartList.length;i++){
	 		if (heartList[i]===name){
	 			heartList.splice(i,1);
	 		}
	 	}
	 	$cookieStore.put('heartList',heartList)
	}

	
	return this;
});
