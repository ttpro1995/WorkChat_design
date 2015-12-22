function DialogManager(){//constructor of class 
this.popup = function(mPeople){//open dialog
    document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'
    this.fillCheckboxArea(mPeople);
}
this.close = function(){//close dialog
    this.clearCheckboxArea();
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';       
}


this.fillCheckboxArea = function(mPeople){ // insert check box with redefine formatted
    var area = $('#check-box-area');
	for (var i in mPeople){
		var formattedCheckbox = HTMLcheckbox.replace("%data1%",mPeople[i]);
		formattedCheckbox = formattedCheckbox.replace("%data2%",mPeople[i]);
        formattedCheckbox = formattedCheckbox+'<br>';
        area.append(formattedCheckbox);
    }
}

this.clearCheckboxArea = function(){
     var area = $('#check-box-area');
     area.children().remove();
}

}