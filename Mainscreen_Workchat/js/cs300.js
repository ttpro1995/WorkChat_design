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


//insert people
var insertPeople = function(mPeople){
		for (var i in mPeople){
		var formattedPeopleItem = HTMLpeopleItem.replace('%data%',mPeople[i]);
		$("#people-entry").append(formattedPeopleItem);
	}
}
insertPeople(people);

//group
var insertGroup = function(mGroup){
		for (var i in mGroup){
		var formattedGroupItem = HTMLgroupItem.replace('%data%',mGroup[i]);
		$("#group-entry").append(formattedGroupItem);
	}
}
insertGroup(group);


var removePeople = function(){
	$('#people-entry').children().remove();
}



var removeGroup = function(){
	$('#group-entry').children().remove();
}


//event click on people header
   $("#people-header").click(function(e) {
        e.preventDefault();
       var child = $('#people-entry').children();
       console.log("people child length "+child.length);
       if (child.length==0){
       	insertPeople(people);
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
 