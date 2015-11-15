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
for (i in people){
	var formattedPeopleItem = HTMLpeopleItem.replace('%data%',people[i]);
	$("#people-entry").append(formattedPeopleItem);
}

//group
for (i in group){
	var formattedGroupItem = HTMLgroupItem.replace('%data%',group[i]);
	$("#group-entry").append(formattedGroupItem);
}
