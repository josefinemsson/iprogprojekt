tasteMeApp.factory('Model',function ($resource) {

	var likeList= [];

this.getLikeList = function(){
	console.log(likeList)
	return likeList;
}

 this.addToLikeList = function(likedItem)
 {
 	return likeList.push(likedItem)
 }


 this.removeFromLikeList = function (name)
 {
 	for (i=0;i<likeList.length;i++)
 	{
 		if (likeList[i]===name)
 		{
 			likeList.splice(i,1);
 		}
 	}
 }

 

 return this;

});
