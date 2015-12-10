// testcase 1
// Chat bubble group message of same user into a bubble
var testcase1 = function (params) {
	var manager = new MessageManager();
manager.receiveMessage("User_meow","Hello");
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

testcase1();
