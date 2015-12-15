 $("#open-sidebar").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
   $("#close-sidebar").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

//place holder
var people = ["Thien","Mai","Thib","Bao","Tri"];
var group = ["Today lunch","Meow Work", "Fun"]
var chatlog1 = "Chat log 1 goes here";
var chatlog2 = "Chat log 2 goes here: meow";
var leftPanerUI = new LeftPanerUI();
var chatLogUI = new ChatLogUI();
var utility = new Utility();
leftPanerUI.insertPeople(people);//fill people
leftPanerUI.insertGroup(group);//fill group
chatLogUI.insertChatLog(chatlog1);

//event click on people header
   $("#people-header").click(function(e) {
        e.preventDefault();
       var child = $('#people-entry').children();
       console.log("people child length "+child.length);
       if (child.length==0){
       	leftPanerUI.insertPeople(people);
           $("#people-entry").click(function(event) {
    leftPanerUI.setStatus(true,event.target);
    console.log("meow click people entry")
});
       }
       else{
       	leftPanerUI.removePeople();
       }
    });

//event click on group header 
   $("#group-header").click(function(e) {
        e.preventDefault();
       var child = $('#group-entry').children();
       console.log("people child length "+child.length);
       if (child.length==0){
       	leftPanerUI.insertGroup(group);
       }
       else{
       	leftPanerUI.removeGroup();
       }
    });


$("#people-entry").click(function(event) {
    leftPanerUI.setStatus(true,$(event.target));
    var itemID = utility.getID($(event.target));
    if (itemID=='people1'){
        chatLogUI.clearChatLog();
        chatLogUI.insertChatLog(chatlog1);
    }
    else{
        chatLogUI.clearChatLog();
        chatLogUI.insertChatLog("Chat log "+itemID);
    }
});

$("#submitMessage").click(function(event){
    var mesManager = new MessageManager();
    mesManager.submitMessage();
})

var enterKeyListener = function(){
     var key = window.event.keyCode;
      if (key == 13) {
        var mesManager = new MessageManager();
        mesManager.submitMessage();
    }
    else {
        return true;
    }
}

var submitTextarea = function(){
    console.log('onsubmit');
      var mesManager = new MessageManager();
        mesManager.submitMessage();
}