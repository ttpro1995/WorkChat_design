function ChatLogUI(){//constructor of class MessageManager
	
	
this.insertChatLog = function(chatlogHTML){
	var chatroom = $('#chatroom').append(chatlogHTML);
	console.log(chatroom);
	console.log('Insert chat room');
	console.log('chat log = '+chatlogHTML);
}

this.clearChatLog = function(){
	var chatroom = $('#chatroom');
	chatroom.empty();
}

}