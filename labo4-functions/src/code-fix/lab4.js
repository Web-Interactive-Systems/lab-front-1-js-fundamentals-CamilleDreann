// TODO: Fix the errors in the functions below!

function addTask(taskList, newTask) {
  taskList.push(newTask);
  return taskList;
}

function deleteTask(taskList, index) {
  taskList.splice(index, 1);
  return taskList;
}

function editTask(taskList, index, editedTask) {
  taskList.splice(index, 1, editedTask);
  return taskList;
}

function completeTask(taskList, index) {
  taskList[index].completed = true;
  return taskList;
}

function clearCompletedTasks(taskList) {
  taskList = taskList.filter((task) => task.completed !== true);
  return taskList;
}

function sortTasksByDate(taskList) {
  taskList.sort((a, b) => new Date(a.date) - new Date(b.date));
  return taskList;
}

function filterTasksByKeyword(taskList, keyword) {
  taskList = taskList.filter((task) => task.toLowerCase().includes(keyword.toLowerCase()));
  console.log(taskList, 'dsdsdsdsdsd');
  return taskList;
}

function getCompletedTasks(taskList) {
  taskList = taskList.filter((task) => task.completed === true);
  return taskList;
}

function getIncompleteTasks(taskList) {
  taskList = taskList.filter((task) => task.completed === false);
  return taskList;
}

function getTaskCount(taskList) {
  return taskList.length;
}

function getCompletedTaskCount(taskList) {
  taskList = taskList.filter((task) => task.completed === true);
  return taskList.length;
}

function getIncompleteTaskCount(taskList) {
  taskList = taskList.filter((task) => task.completed === false);
  return taskList.length;
}

function removeCompletedTasks(taskList) {
  const newTaskList = [];
  taskList.forEach(task => {
    if (!task.completed) {
      //const index = taskList.findIndex(t => t.task === task.task);
      //       taskList.splice(index, 1);
      newTaskList.push(task);
    }
  });

  return newTaskList;
}

function markAllTasksAsCompleted(taskList) {
  taskList.forEach(task => {
    task.completed = true;
  });
  return taskList;
}

function markAllTasksAsIncomplete(taskList) {
  taskList.forEach(task => {
    task.completed = false;
  });
  return taskList;
}

function addTaskToList(taskList, task) {
  taskList.push({task: task, completed: false});
  return taskList;
}

function deleteTaskFromList(taskList, index) {
  taskList.splice(index, 1);
  return taskList;
}

function editTaskInList(taskList, index, newTask) {
  taskList[index].task = newTask;
  return taskList;
}

function moveTaskUp(taskList, index) {
  if (index === 0) {
    return taskList;
  }
  movedTask = taskList.splice(index, 1);
  taskList.unshift(movedTask[0]);
  return taskList;
}

function moveTaskDown(taskList, index) {
    if (index === 0) {
    return taskList;
  }
  movedTask = taskList.splice(index, 1);
  taskList.push(movedTask[0]);
  return taskList;
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  clearCompletedTasks,
  sortTasksByDate,
  filterTasksByKeyword,
  getCompletedTasks,
  getCompletedTaskCount,
  getIncompleteTaskCount,
  getTaskCount,
  getIncompleteTasks,
  removeCompletedTasks,
  markAllTasksAsCompleted,
  markAllTasksAsIncomplete,
  addTaskToList,
  editTaskInList,
  deleteTaskFromList,
  moveTaskUp,
  moveTaskDown,
};
