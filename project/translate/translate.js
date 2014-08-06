$(document).ready(function(){
	
	function ToDo(stuff){
		this.toDoItem = stuff;

		this.ar = 
		[
			{or: "hello", trans: "你好!"},
			{or: "mouse", trans: "滑鼠!"},
			{or: "notebook", trans: "筆電!"},
			{or: "water", trans: "水!"},
			{or: "drink", trans: "飲料!"}
		];

		for (var item in this.ar){
			//console.log(this.ar[item].or);
			if(this.toDoItem === this.ar[item].or){
				this.toDoItem = this.ar[item].trans;
				//console.log(this.ar[item].trans);
				break;
			}else{
				this.toDoItem = "noKnow";
				break;
			}
		}

		/*
		switch (this.toDoItem){
			case "hello":
			 this.toDoItem = "您好!";
			 break;
			case "mouse":
			 this.toDoItem = "滑鼠!";
			 break;
			case "notebook":
			 this.toDoItem = "筆電!";
			 break;
			case "water":
			 this.toDoItem = "水!";
			 break;
			default:
			 this.toDoItem = "無法辨識!";
		}
		*/

	}

	function ToDoViewModel(){
		this.toDoItems = ko.observableArray([
			//new ToDo("Hello")	
		]);

		this.addToDoItem = function(){
			this.toDoItems.push(new ToDo($('.txt').val()));
			$('.txt').val('');
		}

	}

	ko.applyBindings(new ToDoViewModel());
});