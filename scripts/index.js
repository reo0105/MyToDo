  
//追加
document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskLists");

    const taskText = taskInput.value.trim();
    if (taskText === "")  return;

    const taskItem = document.createElement("li");

    const p = document.createElement("p");
    p.innerHTML = taskText;

    //完了ボタン
    const endButton = document.createElement("button");
    endButton.setAttribute('class', "endButton");
    endButton.innerHTML = "done";
    endButton.value = "Not Done";

    //削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.innerHTML = "delete";

    taskItem.appendChild(p);
    taskItem.appendChild(endButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = "";

    //完了ボタンのイベント
    endButton.addEventListener("click", function(e) {
        // e.preventDefault();
        if (endButton.value === "Not Done") {
            this.setAttribute("class", "endButtonDisable");
            this.previousElementSibling.setAttribute('class', 'doneToDo');
            endButton.value = "Done";
        } else {
            this.setAttribute("class", "endButton");
            this.previousElementSibling.setAttribute('class', 'notDoneTodo');
            endButton.value = "Not Done";
        }
    });

    //削除ボタンのイベント
    deleteButton.addEventListener("click", function(e) {
        taskList.removeChild(this.closest("li"));
    });

});

document.getElementById("taskInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("addTaskButton").click();
    }
});
  
  
  