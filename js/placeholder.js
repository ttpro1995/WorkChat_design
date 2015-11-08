var chatlog = " Thu, Oct 29 4:55 PM<br> WorkChat - Vision Document - 1.0.docx<br> WorkChat - Vision Document - 1.0.docx<br> Mai Ho<br> Thu, Oct 29 4:55 PM<br> Updated<br> Bao Nguyen<br> Thu, Oct 29 4:56 PM<br> tks Mai<br> Bao Nguyen uploaded version 4<br> Thu, Oct 29 7:48 PM<br> WorkChat - Vision Document - 1.0.docx<br> Bao Nguyen uploaded a file<br> Thu, Oct 29 10:40 PM<br> PA1-Group04.zip<br> Bao Nguyen<br> Thu, Oct 29 10:46 PM<br> hey guys, i need someone who can write documents and presentation next week. Because next week I must fly to Jakarta. Who can help me? <br> Thib<br> Thu, Oct 29 10:56 PM<br> Me I can help if you want <br> Bao Nguyen<br> Thu, Oct 29 11:01 PM<br> ok Thib ,thank you.<br> Bao Nguyen<br> Thu, Oct 29 11:02 PM<br> You can view this week documents in file PA1-Group04.zip, next week i'll give you more details. <br> Thib<br> Thu, Oct 29 11:03 PM<br> ok <br> Bao Nguyen<br> Thu, Oct 29 11:04 PM<br> Did nqmtri give you Node.js documents?<br>";
var people = ["Thien","Mai","Thib","Bao","Tri"];
var group = ["Today lunch","Meow Work", "Fun"]
var data = "%data%";
$("#chat-log").append(chatlog);

//insert people
$("#left-panel1").append(HTMLpeopleStart);
for (i in people){
	var formattedPeopleItem = HTMLpeopleItem.replace(data,people[i]);
	$("#people-entry").append(formattedPeopleItem);
}

$("#left-panel2").append(HTMLgroupStart);
for (i in people){
	var formattedGroupItem = HTMLgroupItem.replace(data,group[i]);
	$("#group-entry").append(formattedGroupItem);
}

