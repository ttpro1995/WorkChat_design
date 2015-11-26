
//insert people
var insertPeople = function(mPeople){
		for (var i in mPeople){
		var formattedPeopleItem = HTMLpeopleItem.replace('%data%',mPeople[i]);
		$("#people-entry").append(formattedPeopleItem);
		var item = $("#people");
		item.attr('id','people'+i);//set counting num as id;
	}
}


//group
var insertGroup = function(mGroup){
		for (var i in mGroup){
		var formattedGroupItem = HTMLgroupItem.replace('%data%',mGroup[i]);
		$("#group-entry").append(formattedGroupItem);
	}
}



var removePeople = function(){
	$('#people-entry').children().remove();
}



var removeGroup = function(){
	$('#group-entry').children().remove();
}

/*make the circle become green */
var setStatus = function(isOnline, aItem){
    var mListItem = aItem.parent();
    if (isOnline){
        mListItem.addClass("toggledOnline");
    }
    else{
        mListItem.removeClass("toggledOnline");
    }
}

var getID = function(isOnline){
    return isOnline.parent().attr('id');
}

var insertChatLog = function(chatlogHTML){
	var chatroom = $('#chatroom').append(chatlogHTML);
	console.log(chatroom);
	console.log('Insert chat room');
	console.log('chat log = '+chatlogHTML);
}

var clearChatLog = function(){
	var chatroom = $('#chatroom');
	chatroom.empty();
}

var submitMessage= function(){
	var message = $('#text-box').val();
	console.log("send message "+message);
	$('#text-box').val('');//clean textarea
	
	//do something more
	insertChatLog('<br>'+message);//debug: print on screen
	
	//scroll to bottom
	var d = $('#chatroom');
	d.scrollTop(d.prop("scrollHeight"));
}