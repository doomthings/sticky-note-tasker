function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}



			var taskInput = document.getElementById('newTask');
			var addTaskButton = document.getElementById('addTaskButton');
			var incompleteTasks = document.getElementById('List1');

			var addTask = function () {
				var text = taskInput.value;
				var li = document.createElement('li');
				li.innerHTML = text;
				incompleteTasks.appendChild(li);
			}

			addTaskButton.onclick = addTask;
