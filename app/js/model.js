tasteMeApp.factory('Model',function ($resource,$http,$cookieStore) {

	if($cookieStore.get('likeList')){
		var likeList=$cookieStore.get('likeList')
	}
	else {
		var likeList = [];
	}
	
	var recList = [];

	if($cookieStore.get('heartList')){
		var heartList=$cookieStore.get('heartList')
	}
	else {
		var heartList = [];
	}
	

	if($cookieStore.get('dataLikeList')){
		var dataLikeList=$cookieStore.get('dataLikeList')
	}
	else {
		var dataLikeList = [];
	}

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

	this.getDataLikeList = function(){
		return dataLikeList
	}


	this.likeSearch = $resource('http://www.tastekid.com/api/similar?k=76627-TasteMe-YLKMHX14',{callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	
	
	this.addToLikeList = function(likedItem,type){
		if(likedItem.length!=0){
	 	likeList.push(type+likedItem)}
	 	$cookieStore.put('likeList',likeList)
	 	


	}


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
		return heartList;

	}

	this.addToHeartList = function(name){
		heartList.push(name);
		$cookieStore.put('heartList',heartList)
	}

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
