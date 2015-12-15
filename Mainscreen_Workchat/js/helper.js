
var HTMLuserName = '<h4>%data%</h4>'

var HTMLfavoriteStart = '<h3>Favorite</h3><ul id="favorite-entry"></ul>';
var HTMLfavoriteItem = '<li>%data%</li>';

var HTMLpeopleStart = '<h3>People</h3><ul id="people-entry"></ul>';
var HTMLpeopleItem ='<li id = "people" class="people-item"><a href="#">%data%</a></li>'

var HTMLgroupStart = '<h3>Group</h3><ul id="group-entry"></ul>';
var HTMLgroupItem ='<li class="group-item"><a href="#">%data%</a></li>';


var HTMLtaskStart = '<h3>Task</h3><ul id="task-entry"></ul>';
var HTMLfileStart = '<h3>File</h3><ul id="file-entry"></ul>';

var HTMLchatbubbleStart = '<div class ="chat-bubble" id ="%user_name%">%data%</div>'
var HTMLchatName = '<div class="chat-name">%data%:</div>'
var HTMLchatContentStart = '<div class="chat-content">%data%</div>'
var HTMLchatContentItem = '%data%<br>'

var createChatbubble  = function(name,content){
	var formattedContentItem = HTMLchatContentItem.replace('%data%',content);
	var formattedContentStart = HTMLchatContentStart.replace("%data%",formattedContentItem);
	var formattedName = HTMLchatName.replace('%data%',name);
	var formattedStart = HTMLchatbubbleStart.replace('%data%',formattedName+formattedContentStart);
	formattedStart = formattedStart.replace('%user_name%',name);
	return formattedStart;
}

var getID = function(isOnline){
    return isOnline.parent().attr('id')
	};