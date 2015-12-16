// testcase 1
// Chat bubble group message of same user into a bubble


var testcaseUC01_UI01 = function (params) {
	var manager = new MessageManager();
manager.receiveMessage("Pusheen","Hello");
manager.receiveMessage("Pusheen","It is nice day, isn't");
manager.receiveMessage("Pusheen","Yes it is");
}

var testcaseUC01_UI02 = function (params) {
	var manager = new MessageManager();
manager.receiveMessage("Pusheen","Hello");
manager.receiveMessage("Pusheen","It is nice day, isn't");
manager.receiveMessage("Pusheen","Yes it is");
manager.receiveMessage("Stormy","Hi");
manager.receiveMessage("Stormy","It is nice day, isn't");
manager.receiveMessage("Stormy","Yes it is");
}

var testcaseUC01_UI03 = function (params) {
	var manager = new MessageManager();
manager.receiveMessage("Pusheen","Hello");
manager.receiveMessage("Stormy","Hi");
manager.receiveMessage("Pusheen","It is nice day, isn't");
manager.receiveMessage("Stormy","Yes it is");
manager.receiveMessage("Pusheen","Let's play");
}

var testcaseUC01_UI04 = function (params) {
	var manager = new MessageManager();
manager.receiveMessage("Pusheen","Hello");
manager.receiveMessage("Pusheen","It is nice day, isn't");
manager.receiveMessage("Stormy","Yes it is");
manager.receiveMessage("Stormy","It is nice day, isn't");
}

testcaseUC01_UI04();

var testcase = function (params) {
	var manager = new MessageManager();
manager.receiveMessage("pusheen","Hello");
manager.receiveMessage("User_meow","It is nice day, isn't");
manager.receiveMessage("User_woof","Yes it is");
manager.receiveMessage("User_woof","Keep calm and woof on");
manager.receiveMessage("User_meow","Keep calm and meow on");
manager.receiveMessage("User_meow","Let's eat");
manager.receiveMessage("User_meow","And MEOWWWWWWW");
manager.receiveMessage("User_meow","Meow");
manager.receiveMessage("User_woof","meow ?");
manager.receiveMessage("abc","meow meow ?");
manager.receiveMessage("abc","meow meow ?");
manager.receiveMessage("abc","meow meow ?");
}


