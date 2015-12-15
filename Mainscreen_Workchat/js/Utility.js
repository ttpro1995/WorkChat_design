function Utility(){
	
this.createChatbubble  = function(name,content){
	var formattedContentItem = HTMLchatContentItem.replace('%data%',content);
	var formattedContentStart = HTMLchatContentStart.replace("%data%",formattedContentItem);
	var formattedName = HTMLchatName.replace('%data%',name);
	var formattedStart = HTMLchatbubbleStart.replace('%data%',formattedName+formattedContentStart);
	formattedStart = formattedStart.replace('%user_name%',name);
	return formattedStart;
}

this.getID = function(isOnline){
    return isOnline.parent().attr('id')
	};
} 
