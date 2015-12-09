function MessageManager(){
	
this.receiveMessage = function(name, content){
	//find from same sender
	var old = $('.chat-bubble:last');
	var checker = false;
	console.log("id attr "+old.attr('id'));
	if (old.attr('id') === name ){
		checker = true;
	}
	var old_content = old.children('.chat-content');
	var old_string = old_content.html();
	console.log("receive  " + old_content.html());
	
	//display
	if (!checker){
	var formattedMessage = createChatbubble(name,content);
	insertChatLog('<br>'+formattedMessage);//debug: print on screen
	}
	else{
		var newContent = old_content.html()+content;
		old.remove();
		var formattedMessage = createChatbubble(name,newContent);
	insertChatLog(formattedMessage);//debug: print on screen
	}
	
	//scroll to bottom
	var d = $('#chatroom');
	d.scrollTop(d.prop("scrollHeight"));
}
this.submitMessage= function(){
	var message = $('#text-box').val();
	var name = "Meow";
	console.log("send message "+message);
	$('#text-box').val('');//clean textarea
	
	//do something more
	//submit to server
	

	//debug
	MessageManager.receiveMessage(name,message);
	
}
}