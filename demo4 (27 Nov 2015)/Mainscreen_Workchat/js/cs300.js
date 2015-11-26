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
var chatlog1 = " Thu, Oct 29 4:55 PM<br> WorkChat - Vision Document - 1.0.docx<br> WorkChat - Vision Document - 1.0.docx<br> Mai Ho<br> Thu, Oct 29 4:55 PM<br> Updated<br> Bao Nguyen<br> Thu, Oct 29 4:56 PM<br> tks Mai<br> Bao Nguyen uploaded version 4<br> Thu, Oct 29 7:48 PM<br> WorkChat - Vision Document - 1.0.docx<br> Bao Nguyen uploaded a file<br> Thu, Oct 29 10:40 PM<br> PA1-Group04.zip<br> Bao Nguyen<br> Thu, Oct 29 10:46 PM<br> hey guys, i need someone who can write documents and presentation next week. Because next week I must fly to Jakarta. Who can help me? <br> Thib<br> Thu, Oct 29 10:56 PM<br> Me I can help if you want <br> Bao Nguyen<br> Thu, Oct 29 11:01 PM<br> ok Thib ,thank you.<br> Bao Nguyen<br> Thu, Oct 29 11:02 PM<br> You can view this week documents in file PA1-Group04.zip, next week i'll give you more details. <br> Thib<br> Thu, Oct 29 11:03 PM<br> ok <br> Bao Nguyen<br> Thu, Oct 29 11:04 PM<br> Did nqmtri give you Node.js documents?<br> So do you agree if I put on moodle the vision document updated ? <br> Thib · via mobile <br> Thu, Nov 5 7:32 pm <br> Can someone put it on moodle please ? I have a break down on wifi I am using 3G ...<br> Thib · via mobile<br> Thu, Nov 5 7:33 PM<br> (We have still time as it's at 9 pm we must depose it but if my wifi doesn't work until this ! We never know :D)<br> nqmtri<br> Thu, Nov 5 8:49 PM<br> Dont worry Thib I have submitted it for you<br> Thib · via mobile<br> Thu, Nov 5 9:29 PM<br> Oh ok thanks !<br> Thib · via mobile<br> Thu, Nov 5 9:29 PM<br> Sorry for the inconvenience : my wifi sometimes goes wrong :/<br> Fri, Nov 6<br> nqmtri shared a link<br> Fri, Nov 6 10:08 AM<br> https://en.wikipedia.org/wiki/Internet_Relay_Chat<br> Chat channel<br> Sun, Nov 8<br> Thái Thiện shared a link<br> Sun, Nov 8 5:31 PM<br> Hi All Employees , take a look http://ttpro1995.github.io/WorkChat_design/demo1%20(8%20Nov%202015)/index.html <br> Thái Thiện<br> Sun, Nov 8 5:31 PM<br> how is it ?<br> nqmtri<br> Sun, Nov 8 11:26 PM<br> :-? Thái Thiện <br> + I think you should hide the vertical scroll bar in the right window (messaging window).<br> + Secondly, I think you should consider another font for the text on the left frame. In my opinion, this font looks so skinny =)). I think you should choose something a little bit thicker =)).<br> + Ah, and this version looks ok. Thank you Thái Thiện .<br>";
var chatlog2 = "Chat log 2 goes here: meow";
insertPeople(people);//fill people
insertGroup(group);//fill group
insertChatLog(chatlog1);
//event click on people header
   $("#people-header").click(function(e) {
        e.preventDefault();
       var child = $('#people-entry').children();
       console.log("people child length "+child.length);
       if (child.length==0){
       	insertPeople(people);
           $("#people-entry").click(function(event) {
    setStatus(true,event.target);
    console.log("meow click people entry")
});
       }
       else{
       	removePeople();
       }
    });

//event click on group header 
   $("#group-header").click(function(e) {
        e.preventDefault();
       var child = $('#group-entry').children();
       console.log("people child length "+child.length);
       if (child.length==0){
       	insertGroup(group);
       }
       else{
       	removeGroup();
       }
    });


$("#people-entry").click(function(event) {
    setStatus(true,$(event.target));
    var itemID = getID($(event.target));
    if (itemID=='people1'){
        clearChatLog();
        insertChatLog(chatlog1);
    }
    else{
        clearChatLog();
        insertChatLog("Chat log "+itemID);
    }
});

$("#submitMessage").click(function(event){
    submitMessage();
})