let taskmanager = (function () {
 task = [];

  function addTask(Description) {
    task.push(Description);
  }

  function displayTasks() {
    console.log("List of Tasks:")
    console.log(`${task}`);
  }

  return {
    addTask: addTask,
    displayTasks: displayTasks,
  };
})();

taskmanager.addTask("Make Breakfast"); 
taskmanager.addTask("Do laundry"); 
taskmanager.addTask("Feed pets"); 
taskmanager.displayTasks(); 