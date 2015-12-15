function LeftPanerUI(){//constructor of class 
	this.insertPeople = function(mPeople){
		for (var i in mPeople){
		var formattedPeopleItem = HTMLpeopleItem.replace('%data%',mPeople[i]);
		$("#people-entry").append(formattedPeopleItem);
		var item = $("#people");
		item.attr('id','people'+i);//set counting num as id;
	}
}


//group
this.insertGroup = function(mGroup){
		for (var i in mGroup){
		var formattedGroupItem = HTMLgroupItem.replace('%data%',mGroup[i]);
		$("#group-entry").append(formattedGroupItem);
	}
}



this.removePeople = function(){
	$('#people-entry').children().remove();
}



this.removeGroup = function(){
	$('#group-entry').children().remove();
}

	this.setStatus = function(isOnline, aItem){
    var mListItem = aItem.parent();
    if (isOnline){
        mListItem.addClass("toggledOnline");
    }
    else{
        mListItem.removeClass("toggledOnline");
    }
}




}